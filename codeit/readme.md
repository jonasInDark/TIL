## 코드잇(codeit) backend-10
- 기간: 2025-12-30 ~
- 매일 강의에서 배운 것을 기록

### TIL in codeit
<details>
<summary>2026-01-05</summary>

- `merge` branch 간 합칠 때 사용한다.  
  합칠 때 commit 이 남는다.  
  즉, 어떤 branch 와 합쳤는지 알 수 있다.  
  대신 commit log 를 보면 지저분할 수 있다.  
  conflict 발생 시 합칠 때 한 번에 모든 충돌을 수정한다.
- `rebase` branch 간 합칠 때 사용한다.  
  main 과 feature branch 를 합칠 때 main 의 최신 commit 뒤로 feature 의 commit 들을 붙인다.  
  그래서 어떤 branch 와 합쳤는지 알 수 없다.  
  commit log 를 보면 마치 main 에서 계속 commit 을 생성했던 것 처럼 보인다(깔끔해 보임).
- `fetch` remote repository 의 commit 들을 가져온다.  
  예를 들면 `git fetch origin feature` 를 하자.  
  remote repo 에 기록된 feature branch 의 commit 들을 local 에 가져와 `origin/feature` 라는 특수한 branch 를 만든다.  
  이 branch 는 오직 읽기 전용이다.
- `pull` `fetch` 를 한 후 local 과 remote 에서 내려받은 branch 를 merge 한다.  
  이 명령어는 local 보다 remote 가 더 최신일 때 사용하면 좋다.

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

<details>
<summary>2026-01-22</summary>

- AOP 는 OOP 의 한계로 인해 등장 하였다.
- `@Component` class 를 bean 으로 등록.  
복잡한 과정 혹은 조건이 없다면 일반적으로 사용.
- `@Bean` `@Configuration` 붙은 class 안 method 에 붙임.  
이 method 가 반환하는 객체를 bean 으로 등록.  
같은 class 지만 조건에 따라 다른 instance 를 생성해야 할 때 사용.
- `spring aop` 는 runtime proxy 를 사용한다.  
target 객체를 생성하고 이를 감싸는 proxy 객체를 생성한다.  
method 에 적용된다.  
생성자에도 할 수 있지만 조금 복잡하다...  
*class 내부에서 method 호출(self-invocation) 시 설정한 aop 적용이 되지 않는다.*  
- `Authentication(인증)` 증명, 모든 보안의 시작은 인증부터.
- `Authorization(인가)` 허가
- `spring cloud` MSA 지원을 위한.
  - `config server`, `Eureka`, `API gateway`, `distributed tracking`, `circuit breaker`
- `spring boot` 은 `spring` 을 빠르게 구성 및 시작할 수 있게 해준다.  
spring 은 내장 서버가 없지만 spring boot 은 `tomcat` 을 가지고 있다.  
- spring boot 이 제공하는 핵심 가치
  - `auto config` spring 에서는 개발자가 필요한 설정을 일일이 다 해야 했다.  
  - `independable application` spring 에서는 was 설치, app 개발(`.war` 배포), was 실행 을 해야 한다.  
  spring boot 는 `.jar` 를 만들어 내부에 servlet container 를 포함하여 배포와 실행을 통합했다.
  - `embedded server` tomcat, jetty 를 사용할 수 있다, 대부분 전자를 사용한다.
- `intellij` 내 project setting 관련
  - `group id` 프로젝트를 만드는 조직이나 단체, 도메인을 거꾸로 쓰는 것이 관례이다. 예) com.google
  - `artifact` 프로젝트 이름, 단어 사이에 `-` 으로 연결, 소문자 사용
  - `module` 프로젝트 내 작은 프로젝트, 거대한 프로젝트를 기능별로 분리.
  - `library` 외부의 어떤 기능을 사용하기 위해 참조하는 코드들.
  - `facets` 해당 module 이 어떤 framework 을 사용하는지 intellij 에게 알려준다.  
  이를 통해 코드 완성 지원, 설정 파일 검사 등을 지원해줄 수 있다.
