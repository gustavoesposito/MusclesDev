import * as React from 'react';

import {
  Container,
  RoundOptionsButtonWrapper,
  PersonalChooseTextHolder,
  PersonChoseTitle,
  PersonChoseText,
} from './styles';
import RoundOptionsButton from '../../components/RoundOptionsButton/RoundOptionsButton';
import { useNavigation } from '@react-navigation/native';

export const PersonalChoose: React.FunctionComponent = () => {
  const navigation = useNavigation();

  return (
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
            console.log('Funcionei');
          }}
        />

        <RoundOptionsButton
          iconName="gender-female"
          iconSize="giant"
          title="Female"
          marginTop={44}
        />
      </RoundOptionsButtonWrapper>
    </Container>
  );
};
