## 컴포넌트

- 컴포넌트는 클레스/함수로 작성한다.
- 컴포넌트 함수는 대문자로 시작

- Hello.js
```JavaScript
import React from 'react';

function Hello() {
    return <div>안녕하세요</div>;
}

export default Hello;
```

- App.js
```JavaScript
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

export default App;
```