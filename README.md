# Vite + React + TypeScript + Tailwind CSS - 튜토리얼 패키지

이 리포지토리는 Vite와 React, TypeScript, Tailwind CSS를 사용한 앱 튜토리얼 프로젝트 패키지입니다. <br>

Vite로 빠르고 효율적인 개발 환경을 설정하고, React와 TypeScript를 기반으로 프로젝트를 구축하는 방법을 학습하는데에 의의를 두고 있습니다.
<br>
<br>

# 0. Intro
  ## 🦾 프로젝트 설정 방법
  
  ### 1. 프로젝트 생성
  
  Vite 프로젝트를 생성하고 필요한 패키지를 설치:
  
  ```bash
  yarn create vite my-todo-app --template react-ts
  cd my-todo-app
  ```
  
  ### 2. Tailwind CSS 설치 및 설정
  1. Tailwind CSS 설치:
    ```bash
    yarn add -D tailwindcss postcss autoprefixer
    yarn tailwindcss init -p
    ```
  2. tailwind.config.js 파일 수정 (Tailwind CSS 설정 파일):
    ```bash
   ...
    module.exports = {
      content: [
        "./index.html",  <- 추가
        "./src/**/*.{js,ts,jsx,tsx}",  <- 추가
      ],
  ...
    ```
  3. index.css 파일에 Tailwind 지시어 추가 (적용시키기) :
    ```bash
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
  ### 3. 프로젝트 실행
  `yarn dev`
  <br>
  <br>
  
  
  ## 🫀 자주 사용하는 Command Lines
  - 프로젝트 실행: `yarn dev`
  - 빌드: `yarn build`
  - 프리뷰: `yarn preview`
  - 테스트 (옵션): `yarn test` - 설정한 경우
  <br>
  <br>
  
  ## 🔍 궁금 리스트
  ### 1. Vite
  > 빠르고 간단하게 프론트엔드 개발 환경을 설정해주는 빌드 도구이자 개발 서버
  
  #### 특징
  1. **빠른 서버 시작**  
     Vite는 앱을 시작할 때 전체 코드를 번들링하지 않고 필요한 모듈만 즉시 로드하기 때문에 서버가 매우 빠르게 시작됩니다.
  
  2. **HMR(Hot Module Replacement) 지원**  
     코드가 변경될 때마다 필요한 부분만 즉시 갱신해주는 **Hot Module Replacement(HMR)** 기능을 제공합니다. 이로 인해 페이지 전체를 다시 로드하지 않고도 수정된 코드가 즉시 반영되므로, 개발 속도가 매우 빨라집니다.
  
  3. **빠른 번들링**  
     Vite는 **ES 모듈**을 기반으로 동작하여, 기존의 Webpack과 같은 번들러보다 훨씬 빠르게 개발 서버를 실행하고, **빌드 시에는 Rollup**을 사용해 빠르게 최적화된 코드를 생성합니다.
  
  4. **최신 JavaScript 기능 활용**  
     Vite는 최신 브라우저를 대상으로 하여 기본적으로 최신 ES6+ 모듈 시스템을 사용합니다. 이 덕분에 폴리필이 불필요한 경우가 많아 빌드 속도가 더 빨라지고, 코드가 간결해집니다.
  
  5. **플러그인 시스템**  
     Vite는 **플러그인 시스템**을 통해 다양한 기능을 쉽게 확장할 수 있어요. 예를 들어, TypeScript, JSX, Vue와 같은 기능을 플러그인으로 추가하여 사용할 수 있습니다.
  
  #### Vite가 주는 이점
  - **빠른 개발 환경**: HMR과 빠른 빌드 덕분에 개발 속도가 크게 향상됩니다.
  - **단순한 설정**: 별도의 설정 파일 없이도 기본적으로 작동하며, 필요에 따라 간단히 설정을 추가할 수 있어요.
  - **모던한 웹 개발 환경**: 최신 ES 모듈을 기본으로 하고 있어서, 최신 브라우저 환경에 최적화된 결과물을 얻을 수 있습니다.
  <br>
  <br>


# 1. 튜토리얼 프로젝트
  ## 1. 투두 리스트
  ### 목적
    > - Vite + React + Typescript 프로젝트 세팅법 학습 (+ Tailwind CSS)
    > - 컴포넌트화 및 기본 폴더링 구조 방식 학습
    > - React의 상태 관리 및 hook 기본 학습
    > - LocalStorage에 데이터 저장 및 사용하기
    > - custom hook
  <br>
  
  ### 구현 화면
  ![ScreenRecording2024-11-07at1 40 48PM-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/c9954595-1a55-4601-b18e-1e38e86e9e1e)

<br>
<br>
<br>

### 2. 
