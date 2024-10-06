import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,TouchableWithoutFeedback, Image, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el ícono de Ionicons, por ejemplo

import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Login = () => {
  const [isPressed, setIsPressed] = useState(false);
  const insets = useSafeAreaInsets();

  const logo = require("../assets/icon/logo.png");
  return (
    
    <View style={[styles.container, { paddingTop: insets.top ,paddingBottom:insets.bottom}]}>
      <StatusBar style="light"/>
      <View style={styles.formContainer}>
        <Image source={logo} style={styles.logo} />
        
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="logo-google" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="logo-microsoft" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="logo-instagram" size={20} />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.text}>or use your account</Text>

        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={() => console.log('Button pressed!')} // Reemplaza esto con tu acción
      >
        <View
          style={[
            styles.button,
            isPressed ? styles.buttonPressed : styles.buttonNormal,
          ]}
        >
          <Text style={[styles.buttonText, isPressed ? styles.buttonTextPressed : styles.buttonTextNormal]}>
            Sign In
          </Text>
        </View>
      </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#694485",
  
   
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
    marginTop:15,
  },
 
  socialContainer: {
    marginVertical: 10,
    flexDirection: 'row', // Para alinear los botones horizontalmente
    justifyContent: 'center', // Centrar los botones
  },
  socialButton: {
    borderWidth: 2,
    borderColor: '#dddddd',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    height: 40,
    width: 40,
  },
  
  text: {
    fontSize: 14,
    color: '#333',
    marginVertical: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#eee',
    padding: 12,
    marginVertical: 8,
    borderRadius: 5,
  },
  forgotPassword: {
    color: '#333',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#f15b9d',
    padding: 15,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2,
    
  },
  buttonNormal: {
    backgroundColor: '#f15b9d',
    borderColor: '#f15b9d',
  },
  buttonPressed: {
    backgroundColor: '#ffffff', // Cambia el color de fondo al presionar
    borderColor: '#f15b9d'
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  buttonTextNormal: {
    color: '#ffffff', // Color de texto normal
  },
  buttonTextPressed: {
    color: '#f15b9d', // Cambia el color del texto al presionar
  },
 
});

export default Login 
