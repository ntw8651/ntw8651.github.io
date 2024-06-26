---
title: 대학 파고다 문제풀이 결과 다시보기
date: 2024-04-06 23:00:00 +09:00
categories: [도구]
tags:
  [
    팁,
    html,
    js
  ]
---

## 파고다를 진행하다보면...

시간이 지난 문제 결과와 답지를 볼 수 없게 된다! 즉, 잠깐 한 눈 팔면 오답노트 쓸 기회조차 잃게 되는 것이다. 나는 기록은 보지 못하지만, 다만 문제와 해설지는 보는 방법을 알려줄 것이다.
다시 한 번 말하지만, 풀었던 과정은 보지 못한다.

<img crossorigin="anonymous" alt="" src="https://drive.lienuc.com/uc?id=16I6zDiJHHm42Z_Lw4Qh6Oh01zo1Mnew7" />
이 모습처럼 최근 문제의 경우 다시 풀기, 해설과 풀이 기록 확인까지 되지만 위의 것은 안 된다. 

그래서 나는 해결 방법을 찾기로 했고, 금방 찾을 수 있었다. 우리의 영원한 친구, 개발자 도구를 불러오자. 엣지든 크롬이든 F12를 누르면 된다.

콘솔에 입력할 코드들은 다음과 같다.
```js
//시작하는 코드, 이미 했던 회차는 자동으로 복습모드가 된다.
javascript:startToeicTest('QUEST','대학교코드','L001','회차','유저 아이디')
//예를 들면 javascript:startToeicTest('QUEST','CBN000','L001','3','U11111111')
//L001는 시퀸스라는데, 저걸로 고정해도 딱히 문제 없는 듯 하다.

//결과를 보는 코드, 
javascript:QuestResult('결과 아이디')
//예를 들면 javascript:QuestResult('1716043')

```
<br>

대학교 코드, 유저 아이디는 아무 회차나 복습하기를 들어가면 url에서 볼 수 있다.
<img crossorigin="anonymous" alt="" src="https://drive.lienuc.com/uc?id=1aCFFngxPNGyL9DHH13WI00Dp34_oVmvm" />

여기에서 왼쪽 빨간 박스 값이 대학 코드, 오른쪽 빨간 박스 값이 유저 아이디다.

그리고 이 복습하기를 풀든, 그냥 쭉 넘기든 해서 결과를 보면
<img crossorigin="anonymous" alt="" src="https://drive.lienuc.com/uc?id=1kJ5Zigk3emqsE8D0yRgetOwRRpTVlyyz" />
이렇게 나올텐데, 여기서 빨간 박스에 history_code가 결과 아이디이다. 다만 이렇게 해서 나온 아이디는 과거의 당신이 푼 아이디와는 달라, 답과 해설만 볼 수 있다.

여기서 나온 코드, 아이디들을 위 명령어에 갖다 박고, 콘솔창에 입력하자. 콘솔창은 F12를 눌러서 나온 개발자 도구의 Console을 누르면 뜬다. 
<br><br><br>

## 사담

여기부턴 사담이다. 저 결과 아이디는 아마 지금껏 생긴 모든 결과지들을 순서대로 저장했다. 말하자면, 내가 테스트 하나를 마치고 곧바로 또 하나를 마치면, 결과 아이디는 +1된 값이란 것이다. 실제로 그랬다. 

음... 문제는 나만이 아닌 것 같다. 오늘 했던 테스트에서 1을 뺀 값의 경우는 잘못된 접근이었다. 아마도 내 아이디와 해당 결과지 제출자 아이디를 비교했을 것이다. 그렇다면 내가 과거 내가 제출한 결과지를 보기 위해선, 결과 아이디를 적어두거나, 1부터 입력해보는 방법이 있단 것이다.

근데... 현재값이 대략 170만 정도 된다. 드는 생각이 몇가지 있다.

- 주기적으로 결과지를 초기화한다. 그렇다면 내 과거 결과지는 얻을 수 없다.

- 초기화 하지 않다 한들, 1부터 모두 요청을 보낸다면 사이트에서 차단을 당하건, 디도스 공격으로 간주해 고소를 당하든 할 것이다.

음... 그런 의미에서, 한 번 날짜에 따라 결과 아이디들이 어떻게 변하는지 언제 한 번 확인해야겠다. 파이썬으로 request 보내기는 먼 훗날 언젠가의 내가 하기로...


## 마치며
상담센터의 Q&A를 보면, 뭐 어디선가 결과를 볼 수 있다고는 써있다. 다만 나는 어디있다는 건지 알 수가 없어서 직접 다시보기로 했다.

이 행동은 사실 뻘짓이었다. 파고다 책을 보면 되는 것이었기 때문에... 다만 다른 대학교에선 문제가 책에 나와있지 않을 수도 있을테니, 그들에게 도움이 되었으면 한다!

잠깐... '교재' 테스트면 다 있는 거 아냐? 아... 뻘짓했구나...

다만 뻘... 그래, 갯벌에는 수많은 생명들이 살고 있잖는가. 아주 낭만있다.
