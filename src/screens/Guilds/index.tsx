import React from 'react';
import { View, FlatList } from 'react-native';
import { GuildProps } from '../../shared/components/Guild';
import { Guild } from '../../shared/components/Guild';
import { ListDivider } from '../../shared/components/ListDivider';

import { styles } from './styles';

type Props = {
    handleGuildsSelect: (guild: GuildProps) => void;
}

export function Guilds ({ handleGuildsSelect }: Props) {
    const guilds = [
        {
            id: '1',
            name: 'lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'galera do mal',
            icon: 'image.png',
            owner: true
        },
        {
            id: '3',
            name: 'galera do mal',
            icon: 'image.png',
            owner: true
        },
        {
            id: '4',
            name: 'galera do mal',
            icon: 'image.png',
            owner: true
        },
        {
            id: '5',
            name: 'galera do mal',
            icon: 'image.png',
            owner: true
        }
    ]
        
    return (
        <View style={styles.container}>
            <FlatList 
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={ ({item}) => (
                    <Guild 
                        data={item}
                        onPress={() => handleGuildsSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 68, paddingTop: 103}}
                ListHeaderComponent={() => <ListDivider isCentered />}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                style={styles.guilds}
            />
        </View>
    )
}