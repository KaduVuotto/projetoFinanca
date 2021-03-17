import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../../components/Header/index.android'
import { AuthContext } from '../../contexts/auth';
import SpendHistoryItem from '../../components/SpendHistoryItem'
import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns';
import { Background, Container, Name, BalanceMoney, Title, ContentBalance, Money, Balance, List, FooterList } from './styles'

export default function Home() {
    const [spendHistory, setSpendHistory] = useState([]);
    const [balanceUser, setBalanceUser] = useState(0);

    const { user } = useContext(AuthContext)
    const uid = user && user.uid;

    useEffect(() => {
        async function loadList() {
            await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
                setBalanceUser(snapshot.val().balance)
            });

            await firebase.database().ref('historico').child(uid).orderByChild('date').equalTo(format(new Date, 'dd/MM/yy')).limitToLast(15).on('value', (snapshot) => {
                setSpendHistory([]);

                snapshot.forEach((childItem) => {
                    let list = {
                        key: childItem.key,
                        name: childItem.val().name,
                        type: childItem.val().type,
                        value: childItem.val().value
                    };
                    setSpendHistory(oldArray => [...oldArray, list].reverse())
                })
            });
        }
        loadList();
    }, []);

    return (
        <Background>
            <Header />
            <Container>
                <Name>
                    {user && user.name.toUpperCase()}
                </Name>
                <BalanceMoney>
                    <ContentBalance>
                        <Money>
                            R$ {balanceUser.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                        </Money>
                        <Balance>
                            BALANÇO TOTAL
                        </Balance>
                    </ContentBalance>
                </BalanceMoney>
            </Container>

            <Title>
                Ultimas movimentações
            </Title>

            <List
                showsVerticalScrollIndicator={false}
                data={spendHistory}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (<SpendHistoryItem item={item} />)}
                ListHeaderComponent={() => (
                    <View style={{ marginLeft: 36, marginBottom: 16 }}>
                        <Text style={{ fontSize: 16, color: '#c0c0c0' }}>
                            {format(new Date, 'dd')} de {format(new Date, 'MMMM')} de {format(new Date, 'yyyy')}
                        </Text>
                    </View>
                )}
                ListFooterComponent={() => <FooterList />}
            />

        </Background>
    );
}