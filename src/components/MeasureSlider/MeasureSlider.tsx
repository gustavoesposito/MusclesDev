/* eslint-disable react/display-name */
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import {
  Container,
  SelectedValueText,
  SliderLabelText,
  SliderContainer,
  SelectedValueTextHolder,
} from './styles';

interface MeasureSliderProps {
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  barColor?: string;
  barWidth?: number;
  onChangeValue?: () => void;
}

export default function ({
  min = 0,
  max,
  step,
  label,
  barColor = '#007BFF',
  barWidth,
  onChangeValue,
}: MeasureSliderProps) {
  const [selectedValue, setSelectedValue] = useState<number>(min);

  function handleValueChange(value: number) {
    setSelectedValue(value);

    if (onChangeValue) {
      onChangeValue(value);
    }
  }

  return (
    <Container>
      <SliderContainer barWidth={barWidth}>
        <Slider
          minimumValue={min}
          maximumValue={max}
          step={step}
          onValueChange={handleValueChange}
          minimumTrackTintColor={barColor}
        />
      </SliderContainer>

      <SelectedValueTextHolder>
        <SelectedValueText>{selectedValue}</SelectedValueText>
        <SliderLabelText>{label}</SliderLabelText>
      </SelectedValueTextHolder>
    </Container>
  );
}
