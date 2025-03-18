import { Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'

import React, { useState } from 'react'
import LandingHeader from '../Component/LandingHeader'
import CartComponent from '../Component/CartComponent'
import CustomerDetail from '../Component/CustomerDetail'
import ResultComponent from '../Component/ResultComponent'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Fotter from '../Component/Fotter'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { TextInput } from 'react-native-gesture-handler'





const Cart = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false)
    const [data , setData] = useState(1)
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>


                <View style={{ flex: 0.4 }}>
                    <LandingHeader />
                </View>

                <View style={{ flex: 4 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}><IoniconsIcon name='arrow-back' size={22} /></TouchableOpacity>
                        <Text style={{ fontSize: 22, marginLeft: 10 }}>Cart</Text>
                    </View>
                    <ScrollView>
                        <CartComponent image={require('../Images/DontMake.jpg')} />
                        <CartComponent image={require('../Images/customer.jpg')} />
                        <CartComponent image={require('../Images/customer.jpg')} />
                        <CartComponent image={require('../Images/customer.jpg')} />
                        <CartComponent image={require('../Images/customer.jpg')} />
                        <CartComponent image={require('../Images/customer.jpg')} />
                        <CartComponent image={require('../Images/customer.jpg')} />
                    </ScrollView>
                </View>
                <TouchableOpacity style={{ flex: 0.7 }} onPress={() => setModalVisible(true)}>

                    <CustomerDetail />

                </TouchableOpacity>
                <View style={{ flex: 0.7, justifyContent: 'center' }}>
                    <ResultComponent />
                </View>
                
            </SafeAreaView>

            <Modal visible={modalVisible} transparent={true} animationType='slide' >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => setModalVisible(false)} >
                        <EntypoIcon name='circle-with-cross' size={30} color={"#800000"} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: 'white', height: '60%' }} >
                        <Text style = {{fontWeight : '700' , color : 'grey' , fontSize : 20, padding : 10}}> Customer Detail </Text>

                        <ScrollView>
                        <TextInput placeholder='Name '  style = {{borderWidth : .3, margin  : 10 , padding : 10 }}/>
                        <TextInput placeholder='Phone Number '  style = {{borderWidth : .3, margin  : 10 , padding : 10 }}/>
                        <TextInput placeholder='Pincode '  style = {{borderWidth : .3, margin  : 10 , padding : 10 }}/>
                        <TextInput placeholder='Locality '  style = {{borderWidth : .3, margin  : 10 , padding : 10 }}/>
                        <TextInput placeholder='Address '  style = {{borderWidth : .3, margin  : 10 , padding : 10   , height : 120}}/>
                        <TextInput placeholder='City/Town '  style = {{borderWidth : .3, margin  : 10 , padding : 10 }}/>
                        <TextInput placeholder='LandMArk '  style = {{borderWidth : .3, margin  : 10 , padding : 10 }}/>
                        <TouchableOpacity style = {{height : '10%' , borderWidth :1 , margin : 20, justifyContent : 'center' , alignItems : 'center' , backgroundColor : '#800000'}}>
                            <Text style = {{color :'white', fontSize : 20, padding: 10}}>ADD</Text>
                        </TouchableOpacity>
                        </ScrollView>
                    </View>

                </View>
            </Modal>

        </>
    )
}

export default Cart

const styles = StyleSheet.create({


})