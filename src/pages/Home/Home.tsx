import * as React from 'react';
import Lottie from 'lottie-react-native';
import { Container, ButtonWrapper } from './styles';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button/Button';

export const Home: React.FunctionComponent = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Lottie
          source={require('../../assets/animations/pencil-write.json')}
          autoPlay
          loop
        />

        <ButtonWrapper>
          <Button
            iconName="chevron-right"
            title={'Anote aqui!'}
            onPress={() => {
              navigation.navigate('Choosen');
            }}
          />
        </ButtonWrapper>
      </Container>
    </>
  );
};
