import * as React from 'react';

import {
  Container,
  RoundOptionsButtonWrapper,
  PersonalChooseTextHolder,
  PersonChoseTitle,
  PersonChoseText,
  MeasureTextHolder,
  MeasureText,
  MeasureTitle,
  StartButtonWrapper,
} from './styles';
import RoundOptionsButton from '../../components/RoundOptionsButton/RoundOptionsButton';
import { useNavigation } from '@react-navigation/native';
import MeasureSlider from '../../components/MeasureSlider/MeasureSlider';
import constants from '../../global/styles/constants';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

export const PersonalChoose: React.FunctionComponent = () => {
  const navigation = useNavigation();

  const [measure, setMeasure] = useState(false);

  const dispatch = useDispatch();
  const selectedWeight = useSelector(
    (state: RootState) => state.measures.selectedWeight,
  );
  const selectedHeight = useSelector(
    (state: RootState) => state.measures.selectedHeight,
  );
  const selectedYears = useSelector(
    (state: RootState) => state.measures.selectedYears,
  );

  const handleHeightChange = (height: number) => {
    dispatch({ type: 'SET_HEIGHT', payload: height });
  };

  const handleWeightChange = (weight: number) => {
    dispatch({ type: 'SET_WEIGHT', payload: weight });
  };

  const handleYearsChange = (years: number) => {
    dispatch({ type: 'SET_YEARS', payload: years });
  };

  const noMeasureSeletected =
    selectedHeight !== 0 && selectedWeight !== 0 && selectedYears !== 0;

  return measure ? (
    <Container>
      <MeasureTextHolder>
        <MeasureTitle>What's yours measures!</MeasureTitle>

        <MeasureText>You can always change this later</MeasureText>
      </MeasureTextHolder>

      <PersonChoseText>{selectedWeight} </PersonChoseText>
      <PersonChoseText>{selectedHeight} </PersonChoseText>
      <PersonChoseText>{selectedYears} </PersonChoseText>

      <MeasureSlider
        label="Cm"
        max={230}
        min={1}
        step={1}
        barColor={constants?.colors?.green_success_100}
        barWidth={90}
        onChangeValue={handleHeightChange}
      />

      <MeasureSlider
        label="Kg(s)"
        max={120}
        min={1}
        step={1}
        barColor={constants?.colors?.green_success_100}
        barWidth={90}
        onChangeValue={handleWeightChange}
      />

      <MeasureSlider
        label="Ano(s)"
        max={100}
        min={1}
        step={1}
        barColor={constants?.colors?.green_success_100}
        barWidth={90}
        onChangeValue={handleYearsChange}
      />

      <StartButtonWrapper>
        <Button.Small
          theme="success"
          title={'Next'}
          disabled={!noMeasureSeletected}
          onPress={() => navigation.navigate('Home')}
        />
      </StartButtonWrapper>
    </Container>
  ) : (
    <Container>
      <PersonalChooseTextHolder>
        <PersonChoseTitle>Tell us about yourself!</PersonChoseTitle>

        <PersonChoseText>
          To give you a better experience we need
        </PersonChoseText>

        <PersonChoseText>to know your gender </PersonChoseText>
      </PersonalChooseTextHolder>

      <RoundOptionsButtonWrapper>
        <RoundOptionsButton
          iconName="gender-male"
          iconSize="giant"
          title="Male"
          onPress={() => {
            setMeasure(true);
          }}
        />

        <RoundOptionsButton
          iconName="gender-female"
          iconSize="giant"
          title="Female"
          marginTop={44}
          onPress={() => {
            setMeasure(true);
          }}
        />
      </RoundOptionsButtonWrapper>
    </Container>
  );
};
