import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';


const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerStyle={{
                backgroundColor: '#0061c8',
            }}
            drawerContentOptions={{
                labelStyle: {
                    fontWeight: 'bold',
                },
                activeTintColor:'#009fe3',
                activeBackgroundColor:'#FFFFFF',
                inactiveBackgroundColor:'#009fe3',
                inactiveTintColor:'#FFFFFF',
                itemStyle:{
                    marginVertical:5,
                }
            }}

        >
            <AppDrawer.Screen name='Home' component={Home} />
            <AppDrawer.Screen name='Registrar' component={New} />
            <AppDrawer.Screen name='Perfil' component={Profile} />
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;