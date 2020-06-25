> React

- 환경설정
    - node.js : 리액트를 사용하기 위한 도구를 담고 있다(npm)
    - yarn : 자바스크립트 패키징 도구
    - vscode
    - mac OS
- 설치 확인

```bash
# node --version
```

```bash
# yarn --version
```

- 프로젝트 만들기

```bash
# npx create-react-app begin-react
```

- 프로젝트 실행

```bash
# yarn start
```

> npm VS npx

- npm(Node Package Module)
    - npm을 통해 프로젝트 생성 시 한가지 global module을 사용해야 했는데 생성 할 떄 마다 -g 옵션을 붙여서 작성했다.
    - 'npm install ModuleName -g'를 통해 작성하면 안되는 이유
        1. 모듈이 업데이트 되었는지 안되었는지 확인이 불가능하다.
        2. 업데이트를 진행 했을 때 변동사항이 생겨 다른 프로젝트에 영향을 끼칠 수 있다.
        3. create-react-app 같은 보일러플레이트에는 치명적이다.
- npx(node package executor)
    - npm 5.2버전부터 npx가 기본 패키지로 제공
    - 모듈을 로컬에 저장하지 않고, 매번 최신 버전의 파일만 임시로 불러와 실행 한 후에 해당 파일을 삭제하는 방식으로 모듈 사용

> 보일러 플레이트(boiler plate)

- 위키피디아
    - 최소한의 변경으로 재사용할 수 있는 것
    - 적은 수정으로 여러 곳에 활용이 가능한 코드, 문구
    - 각종 문서에 반복적으로 인용되는 문서의 한 부분
- JavaScript나 HTML에서 보통 크로스 브라우징과 호환성을 위한 Modernizr, polyfill, Normalize 등이 적용되어 있는 템플릿 같은 형태로 많이 사용된다.(어떻게보면 seed project와 비슷하다.)
- 반복되지만 자주 쓰이는 형태를 자동화