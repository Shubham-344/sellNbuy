import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View,KeyboardAvoidingView,Platform, ScrollView } from "react-native"
import { RadioButton } from "react-native-paper";

export default PersonalDetailPage=({navigation})=>{
    const [fullname,setFullName] = useState("");
    const[number,setNumber]=useState("");
    const [add1,setAdd1]=useState("");
    const[add2,setAdd2]=useState("");
    const[pincode,setPincode]=useState("");
    const[state,setState]=useState("");
    const[city,setCity]=useState("");
    const [checked, setChecked] = useState('first');
    return(
        <>
        <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <View style={{}}>
        <Text style={styles.heading}>Delivery Address</Text>
            <TextInput suresh style={styles.inputbox} placeholder='Full Name' onChangeText={(text)=>setFullName(text)}/>
            <TextInput style={styles.inputbox} placeholder='Phone Number' onChangeText={(text)=>setNumber(text)}/>
            <View style={styles.cityState}>
                <TextInput style={styles.smallInputbox} placeholder='State' onChangeText={(text)=>setState(text)}/>
                <TextInput style={styles.smallInputbox} placeholder='City' onChangeText={(text)=>setCity(text)}/>
            </View>
            <TextInput style={styles.inputbox} placeholder='Flat no./Building Name' onChangeText={(text)=>setAdd1(text)}/>
            <TextInput style={styles.inputbox} placeholder='Road name,Area,Colony' onChangeText={(text)=>setAdd2(text)}/>
            <TextInput style={styles.inputbox} placeholder='Pincode' onChangeText={(text)=>setPincode(text)}/>
        </View>
        <View>
            <Text style={styles.heading}>Payment details</Text>
            <View style={{flexDirection:'row'}}>
            <RadioButton
            style={styles.radioText}
                value="PAY ONLINE"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
            /><Text style={styles.heading}>Pay Online</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <RadioButton 
                style={styles.radioText}
                value="CASH ON DILEVRY"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
            /><Text style={styles.heading}>Cash on Delivery</Text>
            </View>
        </View>
        <TouchableOpacity style={{ height:60,
        width:320,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:0}} 
        onPress={()=>{navigation.navigate("OrderConfirm")}}>
            <View style={styles.continueBtn}>
                <Text style={styles.btnText}>Continue</Text>
            </View>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        </>
    )
}
const styles = StyleSheet.create({
    inputbox:{
        // backgroundColor:'red',
        height:55,
        margin:5,
        padding:5,
        borderRadius:10,
        borderColor:'black',
        borderWidth:1

    },
    smallInputbox:{
        flex:1,
        height:55,
        // backgroundColor:'red',
        margin:5,
        padding:5,
        borderRadius:10,
        borderColor:'black',
        borderWidth:1
    },
    cityState:{
        flexDirection:'row'
    },
    continueBtn:{
        backgroundColor:'coral',
        height:60,
        width:320,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:20,
        borderRadius:5
    },
    btnText:{
        fontSize:25,
        fontWeight:'700'
    },
    heading:{
        fontSize:16,
        marginLeft:5,
        marginVertical:5
    },
    radioText:{
        fontSize:14,
        color:'black',

    },
    container:{
        height:700,
        // backgroundColor:'red'
    }
})