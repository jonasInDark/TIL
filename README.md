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

### Day 8
<details>
<summary>factory pattern(3)</summary>

- `Dependency Inversion Principle` 에 관한 조언
  1. 변수 타입을 `concrete` 가 아닌 `abstract` 를 사용하라.
  ```java
  MySQLConnector connector = new MySQLConnector(); // not good
  AbstractConnector connector = new MySQLConnector(); // recommended
  ```
  2. `concrete` 를 상속하여 확장하지 말자.
  ```java
   class SpecialFileLogger extends FileLogger {} // FileLogger 의 구체적인 방식을 사용하게 되어 여전히 의존성이 높다.
   class SpecialFileLogger extends AbstractLogger {} // AbstractLogger 의 추상 메소드를 구현하여 의존성을 줄일 수 있다.
  ```
  3. base class 에 구현된 메소드를 오버라이딩하지 말자.  
  이미 구현된 메소드를 오버라이딩하는 것은 base class 가 제대로 추상화 되지 않았다는 것이다.  
  모든 하위 클래스에서 사용할 수 있는 것만 정의하자.
- `factory method pattern`  
클라이언트는 객체를 생성할 때 concrete 가 아닌 abstract 를 사용하여 유연성을 높일 수 있다.  
이 객체를 생성하는 팩토리 클래스의 메소드를 하위 클래스에서 구현하면 클라이언트를 수정하지 않아도 된다.  
즉, 하위 클래스에 따라 타입이 결정되므로 쉽게 확장할 수 있다.
- `abstract factory pattern`  
서로 연관있는 객체들의 `집합(family)`을 추상화한다.  
```java
interface IngredientFactory {
    void cheese();
    void dough();
    // ...
}
class NYCIngredientFactory implements IngredientFactory {
    void cheese() {} // NYC style cheese 구현
    void dough() {}
    // ...
}
class ChicagoIngredientFactory implements IngredientFactory {
    void cheese() {} // Chicago style cheese 구현
    void dough() {}
    // ...
}
```

</details>

### Day 9
<details>
<summary>singleton pattern(1)</summary>

- `singleton pattern` 클래스 인스턴스 하나만 생성하고 전역 접근을 제공한다.  
원한다면 lazy evaluation 을 구현해 객체 생성에 많은 자원이 필요할 때 유용하다.  
일반적으로 이 패턴을 구현한다면 멀티스레딩을 고려해야 한다.  
만약 싱글톤 객체가 많다면 전반적인 디자인을 다시 고려해야 한다.  
싱글톤을 상속하여 확장은 비추천...

</details>

### Day 10
<details>
<summary>singleton pattern(2)</summary>

### Done
- [x] singleton 문제점 살펴보기
    - [x] `classloader` 는 특정 클래스를 단 한번 로드하는 것을 보장한다.  
    만약 2개 이상을 사용한다면 각 classloader 가 로딩한 인스턴스는 별개의 것이 되므로 유일성 원칙이 깨진다.  
    서로 다른 classloader 는 서로 다른 메모리에 할당되기에 생성자에 방어코드가 무의미하다.  
    이를 막기 위해 `enum` 을 사용하면 해결할 수 있다.
    - [x] `reflection` meta-programming 을 위해 존재함.  
    runtime 시 자기자신을 조사(introspection, 자기성찰)하고 조작(manipulation)할 수 있다.  
    예를 들어 compile 시 없는 클래스를 사용자의 입력에 따라 동적 로딩을 할 수 있다.  
    또한 `@Autowired` 같이 필요한 객체를 동적으로 주입할 수 있다(dependency injection).  
    reflection 은 생성자가 private 이라도 객체를 생성할 수 있어 singleton 객체가 둘 이상 생성될 수 있다.  
    하지만 singleton 을 `enum` 으로 정의하면 reflection 에도 자유롭다.  
    - [x] `(de)serialization` 객체를 어떤 형식으로 저장한 다음 byte 로 바꿔 네트워크 전송(serialization), 전송 받은 byte stream 을 객체로 변환(deserialization).  
    역직렬화 과정에서 객체가 생성될 수 있다.  
    singleton class 에 `Serializable.readResolve` 가 구현되어 있다면 역직렬화 시 새롭게 생성된 객체 대신 이 메소드가 반환하는 객체를 사용한다.  
    또한 `enum` 을 사용하면 (역)직렬화 문제를 해결할 수 있다.  

</details>

### Day 11
<details>
<summary>command pattern(1)</summary>

- `command pattern` 요청을 수행하는 객체와 요청하는 객체를 분리한다.  
예를 들면 TV 를 켜다 라는 동작을 하는 객체가 있고 TV 를 켜달라는 요청을 하는 객체가 있을 것이다.  
이때 실질적인 동작을 하는 객체를 `receiver` 라 하고 요청하는 객체를 `invoker` 라 한다.  
invoker 가 receiver 에게 요청하는 것을 객체로 캡슐화하는데 이를 `command` 라 한다.  
따라서 invoker 는 command 를 통해 요청을 하게 되어 receiver 에게 의존하지 않게 된다.  
`command.execute` 메소드는 receiver 의 실질적인 행동을 실행시킨다.  
invoker 는 command 내 어떤 receiver 가 있는지 모른채 execute 를 실행하면 된다.  
가능하다면 command 내 receiver 를 교체하여 재활용해도 된다.  

