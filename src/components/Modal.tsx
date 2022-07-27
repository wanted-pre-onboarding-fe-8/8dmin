import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const duration = 300;

type boxPosition = 'mid' | 'bottom';

export const BOX_POSITION = {
  MID: 'mid',
  BOTTOM: 'bottom',
} as const;

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFadeIn, setIsFadeIn] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setIsFadeIn(true);
  };
  const closeModal = () => {
    setIsFadeIn(false);
    setTimeout(() => setIsOpen(false), duration);
  };

  return { isOpen, isFadeIn, openModal, closeModal };
}

interface IModal {
  isOpen: boolean;
  isFadeIn: boolean;
  children: JSX.Element;
  boxPosition: boxPosition;
}

export function Modal({ isOpen, isFadeIn, children, boxPosition }: IModal) {
  React.useEffect(() => {
    if (!isOpen) return;
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = 'position: ""; top: "";';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Overlay isFadeIn={isFadeIn} duration={duration}>
          <Wrapper boxPosition={boxPosition} onClick={(event) => event.stopPropagation()}>
            {children}
          </Wrapper>
        </Overlay>
      )}
    </>
  );
}

const Overlay = styled.div<{ isFadeIn: boolean; duration: number }>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  z-index: 999;

  animation: ${({ isFadeIn }) => (isFadeIn ? fadeIn : fadeOut)};
  animation-duration: ${({ duration }) => `${duration + 100}ms`};
`;
const Wrapper = styled.div<{ boxPosition: boxPosition }>`
  ${({ boxPosition }) => boxPosition === BOX_POSITION.BOTTOM && 'position: absolute; bottom:0px;'}
  ${({ boxPosition }) => boxPosition === BOX_POSITION.MID && 'align-self: center;'}
`;

const fadeIn = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;
const fadeOut = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(100%);
  }
`;
