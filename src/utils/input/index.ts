import { NAME_VALIDATION, DOB_VALIDATION, PHONE_VALIDATION, EMAIL_VALIDATION } from './validation';

const NAME = {
  key: 'name',
  title: '이름',
  placeholder: '홍길동',
  readOnly: false,
  option: {
    required: true,
    pattern: {
      value: NAME_VALIDATION,
      message: '한글로 이름을 입력해주세요.',
    },
  },
} as const;

const DATE_OF_BIRTH = {
  key: 'dateOfBirth',
  title: '생년월일',
  placeholder: 'YYYY.MM.DD',
  readOnly: false,
  option: {
    required: true,
    pattern: {
      value: DOB_VALIDATION,
      message: 'YYYY.MM.DD 형식에 맞게 입력해주세요.',
    },
  },
} as const;

export const ADDRESS = {
  key: 'address',
  title: '거주지역',
  placeholder: '거주지역 선택',
  readOnly: true,
  option: {
    required: true,
    pattern: undefined,
  },
} as const;

const PHONE = {
  key: 'phone',
  title: '연락처',
  placeholder: '"-" 없이 입력해 주세요',
  readOnly: false,
  option: {
    required: true,
    pattern: {
      value: PHONE_VALIDATION,
      message: '"-" 없이 11자리 숫자만 입력해주세요.',
    },
  },
} as const;

const EMAIL = {
  key: 'email',
  title: '이메일',
  placeholder: 'abc@abc.com',
  readOnly: false,
  option: {
    required: true,
    pattern: {
      value: EMAIL_VALIDATION,
      message: '"@", ".com"을 필수로 입력해주세요.',
    },
  },
} as const;

export const SETTINGS = [NAME, DATE_OF_BIRTH, ADDRESS, PHONE, EMAIL];

export const GENDER = {
  KEY: 'gender',
  TITLE: '성별',
  FEMALE: '여자',
  MALE: '남자',
} as const;

export const TRANSPORTATION = {
  BUS: '버스',
  SUBWAY: '지하철',
  TAXI: '택시',
  TRAIN: 'KTX/기차',
  WALKING: '도보',
  BYCYCLE: '자전거',
  CAR: '자가용',
  ELECTRIC_KICK_SCOOOTER: '전동 킥보드',
} as const;

export const TRANSPORTATION_SETTING = {
  KEY: 'transportation',
  TITLE: '주로 이용하는 교통수단',
  SUBTITLE: '주로 이용하는 교통수단을 모두 선택해주세요',
  TRANSPORTATION,
};

export const POLICY = {
  PRIVACY: 'privacy',
  AGREEMENT: 'agreement',
} as const;
