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
  justify-content: center;
  align-items: center;
  z-index: 999;

  animation: ${({ isFadeIn }) => (isFadeIn ? fadeIn : fadeOut)};
  animation-duration: ${({ duration }) => `${duration + 100}ms`};
`;
const Wrapper = styled.div`
  position: absolute;
  top: 100px;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
