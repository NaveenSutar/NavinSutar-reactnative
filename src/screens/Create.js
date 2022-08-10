import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native'
import { MTDK_Colours, MTDK_Dimensions } from '../constants'
import { Heading_1 } from '../components/Fonts';

import Input from '../components/Input';
import Button from '../components/Button';


const Create = () => {
    return (
        <SafeAreaView style={styles.safeContainer}>
        <ScrollView style={styles.container}>
                <Heading_1
                    colour={MTDK_Colours.blackDarkest}
                    text={"Create Product"} />
                    
                <Input
                    iconName={"documents"}
                    iconType={"EntypoIcon"}
                    placeholder='Product Title'
                    autoCapitalize={'none'}
                />

                <Input
                    iconName={"credit"}
                    iconType={"EntypoIcon"}
                    placeholder='Price'
                    autoCapitalize={'none'}
                />

                <Input
                    iconName={"text"}
                    iconType={"EntypoIcon"}
                    placeholder='Description'
                    autoCapitalize={'none'}
                />

                <Input
                    iconName={"images"}
                    iconType={"EntypoIcon"}
                    placeholder='Image Link'
                    autoCapitalize={'none'}
                />

                <Button
                    title="ADD PRODUCT"
                    onPress={() => console.warn('Signin')}

                />

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

export default Create;