import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Modal } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo'

const SingleComponent = ({ image }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  return (
    <>
      <View style={styles.DisplayComponent}  >
        <View style={styles.topOfCard}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image source={image} style={{ width: 110, height: 140 }} />
          </TouchableOpacity>

        </View>
        <View style={{ backgroundColor: 'white', marginTop: 5, paddingHorizontal: 10 }}>
          <Text>Don't Make Me Think</Text>
          <Text style={{ fontWeight: '200', fontSize: 12 }}>by Steve Krug</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginTop: 5, fontSize: 16, fontWeight: 'bold' }}>Rs. 1500</Text>
            <Text style={{ fontSize: 10, textDecorationLine: 'line-through', fontWeight: '300', marginLeft: 7 }}>Rs : 2000</Text>
          </View>


          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, }}>

            {
              isAdded ? (
                <TouchableOpacity style={[styles.button, { opacity: 0.7 }]}>
                  <Text style={{ color: 'white', fontSize: 13, opacity: 1 }} >
                    ADDED TO BAGG
                  </Text>
                </TouchableOpacity>
              ) : (
              <>
                <View style={styles.iconContainer}>
                  <EvilIcons name="heart" size={25} />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => setIsAdded(true)}>
                  <Text style={{ color: 'white', fontSize: 13 }}>ADD TO BAG</Text>
                </TouchableOpacity>
              </>

              )
            }





          </View>
        </View>
      </View>

      <Modal transparent={true} visible={modalVisible} animationType='slide'>
        <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'flex-end' }} >
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => setModalVisible(false)} >
            <EntypoIcon name='circle-with-cross' size={30} color={"#800000"} />
          </TouchableOpacity>
          <View style={{ height: '60%', backgroundColor: 'white', borderRadius: 25 }}>
            <View style={{ borderBottomWidth: 0.3, flex: 1, flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 30, alignContent: 'center' }}>
              <Image source={image} style={{ width: 80, height: 102 }} />
              <View style={{ marginLeft: 40, justifyContent: 'center' }}>
                <Text style={{ fontWeight: '700' }}> Don't Make Me Think</Text>
                <Text style={{ fontWeight: '200' }}> By Steve Krug </Text>
              </View>
            </View>
            <View style={{
              flex: 2.5, padding: 10, marginTop: 15
            }}>
              <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, deleniti quia molestiae culpa, aut nulla earum deserunt quidem ex voluptatum harum facere pariatur? Eveniet minus eum in dolore esse eius!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, deleniti quia molestiae culpa, aut nulla earum deserunt quidem ex voluptatum harum facere pariatur? Eveniet minus eum in dolore esse eius!</Text>
              <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, deleniti quia molestiae culpa, aut nulla earum deserunt quidem ex voluptatum harum facere pariatur? Eveniet minus eum in dolore esse eius!</Text>

            </View>

          </View>

        </View>
      </Modal>
    </>
  );
};

export default SingleComponent;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    borderWidth: 1,
  },
  DisplayComponent: {
    borderWidth: 0.2,
    width: '42%',
    height: 290,
    marginLeft: 25,
    overflow: 'hidden',
    marginBottom: 20,
  },
  topOfCard: {
    height: '60%',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ececec',
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderWidth: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    padding: 8,
    margin: 10,
    backgroundColor: "#800000",


  },
});