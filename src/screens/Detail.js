import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, FlatList, Text, View, TouchableOpacity, Image } from 'react-native'
import { MTDK_Colours, MTDK_Dimensions } from '../constants'
import { Body_1, Body_2, Heading_2, Subtitle } from '../components/Fonts';
import Icon from '../components/Icon';


const Detail = (props) => {
    const { prodId } = props.route.params;
    const [prod, setProd] = useState([]);

    useEffect(() => {
        getProd();
    }, []);

    const getProd = async () => {
        try {
            const response = await fetch("https://upayments-studycase-api.herokuapp.com/api/products/" + prodId, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hdmVlbi5zdXRhckBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vTmF2ZWVuU3V0YXIiLCJpYXQiOjE2NjAxNTIzNzQsImV4cCI6MTY2MDU4NDM3NH0.hy9nopHOFwy9vdJJtwM5mUtZ_4Exp9-jskQVOBrdHWU'
                }
            });

            if (response.ok) {
                const result = await response.json();
                setProd(result.product);
            }
        } catch (err) {
            console.error(err);
        }
    }

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
                        resizeMode='contain'
                        height={0}
                        width={0}
                        style={{
                            width: MTDK_Dimensions.width,
                            height: MTDK_Dimensions.width / 1.5,
                            alignSelf: 'center'
                        }} source={{ uri: prod.avatar }} />

                    <Heading_2 style={
                        {
                            paddingTop: MTDK_Dimensions.padding,
                            paddingHorizontal: MTDK_Dimensions.padding,
                        }}
                        numberOfLines={3}
                        colour={MTDK_Colours.primary}
                        text={prod.name} />

                    <Subtitle style={
                        {
                            paddingTop: MTDK_Dimensions.halfPadding,
                            paddingHorizontal: MTDK_Dimensions.padding,
                        }}
                        numberOfLines={1}
                        colour={MTDK_Colours.blackDarkest}
                        text={"$ " + prod.price} />

                    <Body_2 style={
                        {
                            paddingTop: MTDK_Dimensions.padding,
                            paddingBottom:0,
                            paddingHorizontal: MTDK_Dimensions.padding,
                        }}
                        colour={MTDK_Colours.blackDarker}
                        text={"Deescription"} />

                    <Body_1 style={
                        {
                            paddingTop: MTDK_Dimensions.halfPadding,
                            paddingHorizontal: MTDK_Dimensions.padding,
                        }}
                        colour={MTDK_Colours.blackDarker}
                        text={prod.description} />

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

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: MTDK_Colours.white
    },

    container: {
        backgroundColor: MTDK_Colours.white
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

export default Detail;