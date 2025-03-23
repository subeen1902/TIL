## Git 터미널 명령어

| 명령어                     | 설명                                | 사용 예시                                     | 비고/팁                             |
| -------------------------- | ----------------------------------- | --------------------------------------------- | ----------------------------------- |
| `git init`                 | 현재 디렉토리를 Git 저장소로 초기화 | `git init`                                    | `.git` 폴더가 생성됨                |
| `git clone [URL]`          | 원격 저장소 복제                    | `git clone [GitHub 원격 저장소 주소]`         | 로컬에 전체 복제됨                  |
| `git status`               | 작업 디렉토리 상태 확인             | `git status`                                  | 어떤 파일이 수정되었는지 확인 가능  |
| `git add`                  | 변경 파일을 스테이지에 올림         | `git add .`, `git add file.txt`               | 커밋 준비 단계                      |
| `git commit -m "[메시지]"` | 변경 사항 커밋                      | `git commit -m "Initial commit"`              | 이력에 기록됨                       |
| `git log`                  | 커밋 로그 확인                      | `git log`, `git log --oneline`                | `--graph` 옵션으로 시각화 가능      |
| `git diff`                 | 변경 내용 비교                      | `git diff`, `git diff --staged`               | 커밋 전 확인용                      |
| `git branch`               | 브랜치 목록 확인 또는 생성          | `git branch`, `git branch feature`            | `-d` 옵션으로 삭제 가능             |
| `git checkout [브랜치명]`  | 브랜치 전환                         | `git checkout develop`                        | `-b` 옵션으로 생성+전환 가능        |
| `git switch [브랜치명]`    | 브랜치 전환 (checkout 대체)         | `git switch main`                             | `--create`로 새 브랜치 생성         |
| `git merge [브랜치명]`     | 다른 브랜치를 현재 브랜치에 병합    | `git merge feature`                           | 충돌 시 수동 해결 필요              |
| `git pull`                 | 원격 변경사항 가져와 병합           | `git pull origin main`                        | fetch + merge                       |
| `git push`                 | 로컬 커밋을 원격에 반영             | `git push origin main`                        | 최초 푸시는 `-u` 옵션 사용          |
| `git remote -v`            | 원격 저장소 목록 확인               | `git remote -v`                               | 주소 확인 및 변경 가능              |
| `git reset`                | 이전 상태로 되돌리기                | `git reset --soft HEAD~1`                     | soft/hard 옵션 주의                 |
| `git revert [커밋ID]`      | 이전 커밋 되돌리기 (새 커밋 생성)   | `git revert a1b2c3`                           | 기존 기록 보존됨                    |
| `git stash`                | 작업 내용을 임시로 저장             | `git stash`, `git stash pop`                  | 임시 저장하고 브랜치 이동할 때 유용 |
| `git tag [태그명]`         | 커밋에 태그 지정                    | `git tag v1.0.0`                              | `-a`로 주석 달린 태그 가능          |
| `git config`               | 사용자 정보 및 설정                 | `git config --global user.name "사용자 이름"` | `--list`로 전체 확인                |
| `git clean`                | 추적되지 않는 파일 제거             | `git clean -fd`                               | 되돌릴 수 없으니 주의               |
