## HTML - 블록 레벨(Block Level) 요소와 인라인(Inline) 요소

1. 블록요소
    - DIV, H1, P
    - 사용가능한 최대 가로 너비를 사용한다.
    - 크기를 지정할 수 있다.
    - (width: 100%; height: 0; 로 시작)
    - 수직으로 쌓인다.
    - margin, padding 위, 아래, 좌, 우 사용가능
    - 레이아웃을 잡는 용도
    - 기본값 -> display: block;

2. 인라인요소
    - SPAN, IMG
    - 필요한 만큼의 너비를 사용한다.
    - 크기를 지정할 수 없다.
    - (width: 0; height: 0; 로 시작)
    - 수평으로 쌓인다.
    - margin, padding 위, 아래는 사용할 수 없다. 좌, 우 사용가능
    - 텍스트를 작업하는 용도
    - 기본값 -> display: inline;