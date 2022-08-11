import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MTDK_Colours, MTDK_Dimensions } from '../constants';
import { Subtitle, Body_2 } from './Fonts';
import Icon from '../components/Icon';

const ProdItem = ({ onPress, imgSrc, name, price, onEditPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={styles.prodContainer}>

            <Image
                resizeMode='contain'
                height={0}
                width={0}
                style={styles.prodImage}
                source={{
                    uri: imgSrc
                }} />

            <Body_2
                style={styles.prodPrice}
                numberOfLines={1}
                colour={MTDK_Colours.blackDarkest}
                text={name} />

            <Subtitle
                style={styles.prodPrice}
                numberOfLines={1}
                colour={MTDK_Colours.blackDarkest}
                text={"$ " + price} />

            <TouchableOpacity
                onPress={onEditPress}
                activeOpacity={0.7}
                style={styles.editIcon}>
                <Icon
                    name={"edit"}
                    size={MTDK_Dimensions.width / 30}
                    color={MTDK_Colours.white}
                    type={"EntypoIcon"}
                />
            </TouchableOpacity>

            <Icon
                style={styles.bottomIcon}
                name={"heart"}
                size={MTDK_Dimensions.width / 20}
                color={MTDK_Colours.danger}
                type={"EntypoIcon"}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    prodContainer: {
        margin: MTDK_Dimensions.margin / 2,
        width: MTDK_Dimensions.width / 2 - MTDK_Dimensions.margin * 1.5,

        borderWidth: 0.7,
        borderColor: MTDK_Colours.blackLighter,
        borderRadius: MTDK_Dimensions.radius,
        paddingBottom: MTDK_Dimensions.halfPadding
    },

    prodImage: {
        width: MTDK_Dimensions.width / 2 - MTDK_Dimensions.margin * 1.7,
        height: MTDK_Dimensions.width / 3,
        alignSelf: 'center'
    },

    prodPrice: {
        paddingTop: MTDK_Dimensions.halfPadding,
        paddingHorizontal: MTDK_Dimensions.halfPadding,
    },

    editIcon: {
        position: 'absolute',
        right: MTDK_Dimensions.halfMargin,
        top: MTDK_Dimensions.halfPadding,
        backgroundColor: MTDK_Colours.primary,
        padding: 5,
        borderRadius: 30
    },

    bottomIcon: {
        position: 'absolute',
        right: MTDK_Dimensions.halfMargin,
        bottom: MTDK_Dimensions.halfPadding,
    }
})

export default ProdItem;
