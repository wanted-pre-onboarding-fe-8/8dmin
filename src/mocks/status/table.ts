const MOCK_SERIES_COUNT = 10;
const MOCK_HEADCOUNT_PER_SERIES = 10;
const MOCK_APPLICANTS = createMockApplicants(MOCK_SERIES_COUNT, MOCK_HEADCOUNT_PER_SERIES);

function createMockApplicants(series = 10, headcountPerSeries = 10) {
  const mockApplicants = [];

  for (let index = 0; index < series; index++) {
    const series = index + 1;

    for (let count = 0; count < headcountPerSeries; count++) {
      const id = series * 1000 + count;
      const name = `김${series}차${count + 1}`;
      const gender = (count + 1) % 2 === 1 ? '남' : '여';
      const dateOfBirth = 'yyyy-mm-dd';
      const phone = '000-0000-0000';
      const email = 'some@email.com';
      const region = '부여성 동쪽';
      const mobility = '전력질주';
      const appliedAt = 'yyyy-mm-dd';
      const accepted = Math.random() > 0.5;
      mockApplicants.push({
        id,
        series,
        name,
        gender,
        dateOfBirth,
        phone,
        email,
        mobility,
        region,
        accepted,
        appliedAt,
      });
    }
  }

  return mockApplicants;
}

export { MOCK_SERIES_COUNT, MOCK_APPLICANTS };
