/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import {useValidation} from 'react-native-form-validator';
import AlertView from './components/AlertView';
import Formik1  from './components/Formik';
import Instructions from './components/Instruction';
import Login from './components/Login';
import UpdateView from './components/UpdateView';
import VideoView from './components/VideoView';

const App = () => {
 const [isLoading, setIslodating] = useState(false);

  return (
  //  <Login/>
  // <Formik1/>
  <View style={{flex:1}}>
  {/* {!isLoading ? <Text>Hii</Text> : <Text>Helllo</Text>}  */}
  {/* <UpdateView/> */}
  {/* <Instructions/> */}
  {/* <VideoView/> */}
  <AlertView/>
  </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    // justifyContent:'center',
    // alignItems:'center'
  },
  textInput: {
    borderColor: '#ADD8E6',
    borderWidth: 2,
    borderRadius: 8,
    paddingLeft: 10,
    marginVertical: 10,
  },
  loginContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  btn: {
    backgroundColor: '#ADD8E6',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
