import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen"
import { createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"

const AppNavigator = createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      Details:{
          screen:DetailScreen,
      },
    },
    {
        initialRouteName: 'Home',
        swipeEnabled: true,
      },
);


const prevGetStateForActionHomeStack = AppNavigator.router.getStateForAction;
AppNavigator.router.getStateForAction = (action, state) => {
  if (state && action.type === 'ReplaceCurrentScreen') {
    const routes = state.routes;
    routes.push(action);
    return {
      ...state,
      routes,
      index: routes.length,
    };
  }
  return prevGetStateForActionHomeStack(action, state);
};

export default createAppContainer(AppNavigator);