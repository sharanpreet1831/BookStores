import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ResultComponent = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderTopWidth: 3, shadowColor: 'black', borderColor: '#ececec', }}>
            <View style={{ flex: 1, height: '100%', justifyContent: 'center' }} >
                <View style={{ marginLeft: 10 }}>
                    <Text>Total</Text>
                    <Text style={{ fontSize: 16, fontWeight: '700', color: '#800000' }}> Rs .3000</Text>
                </View>
            </View>
            <View style={{ flex: 1, height: '100%', justifyContent: 'center', alignItems: 'center' }} >
                <TouchableOpacity style={{ width: 150, height: 50,  justifyContent: 'center', alignItems: 'center', backgroundColor: '#800000' }}>
                    <Text style={{ padding: 10, fontSize: 16, color: 'white' }}> PLACE ORDER</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ResultComponent

const styles = StyleSheet.create({})