- `jar` vs `war`
  - jvm 이 있으면 실행 가능 / servlet container(예: tomcat) 위에서 동작.
  - 독립 실행 / jsp, servlet 기반 앱.
  - 내장 서버 포함 / 외부 was 필요.
- `spring-boot-starter` spring boot 기본 구성.
  - `spring-core`, `spring-context`, `spring-boot-autocofigure`, `SLF4J`, `Logback` 포함.
- `spring-boot-starter-test` 테스트 툴 지원, 단위 혹은 기능 테스트 등.
  - `JUnit`, `Mockito`, `spring-test`, `AssertJ` 포함.
- bean 으로 등록하기 위해 component scan 을 하는데 동일한 위치 혹은 하위 패키지에 있어야 된다.  
multi module 을 사용하는 경우 범위를 지정할 수 있고 여러 개를 설정할 수 있다.
- 화면을 보여주기 위해 template(thymeleaf, ...), jsp(java server page) 를 사용한다.  
template 을 사용하면 고유의 문법이 있다.  
jsp 에는 html, css, js, java 를 사용할 수 있다.
- config 중에 비밀번호 같은 중요한 정보는 서버의 환경변수에 입력하고 외부에서 주입한다.  
만일 노출된 경우 비밀번호 혹은 ip 주소를 바꿔야 한다.
- `gradle` software build automation tool.  
우리가 만든 코드를 실행 가능한 형태(jar, war) 로 만드는 과정을 자동으로 해준다, 테스트도 진행해 준다.  
`.java` -> `.class` 로 컴파일, 외부 library 의 .class 가져오고, 테스트 진행하고, 실행 가능한 app 으로 만든다.
- `build.gradle`, `settings.gradle`, `gradlew`, `gradlew.bat`, `/gradle` 은 반드시 있어야 한다.
  - `gradlew(.bat)` gradle wrapper 실행하는 프로그램. gradle version 을 통일 시키기 위함.
  - `/gradle` gradle version 과 gradle 프로그램이 있다.
- `plugins` gradle 에 없는 기능을 추가
```groovy
plugins {
  // java project 임을 알린다, compiler 연결, .jar 만들 수 있다.
  id 'java`
  // springboot application 으로 만들어 준다, .jar 를 만든다.
  id 'org.springframework.boot' version '3.2.0'
  // springboot 가 검증한 library version 을 자동으로 맞춰준다.
  id 'io.spring.dependency-management' version '1.1.4'
}
```
- `dependencies`
  - `compileOnly` compile 시 필요한 library 이며 .jar 에 포함되지 않는다.
  - `runtimeOnly` 실행에 필요한 library 이며 .jar 에 포함된다.  
  만약 코드에 이 library 를 사용하면 compile error 가 발생한다.
  - `implementation` = `compileOnly` + `runtimeOnly`  
  어짜피 `runtimeOnly` 도 .jar 에 포함되기에 `implementation` 하면 되지 않나?  
  이것은 개발 시 특정한 library 에 의존하게 되는 상황이 만들어 진다.  
  예를 들어 DB 에 연결할 때 interface 을 구현할 것이고 spring 이 DI 를 한다.  
  runtimeOnly 로 하면 이런 상황을 강제하게 해준다.
  - `annotationProcessor` `Lombok` 같이 annotation 기반의 library 에 사용된다.  
  `compileOnly` 만 설정하면 compile 은 성공하지만 원하는 기능은 빠지게 된다(예: setter, getter 생성).  
  annotationProcessor 로 등록한 `Lombok` 이 직접 setter, getter 를 생성 해준다.
  - `testImplementation` test 시 필요한 library 선언.  
  main 에 적용되는 library 들은 test 에 상속되어 main 사용한 library 는 test 에도 사용할 수 있다.  
  이 library 들은 test 에만 사용되므로 최종 결과물에 포함되지 않는다.
  packaging 은 src/main 의 결과물만 챙긴다.
- build/libs 에 .jar 가 2개 생성된다.  
마지막에 `-plain.jar` 는 외부 library .class 가 포함되지 않은 순수하게 내가 작성한 코드의 java bytecode 이다.  
이 .jar 는 실행 가능하지 않다.
- `task` build 를 포함한 gradle 의 기능을 수정 및 확장할 수 있다.  
```groovy
tasks.named("test") {
  doSomething() // test 를 이것으로 대체
}

