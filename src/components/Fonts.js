import React from 'react'
import { StyleSheet, Text } from 'react-native';

import { MTDK_Colours, MTDK_Dimensions } from '../constants';

const LogoText = ({ text, colour, style, onPress, numberOfLines }) => {
    return (
        <Text numberOfLines={numberOfLines} allowFontScaling={false} onPress={onPress} style={[styles.logo, style, { color: colour ? colour : MTDK_Colours.blackDarker }]}>{text}</Text>
    );
};

const Heading_1 = ({ text, colour, style, onPress, numberOfLines }) => {
    return (
        <Text numberOfLines={numberOfLines} allowFontScaling={false} onPress={onPress} style={[styles.heading_1, style, { color: colour ? colour : MTDK_Colours.blackDarker }]}>{text}</Text>
    );
};

const Heading_2 = ({ text, colour, style, onPress, numberOfLines }) => {
    return (
        <Text numberOfLines={numberOfLines} allowFontScaling={false} onPress={onPress} style={[styles.heading_2, style, { color: colour ? colour : MTDK_Colours.blackDarker }]}>{text}</Text>
    );
};

const Heading_3 = ({ text, colour, style, onPress, numberOfLines }) => {
    return (
        <Text numberOfLines={numberOfLines} allowFontScaling={false} onPress={onPress} style={[styles.heading_3, style, { color: colour ? colour : MTDK_Colours.blackDarker }]}>{text}</Text>
    );
};

const Subtitle = ({ text, colour, style, onPress, numberOfLines }) => {
    return (
        <Text numberOfLines={numberOfLines} allowFontScaling={false} onPress={onPress} style={[styles.subTitle, style, { color: colour ? colour : MTDK_Colours.blackDarker }]}>{text}</Text>
    );
};

const Body_1 = ({ text, colour, style, onPress, numberOfLines }) => {
    return (
        <Text numberOfLines={numberOfLines} allowFontScaling={false} onPress={onPress} style={[styles.body_1, style, { color: colour ? colour : MTDK_Colours.blackDarker }]}>{text}</Text>
    );
};

const Body_2 = ({ text, colour, style, onPress, numberOfLines }) => {
    return (
        <Text
            numberOfLines={numberOfLines}
            allowFontScaling={false}
            onPress={onPress}
            style={[
                styles.body_2,
                style,
                {
                    color: colour ? colour : MTDK_Colours.blackDarker
                }]}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    logo: {
        fontSize: MTDK_Dimensions.height / 18,
        color: MTDK_Colours.blackDarker
    },

    heading_1: {
        fontWeight:"bold",
        fontSize: MTDK_Dimensions.height / 23
    },

    heading_2: {
        fontSize: MTDK_Dimensions.height / 32
    },

    heading_3: {
        fontSize: MTDK_Dimensions.height / 38
    },

    subTitle: {
        fontWeight:"600",
        fontSize: MTDK_Dimensions.height / 43
    },

    body_1: {
        fontSize: MTDK_Dimensions.height / 50
    },

    body_2: {
        fontSize: MTDK_Dimensions.height / 65
    },
});

export {
    LogoText,
    Heading_1,
    Heading_2,
    Heading_3,
    Subtitle,
    Body_1,
    Body_2
};