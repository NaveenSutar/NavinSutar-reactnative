import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { API, MTDK_Colours, MTDK_Dimensions } from '../constants'
import { Heading_2, Body_2, Body_1 } from '../components/Fonts';

import Input from '../components/Input';
import Button from '../components/Button';

const Create = () => {
    const [selected, setSelected] = useState(1);
    const [cats, setCats] = useState([]);
    const [loading, setloading] = useState(false);

    const [prodName, setProdName] = useState('');
    const [prodPrice, setProdPrice] = useState(0);
    const [prodDesc, setProdDesc] = useState('');
    const [prodCategory, setProdCategory] = useState('');
    const [prodAvatar, setProdAvatar] = useState('');

    const [error, setError] = useState('')

    useEffect(() => {
        getCat();
    }, []);

    const addProd = async () => {
        if (prodName == '' || prodPrice == 0 || prodDesc == '' || prodAvatar == '' || prodCategory == '') {
            setError("All Fileds are mandatory");
        }
        else if (isNaN(parseFloat(prodPrice))) {
            setError("Product price should be a number");
        }
        else {
            try {
                setloading(true);
                await fetch(API.products, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: API.token
                    },
                    body: JSON.stringify({
                        name: prodName,
                        price: parseFloat(prodPrice),
                        description: prodDesc,
                        category: prodCategory,
                        avatar: prodAvatar,
                        developerEmail: API.devEmail,
                    })
                })
                    .then((response) => response.json())
                    .then((json) => {
                        console.log(json);
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
    }

    const getCat = async () => {
        try {
            await fetch(API.categories, {
                method: 'GET',
                headers: {
                    Authorization: API.token
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
                    setProdCategory(item.name);
                    setError('');
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
                    placeholder='Name'
                    autoCapitalize={'none'}
                    onChangeText={name => {
                        setError('');
                        setProdName(name);
                    }}
                    defaultValue={prodName}
                />

                <Input
                    iconName={"credit"}
                    iconType={"EntypoIcon"}
                    placeholder='Price'
                    autoCapitalize={'none'}
                    keyboardType={'numeric'}
                    onChangeText={price => {
                        setError('');
                        setProdPrice(price);
                    }}
                    defaultValue={prodPrice}
                />

                <Input
                    iconName={"text"}
                    iconType={"EntypoIcon"}
                    placeholder='Description'
                    autoCapitalize={'none'}
                    onChangeText={desc => {
                        setError('');
                        setProdDesc(desc);
                    }}
                    defaultValue={prodDesc}
                />

                <Input
                    iconName={"images"}
                    iconType={"EntypoIcon"}
                    placeholder='Image Link'
                    autoCapitalize={'none'}
                    onChangeText={avatar => {
                        setError('');
                        setProdAvatar(avatar);
                    }}
                    defaultValue={prodAvatar}
                />

                <FlatList
                    style={styles.flatlist}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={cats}
                    renderItem={renderCategory}
                />

                {error == '' ? null : <Body_2 text={error} colour={MTDK_Colours.danger} style={{ marginTop: MTDK_Dimensions.halfMargin }} />}

                <Button
                    title={loading ? <ActivityIndicator
                        size="small" />
                        : "ADD PRODUCT"}
                    onPress={addProd}
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