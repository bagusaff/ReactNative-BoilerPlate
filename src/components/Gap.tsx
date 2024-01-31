// Helper for dynamic sizing
import React from 'react';
import { View, ViewStyle } from 'react-native';
import { scaleSize } from 'styles';

type Props = {
    width?: number;
    height?: number;
    style?: ViewStyle;
};

const Gap = ({ width = 0, height = 0, style }: Props) => {
    return (
        <View
            style={[style, { width: scaleSize(width), height: scaleSize(height) }]}
        />
    );
};

export default Gap;
