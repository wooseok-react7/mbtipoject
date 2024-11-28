📋 주요 기능
🔍 MBTI 검사 진행
사용자는 질문에 답변하여 자신의 MBTI 성격 유형을 파악할 수 있습니다.

📊 결과 확인
검사가 완료되면 사용자 성격 유형과 상세한 설명이 제공됩니다.

📚 결과 리스트
16가지 성격 유형에 대한 정보를 한눈에 볼 수 있으며, 다른 유형과의 비교도 가능합니다.

👤 사용자 정보 입력
검사를 시작하기 전에 사용자 이름 등 기본 정보를 입력받아 개인화된 결과를 제공합니다.

💻 기술 스택
프론트엔드
React: UI 구성 및 상태 관리를 위해 사용되었습니다.
Vite: 빠르고 경량화된 개발 환경 제공.
Tailwind CSS: 효율적이고 간결한 스타일링.
Styled Components: 컴포넌트 기반 스타일링으로 동적 스타일 제공.
백엔드
Node.js 및 Express: API 서버 구축과 데이터 관리를 위해 사용되었습니다.
데이터 관리
JSON 파일: 질문 및 결과 데이터를 관리하는 간단한 형식으로 활용.
📂 프로젝트 구조
mbtipoject/
├── public/              # 정적 파일들
├── src/                 # 주요 소스 코드
│   ├── components/      # React 컴포넌트들
│   │   ├── Question.js  # 질문 표시 및 응답 수집
│   │   ├── Result.js    # 검사 결과 표시
│   │   ├── ResultList.js# 성격 유형 리스트
│   │   └── UserInfo.js  # 사용자 정보 입력
│   ├── data/            # JSON 데이터
│   │   ├── questions.json # 질문 데이터
│   │   └── results.json   # 결과 데이터
│   ├── styles/          # 스타일 파일
│   │   └── tailwind.css # Tailwind CSS 설정
│   ├── App.js           # 라우팅 및 레이아웃
│   └── main.jsx         # React 진입점
├── server.js            # Express 서버
├── package.json         # 의존성 및 스크립트
└── README.md            # 프로젝트 설명
🧩 주요 컴포넌트 설명
Question.js:
questions.json 데이터를 기반으로 질문을 표시하고 사용자의 선택을 기록합니다.

Result.js:
사용자의 응답 데이터를 분석하여 MBTI 성격 유형을 결정하고 상세한 결과를 보여줍니다.

ResultList.js:
모든 성격 유형을 나열하며 각 유형의 설명을 제공합니다.

UserInfo.js:
사용자가 이름 등 개인 정보를 입력할 수 있도록 구성된 컴포넌트입니다.

📊 데이터 파일 설명
questions.json
MBTI 검사를 위한 질문과 선택지 데이터입니다.

[
  {
    "id": 1,
    "question": "어떤 상황에서 더 편안함을 느끼나요?",
    "option1": "계획을 세워 규칙적으로 행동할 때",
    "option2": "즉흥적으로 행동하고 유연할 때"
  }
]
results.json
각 MBTI 유형의 설명과 특징, 강점 및 약점을 포함한 데이터입니다.

{
  "ENFP": {
    "title": "열정적인 사색가",
    "description": "새로운 아이디어를 탐구하고, 사람들과 활발히 교류하는 것을 즐깁니다.",
    "strengths": ["창의적", "사교적", "열정적"],
    "weaknesses": ["충동적", "집중력 부족"]
  }
}
🌐 서버 설정
server.js:
간단한 Express 서버로 정적 파일을 제공하고 필요한 API 엔드포인트를 구성합니다.
🖼️ 프로젝트 스크린샷
1. 홈 화면
홈

2. 테스트 페이지
테스트 페이지

3. 결과 리스트
결과 리스트

4. 내 정보 입력
내 정보
