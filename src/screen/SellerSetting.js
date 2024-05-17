import { SafeAreaView,View, StyleSheet, Text } from "react-native";
const SellerSetting=()=>{
    return(
        <View style={styles.container}>
            <Text>Seller's Setting</Text>
        </View>
    );      
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    }
})

export default SellerSetting;