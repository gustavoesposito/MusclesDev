/* eslint-disable react/display-name */
import * as React from 'react';

import { ActivityIndicator } from 'react-native-paper';
import constants from '../../global/styles/constants';
import Icon from '../Icon/Icon';

import { ButtonHolder, ButtonWrapper, TextButton } from './styles';

interface ButtonProps {
  iconName?: string;
  iconBundle?: 'MaterialCommunityIcons' | 'MaterialIcons';
  iconSize?: 'small' | 'medium' | 'large' | 'huge' | 'giant';
  theme?: 'default' | 'disabled' | 'success';
  title: string;
  testID?: string;
  disabled?: boolean;
  loading?: boolean;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  mode?: 'compact' | 'elongated';
  onPress: () => void;
  disabledPress?: () => void;
}

const textColor = {
  disabled: constants.colors.smoky_gray,
  default: constants.colors.neutral_00,
  success: constants.colors.neutral_00,
};

const iconColor = {
  disabled: constants.colors.smoky_gray,
  default: constants.colors.neutral_00,
  success: constants.colors.neutral_00,
};

export default function ({
  iconName,
  iconBundle = 'MaterialIcons',
  iconSize = 'medium',
  theme = 'default',
  title,
  testID,
  disabled = false,
  loading = false,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  mode = 'compact',
  onPress,
  disabledPress,
}: ButtonProps) {
  return (
    <ButtonWrapper>
      <ButtonHolder
        mode={mode}
        onPress={loading ? () => {} : disabled ? disabledPress : onPress}
        theme={loading ? 'disabled' : theme}
        testID={testID}
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
    </ButtonWrapper>
  );
}
