import { collection, getDocs } from "firebase/firestore";
import { SafeAreaView,View, StyleSheet, Text, Button, FlatList } from "react-native";
import { FIREBASE_DB } from "../../FirebaseConfig";
import { useEffect, useState } from "react";
import { CurrentEmail } from "../GlobalValue";
import ProductCard from "../Components/ProductCard";
const SellerHomePage=({navigation})=>{
    const[myProduct,setMyProduct]=useState([]);
    const readData=async()=>{
        try{
            const ref = collection(FIREBASE_DB,"Products");
            const products = await getDocs(ref);
            const prod =[];
            products.forEach(element=>{
                if(element.data().Email === CurrentEmail){
                prod.push(element.data());}
            });
            setMyProduct(prod);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        readData();
    },[])

    return(
        <View style={styles.container}>
            <Button color="coral" style={styles.btn} title="Add Product" onPress={()=>{navigation.navigate("AddProduct")}}></Button>
            <FlatList
                data={myProduct}
                renderItem={({item}) =>
                    <ProductCard navigation={navigation} name={item.name} category={item.category} price={item.price} discount={item.discount} desc= {item.desc}/>}
                    key={({item})=>{item.id}}/>
        </View>
    );      
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red',
        marginTop:0,height:700,justifyContent:'flex-start',paddingTop:50
    },
})

export default SellerHomePage;