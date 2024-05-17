import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";
const ProductCard=({navigation,name,category,price,discount,desc})=>{

return(
    <TouchableOpacity onPress={() =>
        navigation.navigate("ExpandView",{name:name,category:category,price:price,discount:discount,desc:desc})}>
    <SafeAreaView style={styles.card} >
        <View style={styles.iconView}><Feather name="shopping-cart" size={75} color="black" style={styles.icon}/></View>
        <View style={styles.details}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.Category}>{category}</Text>
                <View style={styles.rate}>
                    <Text style={styles.price}>{price}</Text>
                    <Text style={styles.discount}>{discount}</Text>
                </View>
                <Text style={styles.desc}>{desc}</Text>
        </View>
    </SafeAreaView>
    </TouchableOpacity>
);
}
const styles = StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        height:180,
        width:340,
        borderRadius:10,
        margin:5,
        flexDirection:'row',
        alignItems:'center'
    },
    iconView:{
        height:150,
        width:130,
        // backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        width:90,
        // backgroundColor:'red',
    },
    details:{
        // backgroundColor:'green',
        height:150,
        width:190,
        paddingStart:10,
    },
    name:{
        fontSize:20,
        fontWeight:'700',
    },Category:{
        fontSize:14
    },
    rate:{
        flexDirection:'row',
        alignItems:'center'

    },
    price:{
        fontSize:28,
        fontWeight:'700'
    },
    discount:{
        fontSize:12,
        marginLeft:5
    },
    desc:{
        fontSize:12
    }
})
export default ProductCard;