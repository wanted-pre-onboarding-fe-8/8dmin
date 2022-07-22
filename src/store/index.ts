import React from 'react';
import { atom, selector, useRecoilValue } from 'recoil';

export const applicantsState = atom({
  key: 'applicantsState',
  default: [],
});

export const firstApplicants = selector({
  key: 'firstApplicants',
  get: ({ get }) => {
    const applicants = get(applicantsState);
    console.log(applicants);
    // const firstApply = applicants.filter;
  },
});

// export const secondApplicants = selector({
//   key : "secondApplicants",
//   get: ({get})=>{
//     const applicants = get(applicantsState);

//   }
// })
