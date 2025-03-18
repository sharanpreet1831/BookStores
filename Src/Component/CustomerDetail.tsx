import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'

const CustomerDetail = () => {
    return (
        <View style={styles.customerBox}>
            
            
            <View style={{ width: '90%', height: '60%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }} >
             
                    <Text style={{ fontSize: 16, paddingHorizontal: 10 }}> Customer Details </Text>
                    < IoniconsIcon name='add' size={25} style={{ paddingHorizontal: 10 }} />
                
            </View>
            
        </View>
    )
}

export default CustomerDetail

const styles = StyleSheet.create({
    customerBox: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ececec',

    }
})