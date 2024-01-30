import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
    Gesture,
    GestureDetector
} from 'react-native-gesture-handler';

import Animated, { FadeIn, useAnimatedReaction, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import useTheme from 'utils/hooks/useTheme';

const { width, height } = Dimensions.get('window')
const PipScreen = () => {

    const { Colors, Fonts } = useTheme();
    //Local State
    const { hasPermission, requestPermission } = useCameraPermission();
    const device = useCameraDevice('back');

    const [showButtons, setShowButtons] = useState(false)

    const positionX = useSharedValue(0);
    const positionY = useSharedValue(0);
    const context = useSharedValue({ x: 0, y: 0 })
    const screenHeight = useSharedValue(150);
    const screenWidth = useSharedValue(100);
    const absolutePosition = useSharedValue({ bottom: 10, right: 10 })
    const displayType = useSharedValue<'absolute' | 'relative'>('absolute');

    //Function
    const panGesture = Gesture.Pan()
        .onStart(() => {
            if (displayType.value == 'absolute') {
                context.value = { x: positionX.value, y: positionY.value }
            }
        })
        .onUpdate((event) => {
            if (displayType.value == 'absolute') {
                positionX.value = withSpring(event.translationX + context.value.x);
                positionY.value = withSpring(event.translationY + context.value.y);
            }
        })
        .onEnd((event) => {
            if (displayType.value == 'absolute') {
                if ((event.translationX + context.value.x - 10) > 15) {
                    positionX.value = withSpring(0)
                } else if (width - Math.abs(event.translationX + context.value.x - 10) < 60) {
                    positionX.value = withSpring(-(width - 100))
                }
                if ((event.translationY + context.value.y - 10) > 10) {
                    positionY.value = withSpring(-10)
                } else if (Math.abs(event.translationY + context.value.y - 10) + 150 > height) {
                    positionY.value = withSpring(-(height - 75 - 150))
                }
            }
        })

    const tapGesture = Gesture.Tap().onTouchesUp(() => {
        if (displayType.value === 'absolute') {
            // Switch to fullscreen mode
            displayType.value = 'relative';
            screenHeight.value = withSpring(height, { damping: 12 });
            screenWidth.value = withSpring(width, { damping: 12 });
            absolutePosition.value.bottom = withSpring(0)
            absolutePosition.value.right = withSpring(0)
            positionX.value = withSpring(0);
            positionY.value = withSpring(0);
        } else {
            // // Switch to floating mode
            // displayType.value = 'absolute';
            // screenHeight.value = withSpring(150, { damping: 12, stiffness: 100 });
            // screenWidth.value = withSpring(100, { damping: 12, stiffness: 100 });
            // absolutePosition.value.bottom = withSpring(10)
            // absolutePosition.value.right = withSpring(10)
            // positionX.value = withSpring(0);
            // positionY.value = withSpring(0);
        }
    })
    const composed = Gesture.Simultaneous(tapGesture, panGesture)

    //Styles
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: positionX.value }, { translateY: positionY.value }],
        height: screenHeight.value,
        width: screenWidth.value,
        bottom: absolutePosition.value.bottom,
        right: absolutePosition.value.right,
    }));

    const buttonStyle = useAnimatedStyle(() => ({
        display: displayType.value == 'relative' ? 'flex' : 'none'
    }))

    const reqCameraPermission = async () => {
        const result = requestPermission();
        return result
    }

    useEffect(() => {
        reqCameraPermission()
    }, []);

    const onPressBack = () => {
        // Switch to floating mode
        displayType.value = 'absolute';
        screenHeight.value = withSpring(150, { damping: 12, stiffness: 100 });
        screenWidth.value = withSpring(100, { damping: 12, stiffness: 100 });
        absolutePosition.value.bottom = withSpring(10)
        absolutePosition.value.right = withSpring(10)
        positionX.value = withSpring(0);
        positionY.value = withSpring(0);
    }

    //This function doesnt get updated because of displayType.value using useSharedValue
    const RenderBackButton = () => {
        return (
            <Animated.View entering={FadeIn} style={[{ zIndex: 100, alignSelf: 'flex-start', paddingVertical: 24, paddingHorizontal: 16 }, buttonStyle]}>
                <TouchableOpacity onPress={onPressBack} style={{ backgroundColor: Colors.primary, padding: 4, borderRadius: 8, zIndex: 100 }}>
                    <Text style={[Fonts.textCenter, Fonts.textRegular, Fonts.textSecondary]}>BACK</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    };

    return (
        <GestureDetector gesture={composed}>
            <Animated.View style={[styles.Wrapper, animatedStyle]}>
                <RenderBackButton />
                {hasPermission && device ? (
                    <Camera
                        style={[StyleSheet.absoluteFill, { borderRadius: 20 }]}
                        device={device}
                        isActive={true}
                    />
                ) : (
                    <Text>Loading Camera...</Text>
                )}
            </Animated.View>
        </GestureDetector>
    );
};

export default PipScreen;

const styles = StyleSheet.create({
    Wrapper: {
        position: 'absolute',
        zIndex: 100, // Ensure the PipScreen is above other components
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
});
