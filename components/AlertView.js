import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

const AlertView = ({title, message, isVisible, jsonPath}) => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <View
      style={{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flex: 1,
      }}>
      <Modal animationType="slide" transparent={true} visible={showAlert} >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}>
          <View
            style={{
              width: '80%',
              margin: 10,
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 15,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 3.85,
              elevation: 5,
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: 20,
                color: '#0162a1',
                marginHorizontal: 15,
                alignSelf: 'flex-start',
                
              }}>
              {title}
            </Text>
            <View
              style={{
                width: '100%',
                height: 0.5,
                backgroundColor: 'gray',
                marginVertical: 10,
              }}></View>
            <Text
              style={{
                color: '#000',
                textAlign: 'center',
                fontSize: 18,
                marginVertical: 10,
                fontFamily: 'OpenSans'
              }}>
              {message}
            </Text>
            <TouchableOpacity
              style={{
                marginLeft: 10,
                padding: 5,
                paddingHorizontal: 10,
                textAlign: 'center',
                backgroundColor: 'white',
                borderWidth: 0.3,
                borderColor: '#0162a1',
                borderRadius: 7,
                alignSelf: 'flex-end',
              }}
              onPress={() => {
                setShowAlert(!showAlert);
                isVisible(!showAlert)
              }}>
              <Text style={{color: '#0274be', fontFamily: 'OpenSans'}}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AlertView;
