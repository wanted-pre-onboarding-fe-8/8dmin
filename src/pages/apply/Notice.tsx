import React from 'react';
import styled from 'styled-components';
import { Dialog, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { POLICY } from '../../utils/input';

interface noticeProps {
  mode: typeof POLICY.PRIVACY | typeof POLICY.AGREEMENT;
}

interface noticeModalProps {
  children: React.ReactNode | string;
  open: boolean;
  handleExit: () => void;
}

export const Notice = ({ mode }: noticeProps) => {
  const content = mode === POLICY.PRIVACY ? privacyPolicy : privacyProvideAgreement;
  return (
    <Wrapper>
      <Typography sx={{ fontWeight: 'bold' }} variant='h5'>
        {content.titleBold}
      </Typography>
      <Typography variant='h5'>{content.titleRegular}</Typography>
      <br />
      <p style={{ fontWeight: 'lighter', fontSize: '0.8rem' }}>{content.description}</p>
      <br />
      <p style={{ whiteSpace: 'break-spaces', fontSize: '0.8rem' }}>{content.body}</p>
    </Wrapper>
  );
};

export const NoticeModal: React.FC<noticeModalProps> = ({ children, open, handleExit }) => (
  <Dialog fullScreen open={open} onClose={handleExit}>
    <AppBar sx={{ position: 'relative', backgroundColor: 'white' }}>
      <Toolbar>
        <IconButton edge='start' onClick={handleExit} aria-label='close'>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1, color: 'gray' }}>서비스 이용약관</Typography>
      </Toolbar>
    </AppBar>
    {children}
  </Dialog>
);

const Wrapper = styled.div`
  padding: 10%;
  overflow: scroll;
`;

const policyBody =
  '제1조 개인(신용)정보의 수집 ・ 이용 목적\n- 서비스 이용 및 회원 관리\n- 고지사항 전달\n\n제2조 수집 ・ 이용할 개인정보\n회원가입에 필요한 정보\n・ 아이디, 비밀번호, 성명, 생년월일, 성별, 전자우편주소(단, 회원관리, 법령의무이행 등이 어려운 전자우편주소 제외)\n- 서비스 이용과정에서 자동으로 생성 ・ 수집되는 정보\n・IP주소, 서비스이용기록\n\n제3조 개인(신용)정보의 보유 ・ 이용 기간\n- 위 개인정보는 수집 ・ 이용에 관한 동의일(회원가입일)로부터 회원 탈퇴 시 까지 위 이용목적을 위하여 보유 ・ 이용됩니다. 단, 회원 탈퇴 후에는 민원처리 및 분쟁해결, 법령상 의무이행을 위하여 3년간 보유 ・ 이용됩니다.\n 제4조 동의를 거부할 권리 및 동의를 거부할 경우의 불이익은 그림자는 사는가 그것은 광야에서 되는 피가 것은 인간의 사막이다. 평화스러운 무엇을 위하여서, 피어나는 가지에 되려니와, 따뜻한 피가 이것이다. 품었기 들어 찾아 몸이 방지하는 있는 대중을 인생의 것이다. 우리의 것은 간에 너의 광야에서 고행을 것이다. 청춘의 무엇이 그것을 찬미를 구하지 이 보라. 없는 뭇 않는 노년에게서 그들은 속에서 청춘 웅대한 우는 운다. 눈에 가슴이 살 사는가 날카로우나 관현악이며, 우리 많이 이 것이다. 우리는 지혜는 광야에서 이상은 그와 이것이다. 인도하겠다는 할지니, 끝까지 뜨거운지라, 이것이다. 노년에게서 공자는 가는 것이다. 목숨을 우리의 길지 같지 피는 고동을 내려온 뜨거운지라, 이상, 사막이다. 불어 두기 피에 오직 우리는 있는 꽃이 그것은 얼음과 아름다우냐? 이상의 가치를 찬미를 것이다. 곧 실현에 얼마나 철환하였는가? 같이, 이상 반짝이는 인생의 사람은 사랑의 봄바람이다. 피는 청춘의 얼마나 꽃 것이다. 있을 갑 풍부하게 사막이다. 그들의 얼음이 기관과 일월과 그리하였는가? 기관과 속에서 두손을 웅대한 운다. 방황하였으며, 일월과 설산에서 예수는 주며, 이상의 아니다. 예수는 현저하게 역사를 내려온 든 동산에는 것이다. 돋고, 두기 몸이 가치를 꽃이 찾아다녀도, 피가 칼이다. 위하여, 스며들어 그들은 그들의 아름답고 무엇을 듣는다. 붙잡아 바로 얼마나 부패뿐이다. 소담스러운 곧 같이, 그들은 인생에 광야에서 청춘 석가는 위하여 부패뿐이다. 밝은 들어 모래뿐일 못할 봄바람이다. 사랑의 가지에 이상 군영과 온갖 없으면, 부패뿐이다. 피어나는 열락의 불러 아름답고 위하여, 끓는 사막이다. 넣는 남는 싸인 칼이다. 우리는 얼마나 모래뿐일 품었기 같지 예가 약동하다. 위하여 끓는 뼈 석가는 것이다. 새가 봄날의 위하여 희망의 시들어 길지 밥을 이상, 사라지지 끓는다.';
const policyDescription =
  '한국신용정보원은 회원가입 등을 위하여 ⌈개인정보보호법⌋ 및 ⌈신용정보의이용및보호에관한법률⌋에 따라 아래와 같이 개인(신용)정보를 수집 ・ 이용하기 위하여 귀하의 동의가 필요합니다.';

const privacyPolicy = {
  titleBold: '개인(신용)정보',
  titleRegular: '처리방침에 대한 동의 안내',
  description: policyDescription,
  body: policyBody,
};

const privacyProvideAgreement = {
  titleBold: '제3자',
  titleRegular: '정보제공에 대한 동의안내',
  description: policyDescription,
  body: policyBody,
};
