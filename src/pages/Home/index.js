import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth'

export default function Home() {

    const { user, singOut } = useContext(AuthContext)

    return (
        <View>
            <Text> Home </Text>
            <Text> {user && user.nome} </Text>
            <Text> {user && user.email} </Text>
            <Button title='sair' onPress={() => singOut()} />
        </View>
    );
}