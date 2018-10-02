import React from 'react';
import {View,ScrollView,StyleSheet} from 'react-native';
import axios from 'axios';

import Detail from './Detail';


class List extends React.Component{

    constructor(props)
    {
        super(props)

        this.state={
            data:[],
        }
    }



    componentWillMount()
    {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        .then(response  =>this.setState ({data:response.data}));
    }

    renderData(){

        return this.state.data.map((responseData,Id)=>
        <Detail key={Id} data={responseData} />
    
    )
    }


    render(){

    return(


     <ScrollView style={styles.viewStyle}>
         {this.renderData()}
     </ScrollView>

    );


    }
}



const styles=StyleSheet.create({
    viewStyle:{

        marginTop:15,
       

    },


})

export default List;

