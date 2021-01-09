import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth'

export default function Home() {

    const { user, singOut } = useContext(AuthContext)

    return (
        <View>
            <Text> Home </Text>
        </View>
    );
}