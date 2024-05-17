import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import BuyerHomePage from "./BuyerHomePage";
import SellerHomePage from "./sellerHomePage";
import SellerSetting from "./SellerSetting";
import BuyerSetting from "./BuyerSetting";
import { useEffect, useState } from "react";
import TopNavBar from "../Components/TopNavBar";
 const MainScreen=()=>{
    const Tab = createBottomTabNavigator();
    const[mode,setMode]=useState(true);
    const SellerMode=()=>{
        setMode(false);
    }
    const BuyerMode=()=>{
        setMode(true);
    }

    return(
        <>
        <TopNavBar sellerMode={()=>{SellerMode()}} buyerMode={()=>{BuyerMode()}}/>
         <Tab.Navigator 
        tabBarActiveTintColor='#000'
        >
            {mode ? <Tab.Screen 
                name="Home" 
                component={BuyerHomePage} 
                options={{headerShown:false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={24} color={color}/>
                    ),
                }}/>
                :
                <Tab.Screen 
                name="Home" 
                component={SellerHomePage} 
                options={{ headerShown:false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={24} color={color}/>
                    ),
                }}/>}
            {mode ? <Tab.Screen 
                name="Setting" 
                component={BuyerSetting} 
                options={{ headerShown:false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="setting" size={24} color={color}/>
                    ),
                }}/>
                :
                <Tab.Screen 
                name="Setting" 
                component={BuyerSetting} 
                options={{ headerShown:false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="setting" size={24} color={color}/>
                    ),
                }}/>}
        </Tab.Navigator>
        </>
    );      
}

const styles = StyleSheet.create({

})

export default MainScreen;