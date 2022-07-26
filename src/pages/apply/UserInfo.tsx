import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, DeepRequired, FieldErrorsImpl } from 'react-hook-form';
import { SETTINGS, GENDER, ADDRESS, TRANSPORTATION_SETTING } from '../../utils/input';
import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useModal, Modal, BOX_POSITION } from '../../components/Modal';
import TransportationField from './Transportation';
import AgreeField from './Agree';
import AddressPicker from './AddressPicker';
import CompleteNotice from './CompleteNotice';

interface IFormData {
  [key: string]: string | string[];
  name: string;
  gender: typeof GENDER.FEMALE | typeof GENDER.MALE;
  dateOfBirth: string;
  address: string;
  phone: string;
  email: string;
  transportation: string[];
}

const defaultValues = {
  name: '',
  gender: GENDER.FEMALE,
  dateOfBirth: '',
  address: '',
  phone: '',
  email: '',
  transportation: [],
};

const NUMBER_OF_FIELDS = Object.keys(defaultValues).length;

function UserInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    setValue,
    clearErrors,
  } = useForm<IFormData>({
    defaultValues,
  });
  const [isAllAgreed, setIsAllAgreed] = useState<boolean>(false);

  const { isOpen, isFadeIn, openModal, closeModal } = useModal();
  const {
    isOpen: isCompleteNoticeOpen,
    openModal: openCompleteNoticeModal,
    closeModal: closeCompleteNoticeModal,
  } = useModal();

  const handleAddressSelect = (address: string) => {
    closeModal();
    setValue(ADDRESS.key, address, { shouldDirty: true });
    clearErrors(ADDRESS.key);
  };

  const checkAllInputEntered = (target: Record<string, boolean | boolean[]>) => {
    const targetObjectLength = Object.keys(target).length;
    if (targetObjectLength >= NUMBER_OF_FIELDS - 1) return true;
    return false;
  };

  const checkAllAgreed = (agree: boolean) => {
    setIsAllAgreed(agree);
  };

  const isValid = checkAllInputEntered(dirtyFields) && isAllAgreed;

  const handleValid = (data: IFormData) => {
    console.log(data);
    openCompleteNoticeModal();
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
        <InputWrapper>
          <InputTitle>{TRANSPORTATION_SETTING.TITLE}</InputTitle>
          <InputSubTitle>{TRANSPORTATION_SETTING.SUBTITLE}</InputSubTitle>
          <TransportationWrapper>
            <TransportationField
              register={register(TRANSPORTATION_SETTING.KEY, { validate: (val) => !!val.length })}
            />
          </TransportationWrapper>
        </InputWrapper>
        <InputWrapper>
          <AgreeField checkAllAgreed={checkAllAgreed} />
        </InputWrapper>
        <Button type='submit' isValid={isValid} disabled={!isValid}>
          제출하기
        </Button>
      </Form>
      <Modal isOpen={isOpen} isFadeIn={isFadeIn} boxPosition={BOX_POSITION.BOTTOM}>
        <AddressPicker handleAddressSelect={handleAddressSelect} closeModal={closeModal} />
      </Modal>
      <Modal isOpen={isCompleteNoticeOpen} isFadeIn={true} boxPosition={BOX_POSITION.MID}>
        <CompleteNotice closeModal={closeCompleteNoticeModal} />
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

const InputSubTitle = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

const RadioWrapper = styled(RadioGroup)`
  display: flex;
  > :first-child {
    margin-right: 100px;
  }
`;

const TransportationWrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 20px;
`;

const Button = styled.button<{ isValid: boolean }>`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  padding: 15px;
  background-color: ${({ isValid }) => (isValid ? '#4b4b4b' : 'lightgray')};
  border-radius: 15px;
  border: 0px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
