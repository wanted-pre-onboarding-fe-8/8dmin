import React, { useState } from 'react';
import { REGION, typeMainRegion } from '../../utils/region';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import Picker from './Picker';

const ITEM_HEIGHT = 60;
const ITEM_COUNT = 3;

interface IAddressPicker {
  handleAddressSelect: (address: string) => void;
  closeModal: () => void;
}

export default function AddressPicker({ handleAddressSelect, closeModal }: IAddressPicker) {
  const [mainIndex, setMainIndex] = useState(1);
  const [subIndex, setSubIndex] = useState(1);

  const mainItems = Object.keys(REGION);
  const subItems = getSubItems(mainIndex);

  const itemClickHandler = (
    itemIndex: number,
    selectedIndex: number,
    setFn: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    const increase = (prev: number) => prev + 1;
    const decrease = (prev: number) => prev - 1;

    if (itemIndex === selectedIndex - 1) {
      setFn(decrease);
    } else if (itemIndex === selectedIndex + 1) {
      setFn(increase);
    }
  };

  const initializeSubIndex = (itemIndex: number) => {
    const subItemCount = getSubItems(itemIndex).length;
    const initialIndex = subItemCount < ITEM_COUNT ? 0 : 1;
    setSubIndex(initialIndex);
  };

  const buttonClickHandler = () => {
    const address = indexToString(mainIndex, subIndex);
    handleAddressSelect(address);
  };

  return (
    <Wrapper>
      <CloseButton sx={{ fontSize: 40 }} onClick={() => closeModal()} />
      <Title>거주지역 선택</Title>
      <Box>
        <Picker
          title={'시/도'}
          items={mainItems}
          currentIndex={mainIndex}
          itemHeight={ITEM_HEIGHT}
          itemCount={ITEM_COUNT}
          itemClickHandler={(itemIndex) => {
            itemClickHandler(itemIndex, mainIndex, setMainIndex);
            initializeSubIndex(itemIndex);
          }}
        />
        <Picker
          title={'시/구/군'}
          items={subItems}
          currentIndex={subIndex}
          itemHeight={ITEM_HEIGHT}
          itemCount={ITEM_COUNT}
          itemClickHandler={(itemIndex) => {
            itemClickHandler(itemIndex, subIndex, setSubIndex);
          }}
        />
      </Box>
      <Button onClick={buttonClickHandler}>확인</Button>
    </Wrapper>
  );
}

function getSubItems(mainIndex: number) {
  const mainItems = Object.keys(REGION);
  const mainRegion = mainItems[mainIndex] as typeMainRegion;
  return REGION[mainRegion];
}

function indexToString(mainIndex: number, subIndex: number) {
  const mainItems = Object.keys(REGION);
  const subItems = getSubItems(mainIndex);

  return `${mainItems[mainIndex]} ${subItems[subIndex]}`;
}

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  width: 350px;
  padding: 10px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 5px;
  left: 5px;
  cursor: pointer;
`;

const Title = styled.p`
  font-weight: 600;
  text-align: center;
  font-size: 18px;
  padding-top: 5px;
  padding-bottom: 15px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;
`;

const Box = styled.div`
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 5px;
  padding: 15px;
  background-color: #4b4b4b;
  border-radius: 15px;
  border: 0px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
