import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps165381Navigator from '../features/Maps165381/navigator';
import Settings165359Navigator from '../features/Settings165359/navigator';
import Settings165344Navigator from '../features/Settings165344/navigator';
import NotificationList165343Navigator from '../features/NotificationList165343/navigator';
import Maps165342Navigator from '../features/Maps165342/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps165381: { screen: Maps165381Navigator },
Settings165359: { screen: Settings165359Navigator },
Settings165344: { screen: Settings165344Navigator },
NotificationList165343: { screen: NotificationList165343Navigator },
Maps165342: { screen: Maps165342Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
