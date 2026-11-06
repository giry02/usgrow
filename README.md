# UsGrow · 어스그로우

회사 웹사이트와 회사소개서 최종본을 보관하고 GitHub Pages로 공개하는 저장소입니다.

**[웹사이트 바로가기](https://giry02.github.io/usgrow/)** · **[회사소개서 웹으로 보기](https://giry02.github.io/usgrow/output/어스그로우_회사소개서.html)**

## 파일 안내

- [웹사이트 첫 화면](index.html) — CSS, JavaScript와 `assets/`는 저장소 루트에 있습니다.
- [웹사이트 실행 및 수정 안내](website/README.md)
- [회사소개서 HTML](https://giry02.github.io/usgrow/output/어스그로우_회사소개서.html) — 브라우저에서 슬라이드 형태로 바로 볼 수 있습니다.
- [회사소개서 최종 PPTX](output/어스그로우_회사소개서_최종.pptx)

## 웹사이트 미리보기

저장소를 내려받은 후 아래 명령을 실행하고 http://localhost:15873 에 접속합니다.

```sh
python -m http.server 15873
```

별도의 빌드나 패키지 설치가 필요하지 않습니다.

## 문의 주소 변경

`config.js`의 `contactEmail`을 변경하면 표시 주소, 이메일 문의 링크와 복사 버튼에 공통 적용됩니다. 현재 주소는 **help@usgrow.co.kr**입니다.

게시판과 문의 폼은 없으며, 문의 버튼을 누르면 방문자의 메일 앱이 열립니다.

## 배포

GitHub Pages는 `main` 브랜치의 루트(`/`)를 공개합니다. 변경 사항을 `main`에 push하면 자동 배포됩니다. `.nojekyll`로 정적 파일을 그대로 제공합니다.

## 자료 기준

회사 및 제품 정보는 제공된 회사소개서를 기반으로 작성했습니다. 회사소개서 원본은 2026년 10월 자료이며, 제품 그래픽은 기능 설명용 예시입니다.
