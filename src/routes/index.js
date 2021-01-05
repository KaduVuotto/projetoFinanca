import React, { useContext } from "react";
import { AuthContext } from '../contexts/auth'

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { ActivityIndicator, View, Text } from "react-native";

function Routes() {
    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#049be3' }}>
                <ActivityIndicator size='large' color='#0464ca' />
                <Text style={{ color: '#0464ca' }}>Carregando, aguarde...</Text>
            </View>
        )
    }

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;
