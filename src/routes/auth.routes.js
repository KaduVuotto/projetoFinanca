import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SingIn';

const AuthStack = createStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name='SingIn'
                component={SignIn}
                options={{
                    headerShown: false
                }}
            />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;