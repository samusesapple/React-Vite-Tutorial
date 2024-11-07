# Vite + React + TypeScript + Tailwind CSS - 튜토리얼 패키지

이 리포지토리는 Vite와 React, TypeScript, Tailwind CSS를 사용한 앱 튜토리얼 프로젝트 패키지입니다. <br>

Vite로 빠르고 효율적인 개발 환경을 설정하고, React와 TypeScript를 기반으로 프로젝트를 구축하는 방법을 학습하는데에 의의를 두고 있습니다.
<br>
<br>


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
<br>


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
