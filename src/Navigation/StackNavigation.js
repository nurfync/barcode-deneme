import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Anasayfa from '../Screens/Anasayfa';
import Camera from '../Screens/Camera';



const AppStack = createStackNavigator();

const StackNavigation = props => {

    
    return (
        <AppStack.Navigator>
           <AppStack.Screen
                name="anasayfa-screen"
                component={Anasayfa}
                options={{
                    title:'Anasayfa',
                    headerTitleAlign: 'center',
             
                    // headerBackTitleVisible: false,
                   
                     }}
            /> 
        
        <AppStack.Screen
                name="camera-screen"
                component={Camera}
                options={{
                    headerTransparent:true,
                    title:"",
                    headerLeftContainerStyle:{
                        paddingLeft:10,
                        height:50,           
                        
                    }        
                     }}
            /> 
           
        </AppStack.Navigator>
    );
};

export default StackNavigation;