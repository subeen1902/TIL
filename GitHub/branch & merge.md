## 브랜치(branch)

- git의 독립적 작업 공간
- main branch : 최종 배포용, 별도의 branch에서 테스트/개발
- `branch` 규칙
  1. 기능 개발 전; main 브랜치에 개발 X, `feature branch`에 개발하기(`feature` : 해당 수업 규칙 - 기능 개발 시; `feature` 붙이기)
  2. 하나의 feature 브랜치 ⇒ 한 명만 commit
  3. branch 만들 시; 반드시 `main branch` 확인하기 ⇒ 어디에 가지를 뻗을건지
  4. 기능 개발이 끝나면; feature branch를 main branch와 합치기 ⇒ main branch에는 직접 commit X
  5. `full request` 보내고 승인하면 merge하기

## 병합(merge)

- branch에서의 작업 과정을 다른 branch(주로 main/master)에 통합하는 과정

## Issues

- 이슈 관리 : GitHub Repository 내에서 앞으로 해야할 것/개발해야 할 부분 정리

## Git branch & merge 명령어

| 명령어                       | 설명                                      | 예시                            |
| ---------------------------- | ----------------------------------------- | ------------------------------- |
| `git branch`                 | 브랜치 목록 보기                          | `git branch`                    |
| `git branch [브랜치명]`      | 새 브랜치 생성                            | `git branch feature/login`      |
| `git switch [브랜치명]`      | 다른 브랜치로 전환                        | `git switch main`               |
| `git switch -c [브랜치명]`   | 새 브랜치 생성 후 전환                    | `git switch -c feature/login`   |
| `git checkout [브랜치명]`    | 브랜치 전환 (구버전 방식)                 | `git checkout main`             |
| `git checkout -b [브랜치명]` | 새 브랜치 생성 및 전환                    | `git checkout -b feature/login` |
| `git merge [브랜치명]`       | 현재 브랜치에 다른 브랜치를 병합          | `git merge feature/login`       |
| `git pull origin [브랜치명]` | 원격 브랜치의 최신 변경사항 가져와 병합   | `git pull origin main`          |
| `git push origin [브랜치명]` | 로컬 브랜치를 원격 저장소에 푸시          | `git push origin feature/login` |
| `git branch -d [브랜치명]`   | 로컬 브랜치 삭제 (병합 후)                | `git branch -d feature/login`   |
| `git branch -D [브랜치명]`   | 병합 안 된 브랜치 강제 삭제               | `git branch -D feature/test`    |
| `git fetch`                  | 원격 저장소의 모든 브랜치 정보 가져오기   | `git fetch`                     |
| `git rebase [브랜치명]`      | 브랜치를 기준으로 내 브랜치 커밋을 재정렬 | `git rebase main`               |

## 대표적인 branch 이름

| Prefix      | 용도 설명                                | 예시 브랜치 이름          |
| ----------- | ---------------------------------------- | ------------------------- |
| `feature/`  | 새로운 기능 개발                         | `feature/login-page`      |
| `fix/`      | 버그 수정                                | `fix/null-pointer`        |
| `hotfix/`   | 긴급 패치 (운영 배포 중 문제 해결)       | `hotfix/production-crash` |
| `release/`  | 릴리즈 준비                              | `release/v1.0.0`          |
| `refactor/` | 리팩토링 (기능 변화 없이 코드 구조 개선) | `refactor/user-service`   |
| `chore/`    | 기타 작업 (빌드 설정, 문서 수정 등)      | `chore/rename-files`      |
| `test/`     | 테스트 코드 추가/수정                    | `test/user-controller`    |
| `docs/`     | 문서 작성 및 수정                        | `docs/README-update`      |

## 대표적인 Commit Message

| Prefix      | 설명                               | 예시 커밋 메시지                  |
| ----------- | ---------------------------------- | --------------------------------- |
| `feat:`     | 새로운 기능 추가                   | `feat: 로그인 버튼 추가`          |
| `fix:`      | 버그 수정                          | `fix: 로그인 시 에러 해결`        |
| `refactor:` | 코드 리팩토링 (기능 변화 없음)     | `refactor: API 요청 구조 개선`    |
| `style:`    | 코드 포맷, 세미콜론 등 스타일 변경 | `style: 들여쓰기 수정`            |
| `docs:`     | 문서 수정                          | `docs: README 사용법 추가`        |
| `test:`     | 테스트 코드 추가/변경              | `test: 로그인 테스트 케이스 추가` |
| `chore:`    | 빌드 설정, 기타 작업               | `chore: .gitignore 업데이트`      |
| `perf:`     | 성능 향상                          | `perf: 이미지 로딩 속도 개선`     |
| `ci:`       | CI 관련 설정 수정                  | `ci: GitHub Actions 빌드 수정`    |
| `build:`    | 빌드 시스템 수정                   | `build: webpack 설정 변경`        |

## Pull Request(PR)로 병합하는 경우

1. 원격 저장소에 새 브랜치 푸시
2. GitHub 웹에서 Pull Request 생성
3. 코드 리뷰 및 확인 후 `Merge` 버튼 클릭
4. 병합 완료 후 브랜치 삭제 가능
