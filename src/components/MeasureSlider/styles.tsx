import styled from 'styled-components/native';
import constants from '../../global/styles/constants';

interface SliderProps {
  barWidth?: number;
}

export const Container = styled.View`
  flex: 1;
`;

export const SelectedValueText = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: ${constants?.fonts?.lexend_bold};
  color: ${constants?.colors?.white};
`;

export const SliderLabelText = styled.Text`
  text-align: center;
  font-size: 15px;
  font-family: ${constants?.fonts?.lexend_bold};
  color: ${constants?.colors?.white};
`;

export const SliderContainer = styled.View<SliderProps>`
  align-self: center;
  ${({ barWidth }) =>
    barWidth &&
    `
width: ${barWidth}%
`};
`;

export const SelectedValueTextHolder = styled.Text<SliderProps>`
  flex-direction: row;
  text-align: center;
`;
