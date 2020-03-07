import React, {useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import {Context} from '../context/FunctionContext'
import {TouchableOpacity} from 'react-native-gesture-handler'

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

DetailScreen.navigationOptions = ({ navigation }) => {
  id = navigation.getParam('id')
    return {
        headerRight: (
            <TouchableOpacity
                onPress={() => navigation.navigate('Edit', { id: id } )}
            >
                <FontAwesome name='pencil-square-o' size={30} />
            </TouchableOpacity>

        )
    }
}


const styles = StyleSheet.create({
  text:{
    fontSize: 30
  }
})

export default DetailScreen
