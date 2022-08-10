import React, {useEffect, useState} from 'react'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { MTDK_Colours, MTDK_Dimensions } from '../constants'
import { Body_1, Body_2, Heading_1, Heading_2, Heading_3, Subtitle } from '../components/Fonts';


const Home = () => {
    const [category, setCategory] = useState(['All', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']);

    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView style={styles.container}>
                <Subtitle
                    colour={MTDK_Colours.blackDarkest}
                    text={"UPayments Store"} />

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

export default Home;