</details>

### Day 12
<details>
<summary>command(2), adaptor pattern(1)</summary>

- `command pattern`
  - command 와 receiver 를 나누지 않고 command.execute 에 실질적인 로직을 구현하면 안되는 걸까  
    invoker 가 receiver 에게 직접 요청을 할 수 있다.  
    하지만 command 가 중간에 있어 invoker -> command -> receiver 로 요청을 하는 이유는 `요청(request)` 를 `캡슐화` 하기 위함이다.  
    이것이 command pattern 의 핵심이고 결합도 분리(decoupling) 이다.  
    만약 command.execute 에 실질적인 로직을 구현한다면 단일 책임 원칙(Single Responsibility Principle) 을 위반한다.  
    command 는 요청의 캡슐화와 실제 로직 수행이라는 두가지 책임이 가지게 된다.  
    만약 실질 로직 혹은 요청에 변화가 생기면 command 를 수정해야 한다.  
    또한 동일 로직을 다른 command 에 사용하고 싶으면 이를 복사하여 사용해야 하는데 receiver 를 사용한다면 다른 command 객체에 사용하기 쉽다.  
    smart command 객체도 있는데 확장과 수정이 없다면 command 객체 내 실질 로직을 구현할 수 있다.  
    간단한 로직이고 이를 재사용할 일이 없을 때 예외적으로 사용한다.  
    이렇게 하면 클래스 수가 감소되지만 원칙적으론 실질 로직을 receiver 에 구현한다.  
  - `party mode` 여러 개체를 그룹화하여 동시에 처리
    PartyCommand 는 여러 command 를 순차로 접근하여 execute 를 호출한다.  
    예를 들어 collection 에 command 객체를 저장하고 loop 를 통해 순차적으로 실행한다.
- `adaptor pattern` target interface 와 주어진 interface 가 서로 다를 때 이를 이어주는 역할을 한다.  
  이때 주어진 interface 를 `adaptee interface` 라 한다.  
  target interface 를 구현하고 adaptee class 를 참조하여 원하는 기능을 구현한다.  
  이것을 `adaptor` 라고 부른다.  
  target 이나 adaptee 를 상속하지 않고 composite 을 하기에 유연성이 높다.  
  target 과 adaptee 를 다중상속하여 adaptor 를 만드는 경우 `class adaptor` 라 부른다.  
  composite 을 한 경우 `object adaptor` 라 부른다.  

### Todo
- [ ] `classloader` 에 관하여
    - jvm 핵심 요소 중 하나이며 `*.class` 를 읽어 메모리에 올린다.
    - 정확히는 runtime 시 필요한 클래스를 지연 로딩한다.
    - jvm 은 (class, classloader) 의 인스턴스 쌍으로 식별한다.

</details>

### Day 13
<details>
<summary>facade pattern(1)</summary>

- `facade(외형, 겉모습) pattern` 수 많은 인터페이스로 인해 복잡한 상태일 때 통합 인터페이스로 묶는다.  
예를 들어 영화를 본다 라고 하자.  
스크린을 내린다 -> 프로젝터를 킨다 -> 프로젝터 입력을 스트리밍 플레이어로 설정한다 -> ... -> 영화를 재생한다.  
클라이언트에서 영화를 본다 라는 작업을 한다면 많은 과정이 필요하고 복잡하다.  
이 모든 것을 통합하여 간단한 인터페이스를 만드는 것이 `facade pattern` 이다.  
facade interface 는 서브 시스템을 캡슐화하지 않는다.  
그래서 클라이언트가 서브 시스템의 클래스가 필요하면 사용할 수 있다.  
facade interface 는 하나의 서브 시스템 당 여러 개를 만들 수 있다.  
- `decorator`, `adaptor`, `facade` 요약
  - `decorator` interface 를 바꾸지 않고 기능 추가
  - `adaptor` target interface 에 맞게 변경
  - `facade` 단순한 interface 제공
- `principle of least knowledge(law of Demeter)` 객체는 결합도를 줄이기 위해 특정한 객체에게만 상호작용 해야 한다.
  - 자기 자신(`this`)
  - 메소드에 전달된 parameter
  - field variable
  - 메소드 안에 생성된 객체
  - 위 4가지 이외 객체와 상호작용 하는 것은 결합도를 높인다.  
  이를 위반하는 대표적인 예시로 체인 호출이 있다.  
  ```java
  // subsystem 과 subcomponent 의 구조를 알아야 한다.
  // 만약 이 중에 하나라도 변경이 일어난다면 이 메소드도 변경하는 일이 생길수도 있다.
  // 즉, 간접적인 의존성이 생겨 유연하지 않다.
  manager.getSubSystem().getSubComponent().getValue();
  ```

</details>