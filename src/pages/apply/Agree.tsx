import React from 'react';
import { useForm } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';
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

function Agree() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Field description='이용약관 모두 동의' />
      <Field description='개인정보 처리방침 고지 (필수)' />
      <Field description='제3자 정보제공 동의 (필수)' />
    </div>
  );
}

export default Agree;
