import React, { useState } from 'react';
import { FormControlLabel, Checkbox, Button, IconButton } from '@mui/material';
import { CheckCircleOutline, CheckCircle, ArrowForwardIos } from '@mui/icons-material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Notice, NoticeModal } from './Notice';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Field = ({ description }: { description: string }) => {
  return (
    <FormControlLabel
      control={<Checkbox {...label} icon={<CheckCircleOutline />} checkedIcon={<CheckCircle />} />}
      label={<p>{description}</p>}
    />
  );
};

export const POLICY = {
  PRIVACY: 'privacy',
  AGREEMENT: 'agreement',
} as const;

interface agreedState {
  [POLICY.PRIVACY]: boolean;
  [POLICY.AGREEMENT]: boolean;
}

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
  const [privacy, info] = watch([POLICY.PRIVACY, POLICY.AGREEMENT]);
  const [open, setOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<typeof POLICY.PRIVACY | typeof POLICY.AGREEMENT>(POLICY.PRIVACY);
  const onSubmit: SubmitHandler<agreedState> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControlLabel
          onClick={(e) => {
            e.preventDefault();
            if (privacy && info) {
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
              checked={privacy && info}
              icon={<CheckCircleOutline />}
              checkedIcon={<CheckCircle />}
            />
          }
          label={<p>이용약관 모두 동의</p>}
        />
        <FormControlLabel
          {...register(POLICY.PRIVACY, { validate: (value) => value })}
          control={
            <Checkbox
              checked={privacy}
              {...label}
              icon={<CheckCircleOutline />}
              checkedIcon={<CheckCircle />}
            />
          }
          label={<p>개인정보 처리방침 고지 (필수)</p>}
        />

        <IconButton
          onClick={() => {
            setMode(POLICY.PRIVACY);
            setOpen(true);
          }}
        >
          <ArrowForwardIos />
        </IconButton>
        <FormControlLabel
          {...register(POLICY.AGREEMENT, { validate: (value) => value })}
          control={
            <Checkbox
              checked={info}
              {...label}
              icon={<CheckCircleOutline />}
              checkedIcon={<CheckCircle />}
            />
          }
          label={<p>제3자 정보제공 동의 (필수)</p>}
        />
        <IconButton
          onClick={() => {
            setMode(POLICY.AGREEMENT);
            setOpen(true);
          }}
        >
          <ArrowForwardIos />
        </IconButton>
        <Button type='submit' disabled={!isValid}>
          제출하기
        </Button>
      </form>
      <NoticeModal
        open={open}
        handleExit={() => {
          setOpen(false);
        }}
      >
        <Notice mode={mode} />
      </NoticeModal>
    </>
  );
}

export default Agree;
