import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

const UpdateView = ({isVisible, onPress}) => {
  const [showUpdate, setShowUpdate] = useState(true);

  return (
    <View
      style={{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flex: 1,
      }}>
      <Modal animationType="slide" transparent={true} visible={showUpdate}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}>
          <View
            style={{
              width: '80%',
              margin: 10,
              backgroundColor: '#fff',
              borderRadius: 10,
              paddingVertical: 15,
              paddingHorizontal: 5,
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
                marginVertical: 15,
                marginHorizontal: 5,
                textAlign: 'center',
              }}>
              ActiveKids has an update available
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
                // alignSelf: 'flex-end',
              }}
              onPress={() => {
                // setShowUpdate(!showUpdate);
                // isVisible(!showUpdate);
                onPress();
              }}>
              <Text style={{color: '#0274be', fontFamily: 'OpenSans'}}>
                Update
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UpdateView;
