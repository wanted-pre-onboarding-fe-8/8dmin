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

interface agreedState {
  privacy: boolean;
  info: boolean;
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
    defaultValues: { privacy: false, info: false },
  });
  const [privacy, info] = watch(['privacy', 'info']);
  const [open, setOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<'policy' | 'agreement'>('policy');
  const onSubmit: SubmitHandler<agreedState> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControlLabel
          onClick={(e) => {
            e.preventDefault();
            if (privacy && info) {
              setValue('info', false);
              setValue('privacy', false, { shouldValidate: true });
            } else {
              setValue('info', true);
              setValue('privacy', true, { shouldValidate: true });
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
          {...register('privacy', { validate: (value) => value })}
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
            setMode('policy');
            setOpen(true);
          }}
        >
          <ArrowForwardIos />
        </IconButton>
        <FormControlLabel
          {...register('info', { validate: (value) => value })}
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
            setMode('agreement');
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
