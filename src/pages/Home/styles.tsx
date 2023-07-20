import styled from 'styled-components/native';

interface HomeProps {
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark_gray50};
`;

export const TouchScreenAction = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark_gray50};
`;

export const HomeText = styled.Text`
  font-size: 50px;
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.rubik_regular};
  color: ${({ theme }) => theme.colors.green_success_100};
`;

export const HomeTextWrapper = styled.View`
  flex: 1;
  align-items: center;
  margin: 0 32px;
  justify-content: center;
`;

export const ImageHolder = styled.View`
  margin-bottom: 16px;
  align-items: center;
`;

export const ImageSlideHolder = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const OnboardingHolder = styled.TouchableOpacity`
  flex: 1;
  margin-top: 45px;
`;

export const ProgressBarWrapper = styled.View<HomeProps>`
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}px;`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px;`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}px;`}
`;

export const ArrowHeaderWrapper = styled.View``;

export const SlideText = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.lexend_medium};
`;

export const SlideTextHolder = styled.View`
  flex: 1;
  align-items: center;
`;

export const StartButtonWrapper = styled.View`
  flex: 1;
  align-items: center;
`;
