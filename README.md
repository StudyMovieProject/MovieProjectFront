## 폴더구조(src)

```plaintext
src
├── api
├── components
├── assets
├── mocks
├── hooks (= hoc)
├── pages
├── types
├── styles
├── Theme.ts
├── utils
├── contexts
├── App.js
└── index.js
```

 - __api__  
리액트 쿼리의 쿼리함수들이 위치하는 폴더  
React Query가 데이터를 가져오기 위해 실행하는 쿼리 함수들을 담은 폴더입니다.
가독성을 위해 movie 파일과 user파일로 분류했습니다.

 - __components__  
재사용 가능한 컴포넌트들이 위치하는 폴더  
컴포넌트는 매우 많아질 수 있기 때문에 이 폴더 내부에서 하위폴더로 추가로 분류합니다.

 - __mocks__  
모킹 데이터 패칭을 위한 msw 라이브러리의 핸들러와 모킹 데이터(data 폴더의 하위 파일들)가 들어있는 폴더  
가독성을 위해 movie와 user 핸들러를 따로 분류했습니다. 사용법은 다음 항목에 따로 기술합니다.

 - __types__  
api 응답의 타입들이 들어있는 파일  
가독성을 위해 movie와 user 등 따로 분류하는 것을 추천합니다.

 - __Theme__  
MUI와 Emotion을 사용하여 글로벌 스타일과 테마 설정을 정의한 파일  
주요 역할은 `글로벌 스타일 정의`, `MUI 테마 생성`입니다.

>### mocks 폴더: 핸들러 사용법
__예시: movieHandlers.ts__
```javascript
export const getMovieListHandler = http.get(
  `${BASE_PATH}/api/movies/status/:status`,
  ({ params }) => {
    const { status } = params;

      return HttpResponse.json(
        {
          code: 1,
          msg: "UPCOMING 요청에 성공했습니다.",
          data: movies,
        },
        { status: 200 }
      );
    }
);

// 모든 영화 관련 핸들러들
export const movieHandlers = [
  getMovieListHandler,
  getMovieDetailHandler,
  addMovieHandler,
];
```
핸들러를 작성 후 하단의 movieHandlers 배열에 해당 함수를 넣어주어야 합니다.
그렇게 하면 `handlers.ts` 파일에 있는 핸들러 배열 안에 전달되어 모킹 데이터 패칭을 사용할 수 있습니다.
```javascript
export const handlers = [...movieHandlers, ...userHandlers];
```
