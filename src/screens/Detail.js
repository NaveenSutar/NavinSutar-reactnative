import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { API, MTDK_Colours, MTDK_Dimensions } from '../constants'
import ProdDetail from '../components/ProdDetail';
import Header from '../components/Header';


const Detail = (props) => {
    const { prodId } = props.route.params;
    const [prod, setProd] = useState([]);

    useEffect(() => {
        getProd();
    }, []);

    const getProd = async () => {
        try {
            const response = await fetch(API.products + prodId, {
                method: 'GET',
                headers: {
                    Authorization: API.token
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
 
                <Header
                    style={{
                        marginVertical: MTDK_Dimensions.margin,
                        marginHorizontal:MTDK_Dimensions.margin
                    }}
                    onPress={() => props.navigation.goBack()}
                    title={"Detail"} />

                <ProdDetail
                    imgSrc={prod.avatar}
                    name={prod.name}
                    price={prod.price}
                    description={prod.description}
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
        backgroundColor: MTDK_Colours.white
    },

    heading: {
        paddingVertical: MTDK_Dimensions.padding,
        paddingHorizontal: MTDK_Dimensions.padding
    }
})

export default Detail;