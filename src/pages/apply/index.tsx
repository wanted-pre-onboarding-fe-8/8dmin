import React from 'react';
import { DeepRequired, FieldErrorsImpl, FieldValues, useForm } from 'react-hook-form';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

function Apply() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleValid = () => {
    return null;
  };

  const DATE_OF_BIRTH = 'dateOfBirth';

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <TextField
        {...register(DATE_OF_BIRTH, {
          required: true,
          pattern: {
            value: /^\d{4}.(0[1-9]|1[012]).(0[1-9]|[12][0-9]|3[01])$/,
            message: 'YYYY.MM.DD 형식에 맞게 입력해주세요.',
          },
        })}
        id='standard-error-helper-text'
        label='생년월일'
        variant='standard'
        error={!!errors[DATE_OF_BIRTH]}
        helperText={getErrorMessage(errors, DATE_OF_BIRTH)}
      />
      <button>제출</button>
    </Form>
  );
}

export default Apply;

function getErrorMessage(
  errors: FieldErrorsImpl<DeepRequired<FieldValues>>,
  key: string,
): string | false {
  if (typeof errors[key]?.message === 'string') {
    return errors[key]?.message + '';
  }

  return false;
}

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  margin-left: 300px;
  gap: 20px;
`;
