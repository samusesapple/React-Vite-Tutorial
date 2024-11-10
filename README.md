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
    > Vite + React + Typescript 프로젝트 세팅법 학습 (+ Tailwind CSS)
    > 컴포넌트화 및 기본 폴더링 구조 방식 학습
    > React의 상태 관리 및 hook 기본 학습
    > LocalStorage에 데이터 저장 및 사용하기
    > custom hook
  <br>
  
  ### 구현 화면
  ![ScreenRecording2024-11-07at1 40 48PM-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/c9954595-1a55-4601-b18e-1e38e86e9e1e)

<br>
<br>
<br>

  ## 2. 디즈니 플러스 클론
  ### 목적
    > 반응형 웹사이트 UI 학습 (tailwind css 활용)
    > axios 활용한 네트워킹
    > 데이터 파싱
    > tailwind CSS snap 유틸리티 이해하기 (사용자가 스크롤할 때 특정 위치에서 자동으로 멈추도록 도와주는 기능)
    > styled-component 방식의 레이아웃 학습

### 🔍 Tailwind CSS Snap 유틸리티
  1. 스냅 컨테이너 설정
    스크롤 스냅을 적용하기 위해 부모 컨테이너에 snap 클래스를 추가하기. <br>
  ```bash
  •snap-none: 스냅 기능을 비활성화
  •snap-x: 가로 방향으로 스냅 활성화
  •snap-y: 세로 방향으로 스냅 활성화
  •snap-both: 가로와 세로 방향으로 스냅 활성화
  ```
  2. 스냅 위치 설정
     자식 요소에 snap-* 클래스를 추가하여 스크롤 스냅 위치를 지정하기. <br>
  ```bash
  •snap-start: 자식 요소의 시작 지점에서 스냅
  •snap-center: 자식 요소의 중앙에서 스냅
  •snap-end: 자식 요소의 끝 지점에서 스냅
  •snap-always: 스냅이 강제 적용되도록 설정
  ```
  3. 스냅 강도 설정
     스크롤 스냅의 강도를 설정하여 스냅 위치에 도달할 때 스크롤이 멈추는 방식을 변경 가능. <br>
  ```bash
	•snap-mandatory: 스냅 위치에 도달할 때만 스크롤이 멈추도록 강제
	•snap-proximity: 사용자가 가까운 위치로 스크롤할 때만 스냅을 적용
  ```
  4. 예시
     가로 스크롤 스냅
  ```bash
  <div class="snap-x snap-mandatory overflow-x-auto flex"> // snap-x : 가로 방향으로 스냅 활성화, snap-mandatory: 스냅 위치에 도달할 때만 스크롤 멈추도록 강제
      <div class="snap-center w-64 h-64 bg-blue-500 flex-shrink-0">Item 1</div> // snap-center: 스크롤 아이템 중앙 지점에서 멈추도록 설정
      <div class="snap-center w-64 h-64 bg-red-500 flex-shrink-0">Item 2</div>
      <div class="snap-center w-64 h-64 bg-green-500 flex-shrink-0">Item 3</div>
  </div>
  ```
<br>

### 🔍 Styled-Component
> `styled-components`는 **CSS-in-JS 라이브러리**로, JavaScript 파일 내에서 CSS 스타일을 작성하고 이를 컴포넌트와 결합하여 사용할 수 있도록 도와주는 도구<br>
  컴포넌트 기반 스타일링을 지원하여 코드의 모듈화와 재사용성을 높여준다.

#### 주요 특징

1. **CSS-in-JS**: 스타일을 JavaScript 파일 내에 작성할 수 있습니다. 따라서 CSS와 JavaScript 코드가 한 곳에 결합되어, 컴포넌트의 스타일과 로직이 독립적으로 유지됨.
   
2. **Scoped Styling (범위 지정 스타일링)**: `styled-components`로 작성한 스타일은 **컴포넌트의 고유 클래스명**으로 자동으로 스코프가 지정되어, 다른 컴포넌트와의 스타일 충돌을 방지 가능.

3. **동적 스타일링 지원**: `props`를 사용하여 조건부 스타일링이 가능합니다. `props`를 통해 스타일을 동적으로 변경할 수 있어, 예를 들어 버튼 색상이나 크기를 사용자 입력에 따라 바꾸고 싶을 때 유용.

4. **반응형 디자인 지원**: `@media` 쿼리나 테마 기능을 사용하여 쉽게 반응형 디자인을 적용할 수 있음.

5. **테마 지원**: `ThemeProvider`를 통해 전역 테마를 정의하고 사용할 수 있어서, 프로젝트 전반에 걸쳐 일관된 스타일 유지에 용이.

#### 사용 예시

```typescript
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

// 기본 스타일과 조건부 스타일 설정
const StyledButton = styled.button<ButtonProps>`
  background: ${(props) => (props.primary ? 'blue' : 'gray')};
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? 'darkblue' : 'darkgray')};
  }
`;

export default function App() {
  return (
    <div>
      <StyledButton primary>Primary Button</StyledButton>
      <StyledButton>Default Button</StyledButton>
    </div>
  );
}
```
<br>

### 구현 화면
