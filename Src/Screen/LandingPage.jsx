import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LandingHeader from '../Component/LandingHeader';
import SingleComponent from '../Component/SingleComponent';
import Fotter from '../Component/Fotter';


const LandingPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LandingHeader />
      <View style={styles.bodyConatiner}>
        <Text style={{fontSize: 18, fontWeight: 'bold', margin: 10}}>
          Books
        </Text>
        <ScrollView>
          <View style={{flexWrap: 'wrap', flexDirection: 'row' , marginBottom :1}}>
            <SingleComponent image={require('../Images/DontMake.jpg')} />
            <SingleComponent image={require('../Images/reactmaterial.jpg')} />
            <SingleComponent image={require('../Images/Mastering.jpeg')} />
            <SingleComponent image={require('../Images/customer.jpg')} />
            <SingleComponent image={require('../Images/uxdesign.jpg')} />
            <SingleComponent image={require('../Images/groupdiscusion.jpeg')} />
            <SingleComponent image={require('../Images/Leanux.jpg')} />
            <SingleComponent
              image={require('../Images/designofeveryday.jpg')}
            />
            <SingleComponent image={require('../Images/DontMake.jpg')} />
            <SingleComponent image={require('../Images/thealchemist.jpg')} />
          </View>
         <View>
          <Fotter />
         </View>
        </ScrollView>
       
      </View>
     
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },
});
