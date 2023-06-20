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

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [Password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const {
    validate,
    isFieldInError,
    getErrorsInField,
    getErrorMessages,
    isFormValid,
  } = useValidation({
    state: {name, email, number, date, Password},
  });

  const _onPressButton = () => {
    validate({
      name: {minlength: 3, maxlength: 12, required: true},
      email: {email: true},
      number: {numbers: true},
      date: {date: 'YYYY-MM-DD'},
      Password: {
        hasNumber: true,
        hasUpperCase: true,
        // hasSpecialCharacter: true,
        // hasLowerCase: true
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <TextInput
          onChangeText={setName}
          value={name}
          style={styles.textInput}
          placeholder="Enter You Name"
        />
  
        <TextInput
          onChangeText={setEmail}
          value={email}
          style={styles.textInput}
          placeholder="Enter You Email"
        />
 
        <TextInput
          onChangeText={setNumber}
          value={number}
          style={styles.textInput}
          placeholder="Enter You Number"
        />
     

        <TextInput
          onChangeText={setPassword}
          value={Password}
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="Enter Password"
        />
    
        {/* {isFieldInError('confirmPassword') &&
      getErrorsInField('confirmPassword').map(errorMessage => (
        <Text>{errorMessage}</Text>
      ))} */}
        <View style={{alignItems: 'center'}}>
          <TouchableHighlight onPress={_onPressButton} style={styles.btn}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableHighlight>
        </View>
        <Text style={{fontSize: 16, color: 'red'}}>{getErrorMessages()}</Text>
        <Text>{isFieldInError()}</Text>
      </View>
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

export default Login;
