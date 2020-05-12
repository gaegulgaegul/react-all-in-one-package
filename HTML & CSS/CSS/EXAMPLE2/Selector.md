## 선택자

1. 가상 선택자
    - hover : 마우스를 해당 태그에 선택했을 때 CSS
        - .box:hover {
            width: 200px;
            background: yellowgreen;
        }
    - active : 요소에 마우스를 클릭하는 동안 처리할 CSS
        - .box:active {
            width: 200px;
            background: yellowgreen;
        }
    - focus : 요소가 포커스 된 동안 처리할 CSS(대화형 콘텐츠에서 사용 가능)
        - .box:focus {
            border-color: red;
            width: 200px;
        }