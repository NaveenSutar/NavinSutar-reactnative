import React from 'react'
import { TouchableOpacity } from 'react-native';
import { MTDK_Colours, MTDK_Dimensions } from '../constants';
import Icon from '../components/Icon';
import { Heading_2 } from './Fonts';

const Header = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
            <Icon
                style={{ marginEnd: MTDK_Dimensions.halfPadding }}
                name={"ios-chevron-back-outline"}
                size={MTDK_Dimensions.width / 15}
                color={MTDK_Colours.primary}
                type={"IonIcon"}
            />
            <Heading_2
                colour={MTDK_Colours.blackDarkest}
                text={title} />
        </TouchableOpacity>
    )
}

export default Header;
