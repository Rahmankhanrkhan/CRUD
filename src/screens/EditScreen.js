import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import InitialFields from '../component/InitialFields'
import { Context } from '../context/FunctionContext';

const EditScreen = ({navigation}) => {
  id = navigation.getParam('id');
  const {state, editBook} = useContext(Context)
  const book = state.find((book)=> book.id === id )

  return (<View>
    <Text>{id} </Text>
    <Text>{book.title} </Text>
    <Text>{book.author}  </Text>
    <InitialFields
      headerText = 'EditScreen'
      buttonText = 'Save'
      initialState= {{ title:book.title, author : book.author   }}
      onSubmit= {(title,author)=>editBook(title,author,id,()=> navigation.pop())}

    />
    </View>
    )
}

export default EditScreen
