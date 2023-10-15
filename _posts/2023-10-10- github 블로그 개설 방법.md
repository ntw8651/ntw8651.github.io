---
title: Github Blog 개설, 마주친 오류(/dist~~ does not exist)
date: 2023-10-10 5:00:00 +09:00
categories: []
tags:
  [

  ]
---

설치 방법에 대한 글은 이미 엄~청 많아서 넘어가고, 
난 내가 마주친 버그를 남겨보도록 함!

윈도우 환경, Jekyll, Chirpy 테마 기준


# 내가한 설치 과정 
<details>
<summary>접기/펼치기</summary>



- 루비 다운은 필수. (https://rubyinstaller.org/downloads/) "무조건 WITH DEVKIT", x86 권장(모르겠으면 Ruby+Devkit 3.1.4-1(x86) 다운)   다운 할 때, 옵션은 모두 그대로 진행.

- Git Bash 설치. ([https://git-scm.com/](https://git-scm.com/)),  오른쪽에 Download for Window 해서 다운받고 이것도 그냥 싹다 그대로 진행.

- 원하는 테마 다운. 대충 http://jekyllthemes.org/ 이런 곳에서. 보닌은 Chirpy로 진행함.
</details>


# 오류들

## internal script reference /assets/js/dist/page.min.js does not exist 오류

저어어어기 대략 /assets/js/dist/* 이 얘들이 다 얘랑 동일
 
이거 오류를 보고선

> "얼레 난 이런 폴더 없는데? 클났다zz"

했지만, 아래 방법대로 하니까 괜찮아짐. 괜찮아진 이유는... 찾는 중

node.js 모듈이 설치 안 되었기 때문임.

그 폴더 내에서 cmd 열고
```shell
npm install && npm run build
```
입력. 끝!.. 만약 이게 안된다면?

### npm install 시에 "NODE_ENV" is not...하면서 안 돼요



(둘다 해당 리포지드(폴더) 내에서) cmd에
```shell
npm install -g win-node-env
```
이후에
```shell
npm install && npm run build
```
> 출처
https://stackoverflow.com/questions/11928013/node-env-is-not-recognized-as-an-internal-or-external-command-operable-comman 

