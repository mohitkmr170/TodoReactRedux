import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

import {
  Home,
  ImageCircularTransformation,
  SideBar,
  AnimatedLinearTiming,
  AnimatedSpring,
  AnimatedSequence,
  AnimatedStagger,
  Todo,
  UnderstandingAPI
} from "../Screens";

const AppFlow = createStackNavigator(
  {
    HomeScreen: {
      screen: Home
    },
    ImageCircularTransformationScreen: {
      screen: ImageCircularTransformation
    },
    // SideBarScreen: {
    //   screen: SideBar
    // },
    AnimatedLinearTimingScreen: {
      screen: AnimatedLinearTiming
    },
    AnimatedSpringScreen: {
      screen: AnimatedSpring
    },
    AnimatedSequenceScreen: {
      screen: AnimatedSequence
    },
    AnimatedStaggerScreen: {
      screen: AnimatedStagger
    },
    TodoScreen: {
      screen: Todo
    },
    UnderstandingAPIScreen: {
      screen: UnderstandingAPI
    }
  },
  {
    initialRouteName: "HomeScreen",
    headerMode: "screen"
  }
);
const AppFlowDrawerComponent = createDrawerNavigator(
  {
    AppFlow: {
      screen: AppFlow
    }
  },
  {
    initialRouteName: "AppFlow"
    // contentComponent: <SideBar />
  }
);
const AppStackFlow = createAppContainer(AppFlowDrawerComponent);
export default AppStackFlow;
