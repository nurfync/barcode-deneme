import React from 'react';
import { Text, TouchableOpacity,View } from 'react-native';

const Anasayfa = props => {
    return (
        <View style={{flex:1,justifyContent:'flex-end',marginBottom:10,
        }}>
        <TouchableOpacity
        style={{flex:0.1,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orange',
        borderRadius:15
        }}
        onPress={() => props.navigation.navigate('camera-screen')}
        ><Text
        style={{fontSize:20,
        fontWeight:'bold'}}
        >Barcode Tara</Text></TouchableOpacity>
        </View>
    );
};

export default Anasayfa;
