import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react"
import { SafeAreaView, StyleSheet,Text, TouchableOpacity ,TextInput,View} from "react-native"
import { useSafeAreaFrame } from "react-native-safe-area-context"
import { FIREBASE_DB } from "../../FirebaseConfig";
import { CurrentEmail } from "../GlobalValue";

export default AddProductPage =({navigation})=>{
    const[name,setName]=useState("");
    const[category,setCategory]=useState("");
    const[price,setPrice]=useState("");
    const[discount,setDiscount]=useState("");
    const[desc,setDesc]=useState("");
    const[seller,setSeller]=useState("");
    const getUID=async()=>{
        try {
            
            const UserRef = collection(FIREBASE_DB,"users");
            const q = query(UserRef,where("Email","==","ACBD@gmail.com"));
            const querySnapshot = await getDocs(q);
            const formattedData = querySnapshot.docs.reduce((acc, doc) => {
                acc[doc.id] = doc.data();
                console.log(doc.data())
                return acc;
            }, {}); 

            const UserID = formattedData;
            setSeller=Object.keys(UserID)[0];
            console.log(Object.keys(UserID)[0]);
            console.log("done");
            
        } catch (error) {
            console.log(error);
        }
    }

    const AddProduct=async(name,category,price,discount,desc,seller)=>{
        try {
            const ref = collection(FIREBASE_DB,"Products");
            const snapshot = await addDoc(ref,{name:name,category:category,price:price,discount:discount,desc:desc,seller:seller});
            console.log("product added");
            navigation.navigate("Main");
        } catch (error) {
            console.log(error);
        }
    }
   return(

        <SafeAreaView style={styles.container}>
            <TextInput style={styles.inputbox} placeholder='Product Name' onChangeText={(text)=>setName(text)}/>
            <TextInput style={styles.inputbox} placeholder='Category' onChangeText={(text)=>setCategory(text)}/>
            <TextInput style={styles.inputbox} placeholder='Price' onChangeText={(text)=>setPrice(text)}/>
            <TextInput style={styles.inputbox} placeholder='Discount' onChangeText={(text)=>setDiscount(text)}/>
            <TextInput style={styles.inputboxDesc} placeholder='Desc' onChangeText={(text)=>setDesc(text)}/>
            <TouchableOpacity style={{ height:60,
                width:320,
                alignSelf:'center',
                justifyContent:'center',
                alignItems:'center',
                position:'absolute',
                bottom:0}} 
                onPress={()=>{getUID();AddProduct(name,category,price,discount,desc,seller);}}>
                    
                    <View style={styles.continueBtn}>
                        <Text style={styles.btnText}>Add Product</Text>
                    </View>
            </TouchableOpacity>
        </SafeAreaView>
   )
}
const styles=StyleSheet.create({
    container:{
        
        height:550,
        paddingTop:50,
        paddingHorizontal:10
    },
    inputbox:{
        // backgroundColor:'red',
        height:60,
        margin:5,
        padding:5,
        borderRadius:10,
        borderColor:'black',
        borderWidth:1

    },
    inputboxDesc:{
         // backgroundColor:'red',
         height:100,
         margin:5,
         padding:5,
         borderRadius:10,
         borderColor:'black',
         borderWidth:1
    },
    continueBtn:{
        backgroundColor:'coral',
        height:50,
        width:300,
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
})