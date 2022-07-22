import React, { useEffect, useRef } from 'react';
import { FormControlLabel, Checkbox, Button } from '@mui/material';
import { CheckCircleOutline, CheckCircle } from '@mui/icons-material';
import { SubmitHandler, useForm } from 'react-hook-form';

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
  isAllAgreed: boolean;
  privacy: boolean;
  info: boolean;
}

function Agree() {
  const { register, watch, setValue, handleSubmit } = useForm<agreedState>({
    defaultValues: { isAllAgreed: false, privacy: false, info: false },
  });
  const [isAllAgreed, privacy, info] = watch(['isAllAgreed', 'privacy', 'info']);
  const renderCount = useRef<number>(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log(renderCount.current);
  });

  useEffect(() => {
    if (isAllAgreed) {
      setValue('privacy', true);
      setValue('info', true);
    } else if (privacy && info) {
      setValue('privacy', false);
      setValue('info', false);
    }
  }, [isAllAgreed]);

  useEffect(() => {
    setValue('isAllAgreed', privacy && info);
  }, [privacy, info]);

  const onSubmit: SubmitHandler<agreedState> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControlLabel
        {...register('isAllAgreed')}
        onClick={(e) => {
          e.preventDefault();
          setValue('isAllAgreed', !isAllAgreed);
        }}
        control={
          <Checkbox
            {...label}
            checked={isAllAgreed}
            icon={<CheckCircleOutline />}
            checkedIcon={<CheckCircle />}
          />
        }
        label={<p>이용약관 모두 동의</p>}
      />
      <FormControlLabel
        {...register('privacy')}
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
      <FormControlLabel
        {...register('info')}
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
      <Button type='submit' disabled={!isAllAgreed}>
        제출하기
      </Button>
    </form>
  );
}

export default Agree;
