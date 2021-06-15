import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  max-width: 25vw;
  user-select: none;
`;

export const Image = styled.img`
  max-width: 100%;
`;

const buttonHeight = '25px';
const buttonShadowColor = '#a33131';
const activeDelta = '10px';

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 66%;
  left: 37%;
  z-index: 1;
`;

export const Button = styled.button`
  cursor: pointer;
  height: 30px;
  width: 85px;
  border-radius: 50%;
  background-color: rgb(255, 77, 77);
  border: 0;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    z-index: -1;
    width: 100%;
    background-color: ${buttonShadowColor};
  }
  &::before {
    height: ${buttonHeight};
  }

  &:focus,
  &:active {
    box-shadow: 0 0 0 4px rgb(210 47 45 / 40%);
  }
  &:active {
    margin-top: ${activeDelta};
  }
  &:active::before {
    height: calc(${buttonHeight} - ${activeDelta});
  }
  &:active::after {
    margin-bottom: ${activeDelta};
  }
  &::after {
    height: 30px;
    border-radius: 50%;
    bottom: -25px;
  }
`;

export const CanvasElement = styled.canvas`
  position: absolute;
  top: 26%;
  left: 0;
  right: 0;
  margin: auto;
`;
