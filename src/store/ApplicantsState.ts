import { atom, RecoilState, RecoilValue } from 'recoil';
type typeGender = '남' | '여';

interface IApplicant {
  id: number;
  application_date: string;
  name: string;
  gender: typeGender;
  registration_number: string;
  phone: string;
  transportation: string[];
  email: string;
  city: string;
  district: string;
}
type IApplicants = IApplicant[];

export const ApplicantsState: RecoilState<IApplicants | any> = atom({
  key: 'ApplicantsState',
  default: [],
});
