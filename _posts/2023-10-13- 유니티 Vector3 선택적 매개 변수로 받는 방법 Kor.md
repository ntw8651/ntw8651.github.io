---
title: C#, Unity - Vector를 선택적 매개 변수로 받는 방법
date: 2023-10-13 8:40:00 +09:00
categories: [Unity Development]
tags:
  [
    Unity,
    C#,
    한국어,
  ]
---

사실 Vector 말고도 다 되는 듯... 예를 들어 RaycastHit같은 것도 되는 듯하다.

``` c#
public void Function(Vector3? position = null)
```

또는

``` c#
public void Function(Vector3 position = default(Vector3))
```

하면 선택적 인자로 받을 수 있다.
다만, 위의 Vector3?를 사용하는 경우 값을 확정시켜줘야 한다.


벡터 말고도 다른 것들에도 다 적용 가능한 듯 하다.

``` c#
Debug.Log(default(Vector3)) 
```
(0.00, 0.00, 0.00) 이 출력.

인수로 (0,0,0)이 주어지는 경우만 없다면, 

```c#
if(position != default(Vector3)){
    //코드
}
```
하면 값이 입력 안되었을 경우 예외처리 해줄 수 있을 듯...