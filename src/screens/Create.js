import React, {useEffect, useState} from 'react'
import { SafeAreaView, StyleSheet, ScrollView,  FlatList, TouchableOpacity } from 'react-native'
import { MTDK_Colours, MTDK_Dimensions } from '../constants'
import { Heading_1, Heading_2, Body_2 } from '../components/Fonts';

import Input from '../components/Input';
import Button from '../components/Button';

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

const Create = () => {
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

    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView scrollEnabled={false} style={styles.container}>
                <Heading_2
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

                <FlatList
                    style={styles.flatlist}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={DATA}
                    renderItem={renderCategory}
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
        backgroundColor: MTDK_Colours.white
    },

    container: {
        flex: 1,
        padding: MTDK_Dimensions.padding,
        backgroundColor: MTDK_Colours.white
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    catContainer: {
        paddingHorizontal: MTDK_Dimensions.halfPadding,
        paddingVertical: MTDK_Dimensions.halfPadding / 2,

        marginVertical: MTDK_Dimensions.halfMargin,
        marginEnd: MTDK_Dimensions.halfMargin,

        borderRadius: MTDK_Dimensions.radius,
        borderColor: MTDK_Colours.primary,
        borderWidth: 1,
    },

})

export default Create;