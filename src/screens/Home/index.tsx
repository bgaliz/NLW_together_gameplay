import React, { useState } from 'react';

import { 
    View,
    FlatList,
    Text,
} from 'react-native'

import { Profile } from '../../shared/components/Profile'
import { ButtonAdd } from '../../shared/components/ButtonAdd'
import { CategorySelect } from '../../shared/components/CategorySelect';
import { ListHeader } from '../../shared/components/ListHeader'
import { Appointment } from '../../shared/components/Appointment'
import { ListDivider } from '../../shared/components/ListDivider'

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home () {
    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '3',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '4',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '5',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '6',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]

    function handleCategorySelect(categoryId: string): void {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails (): void {
        navigation.navigate('AppointmentDetails')
    }

    function handleAppointmentCreate (): void {
        navigation.navigate('AppointmentCreate')
    }
    
    return (
        <>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>

            <CategorySelect 
                categorySelected={category} 
                setCategory={handleCategorySelect} 
                hasCheckBox={false}
            />
            <ListHeader 
                title="Partidas Agendadas" 
                subtitle="Total 6" 
            />

            <FlatList 
                // É mais performática. Mais indicada quando há muitos elementos em uma lista.
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={ ({ item }) => (
                    <Appointment 
                        data={item} 
                        onPress={handleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.matches}
                contentContainerStyle={{paddingBottom: 69}}
                showsVerticalScrollIndicator={false}
            />
        </>
    )
}