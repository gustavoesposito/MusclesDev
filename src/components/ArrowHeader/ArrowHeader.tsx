import React from 'react';
import Icon from '../Icon/Icon';
import constants from '../../global/styles/constants';
import { ArrowHeaderHolder } from './styles';

interface ArrowHeaderProps {
  theme?: 'dark' | 'light';
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  onPress: () => void;
}

// eslint-disable-next-line react/display-name
export default function ({
  theme = 'dark',
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  onPress,
}: ArrowHeaderProps) {
  return (
    <ArrowHeaderHolder
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      onPress={onPress}
    >
      <Icon
        size="giant"
        color={
          theme === 'dark' ? constants.colors.dark : constants.colors.white
        }
        name="arrow-left-thick"
        bundle="MaterialCommunityIcons"
      />
    </ArrowHeaderHolder>
  );
}
