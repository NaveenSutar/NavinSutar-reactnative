import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, FlatList, View, TouchableOpacity, Image, ScrollView, Text, ActivityIndicator } from 'react-native'
import { MTDK_Colours, MTDK_Dimensions, API } from '../constants'
import { Body_1, Body_2, Heading_2, Subtitle } from '../components/Fonts';
import ProdItem from '../components/ProdItem';


const Home = (props) => {
    const [selected, setSelected] = useState('');
    const [allProds, setAllProds] = useState([]);
    const [filteredProds, setFilteredProds] = useState([]);
    const [cats, setCats] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        getCat();
        getProd();
    }, []);

    const getProd = async () => {
        try {
            setloading(true);
            await fetch(API.products, {
                method: 'GET',
                headers: {
                    Authorization: API.token
                }
            }).then((response) => response.json())
                .then((json) => {
                    setFilteredProds(json.products)
                    setAllProds(json.products)
                    console.log(json.products)
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

    const getCat = async () => {
        try {
            setloading(true);
            await fetch(API.categories, {
                method: 'GET',
                headers: {
                    Authorization: API.token
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

    const filterProds = (item) => {
        console.log(item);
        setSelected(item.name);

        if (item.name === 'all') {
            setFilteredProds(allProds);
        }
        else {
            var filteredProds = allProds.filter((el) => {
                return item.name === el.category
            })
            setFilteredProds(filteredProds);
        }
    }

    const renderCategory = ({ item }) => {
        const backgroundColor = item.name === selected ? MTDK_Colours.primary : MTDK_Colours.white;
        const color = item.name === selected ? MTDK_Colours.white : MTDK_Colours.primary;

        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    filterProds(item);
                }}
                style={[styles.catContainer,
                {
                    backgroundColor: backgroundColor
                }
                ]}>
                <Body_2 colour={color} text={item.name} />
            </TouchableOpacity>
        )
    }

    const renderproducts = ({ item }) => {
        return (
            <ProdItem
                onEditPress={() => props.navigation.navigate('Create')}
                onPress={() => props.navigation.navigate('Detail', { prodId: item._id })}
                name={item.name}
                price={item.price}
                imgSrc={item.avatar}
            />
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
                    data={cats}
                    renderItem={renderCategory}
                    keyExtractor={item => item._id}
                />

                <Subtitle text={"Products"} colour={MTDK_Colours.black} style={styles.header} />
                {
                    loading == true ?
                        <View style={styles.noMessage}>
                            <ActivityIndicator
                                size="small"
                                color={MTDK_Colours.primary}
                                />
                        </View>
                        :
                        filteredProds.length == 0
                            ?
                            <View style={styles.noMessage}>
                                <Body_1 text={"No Products available"} colour={MTDK_Colours.blackLight} style={{ paddingHorizontal: MTDK_Dimensions.padding }} />
                            </View>
                            :
                            <FlatList
                                data={filteredProds}
                                showsVerticalScrollIndicator={false}
                                renderItem={renderproducts}
                                numColumns={2}
                                style={styles.containerPadding}
                                keyExtractor={item => item._id}
                            />
                }
            </ScrollView>

            <TouchableOpacity
                onPress={() => props.navigation.navigate('Create')}
                activeOpacity={0.7}
                style={styles.floatButton}>
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

    header: {
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
        borderWidth: 1

    },

    noMessage: {
        flex: 1,
        paddingVertical: MTDK_Dimensions.padding * 12,
        alignItems: 'center',
        justifyContent: 'center'
    },

    floatButton: {
        position: 'absolute',
        right: MTDK_Dimensions.margin * 1.5,
        bottom: MTDK_Dimensions.margin * 2,
        backgroundColor: MTDK_Colours.primary,
        height: MTDK_Dimensions.width / 8,
        width: MTDK_Dimensions.width / 8,
        borderRadius: MTDK_Dimensions.width,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default Home;