tasks.register("hello") {
  printHello() // hello 라는 task 등록
}
```
- port 80 은 생략 가능하다, 기본값.
- config 적용에도 우선 순위가 있다.  
명령형 인자(예 -server.port=1234) - application-{profile}.yml - application.yml
- application config 는 여러 profile 을 가질 수 있다(dev, test, prod).
- `@SpringBootApplication` 은 최상위 class 에 붙는다.  
이 안에는 `@ComponentScan` 이 있어 하위 package 의 모든 class 들을 검사하여 spring container 에 등록한다.
- `Servlet` vs `WebFlux`
  - java web application 설계 방식
  - blocking / non-blocking
    - blocking: request 가 들어오면 thread 가 이를 처리하기 위해 다른 request 를 처리 하지 못한다.  
    예) DB 에 요청을 보내고 결과를 받을 때까지 기다린다.  
    기다리는 동안 다른 요청을 처리하지 않는다.
  - thread-per-request / event loop
- `ApplicationContext` 의 구현체를 생성하는데 `WebApplicationType` 에 따라 객체가 결정된다.
  - `Servlet` - `AnnotationConfigServletWebServerApplicationContext`
  - `WebFlux` - `AnnotationConfigReactiveWebServerApplicationContext`
  - `AnnotationConfigApplicationContext`
- `Bean` 등록에는 순서가 있다.  
탐색한 class, spring 에서 제공하는 class 들을 bean 으로 등록한다.  
기존에 존재하는 bean 들 대신에 내가 만든 객체를 bean 으로 등록하고 싶다.  
overriding 하는 방식으로 같은 type 이라면 나중에 등록한 객체를 bean 으로 등록하고 먼저 등록된 객체는 사용하지 못하게 된다.

</details>

<details>
<summary>2026-01-23</summary>

- event 발생 시 callback 을 사용하면 결합도가 낮아진다.  
예) 회원 가입하고 나면 회원에게 가입 축하 메일을 보내야 한다.  
가입이 끝나면 메일 보내는 역할을 하는 참조 변수를 사용한다.  
callback 은 event 발생 시 호출한다.  
가입이 끝나면 callback 을 호출하고 가입 절차를 종료한다.  
동시에 callback 은 가입 축하 메일을 보낸다.  
비동기로 처리할 수 있다.  
- `CommandLineRunner / ApplicationRunner` app 실행 직후 business logic 호출
- `ORM(Object-Relational Mapping)` object 와 relationDB 를 연결해주는 기술이다.  
oop 는 object 중심, RDB 는 table 중심이라 패러다임이 일치하지 않아 sql 양이 많아진다.  
그래서 oop 로 개발하면 알아서 sql 을 만들어준다.
- `JPA(Java Persistence API)` ORM 개발 시 사용하는 interface.  
ORM 마다 사용법이 다를 수 있으므로 추상화가 필요하다.  
- `Hibernate` JPA 를 구현한 library.
- `controller` 와 `service` 의 method 수가 같은 경우가 많다.
- `event` 를 잘 활용하자.  
의존성을 확 줄일 수 있다.  
예를 들어 현재 회원 가입을 하면 축하 메일을 보낸다.  
하지만 카톡으로도 가입 축하 메세지를 보내려고 한다.  
그럼 회원 가입 로직에 메일 전송, 카톡 메세지 전송 로직이 추가된다.  
점점 요구사항이 늘어난다면 수정해야 하는 부분도 증가한다(의존성 증가).
해결책으로 회원 가입이 되었다는 이벤트를 만든다.  
가입 서비스는 로직을 그대로 종료한다.  
이 이벤트를 구독하는 리스너에게 전달된다.  
추후 가입 로직은 변화가 없고 리스너에만 변화가 생긴다.
- 비동기 방식은 조심히 사용해야 한다.  
transaction 이 나뉘게 되어 이를 병합해주는 과정이 필요하다.
- DTO(Data Transfer Object) 데이터 전송을 위한 객체.

</details>