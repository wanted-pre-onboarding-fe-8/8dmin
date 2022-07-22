import React, { useEffect, useState, MouseEvent, useRef } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { CheckCircleOutline, CheckCircle } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import { off } from 'process';

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
  const { register, watch, setValue } = useForm<agreedState>({
    defaultValues: { privacy: false, info: false },
  });
  const [privacy, info] = watch(['privacy', 'info']);
  const [isAllAgreed, setIsAllAgreed] = useState<boolean>(false);
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
    setIsAllAgreed(privacy && info);
  }, [privacy, info]);

  return (
    <div>
      <FormControlLabel
        onClick={(e) => {
          e.preventDefault();
          setIsAllAgreed((pre) => !pre);
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
    </div>
  );
}

export default Agree;
