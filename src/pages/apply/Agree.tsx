import React, { useState } from 'react';
import { FormControlLabel, Checkbox, Button, IconButton } from '@mui/material';
import { CheckCircleOutline, CheckCircle, ArrowForwardIos } from '@mui/icons-material';
import { SubmitHandler, useForm, UseFormRegisterReturn } from 'react-hook-form';
import { Notice, NoticeModal } from './Notice';
import { POLICY } from '../../utils/input';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface agreedState {
  [POLICY.PRIVACY]: boolean;
  [POLICY.AGREEMENT]: boolean;
}

type PrivacyOrAgreement = typeof POLICY.PRIVACY | typeof POLICY.AGREEMENT;

const PolicyField = ({
  description,
  onForwardBtnClick,
  register,
  checked,
}: {
  description: string;
  onForwardBtnClick: () => void;
  register: UseFormRegisterReturn<PrivacyOrAgreement>;
  checked: boolean;
}) => {
  return (
    <>
      <FormControlLabel
        {...register}
        control={
          <Checkbox
            checked={checked}
            {...label}
            icon={<CheckCircleOutline />}
            checkedIcon={<CheckCircle />}
          />
        }
        label={<p>{description}</p>}
      />
      <IconButton onClick={onForwardBtnClick}>
        <ArrowForwardIos />
      </IconButton>
    </>
  );
};

function Agree() {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { isValid },
  } = useForm<agreedState>({
    mode: 'onChange',
    defaultValues: { [POLICY.PRIVACY]: false, [POLICY.AGREEMENT]: false },
  });

  const [privacy, agreement] = watch([POLICY.PRIVACY, POLICY.AGREEMENT]);
  const [open, setOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<PrivacyOrAgreement>(POLICY.PRIVACY);

  const onSubmit: SubmitHandler<agreedState> = (data) => console.log(data);

  const openModalHandler = (mode: PrivacyOrAgreement) => {
    setMode(mode);
    setOpen(true);
  };

  const closeModalHandler = () => {
    setOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControlLabel
          onClick={(e) => {
            e.preventDefault();
            if (privacy && agreement) {
              setValue(POLICY.AGREEMENT, false);
              setValue(POLICY.PRIVACY, false, { shouldValidate: true });
            } else {
              setValue(POLICY.AGREEMENT, true);
              setValue(POLICY.PRIVACY, true, { shouldValidate: true });
            }
          }}
          control={
            <Checkbox
              {...label}
              checked={privacy && agreement}
              icon={<CheckCircleOutline />}
              checkedIcon={<CheckCircle />}
            />
          }
          label={<p>이용약관 모두 동의</p>}
        />

        <PolicyField
          checked={privacy}
          description='개인정보 처리방침 고지 (필수)'
          register={register(POLICY.PRIVACY, { validate: (value) => value })}
          onForwardBtnClick={() => openModalHandler(POLICY.PRIVACY)}
        />
        <PolicyField
          checked={agreement}
          description='제3자 정보제공 동의 (필수)'
          register={register(POLICY.AGREEMENT, { validate: (value) => value })}
          onForwardBtnClick={() => openModalHandler(POLICY.AGREEMENT)}
        />

        <Button type='submit' disabled={!isValid}>
          제출하기
        </Button>
      </form>
      <NoticeModal open={open} handleExit={closeModalHandler}>
        <Notice mode={mode} />
      </NoticeModal>
    </>
  );
}

export default Agree;
