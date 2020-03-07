import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Provider } from './src/context/FunctionContext';
import DetailScreen from './src/screens/DetailScreen';



const navigator = createStackNavigator({
  Index: IndexScreen,
  Create: CreateScreen,
  Detail: DetailScreen
},
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Books'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
