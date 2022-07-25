import React from 'react';
import styled from 'styled-components';
import { useForm, DeepRequired, FieldErrorsImpl } from 'react-hook-form';
import { SETTINGS, GENDER } from '../../utils/input';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import TextField from '@mui/material/TextField';

interface IFormData {
  [key: string]: string;
  name: string;
  gender: typeof GENDER.FEMALE | typeof GENDER.MALE;
  dateOfBirth: string;
  address: string;
  phone: string;
  email: string;
}

function UserInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm<IFormData>();

  const handleValid = (data: IFormData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      {SETTINGS.map(({ key, title, placeholder, readOnly, option }) => {
        return (
          <InputWrapper key={key}>
            <InputTitle>{title}</InputTitle>
            <TextField
              {...register(key, option)}
              autoComplete='off'
              id='standard-error-helper-text'
              variant='standard'
              placeholder={placeholder}
              error={!!errors[key]}
              helperText={getErrorMessage(errors, key)}
              inputProps={{ readOnly }}
              onClick={
                readOnly
                  ? () => {
                      setValue(key, '미국');
                      clearErrors(key);
                    }
                  : undefined
              }
            />
          </InputWrapper>
        );
      })}
      <InputWrapper>
        <InputTitle>{GENDER.TITLE}</InputTitle>
        <RadioWrapper row defaultValue={GENDER.FEMALE}>
          <FormControlLabel
            value={GENDER.FEMALE}
            label={GENDER.FEMALE}
            control={<Radio {...register(GENDER.KEY)} />}
          />
          <FormControlLabel
            value={GENDER.MALE}
            label={GENDER.MALE}
            control={<Radio {...register(GENDER.KEY)} />}
          />
        </RadioWrapper>
      </InputWrapper>
      <Button>제출</Button>
    </Form>
  );
}

export default UserInfo;

function getErrorMessage(
  errors: FieldErrorsImpl<DeepRequired<IFormData>>,
  key: string,
): string | false {
  if (typeof errors[key]?.message === 'string') {
    return errors[key]?.message + '';
  }

  return false;
}

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  margin-left: 300px;

  > :nth-child(1) {
    order: 1;
  }
  > :nth-child(2) {
    order: 3;
  }
  > :nth-child(3) {
    order: 4;
  }
  > :nth-child(4) {
    order: 5;
  }
  > :nth-child(5) {
    order: 6;
  }
  > :nth-child(6) {
    order: 2;
  }
  > * {
    order: 7;
  }
`;

const InputWrapper = styled.div``;

const InputTitle = styled.p`
  font-weight: 600;
`;

const RadioWrapper = styled(RadioGroup)`
  display: flex;
`;

const Button = styled.button`
  margin-top: 30px;
`;
