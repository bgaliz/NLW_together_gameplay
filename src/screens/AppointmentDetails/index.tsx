import React from 'react';
import { View, ImageBackground, Text, FlatList } from 'react-native';
import { Fontisto } from '@expo/vector-icons'

import { BorderlessButton } from 'react-native-gesture-handler';

import { theme } from '../../shared/global/styles/theme';
import { Header } from '../../shared/components/Header';
import { ListHeader } from '../../shared/components/ListHeader';
import { Member } from '../../shared/components/Member';
import { ListDivider } from '../../shared/components/ListDivider';
import { ButtonIcon } from '../../shared/components/ButtonIcon';

import BannerImg from '../../assets/banner.png'
import { styles } from './styles';

export function AppointmentDetails () {

    const members = [
        {
            id: '1',
            username: 'Bruno',
            avatar_url: 'https://github.com/bgaliz.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Bruno',
            avatar_url: 'https://github.com/bgaliz.png',
            status: 'offline'
        },
        {
            id: '3',
            username: 'Bruno',
            avatar_url: 'https://github.com/bgaliz.png',
            status: 'offline'
        }
    ]

    return (
        <>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto 
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground 
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent} >
                    <Text
                        style={styles.title}
                    > 
                        Lendários 
                    </Text>
                    <Text
                        style={styles.subtitle}
                    >  
                        É hoje que vamos chegar ao challenger sem perder uma partida md10
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />

            <FlatList 
                data={members}
                keyExtractor={item => item.id}
                renderItem={ ({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />

            <View style={styles.footer}>
                <ButtonIcon 
                    title="Entrar na partida"
                />
            </View>
        </>
    )
}