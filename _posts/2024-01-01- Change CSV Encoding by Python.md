---
title: Python, 파이썬을 통한 CSV 인코딩 변경
date: 2024-01-01 15:31:00 +09:00
categories: [유용한 도구]
tags:
  [
    Python,
    게임제작,
    자동화,
    한국어
  ]
---
# 서론
게임 대본을 CSV 파일로 저장하는데, 내가 갖고 있는 한셀은 유니코드를 ANSI로만 저장해준다.

물론 하나하나 다른 이름으로 저장을 통해 바꿀 순 있지만, 일단 명목상 개발 지망이니 자동화 시키도록 하자.

# 본론
```python
import pandas as pd
filePath = "파일 경로"

df = pd.read_csv(filePath, encoding='ANSI')
df.to_csv(filePath, encoding='utf-8', index=False)
print("done")
```

ANSI가 utf-8이면 좋겠어

하는 상황이라면 위의 것을 실행시키자.



# '실행이 안 된다.'
- Cmd에서 pip install pandas
- 파일 경로를 잘 쓰기(../ 상위 디렉터리)

.
https://stackoverflow.com/a/61867692


# 더 나아가기
자동화... 라고는 했지만, 과정을 짧게한 것에 불과하다. 프로그램(한셀)을 종료할 때 마다 자동으로 실행되도록 하자.

psutil이라는 모듈이 필요하니

```pip install psutil```

 해주자.

```python
import pandas as pd
import psutil
import time

'''
NOTICE : NEED psutil module
please try 'pip install psutil' in CMD.
'''

#CSV 파일 경로 넣기.
#요런 식으로 'C:/filePath/fileName.csv'
filePath = "../Resources/DialogsStorage.csv"

#프로세스 이름 입력(Excel, HanShow... Etc)
# .exe 잊지 말기
processName = "HCell.exe"

def ANSIToUTF():
    df = pd.read_csv(filePath, encoding='ANSI')
    df.to_csv(filePath, encoding='utf-8', index=False)
    print("done")

def IsProcessRunning(_processName):
    for process in psutil.process_iter(['pid','name']):
        if process.info['name'] == _processName:
            return True
    return False

processOn = False

while True:
    if(processOn):
        if not IsProcessRunning(processName):
            #ON -> OFF
            time.sleep(3)
            try:
                ANSIToUTF()
            except:
                #에러, 대부분 파일이 이미 UTF-8인 경우
                print("maybe, already UTF-8")
            processOn = False
            print("turnOff")
    else:
        if IsProcessRunning(processName):
            #OFF -> ON
            processOn = True
            print("turnOn")
    print(processOn)
    time.sleep(1)
```

이제 이 코드를 실행시켜두면 알아서 프로그램을 종료할 때마다 인코딩을 바꿔준다.

더더 나아가 완전한 자동화를 하려면 우선 이 코드를 시작프로그램에 등록해두고, 자동으로 세이브 할 때마다 한셀을 끄고, 인코딩 바꾸고, 다시켜준다면... 완전한 자동화가 가능할 것 같다.