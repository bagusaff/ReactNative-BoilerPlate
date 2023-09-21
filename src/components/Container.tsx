import {
    StyleSheet,
    SafeAreaView,
    StyleProp,
    ViewStyle,
    StatusBar,
    View,
    StatusBarProps,
    Animated,
} from 'react-native';
import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useTheme from 'utils/hooks/useTheme';

type Props = {
    style?: StyleProp<ViewStyle>;
    backgroundColor?: string;
    children?: React.ReactNode;
    statusBarColor?: string;
};

type MyStatusBarProps = StatusBarProps & {
    backgroundColor?: string,
}

const Container = ({
    style,
    children,
}: Props) => {
    const { Colors, darkMode, NavigationTheme } = useTheme();
    const { colors } = NavigationTheme
    const insets = useSafeAreaInsets();
    const statusBarHeight = insets.top;

    const isDark = darkMode ? true : false;

    //Create custom status bar so that on ios can change the background color
    const CustomStatusBar = ({ backgroundColor, ...props }: MyStatusBarProps) => (
        <View style={{ backgroundColor: colors.background, height: statusBarHeight }}>
            <SafeAreaView>
                <StatusBar translucent backgroundColor={Colors.transparent} {...props} barStyle={isDark ? 'light-content' : "dark-content"} />
            </SafeAreaView>
        </View>
    );


    return (
        <Animated.View
            style={[styles.Container, { backgroundColor: colors.background }, style]}>
            <CustomStatusBar />
            {children}
        </Animated.View>
    );
};

export default Container;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
});
