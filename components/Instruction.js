import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Instructions = ({isVisible}) => {
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 5,
        width: '100%',
        height: '100%',
        backgroundColor: '#EFF3FF',
        justifyContent: 'center',
      }}>
      {showInstructions ? (
        <>
          <TouchableOpacity
            style={{
              position: 'absolute',
              zIndex: 5,
              top: 15,
              right: 10,
              height: 35,
              width: 42,
              borderRadius: 5,
              backgroundColor: 'rgba(0,0,0,0.8)',
              justifyContent: 'center',
            }}
            onPress={() => {
              setShowInstructions(!showInstructions);
              isVisible(!showInstructions);
            }}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 26}}>
              X
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: '80%',
              padding: 20,
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                color: '#FF007F',
                fontSize: 20,
                marginBottom: 15,
              }}>
              General Instructions
            </Text>
            <View style={{padding: 10, backgroundColor: 'white'}}>
              <Text
                style={{
                  marginBottom: 10,
                  fontFamily: 'OpenSans',
                  fontSize: 16,
                  color: '#000',
                }}>
                * There should be light on the person from the front.
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  fontFamily: 'OpenSans',
                  fontSize: 16,
                  color: '#000',
                }}>
                * Avoid wearing dark or black clothes.
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  fontFamily: 'OpenSans',
                  fontSize: 16,
                  color: '#000',
                }}>
                * Make sure the background doesn't have any reflective surface
                or objects chair/table as it might intefere in motion capture.
              </Text>
            </View>
          </View>
        </>
      ) : null}
    </View>
  );
};

export default Instructions;
