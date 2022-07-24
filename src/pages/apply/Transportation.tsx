import React from 'react';
import { Path, useForm, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

interface StateType {
  transportation: string[];
}
// 타입 좁히기 필요.c

// type Props = {
//   children: React.ReactNode | string;
// };
// React 18 들어오면서 children받는 방법 바뀜
// https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc
// React 18 달라진점 문서보면서 판단!
// const Label: React.FC<Props> = ({ children }) => {
//   return (
//     <Button variant='outlined' type='button'>
//       {children}
//     </Button>
//   );
// };

type InputProps = {
  label: Path<StateType>;
  register: UseFormRegister<StateType>;
  value: string;
};

const TransportationOptions = ({ label, register, value }: InputProps) => {
  return (
    <span>
      <TransportationCheckbox
        {...register(label, {
          validate: (val) => !!val.length,
        })}
        id={value}
        value={value}
      ></TransportationCheckbox>
      <label htmlFor={value}>
        <TransportationOption>{value}</TransportationOption>
      </label>
    </span>
  );
};

function Transportation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StateType>({
    defaultValues: { transportation: [] },
  });
  return (
    <form onSubmit={handleSubmit(console.log)}>
      <TransportationOptions
        label='transportation'
        register={register}
        value='자전거'
      ></TransportationOptions>
      <TransportationOptions
        label='transportation'
        register={register}
        value='차'
      ></TransportationOptions>
      <TransportationOptions
        label='transportation'
        register={register}
        value='비행기'
      ></TransportationOptions>
      {errors.transportation && <div style={{ color: 'red' }}>하나 이상의 선택을 해주세요</div>}
      <button type='submit'>submit</button>
    </form>
  );
}

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

export default Transportation;
