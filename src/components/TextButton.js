import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MTDK_Colours } from '../constants'
import { Body_2 } from './Fonts'

const TextButton = ({ onPress, title, right }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Body_2
                style = {{
                    textAlign: right ? 'right' : null
                }}
            colour={MTDK_Colours.primary}
            text={title} />
        </TouchableOpacity>
    )
}

export default TextButton;