import React from 'react'
import { View } from 'react-native'
import { MTDK_Colours } from '../constants'
import { Body_2 } from './Fonts'
import TextButton from './TextButton'

const TextNLink = ({ title1, title2, onPress, align }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: align
        }}>
            <Body_2
                colour={MTDK_Colours.blackDark}
                text={title1} />

            <TextButton title={" " + title2} onPress={onPress} />
        </View >
    )
}

export default TextNLink;