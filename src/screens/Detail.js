import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, FlatList, Text, View, TouchableOpacity, Image } from 'react-native'
import { MTDK_Colours, MTDK_Dimensions } from '../constants'
import { Body_1, Body_2, Heading_2, Subtitle } from '../components/Fonts';
import Icon from '../components/Icon';


const Home = () => {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Heading_2
                    style={styles.heading}
                    colour={MTDK_Colours.blackDarkest}
                    text={"Detail"} />


                <View
                    style={styles.prodContainer}>

                    <Image
                        resizeMode='cover'
                        height={0}
                        width={0}
                        style={{
                            width: MTDK_Dimensions.width,
                            height: MTDK_Dimensions.width / 1.5,
                            alignSelf: 'center'
                        }} source={require('../assets/images/one.jpg')} />

                    <Heading_2 style={
                        {
                            paddingTop: MTDK_Dimensions.padding,
                            paddingHorizontal: MTDK_Dimensions.padding,
                        }}
                        numberOfLines={3}
                        colour={MTDK_Colours.primary}
                        text={"iPhone SE"} />

                    <Subtitle style={
                        {
                            paddingTop: MTDK_Dimensions.halfPadding,
                            paddingHorizontal: MTDK_Dimensions.padding,
                        }}
                        numberOfLines={1}
                        colour={MTDK_Colours.blackDarkest}
                        text={"$ 1000"} />

                    <Body_1 style={
                        {
                            paddingTop: MTDK_Dimensions.padding,
                            paddingHorizontal: MTDK_Dimensions.padding,
                        }}
                        colour={MTDK_Colours.blackDarker}
                        text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />

                    <Icon
                        style={{
                            position: 'absolute',
                            right: MTDK_Dimensions.halfMargin,
                            top: MTDK_Dimensions.halfPadding,

                        }}
                        name={"heart"}
                        size={MTDK_Dimensions.width / 18}
                        color={MTDK_Colours.danger}
                        type={"EntypoIcon"}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
    },

    heading: {
        paddingVertical: MTDK_Dimensions.padding,
        paddingHorizontal: MTDK_Dimensions.padding
    },

    containerPadding: {
        margin: MTDK_Dimensions.padding / 2,
    },

    flatlist: {
        paddingHorizontal: MTDK_Dimensions.padding,
        paddingEnd: MTDK_Dimensions.padding
    },

    prodContainer: {
        width: MTDK_Dimensions.width,

        borderColor: MTDK_Colours.blackLighter,
        borderRadius: MTDK_Dimensions.radius,
        paddingBottom: MTDK_Dimensions.halfPadding
    }

})

export default Home;