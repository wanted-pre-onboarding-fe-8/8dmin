import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const duration = 300;

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
  closeModal: () => void;
  children: JSX.Element;
}

export function Modal({ isOpen, isFadeIn, closeModal, children }: IModal) {
  return (
    <>
      {isOpen && (
        <Overlay isFadeIn={isFadeIn} duration={duration} onClick={closeModal}>
          <Wrapper onClick={(event) => event.stopPropagation()}>{children}</Wrapper>
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
  z-index: 999;

  animation: ${({ isFadeIn }) => (isFadeIn ? fadeIn : fadeOut)};
  animation-duration: ${({ duration }) => `${duration + 100}ms`};
`;
const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0px;
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
