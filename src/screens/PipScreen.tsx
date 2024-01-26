import React from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import {
    Gesture,
    GestureDetector
} from 'react-native-gesture-handler';

import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window')
const PipScreen = () => {
    const positionX = useSharedValue(0);
    const positionY = useSharedValue(0);

    const context = useSharedValue({ x: 0, y: 0 })

    const panGesture = Gesture.Pan()
        .onStart((event) => {
            context.value = { x: positionX.value, y: positionY.value }
        })
        .onUpdate((event) => {
            positionX.value = withSpring(event.translationX + context.value.x);
            positionY.value = withSpring(event.translationY + context.value.y);
        })
        .onEnd((event) => {
            if (Math.abs(positionX.value) > width || positionX.value > 60) {
                positionX.value = withSpring(0)
            }
            if (Math.abs(positionY.value) > height || positionY.value > 80) {
                positionY.value = withSpring(0)
            }
        })

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: positionX.value }, { translateY: positionY.value }],
    }));

    return (
        <GestureDetector gesture={panGesture}>
            <Animated.View style={[styles.Wrapper, animatedStyle]}>
                <Text>Floating Screen will be displayed here (Eg: Video Call)</Text>
            </Animated.View>
        </GestureDetector>
    );
};

export default PipScreen;

const styles = StyleSheet.create({
    Wrapper: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        zIndex: 100, // Ensure the PipScreen is above other components
        height: 150,
        backgroundColor: 'red',
        aspectRatio: 9 / 16,
        borderRadius: 10,
        padding: 4
    },
});
