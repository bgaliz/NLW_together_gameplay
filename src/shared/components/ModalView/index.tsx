import React, {ReactNode} from 'react';
import { 
    View, 
    Modal, 
    ModalProps, 
    TouchableWithoutFeedback,
} from 'react-native'
import { Background } from '../Background';

import { styles } from './styles'

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalView ({ 
    children,
    closeModal, 
    ...rest
}: Props) {
    return (
        <Modal
            transparent
            style={styles.container}
            animationType="slide"
            statusBarTranslucent //backdrop da modal pega o toolbar todo do celular, até as notificações
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.bar} />
                            { children }
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}