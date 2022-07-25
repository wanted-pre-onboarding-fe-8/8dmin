import React from 'react';
import styled from 'styled-components';
import { Path, useForm, UseFormRegister } from 'react-hook-form';
import { TRANSPORTATION } from '../../utils/input/index';

interface StateType {
  transportation: string[];
}

interface InputProps {
  label: Path<StateType>;
  register: UseFormRegister<StateType>;
  value: string;
}

function Transportation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StateType>({
    defaultValues: { transportation: [] },
  });

  const transportationList = Object.values(TRANSPORTATION);

  return (
    <form onSubmit={handleSubmit(console.log)}>
      {transportationList.map((transportation) => (
        <TransportationOptions
          key={transportation}
          label='transportation'
          register={register}
          value={transportation}
        />
      ))}
      {errors.transportation && <div style={{ color: 'red' }}>하나 이상의 선택을 해주세요</div>}
      <button type='submit'>submit</button>
    </form>
  );
}

const TransportationOptions = ({ label, register, value }: InputProps) => {
  return (
    <span>
      <TransportationCheckbox
        {...register(label, {
          validate: (val) => !!val.length,
        })}
        id={value}
        value={value}
      />
      <label htmlFor={value}>
        <TransportationOption>{value}</TransportationOption>
      </label>
    </span>
  );
};

export default Transportation;

const TransportationCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  &:checked + label > span {
    background-color: #90caf9;
    color: white;
  }
`;

const TransportationOption = styled.span`
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #90caf9;
  cursor: pointer;
`;
