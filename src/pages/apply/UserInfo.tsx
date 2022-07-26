import React from 'react';
import styled from 'styled-components';
import { useForm, DeepRequired, FieldErrorsImpl } from 'react-hook-form';
import { SETTINGS, GENDER, ADDRESS } from '../../utils/input';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useModal, Modal } from '../../components/Modal';
import AddressPicker from './AddressPicker';
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

  const { isOpen, isFadeIn, openModal, closeModal } = useModal();
  const handleAddressSelect = (address: string) => {
    closeModal();

    setValue(ADDRESS.key, address);
    clearErrors(ADDRESS.key);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleValid)}>
        {SETTINGS.map(({ key, title, placeholder, readOnly, option }) => {
          return (
            <InputWrapper key={key}>
              <InputTitle>{title}</InputTitle>
              <StyledTextField
                {...register(key, option)}
                autoComplete='off'
                id='standard-error-helper-text'
                variant='standard'
                placeholder={placeholder}
                error={!!errors[key]}
                helperText={getErrorMessage(errors, key)}
                inputProps={{ readOnly }}
                onClick={readOnly ? () => openModal() : undefined}
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
        <Button isValid={true}>지원하기</Button>
      </Form>
      <Modal isOpen={isOpen} isFadeIn={isFadeIn} closeModal={closeModal}>
        <AddressPicker handleAddressSelect={handleAddressSelect} closeModal={closeModal} />
      </Modal>
    </>
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
  width: 100%;
  display: flex;
  flex-direction: column;

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
  margin-top: 15px;
  margin-bottom: 10px;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const RadioWrapper = styled(RadioGroup)`
  display: flex;
`;

const Button = styled.button<{ isValid: boolean }>`
  margin-top: 30px;
  width: 100%;
  padding: 15px;
  background-color: ${({ isValid }) => (isValid ? '#4b4b4b' : 'lightgray')};
  border-radius: 15px;
  border: 0px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
