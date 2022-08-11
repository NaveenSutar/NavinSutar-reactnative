import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import { MTDK_Colours, MTDK_Dimensions } from '../constants';
import { Subtitle, Body_2, Heading_2, Body_1 } from './Fonts';
import Icon from './Icon';

const ProdDetail = ({ imgSrc, name, price, description }) => {
    return (
        <View style={styles.prodContainer}>

            <Image
                resizeMode='contain'
                height={0}
                width={0}
                style={styles.prodImage}
                source={{ uri: imgSrc }}
            />

            <Heading_2 style={styles.prodName}
                numberOfLines={3}
                colour={MTDK_Colours.primary}
                text={name} />

            <Subtitle style={styles.prodPrice}
                numberOfLines={1}
                colour={MTDK_Colours.blackDarkest}
                text={"$ " + price} />

            <Body_2 style={styles.prodDescHeead}
                colour={MTDK_Colours.blackDarker}
                text={"Deescription"} />

            <Body_1 style={styles.prodDesc}
                colour={MTDK_Colours.blackDarker}
                text={description} />

            <Icon
                style={styles.icon}
                name={"heart"}
                size={MTDK_Dimensions.width / 18}
                color={MTDK_Colours.danger}
                type={"EntypoIcon"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    prodContainer: {
        flex: 1
    },

    prodImage: {
        width: MTDK_Dimensions.width,
        height: MTDK_Dimensions.width / 1.5,
        alignSelf: 'center'
    },

    prodName: {
        paddingTop: MTDK_Dimensions.padding,
        paddingHorizontal: MTDK_Dimensions.padding,
    },

    prodPrice: {
        paddingTop: MTDK_Dimensions.halfPadding,
        paddingHorizontal: MTDK_Dimensions.padding,
    },

    prodDescHeead: {
        paddingTop: MTDK_Dimensions.padding,
        paddingBottom: 0,
        paddingHorizontal: MTDK_Dimensions.padding,
    },

    prodDesc: {
        paddingTop: MTDK_Dimensions.halfPadding,
        paddingHorizontal: MTDK_Dimensions.padding,
    },

    icon: {
        position: 'absolute',
        right: MTDK_Dimensions.halfMargin,
        top: MTDK_Dimensions.halfPadding,

    }
})

export default ProdDetail;