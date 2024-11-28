




나의 말:
![홈](https://github.com/user-attachments/assets/c317e1ab-de07-4dfb-824b-e3219fd4bb1c)
![테스트 페이지](https://github.com/user-attachments/assets/25c458f5-efa8-48dc-9f37-3103c40d7966)
![결과 리스트](https://github.com/user-attachments/assets/8a113104-49d5-4862-a4e8-4c661c53f630)
![내 정보](https://github.com/user-attachments/assets/b81016c0-7a20-40cf-ba7f-855d3bc2ff02)

이 프로젝트는 사용자가 MBTI 성격 유형을 검사하고 결과를 확인할 수 있는 웹 애플리케이션입니다. React와 Vite를 기반으로 개발되었으며, Tailwind CSS와 styld component를 활용하여 스타일링되었습니다.


주요 기능
MBTI 검사 진행: 사용자는 일련의 질문에 답변하여 자신의 MBTI 성격 유형을 파악할 수 있습니다.
결과 확인: 검사 완료 후, 해당 성격 유형에 대한 상세한 설명과 특징을 제공합니다.
결과 리스트: 다양한 성격 유형에 대한 정보를 목록 형태로 열람할 수 있습니다.
사용자 정보 입력: 검사 전에 이름과 같은 기본 정보를 입력받습니다.
기술 스택
프론트엔드:
React: UI 구성 및 상태 관리를 위해 사용되었습니다.
Vite: 빠른 개발 환경 구성을 위해 선택되었습니다.
Tailwind CSS: 효율적인 스타일링을 위해 활용되었습니다.
백엔드:
Node.js 및 Express: 간단한 서버 설정과 API 구성을 위해 사용되었습니다.
데이터 관리:
JSON 파일: 질문과 결과 데이터를 저장하고 불러오는 데 사용되었습니다.


프로젝트 구조
mbtipoject/
├── public/
├── src/
│   ├── components/
│   │   ├── Question.js
│   │   ├── Result.js
│   │   ├── ResultList.js
│   │   └── UserInfo.js
│   ├── data/
│   │   ├── questions.json
│   │   └── results.json
│   ├── styles/
│   │   └── tailwind.css
│   ├── App.js
│   └── main.jsx
├── server.js
├── package.json
└── README.md


public/: 정적 파일들이 위치합니다.
src/: 애플리케이션의 주요 소스 코드가 포함되어 있습니다.
components/: 재사용 가능한 React 컴포넌트들이 위치합니다.
Question.js: 각 질문을 표시하고 응답을 수집하는 컴포넌트입니다.
Result.js: 검사 결과를 보여주는 컴포넌트입니다.
ResultList.js: 모든 성격 유형의 결과를 목록으로 보여주는 컴포넌트입니다.
UserInfo.js: 사용자 정보를 입력받는 컴포넌트입니다.
data/: 질문과 결과에 대한 JSON 데이터가 저장되어 있습니다.
questions.json: MBTI 검사를 위한 질문 목록이 포함되어 있습니다.
results.json: 각 MBTI 유형에 대한 결과 정보가 포함되어 있습니다.
styles/: 스타일링 관련 파일이 위치합니다.
tailwind.css: Tailwind CSS 설정 파일입니다.
App.js: 애플리케이션의 주요 라우팅과 레이아웃을 담당합니다.
main.jsx: React 애플리케이션의 진입점입니다.
server.js: 간단한 Express 서버 설정 파일입니다.
package.json: 프로젝트의 의존성 및 스크립트 정보가 포함되어 있습니다.
README.md: 프로젝트에 대한 설명서입니다.



주요 컴포넌트 설명
Question.js: questions.json 파일에서 질문 데이터를 불러와 사용자에게 표시하고, 사용자의 응답을 수집합니다.
Result.js: 사용자의 응답을 기반으로 MBTI 유형을 결정하고, 해당 유형에 대한 상세 정보를 results.json에서 가져와 표시합니다.
ResultList.js: 모든 MBTI 유형에 대한 정보를 목록 형태로 제공하여 사용자가 다양한 성격 유형을 탐색할 수 있게 합니다.
UserInfo.js: 검사 시작 전에 사용자의 이름 등의 기본 정보를 입력받습니다.



데이터 파일 설명
questions.json: MBTI 검사를 위한 질문 목록이 배열 형태로 저장되어 있습니다. 각 질문은 텍스트와 선택지로 구성되어 있습니다.
results.json: 각 MBTI 유형에 대한 설명, 특징, 추천 직업 등이 객체 형태로 저장되어 있습니다.



서버 설정
server.js 파일은 간단한 Express 서버를 설정하여 정적 파일을 제공하고, 필요한 API 엔드포인트를 구성합니다.
