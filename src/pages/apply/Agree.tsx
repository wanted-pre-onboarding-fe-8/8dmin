import React, { useEffect, useState, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { FormControlLabel, Checkbox, IconButton, Divider } from '@mui/material';
import { CheckCircleOutline, CheckCircle, ArrowForwardIos } from '@mui/icons-material';
import { Notice, NoticeModal } from './Notice';
import { POLICY } from '../../utils/input';

type PrivacyOrAgreement = typeof POLICY.PRIVACY | typeof POLICY.AGREEMENT;

interface AgreeProps {
  checkAllAgreed: (agreement: boolean) => void;
}

interface PolicyFieldProps {
  description: string;
  checked: boolean;
  onForwardBtnClick: () => void;
  onChange: () => void;
}

function AgreeField({ checkAllAgreed }: AgreeProps) {
  const [privacy, setPrivacy] = useState<boolean>(false);
  const [agreement, setAgreement] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<PrivacyOrAgreement>(POLICY.PRIVACY);
  const isAllAgreed = privacy && agreement;

  useEffect(() => {
    if (isAllAgreed) {
      checkAllAgreed(true);
    } else {
      checkAllAgreed(false);
    }
  }, [privacy, agreement]);

  const openModalHandler = (mode: PrivacyOrAgreement) => {
    setMode(mode);
    setOpen(true);
  };

  const closeModalHandler = () => {
    setOpen(false);
  };

  const handleAllAgreedClick: MouseEventHandler = (event) => {
    event.preventDefault();
    if (isAllAgreed) {
      setPrivacy(false);
      setAgreement(false);
    } else {
      setPrivacy(true);
      setAgreement(true);
    }
  };

  return (
    <AgreeFieldWrapper>
      <FormControlLabel
        onClick={handleAllAgreedClick}
        control={
          <Checkbox
            checked={privacy && agreement}
            icon={<CheckCircleOutline />}
            checkedIcon={<CheckCircle />}
          />
        }
        label={<p>이용약관 모두 동의</p>}
      />
      <Divider />
      <PolicyField
        checked={privacy}
        description='개인정보 처리방침 고지 (필수)'
        onChange={() => {
          setPrivacy((pre) => !pre);
        }}
        onForwardBtnClick={() => openModalHandler(POLICY.PRIVACY)}
      />
      <PolicyField
        checked={agreement}
        description='제3자 정보제공 동의 (필수)'
        onChange={() => {
          setAgreement((pre) => !pre);
        }}
        onForwardBtnClick={() => openModalHandler(POLICY.AGREEMENT)}
      />
      <NoticeModal open={open} handleExit={closeModalHandler}>
        <Notice mode={mode} />
      </NoticeModal>
    </AgreeFieldWrapper>
  );
}

const PolicyField = ({ description, onForwardBtnClick, onChange, checked }: PolicyFieldProps) => {
  return (
    <PolicyWrapper>
      <FormControlLabel
        onChange={onChange}
        control={
          <Checkbox checked={checked} icon={<CheckCircleOutline />} checkedIcon={<CheckCircle />} />
        }
        label={<p>{description}</p>}
      />
      <IconButton onClick={onForwardBtnClick}>
        <ArrowForwardIos />
      </IconButton>
    </PolicyWrapper>
  );
};

export default AgreeField;

const PolicyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AgreeFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & label > .MuiFormControlLabel-label {
    font-size: 0.9rem;
  }
`;
