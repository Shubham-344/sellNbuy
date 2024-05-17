import { useEffect, useState } from 'react';
import { Button, LogBox, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB } from '../../FirebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import {QuerySnapshot, addDoc, collection, firestore, getDoc, getDocs} from 'firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';
import { setCurrentEmail, setCurrentUser } from '../GlobalValue';

const Login=({navigation})=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[loading,setLoading]=useState(false);
    Auth = FIREBASE_AUTH;
    // const read=async ()=>{
    //   try {
    //     const ref = collection(FIREBASE_DB,"users");
    //     const data = await getDocs(ref);
    //     console.log('manish');
    //     data.forEach(doc => {
    //         console.log(doc.data());
    //     });
    //   } catch (error) {
        
    //   }
    // }

    const login=()=>{
        
      signInWithEmailAndPassword(Auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          console.log('success');
          setCurrentEmail(email);
          navigation.navigate("Main");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('failed');
        });

    }

    return(
        <SafeAreaView style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput style={styles.inputbox} placeholder='username' onChangeText={(text)=>setEmail(text)}></TextInput>
        <TextInput securedTextEntry={true} style={styles.inputbox} placeholder='password'onChangeText={(text)=>setPassword(text)}/>
      </View>
      <View style={{height:50,width:150,justifyContent:'center',marginTop:20}}>
      <Button
      onPress={()=>login(Auth,email,password)}
      title="Login"
      color={'black'}
      style={styles.login}
      />
      </View>
      <View style={styles.rowflex}>

      <Text>New User!!</Text>
      <Text style onPress={() =>
        navigation.navigate('Signup')}> Signup</Text>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
    inputArea:{
      flexDirection:'column',
      
      alignItems:'center'
    },
    inputbox:{
      height:50,
      width:300,
      borderWidth:1,
      padding:2,
      paddingLeft:5,
      margin:4,
      borderRadius:3
    },
    login:{
      borderRadius:30
    },
    rowflex:{
        flexDirection:'row'
    }
    
  });

export default Login;