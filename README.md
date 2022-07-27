# Wanted Pre-Onboarding FE #4-1. (에스앤피랩 기업과제)

<br/>

## 목차

1. 프로젝트 소개
2. 역할
3. 프로젝트 요약
4. 폴더 구조
5. 구현
6. 프로젝트 설치 및 실행
7. 회의록
8. 프로젝트 결과물

## 1. 프로젝트 소개

> 개요 : 원티드 프리온보딩 5기 4주차 네 번째 팀 과제
>
> 주제 : 에스앤피랩 기업과제 - 크라우드 워커 지원 화면 & 관리자 페이지
>
> 기간 : 2022.07.21 ~ 2022.07.27

## 2. 역할

|                   이름                    | 직책 | 역할                                                                           |
| :---------------------------------------: | :--: | :----------------------------------------------------------------------------- |
| [엄일경](https://github.com/sunaerocket)  | 팀장 | 📌관리자 페이지 - 탭, 테이블 UI 구현<br />📌전역 상태 연결<br />               |
|  [추연빈](https://github.com/chuyeonbin)  | 팀원 | 📌랜딩 페이지 구현<br />📌테이블 데이터 다운로드 기능 구현<br />               |
| [임은지](https://github.com/salangdung-i) | 팀원 | 📌관라자 페이지 - 페이지 레이아웃 <br />📌관리자 페이지 - 검색 기능 구현<br /> |
|  [오태권](https://github.com/ohtaekwon)   | 팀원 | 📌전역 상태 관리 기능(Recoil) 구현                                             |
|    [이진희](https://github.com/bebusl)    | 팀원 | 📌지원 페이지 - 교통수단 입력 구현<br />📌지원 페이지 - 동의란 구현<br />      |
| [문성운](https://github.com/corgi-world)  | 팀원 | 📌지원 페이지 - input 구현 <br />📌지원 페이지 - 거주지역 picker 구현          |

## 3. 프로젝트 요약

![https://img.shields.io/badge/Laguage-Typescript-red](https://img.shields.io/badge/Laguage-Typescript-green?logo=Typescript&logoColor=#377549) ![ReactHookForm](https://img.shields.io/badge/Library-React_Hook_Form-green?logo=ReactHookForm&logoColor=#377549)![Recoil](https://img.shields.io/badge/Libarary-Recoil-green?logo=recoil&logoColor=#377549) ![https://img.shields.io/badge/Laguage-Typescript-red](https://img.shields.io/badge/UILibarary-MUI-green?logo=MUI&logoColor=#377549)

![summary](https://github.com/ohtaekwon/ohtaekwon/blob/master/img/week4_1/project.png?raw=true)

### 1) 데이터 관리

> 앱이 마운트 될 때, 전체 데이터를 호출하여, Recoil을 통해서 지원자 데이터를 전역 상태로 관리하도록 구현한다.

#### 1-1) None - JsonServer

> 아이디어1 : 채용 공고는 마감 시간이 존재하고, 보통 관리자들이 사용할 때는 마감시간 이후라고 가정
>
> 아이디어2: 마감시간 이후에는 기본적으로 사이트를 막아놓기 때문에, 관리자가 신경쓰지 않아도 된다.
>
> 아이디어3: 지원자의 데이터를 전역 상태로 사용하고 필요에 맞게 가공하여 사용하는 것이 낫다.
>
> **결론 : 서버를 사용하지 않고, 첫 마운트 시 모든 데이터를 불러와 전역상태로 관리하도록 한다. 하지만, 데이터의 신뢰성을 보장할 수 없는 문제점이 발생**

#### 1-2) Ensure data reliability

> 데이터의 신뢰성을 보장을 위한 문제를 해결하기 위해서 데이터를 가져올 때, 시간을 기록한다.
>
> 또한, 사용자 UI에서 데이터를 가져온 시간 표시 하고 새로고침 버튼을 UI제공하여 갱신할 수 있도록 구현한다.
>
> **결론 : 지원자 현황을 빠르게 로딩될 수 있도록 최신 데이터를 매번 갱신하지 않고, 필요 시 수동으로 데이터를 갱신하여 조회할 수 있는 기능을 함께 제공하여 신뢰성을 확보한다.**

### 2) UI 구현

> 전반적인 플랫폼의 UI는 실용적이고 빠르게 구현할 수 있도록, `Meterail-UI` 라이브러리 사용 기획
>
> 이전에 사용했던 경험상 편리한 사용과 styled component사용하여 커스텀이 가능함

### 3) Form 구현

> React-Hook-Form의 `validation`, `Error Handling`, `dirtyFields` 등을 활용하여 `input state`와 `error state` 관리를 위임한다..

## 4. 프로젝트 구조

```bash
├── 📁src
│ 	├──📁components
│ 	│	├──📁applicnats
│   │  	│	├─DownloadLink.tsx
│   │  	│	├─Modal.tsx
│   │  	│	├─HeaderBar.tsx
│   │  	│	└─SideBar.tsx
│   ├── 📁 hooks
│   │    	└─index.ts
│   ├── 📁layouts
│   │  	│	├─AdminLayout.tsx
│   │  	│	└─DefaultLayout.tsx
│   ├── 📁mocks
│   │  	│	└─📁status
│   │  	│	│	├─recoil.ts
│   │  	│	│	├─table.ts
│   │  	│	│	└─type.ts
│   ├── 📁pages
│   │	│	├─📁admin
│   │	│	│	├─detailSearch.tsx
│   │	│	│	├─index.tsx
│   │	│	│	├─menuBar.tsx
│   │	│	│	└─search.tsx
│   │	│	├─📁apply
│   │	│	│	├─AddressPicker.tsx
│   │	│	│	├─Agree.tsx
│   │	│	│	├─CompleteNotice.tsx
│   │	│	│	├─index.tsx
│   │	│	│	├─Notice.tsx
│   │	│	│	├─Picker.tsx
│   │	│	│	├─Transportation.tsx
│   │	│	│	└─UserInfo.tsx
│   │	│	└──📁landing
│   │	│	│	└─index.tsx
│   ├── 📁routes
│   │	│	└─DefaultRouter.tsx
│   ├── 📁store
│   │	│	├─applicantSelector.ts
│   │	│	├─atoms.ts
│   │	│	├─index.ts
│   │	│	├─pageNationSelector.ts
│   │	│	├─searchSelector.ts
│   │	│	├─sortApplicantSelector.ts
│   │		└─types.ts
│   ├── 📁Styles
│   │	└─globals.js
│   ├── 📁utils
│   │    ├──📁constants
│   │    │	├──application.ts
│	│    │	├──data.ts
│   │    │	└──table.ts
│   │    └──📁helpers
│   │    │	├──convertion.ts
│   │    └──📁input
│	│    │	├─index.ts
│   │    │	└──validation.ts
│	│    ├─region.ts
├── App.tsx
├── index.tsx
```

## 5. 기능 구현

### 5.1. 랜딩 페이지

- [x] 지원자와 관리자가 사용하는 페이지가 다르므로, 각각의 페이지 이동버튼과 로그인으로구분

### 5.2. 지원자 페이지 - 정보 입력

- [x] 이름 입력 - 한글만 입력
- [x] 성별 체크 입력 - 복수 선택 불가
- [x] 생년월일 입력 - 숫자만 입력. YYYY.MM.DD 형식
- [x] 거주지 입력 - 클릭 시 modal창
- [x] 연락처 입력 - “-” 없이 숫자만 입력, 11자리 숫자
- [x] 이메일 입력 - “@”, “.com” 필수로 포함
- [x] 교통 수단 입력 - 중복 선택 가능 항목
- [x] 약관 동의 항목 - 모두 동의 클릭시 모두 체크, 개별 항목 클릭시 개별 체크
  - [x] 개인정보 처리방침 이동
  - [x] 제3자 정보제공 동의 안내 이동
- [x] 지원 완료 버튼 클릭시 지원자 데이터는 관리자 페이지의 데이터로 갱신

### 5.3. 관리자 페이지 - 지원현황 확인

- [x] 페이지 상단의 `페이지 제목`
- [x] 사용자 데이터의 검색기능
  - [x] 검색 기능검색 필터필터: `지원날짜`, `지원자명`, `성별`, `생년월일`, `이용수단`, `거주지`
- [x] 탭 이동 버튼으로 모집회차 구분
  - [x] 모집 회차 만큼 탭이 늘어날 수 있음
- [x] 현재 보고 있는 탭 엑셀 다운로드
- [x] 합격여부 클릭시 `v` 표시

### 5.4. 추가 기능 - 관리자 페이지

- [x]

- [x] `갱신하기 새로고침`을 누르면 지원자 페이지에서 `지원하기` 버튼을 누른 들어온 데이터 추가,
- [ ] 지원자의 데이터 상세 검색창 제공 - 추후에 기능 업데이트 예정

## 6. 프로젝트 설치 및 실행

- Git Clone

```
$ git clone
```

- 프로젝트 실행

```
$ npm install
$ npm start
```

## 7. 회의록

- [18일차 💬](https://www.notion.so/cf4d10bb3b504ab0ae08d1f4b2a53ab1?v=eb0c9f0a833840f29b045b8a497f659f&p=7bb43523b9114f978678ef8a5ac19093&pm=s)

- [19일차 💬 ](https://www.notion.so/cf4d10bb3b504ab0ae08d1f4b2a53ab1?v=eb0c9f0a833840f29b045b8a497f659f&p=db22895ce07e48c7a1efd2305cd41bf8&pm=s)

- [22일차 💬](https://www.notion.so/cf4d10bb3b504ab0ae08d1f4b2a53ab1?v=eb0c9f0a833840f29b045b8a497f659f&p=da34f3d3c6954862a6a8014790bc6064&pm=s)

- [23일차 💬](https://www.notion.so/cf4d10bb3b504ab0ae08d1f4b2a53ab1?v=eb0c9f0a833840f29b045b8a497f659f&p=e8f9cd91039d41c3b1816e129bbe1795&pm=s)

- [24일차 💬](https://www.notion.so/cf4d10bb3b504ab0ae08d1f4b2a53ab1?v=eb0c9f0a833840f29b045b8a497f659f&p=1c047f83424d4b5eb1d223502cb55452&pm=s)

## 8. 프로젝트 결과물

### 랜딩 페이지

![랜딩 페이지](https://github.com/ohtaekwon/ohtaekwon/blob/master/img/week4_1/newlanding.png?raw=true)

### 지원자 페이지

![지원자 페이지](https://github.com/ohtaekwon/ohtaekwon/blob/master/img/week4_1/%EC%A7%80%EC%9B%90%EC%9E%90.png?raw=true)

![자원페이지](https://github.com/ohtaekwon/ohtaekwon/blob/master/img/week4_1/agree.png?raw=true)

### 관리자 페이지

![관리자 페이지](https://github.com/ohtaekwon/ohtaekwon/blob/master/img/week4_1/login.png?raw=true)

![](https://github.com/ohtaekwon/ohtaekwon/blob/master/img/week4_1/admin.png?raw=true)
