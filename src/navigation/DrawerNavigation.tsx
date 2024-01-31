import { useWindowDimensions } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';

import { HOME_STACK, PROJECT_STACK } from 'utils/routesConstant';
import useTheme from 'utils/hooks/useTheme';

import HomeStack from 'stacks/Home.stack';
import ProjectStack from 'stacks/Project.stack';


const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
    const dimensions = useWindowDimensions();
    const { Colors } = useTheme();
    const isLargeScreen = dimensions.width >= 768;

    const CustomDrawerContent = ({ navigation, ...props }: DrawerContentComponentProps) => {
        return (
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    label="Home"
                    onPress={() => navigation.navigate(HOME_STACK)}
                />
                <DrawerItem
                    label="Projects"
                    onPress={() => navigation.navigate(PROJECT_STACK)}
                />
            </DrawerContentScrollView>
        );
    };

    return (
        <Drawer.Navigator
            defaultStatus="closed"
            screenOptions={{
                drawerType: isLargeScreen ? 'permanent' : 'slide',
                drawerStyle: isLargeScreen ? null : { width: '75%' },
                overlayColor: Colors.overlay,
                headerShown: false
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            initialRouteName={HOME_STACK}
        >
            {/* How can I pass navigation props as a children to my HomeStack just like what I did on header: above ? */}
            <Drawer.Screen name={HOME_STACK} component={HomeStack} />
            <Drawer.Screen name={PROJECT_STACK} component={ProjectStack} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation