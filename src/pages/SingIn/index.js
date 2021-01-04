import React, { useState, useEffect } from 'react';
import {
    Alert,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Keyboard,
    Platform,
    Dimensions
} from 'react-native';

import {
    Background,
    Container,
    Logo,
    AreaInput,
    Input,
    ContainerSubmit,
    LogoSubmit,
    SubmitButton,
    SubmitText,
    Link,
    LinkText,
    InputRegister,
    SubmitButtonRegister,
    SubmitTextRegister
} from './styles';

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [viewFooter, setViewFooter] = useState(true)

    const [modalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = () => {
        setViewFooter(false)
    };

    const _keyboardDidHide = () => {
        setViewFooter(true)
    };


    return (
        <Background>
            <Container
                behaviour={Platform.OS === 'ios' ? 'padding' : ''}
                enable
            >
                <Logo source={require('../../images/PigGeek_White.png')} />

                <AreaInput>
                    <Input
                        placeholder='Digite seu e-mail'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder='Digite a senha de acesso'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </AreaInput>

                <ContainerSubmit>
                    <LogoSubmit source={require('../../images/PigGeek_Icon.png')} />
                    <SubmitButton onPress={() => alert('Clicou')}>
                        <SubmitText>
                            ENTRAR
                    </SubmitText>
                    </SubmitButton>
                </ContainerSubmit>

                {viewFooter ?
                    (<Link onPress={() =>
                        setModalVisible(true)
                        // navigation.navigate('SingUp')
                    }>
                        <LinkText>Não tem conta na PigGeek? Cadastre-se gratuitamente.</LinkText>
                    </Link>) : null
                }

            </Container>
            {
                modalVisible ?
                    (<Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity
                                    style={styles.openButton}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={styles.textStyle}>X</Text>
                                </TouchableOpacity>

                                <AreaInput>
                                    <InputRegister
                                        placeholder='Digite seu nome'
                                        autoCorrect={false}
                                        autoCapitalize='none'
                                        value={email}
                                        onChangeText={(text) => setEmail(text)}
                                    />
                                </AreaInput>
                                <AreaInput>
                                    <InputRegister
                                        placeholder='Digite seu e-mail'
                                        autoCorrect={false}
                                        autoCapitalize='none'
                                        value={password}
                                        onChangeText={(text) => setPassword(text)}
                                    />
                                </AreaInput>
                                <AreaInput>
                                    <InputRegister
                                        placeholder='Escolha sua senha'
                                        autoCorrect={false}
                                        autoCapitalize='none'
                                        value={email}
                                        onChangeText={(text) => setEmail(text)}
                                    />
                                </AreaInput>
                                <AreaInput>
                                    <InputRegister
                                        placeholder='Repita sua senha'
                                        autoCorrect={false}
                                        autoCapitalize='none'
                                        value={password}
                                        onChangeText={(text) => setPassword(text)}
                                    />
                                </AreaInput>

                                <ContainerSubmit>
                                    <LogoSubmit source={require('../../images/PigGeek_Icon.png')} />
                                    <SubmitButtonRegister onPress={() => alert('Clicou')}>
                                        <SubmitTextRegister>CADASTRAR</SubmitTextRegister>
                                    </SubmitButtonRegister>
                                </ContainerSubmit>
                            </View>
                        </View>
                    </Modal>) : null
            }
        </Background>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: Dimensions.get('screen').height / 2 - 35,
    },
    modalView: {
        width: '100%',
        height: Dimensions.get('screen').height / 2,
        backgroundColor: "#0061c8",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 40,
        marginBottom: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        position: 'absolute',
        right: 16,
        top: 16
    },
    textStyle: {
        color: "white",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
