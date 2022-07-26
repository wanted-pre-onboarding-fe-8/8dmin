export type Gender = '남' | '여';
export type Transportation =
  | '버스'
  | '지하철'
  | '택시'
  | 'KTX/기차'
  | '도보'
  | '자전거'
  | '전동킥보드'
  | '자가용';
export type region = {
  city: string;
  district: string;
};
export interface MockCandidate {
  id: number;
  series: number;
  appliedAt: string;
  name: string;
  gender: Gender;
  dateOfBirth: string;
  phone: string;
  email: string;
  transportation: Transportation;
  region: region;
  accepted: boolean;
}

export type MockCandidates = MockCandidate[];
