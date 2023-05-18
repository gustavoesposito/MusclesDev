/* eslint-disable react/display-name */
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import constants from '../../global/styles/constants';

interface IconProps {
  name: string;
  size?: IconSizeProps['iconSizes'];
  color?: string;
  bundle?: 'MaterialCommunityIcons' | 'MaterialIcons';
  onPress?: () => {};
}

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

const IconSizes = {
  small: 16,
  medium: 20,
  large: 24,
  huge: 28,
  giant: 36,
};

export default function ({
  size = 'medium',
  name,
  color,
  bundle = 'MaterialIcons',
  onPress,
}: IconProps) {
  if (bundle === 'MaterialCommunityIcons') {
    return (
      <MaterialCommunityIcons
        name={name}
        size={IconSizes[size]}
        color={color || constants.colors.primary}
        onPress={onPress}
      />
    );
  }
  return (
    <MaterialIcons
      name={name}
      size={IconSizes[size]}
      color={color || constants.colors.primary}
      onPress={onPress}
    />
  );
}
