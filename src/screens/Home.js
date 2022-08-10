import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, FlatList, Text, View, TouchableOpacity, Image } from 'react-native'
import { MTDK_Colours, MTDK_Dimensions } from '../constants'
import { Body_2, Heading_2, Subtitle } from '../components/Fonts';
import Icon from '../components/Icon';

const DATA = [
    {
        id: 1,
        title: "All",
        price: 1000
    },
    {
        id: 2,
        title: "Accessories",
        price: 10

    },
    {
        id: 3,
        title: "Women Clothing",
        price: 10

    },
    {
        id: 4,
        title: "Four",
        price: 10

    },
    {
        id: 5,
        title: "Five",
        price: 10

    },
    {
        id: 6,
        title: "Six",
        price: 10

    },
    {
        id: 7,
        title: "Seven",
        price: 10

    },
    {
        id: 8,
        title: "Eight",
        price: 10

    },
    {
        id: 9,
        title: "Nine",
        price: 10
    }
];


const Home = () => {
    const [selected, setSelected] = useState(1);

    const renderCategory = ({ item }) => {
        const backgroundColor = item.id === selected ? MTDK_Colours.primary : MTDK_Colours.white;
        const color = item.id === selected ? MTDK_Colours.white : MTDK_Colours.primary;

        return (
            <TouchableOpacity
                onPress={() => {
                    setSelected(item.id);
                }}
                style={[styles.catContainer, {
                    backgroundColor: backgroundColor,
                }]}>
                <Body_2 colour={color} text={item.title} />
            </TouchableOpacity>
        )
    }

    const renderproducts = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    console.log("Product")
                }}
                style={styles.prodContainer}>

                <Image
                    resizeMode='cover'
                    height={0}
                    width={0}
                    style={{
                        width: MTDK_Dimensions.width / 2 - MTDK_Dimensions.margin * 1.6,
                        height: MTDK_Dimensions.width / 3,
                        alignSelf: 'center',
                        borderTopLeftRadius: MTDK_Dimensions.radius,
                        borderTopRightRadius: MTDK_Dimensions.radius
                    }} source={require('../assets/images/one.jpg')} />

                <Body_2 style={
                    {
                        paddingTop: MTDK_Dimensions.halfPadding,
                        paddingHorizontal: MTDK_Dimensions.halfPadding,
                    }}
                    numberOfLines={1}
                    colour={MTDK_Colours.blackDarkest}
                    text={item.title} />
                <Subtitle style={
                    {
                        paddingTop: MTDK_Dimensions.halfPadding,
                        paddingHorizontal: MTDK_Dimensions.halfPadding,
                    }}
                    numberOfLines={1}
                    colour={MTDK_Colours.blackDarkest}
                    text={"$ " + item.price} />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                        position: 'absolute',
                        right: MTDK_Dimensions.halfMargin,
                        top: MTDK_Dimensions.halfPadding,
                        backgroundColor: MTDK_Colours.primary,
                        padding: 5,
                        borderRadius: 30

                    }}
                >
                    <Icon
                        name={"edit"}
                        size={MTDK_Dimensions.width / 30}
                        color={MTDK_Colours.white}
                        type={"EntypoIcon"}
                    />

                </TouchableOpacity>

                <Icon
                    style={{
                        position: 'absolute',
                        right: MTDK_Dimensions.halfMargin,
                        bottom: MTDK_Dimensions.halfPadding,
                    }}
                    name={"heart"}
                    size={MTDK_Dimensions.width / 20}
                    color={MTDK_Colours.danger}
                    type={"EntypoIcon"}
                />


            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.safeContainer}>

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Heading_2
                    style={styles.heading}
                    colour={MTDK_Colours.blackDarkest}
                    text={"UPayments Store"} />

                <FlatList
                    style={styles.flatlist}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={DATA}
                    renderItem={renderCategory}
                />

                <Subtitle text={"Products"} colour={MTDK_Colours.black} style={{ paddingHorizontal: MTDK_Dimensions.padding }} />

                <FlatList
                    data={DATA}
                    renderItem={renderproducts}
                    numColumns={2}
                    style={styles.containerPadding}
                />
            </ScrollView>
            <TouchableOpacity
                activeOpacity={0.7}
                style={{
                    position: 'absolute',
                    right: MTDK_Dimensions.margin,
                    bottom: MTDK_Dimensions.margin * 2,
                    backgroundColor: MTDK_Colours.primary,
                    height: MTDK_Dimensions.width / 8,
                    width: MTDK_Dimensions.width / 8,
                    borderRadius: MTDK_Dimensions.width,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Heading_2 text={"+"} colour={MTDK_Colours.white} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
    },

    heading: {
        paddingTop: MTDK_Dimensions.padding,
        paddingHorizontal: MTDK_Dimensions.padding
    },

    containerPadding: {
        margin: MTDK_Dimensions.padding / 2,
    },

    flatlist: {
        paddingHorizontal: MTDK_Dimensions.padding,
        paddingEnd: MTDK_Dimensions.padding
    },

    catContainer: {
        paddingHorizontal: MTDK_Dimensions.halfPadding,
        paddingVertical: MTDK_Dimensions.halfPadding / 2,

        marginVertical: MTDK_Dimensions.margin,
        marginEnd: MTDK_Dimensions.halfMargin,

        borderRadius: MTDK_Dimensions.radius,
        borderColor: MTDK_Colours.primary,
        borderWidth: 1,
    },

    prodContainer: {
        margin: MTDK_Dimensions.margin / 2,
        width: MTDK_Dimensions.width / 2 - MTDK_Dimensions.margin * 1.5,

        borderWidth: 0.7,
        borderColor: MTDK_Colours.blackLighter,
        borderRadius: MTDK_Dimensions.radius,
        paddingBottom: MTDK_Dimensions.halfPadding
    }

})

export default Home;