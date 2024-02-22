---
title: C#, Unity - 유니티 다음 프레임에 실행
date: 2023-10-13 8:40:00 +09:00
categories: [Unity Development]
tags:
  [
    Unity,
    C#,
    한국어,
  ]
---

## 서론

가끔 특정 동작을 한 후 한프레임을 건너뛰고 실행되었으면 하는 것들이 있다.

예를 들자면 다른 스크립트의 함수가 먼저 실행되어야 한다거나...

난 이때 코루틴을 쓴다.

## 사용

```Csharp
void Update(){
    StartCoroutine(FunctionName());
}


IEnumerator FunctionName(){
    yield return null;
    //넣을 함수
}
```
이걸 사용하면 된다.

## 예문
나의 경우는 대화창이 닫혔다가 바로 열리는 문제 때문에 이런 방식을 썼다.

근데 하고 보니까... 뭔가 굳이... 이럴 필요가 없던 것 같기도
```Csharp
    private void EndDialog()
    {
        nowDialog = null;
        nowDialogId = 0;
        dialogWindow.SetActive(false);
        dialogTextbox.GetComponent<TextMeshProUGUI>().text = "";
        StartCoroutine(OnDialogDisableCorutine());
    }

    IEnumerator OnDialogDisableCorutine()
    {
        yield return null; //1프레임 스킵
        player.GetComponent<PlayerState>().isOnDialog = false;
    }
```