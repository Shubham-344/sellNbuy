import { SafeAreaView,View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { setCurrentEmail } from "../GlobalValue";
const BuyerSetting=({navigation})=>{
    const logout=()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        setCurrentEmail("");
        navigation.navigate("login");
        }).catch((error) => {
        // An error happened.
        });
    }
    return(
        <TouchableOpacity onPress={()=>{logout();}}>
        <View style={styles.container}>
            <View style={styles.logout}>
                <Text>Logout</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    logout:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
        borderRadius:15,
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'gray'

    }
})

export default BuyerSetting;