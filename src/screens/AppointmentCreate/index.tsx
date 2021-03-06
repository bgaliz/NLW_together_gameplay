import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, Modal } from 'react-native';

import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

import { Header } from '../../shared/components/Header';
import { CategorySelect } from '../../shared/components/CategorySelect';
import { GuildIcon } from '../../shared/components/GuildIcon';
import { SmallInput } from '../../shared/components/SmallInput';
import { TextArea } from '../../shared/components/TextArea';
import { ButtonIcon } from '../../shared/components/ButtonIcon';
import { ModalView } from '../../shared/components/ModalView';
import { Guilds } from '../Guilds';



import { styles } from './styles';
import { theme } from '../../shared/global/styles/theme';
import { GuildProps } from '../../shared/components/Guild';

export function AppointmentCreate () {
    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    function handleOpenGuilds () {
        setOpenGuildsModal(true)
    }

    function handleCloseGuilds () {
        setOpenGuildsModal(false)
    }

    function handleGuildSelected (guildSelected: GuildProps) {
        setGuild(guildSelected);
        setOpenGuildsModal(false)
    }

    function handleCategorySelect(categoryId: string): void {
        setCategory(categoryId);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding': 'height' }
        >
            <ScrollView>
                <Header
                    title="Agendar Partida"
                />

                <Text style={[
                    styles.label, 
                    {marginLeft: 24, marginTop: 36, marginBottom: 18}
                ]}>
                    Categoria
                </Text>

                <CategorySelect 
                    hasCheckBox
                    setCategory={handleCategorySelect}
                    categorySelected={category}
                />

                <View style={styles.form}>
                    <RectButton onPress={handleOpenGuilds}>
                        
                        <View style={styles.select}>

                            {
                                guild.icon 
                                ? <GuildIcon /> 
                                : <View style={styles.image}/>
                            }

                            <View style={styles.selectBody}>
                                <Text style={styles.label}>
                                    {
                                        guild.name 
                                        ? guild.name 
                                        : 'Selecione um servidor' 
                                    }
                                </Text>
                            </View>

                            <Feather 
                                name="chevron-right"
                                color={theme.colors.heading}
                                size={18}
                            />

                        </View>
                    </RectButton>

                    <View style={styles.field}>
                        <View>
                            <Text style={[styles.label, {marginBottom: 12}]}>
                                Dia e m??s
                            </Text>
                            <View style={styles.column}>
                                <SmallInput 
                                    maxLength={2}
                                />
                                <Text style={styles.divider}>
                                    /
                                </Text>
                                <SmallInput 
                                    maxLength={2}
                                />
                            </View>
                        </View>

                        <View>
                            <Text style={[styles.label, {marginBottom: 12}]}>
                                Hora e minuto
                            </Text>
                            <View style={styles.column}>
                                <SmallInput 
                                    maxLength={2}
                                />
                                <Text style={styles.divider}>
                                    :
                                </Text>
                                <SmallInput 
                                    maxLength={2}
                                />
                            </View>
                        </View>

                            
                    </View>
                
                    <View style={[styles.field, {marginBottom: 12}]}>
                        <Text style={styles.label}>
                            Descric??o
                        </Text>

                        <Text style={styles.caracteresLimit}>
                            Max 100 caracteres
                        </Text>
                    </View>
                            
                    <TextArea 
                        multiline
                        maxLength={100}
                        numberOfLines={5}
                        autoCorrect={false}
                    />

                    <View style={styles.footer}>
                        <ButtonIcon 
                            title="Agendar"
                            hasIcon={false}
                        />
                    </View>
                </View>
            </ScrollView>

            <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
                <Guilds handleGuildsSelect={handleGuildSelected}/>
            </ModalView>
        </KeyboardAvoidingView>
    )
}