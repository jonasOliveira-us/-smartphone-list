import { HeaderBackground } from '@react-navigation/stack'
import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity, BackHandler} from 'react-native'
import {toUpperFirst} from '../util'

const PeopleListItem = props => {
    const {people, onPressItemDetails} = props
    const {id, Modelo,} = people
    return(
        <TouchableOpacity onPress={() => {
            onPressItemDetails(people)
        }} >
            <View style={style.line}>
                <Text style={style.lineText} key={id}>
                {`${
                        toUpperFirst(Modelo)
                    } 
                
                    `}
                </Text>
                <Image style={style.avatar} source={{uri: people.imagem}} />
            </View>
        </TouchableOpacity>
    )

}

const style = StyleSheet.create({
    
        line: {
            height:95,
            borderBottomWidth: 1,
            borderBottomColor: 'red',
            alignItems: 'center',
            flexDirection: 'row'
        },
        avatar: {
            aspectRatio: 1,
            marginLeft: 50,
            flex: 2,
            borderRadius: 30
        },
        lineText: {
            fontSize: 22,
            paddingLeft: 10,
            flex: 6

        }

        
    }
)
export default PeopleListItem

