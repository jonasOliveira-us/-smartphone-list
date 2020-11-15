import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PeoppleList from '../Component/PeopleList'

export default class PeoplePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      peoples: []
    }
  }
 
  componentDidMount(){
    axios
    .get('https://5fab2dfedbbef70016d482c9.mockapi.io/api/v1/Modelos')
    .then(response => {
      const results = response.data
      this.setState({
        peoples: results
      })
    })
  }
 
  render(){
    return (
      <View>
        <PeoppleList peoples={this.state.peoples} 
                     onPressItem={ (people) => {
                         this.props.navigation.navigate('Detalhe dos Smartphone',
                         {"people": people})
                     }}
        />
      </View>
    );
  }
 
}