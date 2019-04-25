import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';

export default createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
});
