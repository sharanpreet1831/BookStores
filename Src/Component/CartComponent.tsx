import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const CartComponent = ({image}) => {
    const [data, setData] = useState(1);
    return (
        <View style={styles.cartItem}>
            <View style={{ flex: 1.2, justifyContent: 'center', alignItems: 'center' }} >
                <Image  source={image} style={{ width: 80, height: 110 }} />

            </View>
            <View style={{ flex: 3 }}>
                <View style={{ marginTop: 14, marginLeft: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: '300' }}>Don't Make Me Think </Text>
                    <Text style={{ fontWeight: '200', fontSize: 11 }}>by Steve King</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                        <Text style={{ fontWeight: '700' }}>Rs : 1500</Text>
                        <Text style={{ fontSize: 10, textDecorationLine: 'line-through', fontWeight: '300', marginLeft: 7 }}>Rs : 2000</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, width: 20, justifyContent: 'center', alignItems: 'center', borderColor: '#800000' }} onPress={() => setData(data-1)}><Text>-</Text></TouchableOpacity>
                        <Text style={{ marginLeft: 20 }}>{data}</Text>
                        <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, width: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#800000', marginLeft: 20 }} onPress={() => setData(data+1)}><Text style={{ color: 'white' }}>+</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.5 }}>
                <TouchableOpacity>
                    <AntDesignIcon name="close" size={20} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default CartComponent

const styles = StyleSheet.create({
    cartItem: {

       
        height: 130,
        flexDirection: 'row', 
        marginBottom : 20
    }
})