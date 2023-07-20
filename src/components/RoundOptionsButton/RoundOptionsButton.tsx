import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import constants from '../../global/styles/constants';
import {
  RoundOptionsButtonHolder,
  RoundOptionsButtonTitle,
  RoundOptionsButtonContainder,
} from './styles';

interface RoundOptionsButtonProps {
  title?: string;
  onPress?: () => void;
  onDisablePress?: () => void;
  disabled?: boolean;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  iconName?: string;
  iconSize?: 'giant' | 'huge' | 'large' | 'medium' | 'small';
}

const textColor = {
  selected: constants.colors.black,
  unSelected: constants.colors.white,
};

const iconColor = {
  selected: constants.colors.black,
  unSelected: constants.colors.white,
};

const RoundOptionsButton: React.FC<RoundOptionsButtonProps> = ({
  title,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  iconName,
  iconSize,
  onPress,
  onDisablePress,
  disabled = false,
}) => {
  const [theme, setTheme] = useState<RoundOptionsButtonProps>('unSelected');

  const handlePress = () => {
    setTheme(oldState => {
      return oldState === 'selected' ? 'unSelected' : 'selected';
    });
    onPress && onPress();
  };

  return (
    <RoundOptionsButtonContainder
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    >
      <RoundOptionsButtonHolder
        theme={theme}
        onPress={disabled === true ? onDisablePress : handlePress}
      >
        <Icon
          size={iconSize}
          name={iconName}
          bundle="MaterialCommunityIcons"
          color={iconColor[theme]}
        />
        <RoundOptionsButtonTitle color={textColor[theme]}>
          {title}
        </RoundOptionsButtonTitle>
      </RoundOptionsButtonHolder>
    </RoundOptionsButtonContainder>
  );
};

export default RoundOptionsButton;
