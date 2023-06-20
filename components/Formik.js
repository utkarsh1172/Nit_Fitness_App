import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import {Formik} from 'formik';
// import Formik from 'react-native-formik'
import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
    name:  yup.string()
    .min(2, "Mininum 2 characters")
    .max(30, "Maximum 30 characters")
    .required("Your name is required"),
  email: yup
    .string()
    .email('Pleas Enter Valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});

const Formik1 = () => {
  return (
    <Formik
      initialValues={{name:'',email: '', password: ''}}
      validationSchema={loginValidationSchema}
      >
      {({
        handleChange,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <View style={styles.container}>
          <View style={styles.loginContainer}>
        
        <TextInput
              onChangeText={handleChange('name')}
              value={values.name}
              style={styles.textInput}
              placeholder="Enter You Name"
            />
            {errors.name && touched.name && (
              <Text style={styles.errors}>{errors.name}</Text>
            )}

            <TextInput
              onChangeText={handleChange('email')}
              value={values.email}
              style={styles.textInput}
              placeholder="Enter You Email"
            />
            {errors.email && touched.email && (
              <Text style={styles.errors}>{errors.email}</Text>
            )}
            <TextInput
              onChangeText={handleChange('password')}
              value={values.password}
              secureTextEntry={true}
              style={styles.textInput}
              placeholder="Enter Password"
            />
            {errors.password && touched.password && (
              <Text style={styles.errors}>{errors.password}</Text>
            )}

            <View style={{alignItems: 'center'}}>
              <TouchableHighlight style={styles.btn}>
                <Text style={styles.btnText} onPress={handleSubmit}>
                  Submit
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Formik1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
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
  errors: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginTop:-10,
    marginBottom:20
  },
});
