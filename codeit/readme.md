## 코드잇(codeit) backend-10
- 기간: 2025-12-30 ~
- 매일 강의에서 배운 것을 기록

### TIL in codeit
<details>
<summary>2025-12-30 ~ 2026-01-19</summary>

### todo
- ...

</details>

<details>
<summary>2026-01-20</summary>

- 과제2-2차
  - service 는 business logic, 즉 application 의 핵심을 담당한다.  
    - 예) 요청에 의해 user id 가 있는지 확인 후 있으면 user 객체를 가져오고 없으면 exception 발생.
    - repository 에 요청을 하고 발생한 exception 을 service 에서 처리한다.
  - repository 는 데이터 읽기, 쓰기, 삭제 를 담당한다.  
    - user id 에 해당하는 user 객체를 가져온다.
    - id 가 있는지 확인하지 않는다.

</details>

<details>
<summary>2026-01-21</summary>

- spring 은 layered architecture 이다.  
계층형 구조이며 각 계층 마다 역할이 있고 인접한 계층 간 소통한다.  
controller -> service -> repository 이며 controller 는 service 를 의존하고 service 는 repository 를 의존한다.  
방향이 반대이면 문제가 생기며 계층형 구조를 사용하는 이점이 사라진다.  
- TDD(Test Driven-Dev) 테스트 코드 주도로 개발  
먼저 요구사항을 바탕으로 테스트 코드를 만든다.  
이를 통과할 수 있는 코드를 만든다.  
다시 테스트 코드를 만드며 이를 통과할 수 있는 코드를 만든다...(반복)  
작은 단위로 쪼개서 개발하는 이점이 있다.  
만약 팀원들이 이에 대한 이해가 부족하면 큰 범위의 기능을 계획하고 이에 대한 테스트 코드가 필요하다.  
이를 만드는데 시간이 걸리고 기능 구현도 오래 걸린다.  
TDD 를 하는 이유가 없어진다...
- TDD 의 장점
  - 요구 사항에 대한 명확한 이해
  - 안정적인 리팩토링 가능
  - 회귀 오류 최소화
  - 높은 테스트 커버리지 확보
    - Test Coverage: 테스트 케이스가 얼마나 많은 부분을 검증하고 있는가에 대한 지표
- spring 은 test context framework 을 지원한다.  
원하는 기능을 테스트 하고 싶은데 관련 데이터를 빠르게 불러와 테스트할 수 있다.  
spring 은 테스트를 염두하여 관련 기능을 제공하기 때문에 TDD 를 하기 좋다.
- IoC(Inversion of Control) program 실행 흐름은 개발자에 의해 결정된다.  
어떤 instance 를 생성할 것인지 무엇이 무엇을 필요한지 등은 개발자가 결정한다.  
IoC 는 개발자의 제어 권한을 program 에게 넘긴다.  
즉, program 은 규칙에 의해 A 에게 A1 혹은 A2 를 넘겨준다.  
이런 paradigm 에 의해 유연성을 얻을 수 있다.
- IoC container 가 객체를 주입 해준다.  
spring 에는 ApplicationContext 이다.  
spring container 라고 부르는 경우도 있다.  
DI 만 하는게 아니라 spring bean 의 life circle(생성, 설정, 관리, 소멸) 을 담당도 한다.
- spring bean: spring container 가 관리하는 객체를 말한다.  
singleton 으로 관리된다.  
설정에 따라 lazy 혹은 prototype(원할 때마다 새로 생성) 생성 시점이 달라진다.  
bean 으로 등록하면 singleton 으로 구현하지 말아야 한다.  
```java
@Service
public class UserService {
    // ❌ 매우 위험! 모든 사용자가 이 변수를 공유함
    private String currentUserName; 

    public void login(String name) {
        this.currentUserName = name; // A 사용자의 이름이 저장됨
        // 잠시 로직 처리 중... (B 사용자가 그 사이에 login 호출 시 name이 바뀜)
        System.out.println(this.currentUserName + "님 환영합니다."); 
        // 결과: "A님 환영합니다"가 나와야 하는데 "B님 환영합니다"가 나올 수 있음
    }
}

@Service
public class UserService {
    // ✅ 안전: 공유되는 멤버 변수가 없음
    public void login(String name) {
        // name은 인자로 들어와 이 메서드 안에서만 살아있는 "지역 변수"임
        String welcomeMessage = name + "님 환영합니다.";
        System.out.println(welcomeMessage);
        // 결과: 100명이 동시에 접속해도 각자의 name 값이 유지됨
    }
}
```
- config meta: 어떤 객체를 생성해야 하는지, 어떤 역할을 하는지에 대한 정보이다.  
개발자가 알려줘야 한다.  
- AOP(Aspect Oriented Programming) 핵심 비즈니스 로직과 별개로 공통 기능을 분리하여 하나의 모듈로 관리하는 패러다임이다.

</details>