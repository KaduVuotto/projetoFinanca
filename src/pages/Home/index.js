import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../../components/Header'
import { AuthContext } from '../../contexts/auth';
import SpendHistoryItem from '../../components/SpendHistoryItem'

import { Background, Container, Name, BalanceMoney, Title, ContentBalance, Money, Balance, List, FooterList } from './styles'

export default function Home() {
    const [spendHistory, setSpendHistory] = useState([
        { key: '1', type: 'Receita', value: 2300, name: 'Salário' },
        { key: '2', type: 'Despesa', value: 44.90, name: 'Salário' },
        { key: '3', type: 'Receita', value: 15.50, name: 'Salário' },
        { key: '4', type: 'Receita', value: 15.50, name: 'Salário' },
        { key: '5', type: 'Despesa', value: 15.50, name: 'Salário' },
        { key: '6', type: 'Despesa', value: 15.50, name: 'Salário' },
        { key: '7', type: 'Receita', value: 15.50, name: 'Salário' },
    ])

    const { user } = useContext(AuthContext)

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
                            R$ 4,652
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
                ListFooterComponent={() => <FooterList />}
            />

        </Background>
    );
}