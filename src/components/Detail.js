import React from 'react';
import {View,Text,StyleSheet,Image,Linking} from 'react-native';
import Buton from './buton'

const Detail=({data})=>{


return(
    <View style={styles.containerStyle}>
   
        <View style={styles.subContainerStyle}> 
         <Text>{data.title}</Text>
        </View>

        <View style={styles.subContainerStyle}>
        <Image style={styles.imageStyle}  source={{uri:data.image}} />
        </View>
        
        <View style={styles.subContainerStyle}>
        <Buton   onPress={()=> Linking.openURL(data.url)} >SATIN AL </Buton>
        </View>

    </View>
)

}

const styles=StyleSheet.create({

containerStyle:{
    borderWidth:1,
    borderRadius:2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {width:0,height:2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation:1,
    marginLeft:5,
    marginRight: 5,
    marginTop:10,
    
},


subContainerStyle:{

    borderBottomWidth: 1,
    padding: 5,
    backgroundColor:'#fff',
   justifyContent:'center',
   flexDirection: 'row',
   borderColor:'#ddd',
   position:'relative'


},


imageStyle:{
    height:300,
    flex:1

},

titleStyle:{
    fontSize: 18,

},





})

export default Detail;