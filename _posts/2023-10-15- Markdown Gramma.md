---
title: 깃허브 블로그용 마크다운 문법들
date: 2023-10-10 5:00:00 +09:00
categories: [Memo]
tags:
  [

  ]
---

## 코드 블럭
<pre><code>
```python
def talk():
    print("talk")
```
</code>
</pre>
```python
def talk():
    print("talk")

```

## 색상

```
<span style='background-color: #ffff00'>나는 노란색이 좋아</span>

<span style='color: #0000FF'>사실 파란색이 더 좋아</span>

<span style='background-color: #ffff00; color: #0000FF'>사실... 둘다 좋아</span>
```
<span style='background-color: #ffff00'>나는 노란색이 좋아</span>

<span style='color: #0000FF'>사실 파란색이 더 좋아</span>

<span style='background-color: #ffff00; color: #0000FF'>사실... 둘다 좋아</span>


## 항목
```md
- 점
1. 숫자

```
- 점으로 나누기
1. 숫자

## 접기
```md
<details>
<summary>펼치기 전</summary>
 펼치면 이런 내용이 나옴
</details>
```
<details>
<summary>펼치기 전</summary>
 펼치면 이런 내용이 나옴
</details>