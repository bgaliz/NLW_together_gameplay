import React from 'react';
 
import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes';
import { Background } from '../shared/components/Background';

export function Routes() {
    return (
        <NavigationContainer>
            <Background>
                <AuthRoutes />
            </Background>
        </NavigationContainer>
    )
}