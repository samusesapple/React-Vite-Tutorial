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

