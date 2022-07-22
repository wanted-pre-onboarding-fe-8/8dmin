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
  privacy: boolean;
  info: boolean;
}

function Agree() {
  const renderCount = useRef<number>(0);
  const [values, setValues] = useState<agreedState>({
    info: false,
    privacy: false,
  });
  const { info, privacy } = values;

  useEffect(() => {
    renderCount.current += 1;
    console.log(renderCount.current);
  });

  const onSubmit = (event: FormEvent) => console.log(event);

  return (
    <form onSubmit={onSubmit}>
      <FormControlLabel
        onClick={(e) => {
          e.preventDefault();
          if (privacy && info) {
            setValues({ info: false, privacy: false });
          } else {
            setValues({ info: true, privacy: true });
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
      <Button type='submit' disabled={!(privacy && info)}>
        제출하기
      </Button>
    </form>
  );
}

export default Agree;
