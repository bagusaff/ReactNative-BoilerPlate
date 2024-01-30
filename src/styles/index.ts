import { Dimensions, PixelRatio, Platform } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;

// based on iphone 5s's scale
const scale = screenWidth / 360;

const guidelineBaseWidth = 360;

/**
 *
 * @param size number
 * @returns adjusted value based on device pixel ratio
 */
export const scaleFont = (size: number): number => {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

export const scaleSize = (size: number): number =>
    (windowWidth / guidelineBaseWidth) * size;
