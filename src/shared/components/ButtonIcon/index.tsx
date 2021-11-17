import React from 'react';
import { RectButton,  RectButtonProps} from 'react-native-gesture-handler';

import {
    Text,
    View,
    Image,
} from 'react-native'

import DiscordImg from '../../../assets/discord.png';

import { styles } from './styles';

type Props = RectButtonProps & {
    title: string
    hasIcon?: boolean
}

export function ButtonIcon({ title, hasIcon = true, ...rest }: Props) {
    return (
        <RectButton 
            style={styles.container}
            { ...rest }
        >
            {
                hasIcon && 
                <View style={styles.iconWrapper}>
                    <Image source={DiscordImg} style={styles.icon} ></Image>
                </View>
            }

            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}