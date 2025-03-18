import { Image, StyleSheet, Text, TextInput,  TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import LandingPage from './LandingPage'


const Login_signup = () => {
    const [onLogin, setOnLogin] = useState(true)
    const navigation  = useNavigation();
    return (
        <View style={styles.MainConatiner}>
            <View style={styles.ImageBox}>
                <Text style={{ fontSize: 32 }}> Online Book store</Text>
                <Image source={require('../Images/LoginImage.png')} style={styles.imageStyle} />
            </View>
            <View style={styles.ContextBox}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => setOnLogin(true)}>
                        <Text style={{ fontSize: 20, textDecorationLine: onLogin ? 'underline' : 'none', color: onLogin ? '#800000' : "black" }}>Login </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setOnLogin(false)}>
                        <Text style={{ fontSize: 20, textDecorationLine: !onLogin ? 'underline' : 'none', color: !onLogin ? '#800000' : 'Black' }}> Sign up </Text>
                    </TouchableOpacity>
                </View>
                {
                    onLogin ?
                        <View style={styles.LoginView}>
                            <Text style={{ paddingHorizontal: 10, fontSize: 18 }}>Email</Text>
                            <TextInput style={{ borderWidth: 0.7, height: 35, marginLeft: 20, borderRadius: 7 , marginRight : 20 , marginTop : 10 , marginBottom : 10 }} />
                            <Text style={{ paddingHorizontal: 10, fontSize: 18 }} >Paswword </Text>
                            <TextInput style={{ borderWidth: 0.7, height: 35, marginLeft: 20, borderRadius: 7 , marginRight : 20 , marginTop : 10 , marginBottom : 10}} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                                    <Text style={{ color: "#800000" }} >Show password</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                                    <Text style={{ color: "#800000" }} >Forgot Password ? </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity   onPress={() => navigation.navigate('LandingPage')} style={{ alignItems: 'center', borderWidth: 1, margin: 20, height: 30, justifyContent: 'center', backgroundColor: '#800000' }}  >
                                <Text style={{ color: 'white', fontSize: 20 }}>Login</Text>
                            </TouchableOpacity>
                            <View style={{ margin: 20  , flexDirection : 'row' , justifyContent : 'center' , alignItems : 'center' }}>
                               <View style = {{borderWidth : 1 , width : '40%', height : 1}}></View>
                               <Text style = {{margin : 5 , fontSize  : 20}}>OR</Text>
                               <View style = {{borderWidth : 1 ,  width : '40%', height : 1}}></View>
                                </View>
                                    <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                                        <TouchableOpacity style={{ borderWidth: 1, width: '50%', backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: 'white', fontWeight: '500' }}>Facebook</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ borderWidth: 1, width: '40%', height: 30, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text>Google</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                :
                                <View style={styles.signUpView}>
                                    <Text style={{ paddingHorizontal: 10, fontSize: 18 }}>Fullname</Text>
                                    <TextInput style={{ height: 40, borderWidth: 1, marginLeft: 10, borderRadius: 10, marginRight: 10, marginBottom: 10, marginTop: 5 }} />

                                    <Text style={{ paddingHorizontal: 10, fontSize: 18 }}>Email</Text>
                                    <TextInput style={{ height: 40, borderWidth: 1, marginLeft: 10, borderRadius: 10, marginRight: 10, marginBottom: 10, marginTop: 5 }} />


                                    <Text style={{ paddingHorizontal: 10, fontSize: 18 }}>Phone Number </Text>
                                    <TextInput style={{ height: 40, borderWidth: 1, marginLeft: 10, borderRadius: 10, marginRight: 10, marginBottom: 10, marginTop: 5 }} />

                                    <Text style={{ paddingHorizontal: 10, fontSize: 18 }}>Password</Text>
                                    <TextInput style={{ height: 40, borderWidth: 1, marginLeft: 10, borderRadius: 10, marginRight: 10, marginTop: 5 }} />
                                    <Text style={{ marginLeft: 10, marginTop: 5, color: '#800000' }}> Show password </Text>

                                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 40, borderWidth: 1, margin: 20, borderRadius: 10, backgroundColor: '#800000' }}>
                                        <Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }}>Sign Up </Text>
                                    </TouchableOpacity>


                                </View>
                }

                            </View>

                        </View>
    )
}

                export default Login_signup

                const styles = StyleSheet.create({
                    MainConatiner: {
                    flex: 1,
    },
                ImageBox: {
                    flex: 1,
                marginTop: 60,
                alignItems: 'center',
                overflow: 'hidden'
    },
                imageStyle: {
                    width: 210,
                height: 210,
                marginTop: 30,
                borderRadius: 100
    },
                ContextBox: {
                    flex: 1.5,

    },
                LoginView: {
                    marginTop: 20
    },
                signUpView:{
                    marginTop: 20
    }
})