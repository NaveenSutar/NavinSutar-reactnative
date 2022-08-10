import React from 'react'
import { StyleSheet, View } from 'react-native';
import { MTDK_Colours, MTDK_Dimensions } from '../constants';
import { Body_2 } from './Fonts';

const Divider = ({title}) => {
    return (
        <View style={styles.dividerContainer}>
            <View style={styles.divider}></View>
            {title && <>
                <Body_2
                    colour={MTDK_Colours.blackLight}
                    text={title} />
                <View style={styles.divider}></View>
            </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    dividerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    divider: {
        height: 1,
        flex: 1,
        marginHorizontal: MTDK_Dimensions.halfMargin,
        backgroundColor: MTDK_Colours.blackLightest
    },
})

export default Divider;

