import { TabRouter, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
export default ProductExpandedView=({navigation})=>{
    const route = useRoute();
    const Tab = createBottomTabNavigator();
    return(
        <>
        <View style={styles.container}>
        <View style={styles.iconView}><Feather name="shopping-cart" size={200} color="black" style={styles.icon}/></View>
        </View>
        <View style={styles.details}>
            <Text style={styles.name}>
                {route.params.name}
            </Text>
            <Text style={styles.category}>
                {route.params.category}
            </Text>
            <View style={styles.rate}>
                    <Text style={styles.price}>{route.params.price}</Text>
                    <Text style={styles.discount}>{route.params.discount}</Text>
                </View>
                <Text style={styles.desc}>{route.params.desc}</Text>
        </View>
        <View style={styles.bottomBar}>
            <TouchableOpacity style={{flex:1}} >
            <View style={styles.cartBtn}>
                <Text style={styles.btnText}>Add to Cart</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1}} onPress={()=>{navigation.navigate("detail")}}>
            <View style={styles.buyBtn}>
                <Text style={styles.btnText}>Buy Now</Text>
            </View>
            </TouchableOpacity>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    
    container:{
        
    },
    iconView:{
        backgroundColor:'#ffffff',
        height:300,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        borderRadius:20
    },
    icon:{
        
        
    },
    btnText:{
        fontSize:23,
        textAlign:'center',
        fontWeight:'800'
    },
    cartBtn:{
        flex:1,
        backgroundColor:'red',
        height:50,
        justifyContent:'center'
    },
    buyBtn:{
        flex:1,
        backgroundColor:'orange',
        height:50,
        justifyContent:'center'
    },
    bottomBar:{
        flexDirection:'row',
        position:'absolute',
        bottom:0
    },
    details:{
        padding:10
    },
    name:{
        fontSize:24,
        fontWeight:'800'
    },
    category:{
        fontSize:14
    },
    price:{
        fontSize:30,
        fontWeight:'900',
        marginTop:24
    },
    discount:{
        fontWeight:'500'
    },
    desc:{
        fontSize:16,
        marginTop:15
    }

})