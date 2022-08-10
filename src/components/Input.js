import React, { useState } from 'react'
import { StyleSheet, View, Image, TextInput } from 'react-native';
import { MTDK_Colours, MTDK_Dimensions } from '../constants';
import Icon from './Icon';


const Input = (props) => {
    const [borderColor, setBorderColor] = useState(MTDK_Colours.blackLighter)

    return (
        <View style={styles.container}>
            <Icon style={styles.leftIcon} name={props.iconName} size={MTDK_Dimensions.width / 18} color={borderColor} type={props.iconType} />

            <TextInput
                {...props}
                style={[styles.inputStyle, { borderBottomColor: borderColor }]}
                placeholderTextColor={MTDK_Colours.blackLight}
                onFocus={() => {
                    setBorderColor(MTDK_Colours.primary)
                }}
                onBlur={()=>{
                    setBorderColor(MTDK_Colours.blackLighter)
                }}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    leftIcon: {
        marginRight: MTDK_Dimensions.margin,
        tintColor: MTDK_Colours.blackLight
    },

    inputStyle: {
        borderBottomWidth: 1,
        marginVertical: MTDK_Dimensions.margin,
        paddingVertical: MTDK_Dimensions.halfPadding,
        flex: 1,
        fontSize: MTDK_Dimensions.height / 50
    },
})

export default Input;