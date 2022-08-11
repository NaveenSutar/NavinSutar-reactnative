import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, FlatList, View, TouchableOpacity, Image } from 'react-native'
import { MTDK_Colours, MTDK_Dimensions } from '../constants'
import { Body_2, Heading_2, Subtitle } from '../components/Fonts';
import Icon from '../components/Icon';


const Home = (props) => {
    const [selected, setSelected] = useState();
    const [prods, setProds] = useState([]);
    const [cats, setCats] = useState([]);

    useEffect(() => {
        getCat();
        getProd();
    }, []);

    const getProd = () => {
        try {
            fetch("https://upayments-studycase-api.herokuapp.com/api/products", {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hdmVlbi5zdXRhckBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vTmF2ZWVuU3V0YXIiLCJpYXQiOjE2NjAxNTIzNzQsImV4cCI6MTY2MDU4NDM3NH0.hy9nopHOFwy9vdJJtwM5mUtZ_4Exp9-jskQVOBrdHWU'
                }
            }).then((response) => response.json())
            .then((json) => {
                setProds(json.products)
            })
            .catch((error) => {
                console.error(error);
            });
        } catch (err) {
            console.error(err);
        }
    }

    const getCat = () => {
        try {
            fetch("https://upayments-studycase-api.herokuapp.com/api/categories/", {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hdmVlbi5zdXRhckBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vTmF2ZWVuU3V0YXIiLCJpYXQiOjE2NjAxNTIzNzQsImV4cCI6MTY2MDU4NDM3NH0.hy9nopHOFwy9vdJJtwM5mUtZ_4Exp9-jskQVOBrdHWU'
                }
            })
                .then((response) => response.json())
                .then((json) => {
                    setCats(json.categories)
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (err) {
            console.error(err);
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

    const renderproducts = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => props.navigation.navigate('Detail', { prodId: item._id })}

                style={styles.prodContainer}>

                <Image
                    resizeMode='contain'
                    height={0}
                    width={0}
                    style={{
                        width: MTDK_Dimensions.width / 2 - MTDK_Dimensions.margin * 1.7,
                        height: MTDK_Dimensions.width / 3,
                        alignSelf: 'center'
                    }}
                    source={{
                        uri: item.avatar
                    }} />

                <Body_2 style={
                    {
                        paddingTop: MTDK_Dimensions.halfPadding,
                        paddingHorizontal: MTDK_Dimensions.halfPadding,
                    }}
                    numberOfLines={1}
                    colour={MTDK_Colours.blackDarkest}
                    text={item.name} />
                <Subtitle style={
                    {
                        paddingTop: MTDK_Dimensions.halfPadding,
                        paddingHorizontal: MTDK_Dimensions.halfPadding,
                    }}
                    numberOfLines={1}
                    colour={MTDK_Colours.blackDarkest}
                    text={"$ " + item.price} />

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Create')}
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
            <View style={styles.container} showsVerticalScrollIndicator={false}>
                <Heading_2
                    style={styles.heading}
                    colour={MTDK_Colours.blackDarkest}
                    text={"UPayments Store"} />

                <FlatList
                    style={styles.flatlist}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={cats}
                    renderItem={renderCategory}
                />

                <Subtitle text={"Products"} colour={MTDK_Colours.black} style={{ paddingHorizontal: MTDK_Dimensions.padding, paddingVertical: MTDK_Dimensions.halfPadding }} />

                <FlatList
                    data={prods}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderproducts}
                    numColumns={2}
                    style={styles.containerPadding}
                />
            </View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Create')}
                activeOpacity={0.7}
                style={{
                    position: 'absolute',
                    right: MTDK_Dimensions.margin * 1.5,
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
        backgroundColor: MTDK_Colours.white
    },

    container: {
        flex: 1,
        backgroundColor: MTDK_Colours.white
    },

    heading: {
        paddingTop: MTDK_Dimensions.padding,
        paddingHorizontal: MTDK_Dimensions.padding
    },

    containerPadding: {
        marginHorizontal: MTDK_Dimensions.padding / 2,
    },

    flatlist: {
        paddingHorizontal: MTDK_Dimensions.padding,
        paddingEnd: MTDK_Dimensions.padding,
    },

    catContainer: {
        paddingHorizontal: MTDK_Dimensions.halfPadding,
        paddingVertical: MTDK_Dimensions.halfPadding / 2,

        marginVertical: MTDK_Dimensions.margin,
        marginEnd: MTDK_Dimensions.halfMargin,

        borderRadius: MTDK_Dimensions.radius,
        borderColor: MTDK_Colours.primary,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: MTDK_Dimensions.width / 12

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