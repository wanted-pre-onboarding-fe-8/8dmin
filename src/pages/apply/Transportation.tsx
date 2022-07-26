import React from 'react';
import styled from 'styled-components';
import { Path, UseFormRegisterReturn } from 'react-hook-form';
import { TRANSPORTATION, TRANSPORTATION_SETTING } from '../../utils/input/index';

interface StateType {
  transportation: string[];
}

interface InputProps {
  label: Path<StateType>;
  register: UseFormRegisterReturn<typeof TRANSPORTATION_SETTING.KEY>;
  value: string;
}

interface TransportationProps {
  register: UseFormRegisterReturn<typeof TRANSPORTATION_SETTING.KEY>;
}

function TransportationField({ register }: TransportationProps) {
  const transportationList = Object.values(TRANSPORTATION);
  return (
    <Wrapper>
      {transportationList.map((transportation) => (
        <TransportationOptions
          key={transportation}
          label='transportation'
          register={register}
          value={transportation}
        />
      ))}
    </Wrapper>
  );
}

const TransportationOptions = ({ register, value }: InputProps) => {
  return (
    <span>
      <TransportationCheckbox {...register} id={value} value={value} />
      <label htmlFor={value}>
        <TransportationOption>{value}</TransportationOption>
      </label>
    </span>
  );
};

export default TransportationField;

const Wrapper = styled.div`
  display: flex;
  flex-basis: auto;
  flex-wrap: wrap;
  gap: 10px;
`;

const TransportationCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  &:checked + label > span {
    background-color: #1976d2;
    color: white;
  }
`;

const TransportationOption = styled.span`
  display: inline-block;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #1976d2;
  cursor: pointer;
`;
