---

title: Unity, Shader - 2D 캐릭터를 피격시 하얗게 만드는 방법[작성중]

date: 2023-10-23 18:40:00 +09:00

categories: [Unity Development]

tags:

  [

    Unity,

    한국어

  ]

---



# 페이지 작성중



게임을 하다보면 캐릭터가 맞을 때 하얗게 번쩍한다!



...그래서 만들어 보기로 했다.



보닌은 이 지식을 아래 영상에서 얻었다.



https://www.youtube.com/watch?v=rq6yGh-piIU&t



사실 이 영상 보는게 훨씬 빠를지도...



## 환경

1. Unity 2021.3.10f1 Personal

2. URP 사용

3. 영어 버전(메뉴 영어)

4. 2D, Sprite



버전이 달라도 2019 이상이면 다 되는 것 같다. URP가 없어도 괜찮을 것이다. 아마. 언어는 당근 별 상관 없다.



빨리빨리 구현만 하고 싶을 수 있기에 세부 내용은 접어뒀다. 보고 싶다면 [펼치기] 모양을 누르도록 하자.





## 쉐이더 만들기







<img crossorigin="anonymous" alt="" src="https://drive.lienuc.com/uc?id=1KmExnUBNbUJhRWp62EnvkEZdYvdi7VBB" />



Project 윈도우를 우클릭하고 



Create - Shader Graph - URP - Srpite Lit Shader Graph





<br>

<img crossorigin="anonymous" alt="" src="https://drive.lienuc.com/uc?id=1vv-NalMB1ErWbipo4DL4ozIB3_u261u2" />



<br>



만들어진 파일을 더블클릭해서 열고, 화면 왼쪽에 보이는 + 클릭, Texture 2D 클릭... 이런 식으로 쉐이더 그래프 변수들을 만들 수 있다.



<br>




<img crossorigin="anonymous" alt="" src="https://drive.lienuc.com/uc?id=1mKqYhBQafjfP2in_2Q8Tb3kfYmUEjU3M" />




만들어진 노드의 o모양 점을 허공으로 끌어다 두면 Create Node 창이 뜸



거기서 Sample만 치면 Sample로 시작하는 두가지가 뜨는데 그중에 **<span style='color : #916C3F'>Sample Texture 2D: Texture(T2)</span>** 이거 클릭... 이런 식으로 노드를 추가할 수 있다.

<img crossorigin="anonymous" alt="" src="https://drive.lienuc.com/uc?id=1i2gDKpxEk2BPwuc0g4NdwzW_9kf2v7ws" />





또, 노드끼리 o점을 이어서 연결 가능.



이런 방법을 통해서 요런 모양으로 만들자. __각 노드의 Mode라던가 Type도 잘 살펴보자.__



빠르게 복붙만 할 것이라면 변수 이름도 사진과 같게 해주자. 스크립트에서 변수에 문자열인 "_변수명"으로 접근하게 될것이다.



### 각 변수 및 노드 설명

변수 이름은 우클릭 -> Rename을 통해 바꿀 수 있다.

MainTex : 소스 텍스쳐
FlashColor : 맞았을 때 변하는 색, 주로 흰색 또는 빨간색
FlashLightAmount : 얼마나 하얗게 되는지...인데 이것을 통해 피격 색상을 제어할 것이다.









## 스크립트 만들기



총 5개의 함수(+ Start, 변수선언)로 이루어져 있다. 복사-붙여넣기 하고 싶다면, 이 항목의 맨 밑에 껄 복붙하자



### 초기 변수

```c#

public class DamageFlash : MonoBehaviour

{

    private SpriteRenderer[] spriteRenderers; //자식 오브젝트들이 담길 

    private Material[] materials;



    [SerializeField] //Private같이 제한된 상태에서도 인스펙터에서 수정 가능

    private Color damageFlashColor = Color.white;



    private float damageFlashTime = 0.2f; //하얗게 되는 시간. 이 값의 경우엔 지금은 하드코딩 해뒀다. 나중에는 컨트롤 타워 오브젝트를 만들어두고, 그 오브젝트의 값을 참조하도록 하자.

    private Coroutine damageFlashCorutine; //코루틴을 담을 변수. 사실 없어도 된다.



    //...후략

}

```

초기 변수를 선언해주자. damageFlashColor의 경우엔, 빨간색으로 바뀌게 하고 싶은 개체가 있다면 바꿀 수 있도록 직렬화 해줬다.



### InitDamageFlash()

```c#

private void InitDamageFlash()

    {

        spriteRenderers = GetComponentsInChildren<SpriteRenderer>();

        materials = new Material[spriteRenderers.Length];

        //자식 오브젝트 전부에게 머티리얼 할당

        for(int i= 0; i < spriteRenderers.Length; i++)

        {

            materials[i] = spriteRenderers[i].material;

        }

    }

```









만약 피격 판정을 다른 스크립트에서 호출한다면 private가 아닌 public으로 해주자.







### SetDamageFlashColor() & SetDamageFlashAmount(float amount)

```c#

  private void SetDamageFlashColor()

  {

      for (int i =0; i< materials.Length; i++)

      {

          materials[i].SetColor("_FlashColor", damageFlashColor);

      }

  }



  private void SetDamageFlashAmount(float amount)

  {

      for (int i = 0; i < materials.Length; i++)

      {

          materials[i].SetFloat("_FlashLightAmount", amount);

      }

  }

```

