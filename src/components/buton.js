import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';



const Buton=({onPress,children})=> {


    return(

        <TouchableOpacity onPress={onPress} style={styles.butonStyle}>
        <Text style={styles.textStyle}>{children}</Text>
         </TouchableOpacity>

    )

}

const styles=StyleSheet.create({

textStyle:{
    alignSelf: 'center',
    color:'#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
},

butonStyle:{

    flex: 1,
    alignSelf: 'center',
    backgroundColor:'#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor:'#007aff',
    marginLeft:5 ,
    marginRight: 5,

}

})



export default Buton;