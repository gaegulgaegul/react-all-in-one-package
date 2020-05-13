## 선택자

1. 복합 선택자
    - 일치 선택자 : E와 F를 동시에 만족하는 요소 선택
        - span.orange {
            color: red;
        }
    - 자식 선택자 : E의 자식 요소 F 선택
        - ul > .orange {
            color: red;
        }
    - 후손(하위) 선택자 : E의 후손(하위) 요소 F를 선택
        - div .orange {
            color: red;
        }
    - 인접 형제 선택자 : E의 다음 형제 요소 F 하나만 선택
        - .orange + li {
            color: red;
        }
    - 일반 형제 선택자 : E의 다음 형제 요소 F 모두 선택
        - .orange ~ li {
            color: red;
        }

2. 가상 선택자
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
    - first child : E가 형제 요소 중 첫번째 요소라면 선택
        - .fruits li:first-child {
            color: red;
        }
    - last child : E가 형제 요소 중 마지막 요소라면 선택
        - .fruite li:last-child {
            color: red;
        }