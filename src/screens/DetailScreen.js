import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Context} from '../context/FunctionContext'

const DetailScreen = ({navigation}) => {
  id = navigation.getParam('id')
  const { state } = useContext(Context);

 const book = state.find((book)=> book.id===id );

 const title = book.title ? book.title: <Text>No data</Text>;

 const author = book.author ? book.author:<Text>No data</Text>;

  return (
    <View>
      <Text style = { styles.text} >DetailScreen</Text>
      <Text style = { styles.text} >{id} </Text>
      <Text style = { styles.text} >Book Title  : {title} </Text>
      <Text style = { styles.text} >Author Name : {author} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize: 30
  }
})

export default DetailScreen
