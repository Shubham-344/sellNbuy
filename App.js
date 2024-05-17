import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screen/Login';
import Signup from './src/screen/Signup';
import MainScreen from './src/screen/MainScreen';
import ProductExpandedView from './src/screen/ProductExpandedView';
import PersonalDetailPage from './src/screen/PersonalDetailPage';
import OrderCnfrmPage from './src/screen/OrderConfirmPage';
import OrderConfirmPage from './src/screen/OrderConfirmPage';
import AddProductPage from './src/screen/AddProductPage';

export default function App() {
  const Stack = createStackNavigator();
  const a = styles.Selected;
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen 
            name="login" 
            component={Login} 
            options={{title: 'Login',headerLeft:null}}/>
          <Stack.Screen 
            name="Signup" 
            component={Signup}
            options={{title:'Signup',headerLeft:null}} />
         <Stack.Screen 
            name="Main" 
            component={MainScreen}
            options={{title:'Main',headerShown:false}} />
          <Stack.Screen 
            name="ExpandView" 
            component={ProductExpandedView}
            options={{title:'Back'}} />
          <Stack.Screen 
            name="detail" 
            component={PersonalDetailPage}
            options={{title:'Back'}} />
            <Stack.Screen 
            name="OrderConfirm" 
            component={OrderConfirmPage}
            options={{title:'Back',headerShown:false}} />
            <Stack.Screen 
            name="AddProduct" 
            component={AddProductPage}
            options={{title:'Product Details'}} />
            
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
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
  selectedBtn:{
    
  }
});
