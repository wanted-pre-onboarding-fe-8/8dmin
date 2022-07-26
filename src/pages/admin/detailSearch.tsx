import React from 'react';
import styled from 'styled-components';
import { SELECT_OPTIONS_DETAIL_CONTANST, SELECT_AGE } from '../../utils/constants/application';
import { TRANSPORTATION } from '../../utils/input';
import { REGION } from '../../utils/region';

export default function DetailSearch() {
  const transportationList = Object.values(TRANSPORTATION);
  const reginList = Object.keys(REGION);

  const InputField2: any = {
    dateOfApply: (
      <DateDiv>
        <Date type='date' />
        <span> ~ </span>
        <Date type='date' />
      </DateDiv>
    ),
    gender: (
      <FlexDiv>
        {gender.map((item, index) => (
          <span key={index}>
            <Checkbox id={item} name={item} key={item} value={item} />
            <Label htmlFor={item}>{item}</Label>
          </span>
        ))}
      </FlexDiv>
    ),
    age: (
      <FlexDiv>
        {SELECT_AGE.map((item, index) => (
          <span key={index}>
            <Checkbox id={item.key} name={item.key} key={item.key} value={item.key} />
            <Label htmlFor={item.key}>{item.value}</Label>
          </span>
        ))}
      </FlexDiv>
    ),
    transport: (
      <FlexDiv>
        {transportationList.map((item, index) => (
          <span key={index}>
            <Checkbox id={item} name={item} key={item} value={item} />
            <Label htmlFor={item}>{item}</Label>
          </span>
        ))}
      </FlexDiv>
    ),
    address: (
      <FlexDiv>
        {reginList.map((item, index) => (
          <span key={index}>
            <Checkbox id={item} name={item} key={item} value={item} />
            <Label htmlFor={item}>{item}</Label>
          </span>
        ))}
      </FlexDiv>
    ),
  };

  return (
    <div>
      <Detail>
        {SELECT_OPTIONS_DETAIL_CONTANST.map((select) => (
          <DetailSelect key={select.key}>
            <Title>{select.value}</Title>
            <span>{InputField2[select.key]}</span>
          </DetailSelect>
        ))}
      </Detail>
    </div>
  );
}

const FlexDiv = styled.div`
  display: flex;
`;

const DateDiv = styled.div`
  padding-left: 5px;
`;

const Label = styled.label`
  display: flex;
  border: 1px solid black;
  margin: 2px 4px;
  padding: 3px 5px;
  font-size: 12px;
  border-radius: 10px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  border: 0;
  &:checked + ${Label} {
    background: #1976d2;
    color: #fff;
    border: 1px solid #1976d2;
  }
`;

const Date = styled.input.attrs({ type: 'date' })`
  margin-right: 5px;
  border: 0;
`;

const Detail = styled.ul`
  padding-left: 0px;
  border: 1px solid black;
`;
const DetailSelect = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  height: 30px;
  &:last-child {
    border-bottom: 0;
  }
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  width: 90px;
  height: 30px;
  background-color: #1976d2;
  font-size: 14px;
  height: 100%;
  padding: 0px 5px;
  color: #fff;
  padding-left: 10px;
`;

const gender = ['여자', '남자'];
