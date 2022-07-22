import React, { useEffect, useRef, useState, FormEvent } from 'react';
import { FormControlLabel, Checkbox, Button } from '@mui/material';
import { CheckCircleOutline, CheckCircle } from '@mui/icons-material';

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
  const renderCount = useRef<number>(0);
  const [values, setValues] = useState<agreedState>({
    info: false,
    privacy: false,
    isAllAgreed: false,
  });
  const { info, privacy, isAllAgreed } = values;

  useEffect(() => {
    renderCount.current += 1;
    console.log(renderCount.current);
  });

  useEffect(() => {
    if (isAllAgreed) {
      setValues((prev) => ({ ...prev, info: true, privacy: true }));
    } else if (privacy && info) {
      setValues((prev) => ({ ...prev, info: false, privacy: false }));
    }
  }, [isAllAgreed]);

  useEffect(() => {
    setValues((prev) => ({ ...prev, isAllAgreed: prev.privacy && prev.info }));
  }, [privacy, info]);

  const onSubmit = (event: FormEvent) => console.log(event);

  return (
    <form onSubmit={onSubmit}>
      <FormControlLabel
        onClick={(e) => {
          e.preventDefault();
          setValues((prev) => ({ ...prev, isAllAgreed: !prev.isAllAgreed }));
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
        onChange={() => setValues((prev) => ({ ...prev, privacy: !prev.privacy }))}
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
        onChange={() => setValues((prev) => ({ ...prev, info: !prev.info }))}
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
