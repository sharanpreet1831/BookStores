import { SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LandingHeader from '../Component/LandingHeader'
import SingleComponent from '../Component/SingleComponent'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Fotter from '../Component/Fotter'




const Wishlist = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <LandingHeader />
            <View >
                <View style = {{flexDirection : 'row' , alignItems :'center'}}>
                <TouchableOpacity onPress={ () => navigation.goBack() }><IoniconsIcon name='arrow-back' size={22} /></TouchableOpacity>
                <Text style={{fontSize: 18, fontWeight: 'bold', margin: 10}}>Wishlist </Text>
                </View>
                <ScrollView >
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                        <SingleComponent image={require('../Images/DontMake.jpg')} />
                        <SingleComponent image={require('../Images/reactmaterial.jpg')} />
                        <SingleComponent image={require('../Images/Mastering.jpeg')} />
                        <SingleComponent image={require('../Images/customer.jpg')} />
                        
                    </View>
                    <Fotter />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Wishlist

const styles = StyleSheet.create({})