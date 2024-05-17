import { FlatList, SafeAreaView,View, StyleSheet, Text, ScrollView, Button } from "react-native";
import ProductCard from "../Components/ProductCard";
import TopNavBar from "../Components/TopNavBar";
import { Mode, setMode } from "../GlobalValue";
import { QuerySnapshot, collection, getDocs, query, where } from "firebase/firestore";
import { FIREBASE_DB } from "../../FirebaseConfig";
import { useEffect, useState } from "react";
import { dataset } from "../dataset";
import { firebase } from "@react-native-firebase/firestore";
 const BuyerHomePage=({navigation})=>{
  const[allProducts,setAllProducts]=useState([]);
  const[currentUser,setCurrentUser]=useState("");
  const ref = collection(FIREBASE_DB,"Products");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const list = [];
  //       const snapshot = collection(FIREBASE_DB,"Products");
  //       snapshot.forEach(doc => {
  //         list.push({ ...doc.data(), id: doc.id });
  //       });
  //       setAllProducts(list);
  //     } catch (error) {
  //       console.error(error);
  //     } 
  //   };

  //   fetchData();
  // }, []);
  // useEffect(async ()=>{
  //     ref.onSnapshot(
  //       QuerySnapshot=>{
  //           const allProducts=[];
  //           QuerySnapshot.forEach((doc)=>{
  //               let data = doc.data();
  //               const {name,category,price,discount,desc}=data;
  //               allProducts.push({
  //                 id:doc.id,
  //                 name,
  //                 category,
  //                 price,
  //                 discount,
  //                 desc
  //               })
  //           })
  //           setAllProducts(allProducts);
  //       }
  //     )
  // },[])
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
        setCurrentUser=Object.keys(UserID)[0];
        console.log(currentUser);
        console.log("done");  
        
    } catch (error) {
        console.log(error);
    }
}
   const readData=async()=>{
      try {
        const ref = collection(FIREBASE_DB,"Products");
        const products = await getDocs(ref);
        //console.log(products);
        const pro =[];
        products.forEach(element => {
          // setAllProducts(prevState=>({...prevState,...element.data()}));
          console.log(element.data());
          if(element.data().seller !== currentUser){
            pro.push(element.data());}
        });
        setAllProducts(pro);
      } catch (error) {
        console.log(error);
      }
      
   } 
   useEffect(()=>{
        getUID();
        readData();
   },[])

   useEffect(()=>{
    // console.log("Entering");
    // console.log(allProducts)
    allProducts.forEach(item => {
      // console.log(item.data());
    });
   }, [allProducts])

    return(
        <>
        {/* <View style={styles.TopBar}>
            <Text style={styles.TopBarText}>I am here as</Text>
            
            <Button
            onPress={()=>{setMode(true);navigation.navigate("Main")}}
            title="BUYER"
            color={Mode?'red':'green'}
            style={styles.BuyerBtn}
            />
            
            <Button
            onPress={()=>{setMode(false);navigation.navigate("Main")}}
            title="Seller"
            style={styles.SellerBtn}
            />
        </View> */}
        <View style={styles.container}>
        {/* <ProductCard name="Manish" category="Prostitue" price="150" discount="95%" desc= "Mst h bhnchoooo..."/> */}

            {/* <ProductCard navigation={navigation}/> */}
            <FlatList
                style={styles.flatlistIcon}
                vertical={true}
                data={allProducts}
                renderItem={({item}) =>
                <ProductCard navigation={navigation} name={item.name} category={item.category} price={item.price} discount={item.discount} desc= {item.desc}/>}
                key={({item})=>{item.id}}
 />
        </View>
        </>
    );      
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
        overflow:'scroll'
    },container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      TopBar:{
        backgroundColor:"coral",
        height:100,
        paddingTop:35,
        paddingStart:20,
        alignItems:'center',
        flexDirection:'row',
      },
      TopBarText:{
        fontSize:20,
        fontWeight:'900'
      },
      BuyerView:{
        width:100,
      },
      BuyerBtn:{
        width:100,
      },
      SellerView:{
        width:100,
      },
      SellerBtn:{
        width:100,
      },
      selected:{
        borderColor:'black',
      },
      notSelected:{
        borderColor:'coral',
        borderWidth:1
      }
})

export default BuyerHomePage;