export const NAME_VALIDATION = /^[가-힣]+$/;

export const DOB_VALIDATION =
  /(19[0-9]{2}|20[0-1][0-9]|202[0-2]).(0[1-9]|1[012]).(0[1-9]|[12][0-9]|3[01])$/;

export const PHONE_VALIDATION = /^01([0|1|6|7|8|9])([0-9]{4})([0-9]{4})$/;

export const EMAIL_VALIDATION =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.com$/i;

export const DATE_VALIDATION = /^[0-9]{0,8}$/;
