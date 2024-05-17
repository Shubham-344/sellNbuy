import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View ,Text, Button} from 'react-native';
const OrderConfirmPage=({navigation})=>{
    return(
        <View style={styles.container}>
        <View style={styles.done}>

            <Ionicons name="checkmark-done" size={50} color="green" />
        </View>
        <Text style={styles.text}>Order Placed !!</Text>
        <Button  height color='coral' style={styles.btn} title="Continue Shoping" onPress={()=>{navigation.navigate("Main")}}></Button>
        </View>
    )
}
const styles=StyleSheet.create({
    done:{
    
        marginTop:100,
        justifyContent:'center',
        alignItems:'center',
        height:150,
        width:150,
        borderRadius:100,
        borderColor:'green',
        borderWidth:5
    },
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:20,
        marginTop:40,
        fontWeight:'700',
        color:'green',
        marginBottom:150
    },
    btn:{
        
    }
})
export default OrderConfirmPage;