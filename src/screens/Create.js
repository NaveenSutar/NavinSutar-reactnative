import React, {useEffect, useState} from 'react'
import { SafeAreaView, StyleSheet, ScrollView,  FlatList, TouchableOpacity } from 'react-native'
import { MTDK_Colours, MTDK_Dimensions } from '../constants'
import { Heading_1, Heading_2, Body_2 } from '../components/Fonts';

import Input from '../components/Input';
import Button from '../components/Button';

const Create = () => {
    const [selected, setSelected] = useState(1);
    const [cats, setCats] = useState([]);
    const [loading, setloading] = useState(false);

    var to

    useEffect(() => {
        getCat();
    }, []);

    const getCat = async () => {
        try {
            setloading(true);
            await fetch("https://upayments-studycase-api.herokuapp.com/api/categories/", {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hdmVlbi5zdXRhckBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vTmF2ZWVuU3V0YXIiLCJpYXQiOjE2NjAxNTIzNzQsImV4cCI6MTY2MDU4NDM3NH0.hy9nopHOFwy9vdJJtwM5mUtZ_4Exp9-jskQVOBrdHWU'
                }
            })
                .then((response) => response.json())
                .then((json) => {
                    setCats(json.categories)
                    setloading(false);

                })
                .catch((error) => {
                    console.error(error);
                    setloading(false);
                });
        } catch (err) {
            console.error(err);
            setloading(false);
        }
    }

    const renderCategory = ({ item }) => {
        const backgroundColor = item._id === selected ? MTDK_Colours.primary : MTDK_Colours.white;
        const color = item._id === selected ? MTDK_Colours.white : MTDK_Colours.primary;

        return (
            <TouchableOpacity
                onPress={() => {
                    setSelected(item._id);
                }}
                style={[styles.catContainer, {
                    backgroundColor: backgroundColor,
                }]}>
                <Body_2 colour={color} text={item.name} />
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
                    data={cats}
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