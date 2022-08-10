import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MTDK_Colours, MTDK_Dimensions } from '../constants';
import { Body_1, Subtitle } from './Fonts';

const Button = ({ title, other, onPress }) => {
    return (
        <>
            {other ?
                <TouchableOpacity elevation={10} onPress={onPress} activeOpacity={0.7} style={styles.buttonOther}>
                    <Body_1
                        colour={MTDK_Colours.blackDarker}
                        text={title}
                    />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.button}>
                    <Subtitle
                        colour={MTDK_Colours.white}
                        text={title}
                    />
                </TouchableOpacity>
            }
        </>

    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: MTDK_Colours.primary,
        padding: MTDK_Dimensions.halfPadding,
        borderRadius: MTDK_Dimensions.radius,
        marginVertical: MTDK_Dimensions.margin,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonOther: {
        backgroundColor: MTDK_Colours.blackLightest,
        padding: MTDK_Dimensions.halfPadding,
        borderRadius: MTDK_Dimensions.radius,
        marginVertical: MTDK_Dimensions.margin,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Button;
