import React from 'react';
import styled from 'styled-components';

interface IPicker {
  title: string;
  items: string[];
  currentIndex: number;
  itemHeight: number;
  itemCount: number;
  itemClickHandler: (itemIndex: number) => void;
}

export default function Picker(props: IPicker) {
  const { title, items, currentIndex, itemHeight, itemCount, itemClickHandler } = props;

  const mouseWheelHandler = (event: React.WheelEvent) => {
    const { deltaY } = event;
    if (deltaY < 0) {
      if (currentIndex === 0) return;
      itemClickHandler(currentIndex - 1);
    } else if (deltaY > 0) {
      if (currentIndex === items.length - 1) return;
      itemClickHandler(currentIndex + 1);
    }
  };

  return (
    <Box>
      <Title>{title}</Title>
      <ItemBox height={itemHeight * itemCount}>
        <TransformBox index={currentIndex} scrollY={itemHeight} onWheel={mouseWheelHandler}>
          {items.map((item, index) => (
            <Item key={item} height={itemHeight} onClick={() => itemClickHandler(index)}>
              <StyledItem isSelected={index === currentIndex}>{item}</StyledItem>
            </Item>
          ))}
        </TransformBox>
      </ItemBox>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Title = styled.p`
  font-weight: 600;
  text-align: center;
  font-size: 16px;
  padding: 10px;
`;

const ItemBox = styled.div<{ height: number }>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  overflow: hidden;
`;

const TransformBox = styled.div<{ index: number; scrollY: number }>`
  transform: translateY(${({ index, scrollY }) => `${(index - 1) * -scrollY}px`});
  transition-duration: 300ms;
`;

const Item = styled.div<{ height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => `${height}px`};
`;

const StyledItem = styled.div<{ isSelected: boolean }>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  padding: 20px;
  border-radius: 10px;
  font-weight: 600;
  color: ${({ isSelected }) => (isSelected ? 'black' : 'gray')};
  background-color: ${({ isSelected }) => (isSelected ? '#f7f6fb' : 'white')};
  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
