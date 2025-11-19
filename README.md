# TIL
today-i-learned

### Day 1
<details>
<summary>design pattern</summary>

- 상위 클래스를 만들고 상속하여 상황에 맞게 overriding 을 한다.  
만약 새로운 기능을 추가해야 할 때 어떤 클래스는 추가된 기능을 사용하지 않을 수 있다.  
즉, 상속을 잘 활용했다고 할 수 있지만 유지보수는 점점 더 까다로워 질 수 있다.  
그렇다고 새로운 기능이 추가될 때 마다 interface 를 추가해 구현하는 것은 많은 부담이 된다.  
따라서 상위 클래스에서 달라지는 부분과 그렇지 않은 부분을 분리해보자.  
이를 캡슐화라고 하며 유연성을 향상시킨다.  
- 코드를 수정하는 여러 이유 중...
  - 새로운 기능을 추가하거나 기존 기능을 확장할 때
  - DB 종류를 바꾸고 data format 이 바뀔 때

</details>

### Day 2
<details>
<summary>strategy pattern</summary>

- `A는 B이다` 도 좋지만, `A 안에 B가 있다` 도 고려해보자.
- 이런 식으로 두 클래스를 합치는 것을 `composition` 이라 한다.
- `strategy pattern` 이란?
  - 정의를 살펴보니 아직 이해가 안되서 일단 넘어가자...
- 객체지향의 4대 요소
  - 추상화: 복잡한 요소를 숨기고 핵심적인 기능을 공개하여 사용자는 어떤 원리로 동작함을 몰라도 사용할 수 있다.
  - 캡슐화: 데이터의 무결성 유지를 위해 직접적인 접근을 거부하고 공개된 메서드로 접근하도록 한다.
  - 상속: 이미 구현된 상위 클래스의 필드와 메서드를 물려받아 재활용할 수 있다.
  - 다형성: 상속에 의해 나타나는 요소이다.  
  상속을 한 클래스의 객체는 상위 클래스의 타입으로 동작할 수 있다.  
  상위 클래스의 메소드를 재정의할 수 있다.  
  같은 클래스 내 동일한 이름의 메소드는 매개변수를 달리하여 정의할 수 있다.

</details>

### Day 3
<details>
<summary>observer pattern(1)</summary>

- `Observer Pattern` `subject` 의 상태를 지속적으로 `observer` 가 필요로 할 때 사용하는 디자인 패턴이며, one-to-many 관계이다.  
여기서 `observer` 는 여러 개 일 수 있다.
- 서로 의존하는 형태이므로 강한 결합(`coupling`) 구조를 지닌다.  
이는 유연성을 떨어뜨리므로 약한 결합(`loose coupling`)을 위해 `interface` 를 정의하여 추상화를 해야 한다.  

### Todo
- [ ] `PropertyChangeListner` 알아보기

</details>