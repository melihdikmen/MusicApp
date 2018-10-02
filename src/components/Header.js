
import React from 'react';
import {Text,View,StyleSheet,Platform} from 'react-native';


const Header =() =>{


return(
    <View  style={styles.viewStyle}>
         <Text style={styles.textStyle}>Muzik</Text>
    </View>
   
)

}


const styles=StyleSheet.create({

    textStyle:{
        fontSize:30,
    },

    viewStyle:{
        backgroundColor: '#f8f8f8',
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS=='ios' ? 20:0,
        shadowOffset:{widht:0,height:2},
        shadowOpacity:0.5,
        elevation:5
    }

})

    


export default Header;


