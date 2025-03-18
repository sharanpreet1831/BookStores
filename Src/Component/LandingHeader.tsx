import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Wishlist from '../Screen/Wishlist';
import { useNavigation } from '@react-navigation/native';

const LandingHeader = ({ }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10 }} onPress={() => navigation.popToTop()}>
        <Octicons name="book" size={30} color="#800000" />
        
          <FontAwesomeIcon
            name="book-open"
            size={20}
            style={{ marginLeft: -27, marginTop: 5 }}
            color="#800000"
          />
          <Text
            style={{
              color: '#800000',
              fontSize: 18,
              marginTop: 2,
              marginLeft: 10,
            }}>
            Bookstore
          </Text>
       
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginRight: 10,
        }}>
        <EvilIcons name="search" size={30} color="#800000" />
        <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
          <EvilIcons
            name="heart"
            size={30}
            color="#800000"
            style={{ marginLeft: 5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <EvilIcons
            name="cart"
            size={30}
            color="#800000"
            style={{ marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#ececec',
    borderBottomWidth: 0.9,
    paddingVertical: 10,
    // shadowOpacity : 0.9,
    // shadowOffset :{height:5}
  },
});