둘이 따로 나뉘어져 있는 이유는 SetDamageFlashAmount의 경우, 밝기가 변해야 하므로 여러번 호출되지만 SetDamageFlashColor는 처음 한 번 색을 지정해주면 그만이기 때문이다.



중요한 것은, 저 ""안에 있는 글자다. 아까 쉐이더 그래프 창으로 돌아가서 변수들을 한 번 누르고, 왼쪽 아래 Graph Inspector를 보면 


<img crossorigin="anonymous" alt="" src="https://drive.lienuc.com/uc?id=1JILe4X1ZUUHFQp0VlfXpAo5c-r1oCi_S" />




이처럼 Reference : _MainTex가 있는 걸 볼 수 있다. 이 레퍼런스라는게 바로 스크립트에서 접근할 때 쓰는 것이다. 따로 지정을 안하면 "_변수명"으로 설정된다



### IEnumerator DamageFlash()



### CallDamageFlash()

```c#

private void CallDamageFlash()

    {

        damageFlashCorutine = StartCoroutine(DamageFlash());//DamageFlash 코루틴을 호출하고, 변수에 집어 넣는다.

    }

```



### Start()

```c#

void Start(){

  InitDamageFlash();

}

```

오브젝트가 생성되었을 때, 미리 자식 오브젝트를 받아두자. 만약, 오브젝트에 자식 오브젝트가 추가되거나, 제거되는 상황에서는 그때마다 InitDamageFlash()를 호출해주자.



### Update()

```c#

void Update()

    {

        if (Input.GetKeyDown(KeyCode.Space))

        {

            CallDamageFlash();

        }

    }

```

임시로 함수를 호출해줄 키 입력 스크립트. 스페이스바를 눌렀을 때, 함수를 호출한다.



### 전체 스크립트

복붙을 원한다면 아래 코드를 복붙하면 된다. 주석은 제거해뒀다.

```c#

using System.Collections;

using System.Collections.Generic;

using UnityEngine;

using UnityEngine.Rendering;



public class DamageFlash : MonoBehaviour

{

    private SpriteRenderer[] spriteRenderers;

    private Material[] materials;



    [SerializeField]

    private Color damageFlashColor = Color.white;



    private float damageFlashTime = 0.2f;

    private Coroutine damageFlashCorutine;



    void Start()

    {

        InitDamageFlash();

    }



    void Update()

    {

        if (Input.GetKeyDown(KeyCode.Space))

        {

            CallDamageFlash();

        }

    }



    private void InitDamageFlash()

    {

        spriteRenderers = GetComponentsInChildren<SpriteRenderer>();

        materials = new Material[spriteRenderers.Length];

        for(int i= 0; i < spriteRenderers.Length; i++)

        {

            materials[i] = spriteRenderers[i].material;

        }

    }



    public void CallDamageFlash()

    {

        damageFlashCorutine = StartCoroutine(DamageFlash());

    }



    private IEnumerator DamageFlash()

    {

        SetDamageFlashColor();



        float currentFlashAmount = 0f;

        float elapsedTime = 0f;



        while(elapsedTime < damageFlashTime)

        {

            elapsedTime += Time.deltaTime;

            currentFlashAmount = Mathf.Lerp(1f, 0f, (elapsedTime / damageFlashTime));

            SetDamageFlashAmount(currentFlashAmount);

            yield return null;

        }

    }



    private void SetDamageFlashColor()

    {

        for (int i =0; i< materials.Length; i++)

        {

            materials[i].SetColor("_FlashColor", damageFlashColor);

        }

    }



    private void SetDamageFlashAmount(float amount)

    {

        for (int i = 0; i < materials.Length; i++)

        {

            materials[i].SetFloat("_FlashLightAmount", amount);

        }

    }

}

```

모두 복사했다면 CallDamageFlash()를 통해 호출할 수 있다. 물론 아직 머티리얼과 오브젝트에 안 붙여줘서 아무 일도 안 일어난다.





## 머티리얼(Material) 만들기

프로젝트 창으로 돌아가서, 아까 만들었던 쉐이더를 우클릭하고 Create -> Material을 통해 머티리얼을 만들어주자. 아니면 기존 머티리얼의 Shader부분(머티리얼을 누르고 인스펙터 상단부분을 보면 있다)을 수정하면 된다.



## 오브젝트에 적용시키기

원하는 오브젝트에 만든 머티리얼과 스크립트를 붙여준다. 2D이므로 오브젝트의 Sprite Renderer에 Material을 바꿔주자. 스크립트를 붙이는 방법은... 아시죠?



## 잡설

자 이렇게 다 끝났다! 야호! 이힝히!



스페이스바를 눌렀을 때 변환되는 점은 확인을 위해서였으므로, Update함수에서 지워주면 된다.



또한 다른 스크립트에서, 예를들어 피격 스크립트에서 호출하기 위해선 CallDamageFlash를 private에서 public으로 바꿔주면 된다.



근데 지금까지 메테리얼이라고 알고 있었는데 이게 머티리얼이네...



그럼 다녀오겠습니다!!!!!!!!!!!!!!!!!!!!!!!!!!!!

