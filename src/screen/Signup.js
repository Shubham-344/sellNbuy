
import { useState } from 'react';
import { Button, LogBox, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
const Signup=({navigation})=>{
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[name,setName]=useState('');
  const[cnfpassword,setCnfPassword]=useState('');
  const[loading,setLoading]=useState(false);
  const Auth = FIREBASE_AUTH;   

  const write= async (name,email)=>{
    try {
      const ref = collection(FIREBASE_DB,"users");
      const snapshot = await addDoc(ref,{name,email});
      console.log("written in firebase");
      
    } catch (error) {
      console.log(error.message)
    }
  }
    const signup=async()=>{
       createUserWithEmailAndPassword(Auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log('user created');
          write(name,email);
          console.log("written",name,email);
          navigation.navigate("Main");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('failed to create user', errorMessage, errorCode);
          // ..
        });
    }

    return(
        <SafeAreaView style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput style={styles.inputbox} placeholder='Email' onChangeText={(text)=>{setEmail(text)  }}/>
        <TextInput style={styles.inputbox} placeholder='Name' onChangeText={(text)=>setName(text)}/>
        <TextInput style={styles.inputbox} placeholder='Password' onChangeText={(text)=>setPassword(text)}/>
        <TextInput style={styles.inputbox} placeholder='Confirm Password' onChangeText={(text)=>setCnfPassword(text)}/>
      </View>
      <View style={{height:50,width:150,justifyContent:'center',marginTop:20}}>
      <Button
      onPress={()=>
        {signup(Auth,email,password);}
      }
      title="Signup"
      color={'black'}
      style={styles.login}
      />
      </View>
      <View style={styles.rowflex}>

      <Text>Already have an account !!</Text>
      <Text onPress={()=>navigation.navigate("login")}> Login</Text>
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

export default Signup;