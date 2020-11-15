import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';


export default class PeopleDetailsPage extends React.Component{
   
  constructor(props){
    super(props)
    this.state = {
        'people': props.route.params.people
    }
  
    
}
  render(){
    return (
      
        <View style={style.container} >
            <Text style={style.lineText}>{this.state.people.Modelo}</Text>
            <Text style={style.lineText}>{this.state.people.Processador}</Text>
            <Text style={style.lineText}>{this.state.people.Camera}</Text>
            <Text style={style.lineText}>{this.state.people.GPU}</Text>
            <Text style={style.lineText}>{this.state.people.RAM}</Text>
            <Text style={style.lineText}>{this.state.people.Tela}</Text>
            <Text style={style.lineText}>{this.state.people.Bateria}</Text>    
            

        </View>
    )
 
  }
}

const style = StyleSheet.create({
  container: {
    flex: 6,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  line: {
      height:1,
      borderBottomColor: '#aaaa',
      flexDirection: 'column',
      justifyContent: 'space-between',
  },
  lineText: {
      fontSize: 22,
      paddingLeft: 10,
      borderBottomColor: '#aaaa',
      alignItems: 'center',
      borderBottomWidth: 2,
      flex: 1/11,
  },
      avatar: {
        aspectRatio: 1,
        marginLeft: 50,
        flex: 2,
        borderRadius: 30

      

  }

  
}
)

