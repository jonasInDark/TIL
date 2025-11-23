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

</details>

### Day 4
<details>
<summary>observer pattern(2)</summary>

- `subject`의 상태가 변할 때 `observer` 에게 값을 보내는 방식을 `push`, `observer` 가 필요할 때마다 값을 요청하는 방식을 `pull` 이라 한다.
- 보통 `pull` 을 권장한다.  
- `subject` 의 상태가 변할 때 `update` 에 값을 넣는 방식은 향후 수집하는 데이터가 증가할 때마다 observer 의 interface 를 수정해야 하기에  
notify 를 통해 알리고 각 observer 들이 필요한 값을 가져가는 방식이 추후 확장하는데 좋다.

### Done
- [x] `PropertyChangeListner` 는 `observer` 에 해당한다.  
`propertyChange` 가 호출되며 parameter 로 전달되는 `PropertyChangeEvent` 에 변경된 속성의 이름과 oldValue, newValue 가 담겨있다.

</details>

### Day 5
<details>
<summary>decorator pattern(1)</summary>

- `decorator pattern` 객체에 기능을 추가하고 싶을 때 적절한 패턴이다.  
- `OCP(Open-Closed Principle)` 확장에는 열려있고 수정에는 닫혀 있는 원리.  
수정할 부분이 많다는 것은 확장 시에도 수정할 부분이 많다는 것이다.  
확장할 부분을 선택하는 것은 신중하게 해야 한다.  
그렇지 않으면 괜히 쓸데없는 일을 하는 것이며 오히려 복잡한 코드를 만들 수 있다.

</details>

### Day 6
<details>
<summary>decorator(2), factory pattern(1)</summary>

- `decorator pattern` 은 기존 클래스에 수정없이 기능을 추가 혹은 확장할 때 사용한다.  
동적으로 적용할 수 있다.  
기능을 확장하기 위해 감싸는 클래스와 같은 인터페이스를 사용해야 한다.  
    ```java
    Person person = new Person();
    Person decoratedPerson = new DecoratedPerson(person);
    ```
- 단점은 객체가 어떤 decorator 를 거쳤는지 알 수 없다.  
만약 이를 추적한다면 이 패턴을 사용하는 의도에 벗어나게 된다.  
또한 잡다한 클래스를 구현해야 하므로 일련의 과정을 이해하기 어렵다.  
- `factory pattern` `new` 생성자는 자칫 클래스 간 의존성을 높일 수 있다.  
반드시 필요하지만 이를 낮추기 위해 등장하였다.  
- 예를 들어 피자가게에서 피자를 만들고 굽고 자르고 포장하는 과정을 한다고 하자.  
피자가게는 사실 어떤 피자인지 몰라도 된다.  
즉, 치즈피자, 페페로니 피자, ... 등 어떤 피자라도 만들어지면 이후 과정은 동일하다.  
그래서 피자를 만드는 부분을 캡슐화한다면 피자종류와의 의존성을 낮출 수 있다.  
- 피자의 종류가 늘어난다면 피자 만드는 부분을 수정하면 되므로 복잡하지 않다.

</details>

### Day 7
<details>
<summary>factory pattern(2)</summary>

- `Dependency Inversion Principle` 의존성 역전 원칙은 concrete 이 아닌 abstract 에 의존해야 한다 를 의미한다.  
예를 들어 게시판을 만든다고 하자.  
DB 에 접근하여 게시글을 가져와 화면에 보여준다.  
이 과정을 고수준 모듈이라 하면 DB 에 접근하는 것을 저수준 모듈이라 한다.  
이때 DB 가 MySQL 이라면 관련 connector 를 만들어 query 를 보내고 데이터를 가져올 것이다.  
이 과정이 너무 구체적(concrete) 하여 만약 다른 DB 로 바꿔야 한다면 수정을 해야 한다.  
DB 에 연결하여 query 를 보내는 것을 추상화한다면 고수준 모듈은 이 인터페이스를 사용하면 되고 저수준에서는 구현하면 된다.  
즉, 상위 모듈은 어떤 DB 를 사용하는지 상관이 없어져 의존성이 줄어든다.

</details>