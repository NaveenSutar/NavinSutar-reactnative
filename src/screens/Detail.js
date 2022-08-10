import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { MTDK_Colours, MTDK_Dimensions } from '../constants'
import { Heading_1 } from '../components/Fonts';

import Input from '../components/Input';
import Button from '../components/Button';


const Detail = () => {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView style={styles.container}>
                <Heading_1
                    colour={MTDK_Colours.blackDarkest}
                    text={"Detail"} />

            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
    },

    container: {
        flex: 1,
        padding: MTDK_Dimensions.padding
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

})

export default Detail;