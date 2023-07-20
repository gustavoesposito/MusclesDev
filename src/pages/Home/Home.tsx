import * as React from 'react';
import { useState } from 'react';
import { Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import {
  Container,
  HomeText,
  HomeTextWrapper,
  TouchScreenAction,
  ImageSlideHolder,
  ImageHolder,
  OnboardingHolder,
  ProgressBarWrapper,
  ArrowHeaderWrapper,
  SlideText,
  SlideTextHolder,
  StartButtonWrapper,
} from './styles';

import ArrowHeader from '../../components/ArrowHeader/ArrowHeader';
import { Button } from '../../components/Button';

import constants from '../../global/styles/constants';
import { useNavigation } from '@react-navigation/native';

export const Home: React.FunctionComponent = () => {
  const [isOnboarding, setIsOnboarding] = useState(false);
  const [progress, setProgress] = useState(0.5);

  const navigation = useNavigation();

  function handleProgressUpdate() {
    progress === 1 ? null : setProgress(progress + 0.5);
    console.log('---Quando funciona---');
  }

  function ArrowBackHeader() {
    return progress === 0.5 ? null : (
      <ArrowHeaderWrapper>
        <ArrowHeader
          theme="light"
          marginBottom={16}
          marginLeft={16}
          onPress={() => setProgress(progress - 0.5)}
        />
      </ArrowHeaderWrapper>
    );
  }

  function renderImage() {
    switch (progress) {
      case 0.5:
        return (
          <>
            <ImageSlideHolder>
              <Image source={require('../../assets/work-out-sticker02.png')} />
            </ImageSlideHolder>

            <SlideTextHolder>
              <SlideText>Action is the</SlideText>
              <SlideText> key for all success</SlideText>
            </SlideTextHolder>
          </>
        );
      case 1:
        return (
          <>
            <ImageSlideHolder>
              <Image source={require('../../assets/work-out-sticker01.png')} />
            </ImageSlideHolder>

            <SlideTextHolder>
              <SlideText>Work body and mind</SlideText>
              <SlideText>take the success</SlideText>
            </SlideTextHolder>

            <StartButtonWrapper>
              <Button.Small
                iconName="chevron-right"
                theme="success"
                title={'Start now'}
                onPress={() => navigation.navigate('PersonalChoose')}
              />
            </StartButtonWrapper>
          </>
        );
      default:
        return null;
    }
  }

  return isOnboarding ? (
    <Container>
      <OnboardingHolder onPress={handleProgressUpdate}>
        <ArrowBackHeader />

        <ProgressBarWrapper marginTop={progress === 0.5 ? 42 : undefined}>
          <ProgressBar
            progress={progress}
            color={constants.colors.green_success_100}
          />
        </ProgressBarWrapper>

        {renderImage()}
      </OnboardingHolder>
    </Container>
  ) : (
    <>
      <Container>
        <TouchScreenAction onPress={() => setIsOnboarding(true)}>
          <HomeTextWrapper>
            <ImageHolder>
              <Image source={require('../../assets/dumbel-image.png')} />
            </ImageHolder>

            <HomeText>DEV</HomeText>
            <HomeText>MUSCLES</HomeText>
          </HomeTextWrapper>
        </TouchScreenAction>
      </Container>
    </>
  );
};
