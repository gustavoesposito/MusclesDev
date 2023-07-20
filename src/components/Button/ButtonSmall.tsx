/* eslint-disable react/display-name */
import * as React from 'react';

import { ActivityIndicator } from 'react-native-paper';
import constants from '../../global/styles/constants';
import Icon from '../Icon/Icon';

import { ButtonHolder, ButtonSmallWrapper, TextButton } from './styles';

interface ButtonProps {
  iconName?: string;
  iconBundle?: 'MaterialCommunityIcons' | 'MaterialIcons';
  iconSize?: 'small' | 'medium' | 'large' | 'huge' | 'giant';
  theme?: 'default' | 'disabled' | 'success';
  title: string;
  disabled?: boolean;
  loading?: boolean;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  onPress: () => void;
  disabledPress?: () => void;
}

const textColor = {
  disabled: constants.colors.smoky_gray,
  default: constants.colors.neutral_00,
  success: constants.colors.dark_gray50,
};

const iconColor = {
  disabled: constants.colors.smoky_gray,
  default: constants.colors.neutral_00,
  success: constants.colors.dark_gray50,
};

export default function ({
  iconName,
  iconBundle = 'MaterialIcons',
  iconSize = 'medium',
  theme = 'default',
  title,
  disabled = false,
  loading = false,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  onPress,
  disabledPress,
}: ButtonProps) {
  return (
    <ButtonSmallWrapper>
      <ButtonHolder
        onPress={loading ? () => {} : disabled ? disabledPress : onPress}
        theme={loading ? 'disabled' : theme}
        loading={loading}
        marginTop={marginTop}
        marginRight={marginRight}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
      >
        {loading ? (
          <ActivityIndicator size="small" color={constants.colors.smoky_gray} />
        ) : (
          <>
            <TextButton>{title}</TextButton>

            {iconName && !disabled ? (
              <Icon
                name={iconName}
                bundle={iconBundle}
                size={iconSize}
                color={iconColor[theme]}
              />
            ) : null}
          </>
        )}
      </ButtonHolder>
    </ButtonSmallWrapper>
  );
}
