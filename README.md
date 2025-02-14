# ndpark-react

- 자연드림 파크 [PC](https://www.naturaldreampark.co.kr), [Mobile](https://www.naturaldreampark.co.kr/mobile/main.php) 사이트를 아래의 사항을 곁들여 제작합니다.
- FE 단과 개발자도구를 통해 public하게 접근 가능한 범위로 한정합니다.
- BE 단에서 입력되어야 할 데이터는 `/src/api`에 mock 데이터로 입력합니다. (로그인 세션은 구현하지 않습니다.)
- 이미지, 미구현된 사이트는 naturaldreampark.co.kr의 요소를 이용합니다.
- 회원 정보는 단순 `localStorage`, 쿠키 값으로 관리합니다.

---

## 기존 사이트에서의 변경 사항

- pure PHP to React.js(18)
- 반응형 사이트로 변경
- PC, Mobile 컬러 등 스타일 균일화

### View 개선

- 표준 가로 규격 변경 ([google Material Design guide](https://m3.material.io/)를 참고하였습니다.)
  | Agent | px |
  |:-:|:-:|
  | PC | `1024` |
  | Tablet | `905` |
  | Phone | `600` |

- `px` 단위의 규격을 가능한 `%`, `rem`, `vw`, `vh` 단위로 변경
