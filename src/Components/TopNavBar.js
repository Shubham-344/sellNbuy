
import { Button, StyleSheet, Text, View } from 'react-native';
import { Mode, setMode } from '../GlobalValue';



export default TopNavBar=({sellerMode,buyerMode})=>{
    Mode ? buyer = active : buyer=inavtive;
    Mode? seller = inavtive : seller=active;
    const active = styles.selected;
    const inavtive = styles.notSelected;
    return(

        <View style={styles.TopBar}>
            <Text style={styles.TopBarText}>I am here as</Text>
            
            <Button
            onPress={()=>{buyerMode()}}
            title="BUYER"
            color={Mode?'red':'green'}
            style={styles.BuyerBtn}
            />
            
            <Button
            onPress={()=>{sellerMode()}}
            title="Seller"
            style={styles.SellerBtn}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container2: {
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
      fontWeight:'900',
      marginRight:50
    },
    BuyerView:{
      width:100,
    },
    BuyerBtn:{
      width:100,
    },
    SellerView:{
      width:200,
    },
    SellerBtn:{
      width:200,
    },
    selected:{
      borderColor:'black',
    },
    notSelected:{
      borderColor:'coral',
      borderWidth:1
    }
  });
  