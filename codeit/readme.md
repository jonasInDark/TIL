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
<summary>2026-01-19</summary>

- `Set` 수학에서 말하는 집합을 말한다.  
  즉 순서가 없고 중복을 허용하지 않는다.
- `HashSet` element 를 추가할 때 각자 갖고 있는 `HashCode` 가 있다.  
  이를 계산하여 element 를 구분한다.  
  이 값이 같다면 같은 element 로 판단한다.  
  element 가 될 때 hash 값을 구한다.  
  이 값을 내부에 hash table 과 비교하여 기존에 값이 있다면 추가하지 않고 없다면 추가한다.  
  이 과정의 시간 복잡도는 `O(1)` 이다.
- 데이터가 1M 개 있을 때 `O(n)` vs `O(logn)`
    - 원하는 값을 찾을 때 전자는 데이터 수 만큼 연산이 필요하다.  
      후자는 `log(1M)` 약 18~19번 필요하다.

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
    id 'java'
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

<details>
<summary>2026-01-26</summary>

- DTO 는 controller 에서 service 로 데이터를 넘길 때 사용한다.  
  service 간 사용은 하지 않는다.  
  DTO 로 받으면 다른 곳에서 사용하기 어렵다.
- `spring` 등장 배경  
  복잡한 구조, 과도한 설정, 느린 배포, 테스트 어려움, 기술 종속성, 객체 지향 원칙 위반
- `framework` vs `library` 기능들의 집합.  
  전자는 우리가 만든 코드를 호출하고 후자는 우리가 만든 코드 내에서 호출한다.  
  즉, 프로그램 실행 흐름의 차이이다.
- 외부에서 bean 을 등록할 때 `@Configuration`, `@Bean` 을 사용한다.  
  그 외에는 `@Component` 와 같은 annotation 사용한다.
- http 는 웹 통신 규약이며 비연결성, 무상태성 특징을 가진다.  
  이로 인해 session 이 등장했다.
- `servlet filter` controller 에 요청을 전달한다.  
  이것이 적법한 것인지 아닌지 거른다.
- `web server(nginx, apache, ...)` static assets(html, css, image, ...) 를 효과적으로 전달한다.  
  interpreter 혹은 jvm 같이 코드 실행할 수 있는 기능이 없다.  
  그래서 business logic 처리를 못한다.  
  대신 모든 요청이 이곳으로 들어와 static assets 을 원하는 건지 servlet container 로 가는지 판단한다.  
  또한 많은 요청이 들어 온다면 load balancing 으로 여러 container 에 할당 해준다.  
  server 가 container 로 요청을 전해주기에 container 의 port 를 숨길 수 있다.  
  추가) https 암호화
- 실제 운영할 때 web server 는 따로 올려줘야 한다, .jar 에 없다.
- `servlet container(tomcat, ...)` jvm 위에서 실행된다.

</details>

<details>
<summary>2026-01-27</summary>

- `c/c++` vs `java`
    - 전자와 후자 모두 코드를 compile 한다.
    - 전자는 compiler 가 수 많은 최적화 기법을 사용해 최고 성능의 기계어를 생성한다.  
      0과 1로 이루어져 있어서 실행속도가 빠르다.
    - 후자는 java compiler 가 jvm 이 읽을 수 있는 java bytecode 로 변환한다.  
      jvm 의 JIT(Just-In-Time) compiler 가 한 줄씩 읽고 기계어로 번역한다.  
      이때 반복되는 코드를 저장하여 속도를 높힐 수 있다.
- `@ConfigurationProperties`  applicatoin.yml(혹은 properties) 의 값을 가져올 때 사용한다.  
  여러 타입을 묶어서 가져올 때 객체로 가져오면 된다.
  ```yaml
  my:
    settings:
      host: 127.0.0.1
      port: 8080
      admin: admin
      password: admin
      auth: false
  ```
  위 처럼 string, integer, boolean 타입이라면 settings 라는 class 를 만들고 mapping 하면 된다.
- `@Target` 해당 annotation 이 어디에 붙일 수 있는가.  
  예) `@Overriding` 은 method 에만 붙일 수 있다.
- `@Documented` javadoc 기반 문서화할 수 있다.
- `@Inherited` 이 annotation 이 붙은 annotation 이 붙은 class 를 상속받는다면 하위 클래스에도 붙은 것으로 한다.
- `@Retention` annotation 이 존재기간 정책을 결정한다.  
  `SOURCE`: `.java` 에는 존재, `.class` 에 존재하지 않음.  
  `CLASS`: `.class` 에 존재, 실행 시 사용불가.  
  `RUNTIME`: `.class` 에 존재, 실행 가능.
  ```java
  @Target(ElementType.METHOD)
  @Retention(RetentionPolicy.SOURCE)
  //오버라이딩이 제대로 되었는지 컴파일러가 확인하는 용도
  //클래스 파일에 남길 필요 없이 컴파일 시에만 확인하고 사라짐
  public @interface Override(){ }
  ```

</details>

<details>
<summary>2026-01-28</summary>

- spring 은 기본적으로 layered-architecture 이다.  
  `controller`, `service`, `repository` 계층이 있다.
  `Separation of Concerns` 관심사 분리를 통해 유지 보수, 확장성이 용이하다.  
  각 계층은 서로 무슨 일을 하는지 몰라야 한다.  
  예) `UserService` 는 `ChannelService` 를 참조하지 않는다.
  만약 참조한다면 circular dependency 를 조심해야 한다.
- `controller` request 수신 및 결과 반환
    - `@RestController` = `@Controller` + `@RequestBody`
- `service` 핵심 부분이다. business logic 을 구현하고 transaction 처리한다.
    - `@Service` service 계층임을 알린다.
- `repository` 오직 여기서만 DB 에 접근할 수 있다.
    - `@Repository` DB 에 접근하는 `Data Access Object, DAO` 역할을 의미한다.
- `Event` 기반 설계는 결합도를 없앨 수 있다.  
  event 를 생성하는 곳과 수신하는 곳이 있어, 어디서 생성하는지 몰라도 되고 어디서 처리하는지 몰라도 된다.  
  단점은 event 흐름이 직관적이지 않고 흐름을 알기 어렵다.  
  그래서 핵심 로직을 과하게 event 기반으로 설계하지 않도록 한다.  
  `ApplicationEventPublisher` 로 event 발생을 알리고 `@EventListener` 가 붙은 method 에서 이를 처리한다.
  ```java
  // MemberService 와 WelcomeEmailListener 는 서로의 존재를 모른다!
  @Service
  public class MemberService {
  
      private final MemberRepository memberRepository;
      private final ApplicationEventPublisher eventPublisher;
  
      public MemberService(MemberRepository memberRepository, ApplicationEventPublisher eventPublisher) {
          this.memberRepository = memberRepository;
          this.eventPublisher = eventPublisher;
      }
  
      public void register(Member member) {
          memberRepository.save(member); // 회원 정보 저장
          eventPublisher.publishEvent(new MemberRegisteredEvent(member)); // 이벤트 발행
      }
  }
  
  @Component
  public class WelcomeEmailListener {
  
    @EventListener
    public void handle(MemberRegisteredEvent event) {
      Member member = event.getMember();
      // 환영 이메일 전송 로직
      System.out.println("Welcome email sent to: " + member.getEmail());
    }
  }
  ```
- `@Component` vs `@Configuration` + `@Bean`
    - 전자는 class 에 붙인다. 이 class 를 bean 으로 등록하라는 뜻이다.  
      bean 생성 시 참조 객체가 필요하면 알아서 주입해준다.
    - 후자의 `@Configuration` 도 class 에 붙인다. 대신 `@Bean` 붙은 method 의 결과 값을 bean 으로 등록한다.  
      이렇게 하는 이유는 알아서 bean 생성이 아닌 특정한 값을 주입이 필요할 때가 있기 때문이다.  
      `@Component` 와 `@Bean` 의 type 이 같다면 후자를 우선한다(수동으로 등록한 bean 을 우선한다).
  ```java
    @Configuration("configurationSection02")
    public class ContextConfiguration {
      @Bean(name="member")
      public MemberDTO getMember() {
      return new MemberDTO(1, "010-1234-5678", "jungmin@google.com", "이정민");
      }
  }
  ```
- `Dependency Injection` 의존성 주입은 3가지 방법이 있다.
    - constructor: 생성자를 통해 주입되며 field 에 `final` 을 붙일 수 있다.
    - setter: 주입받는 객체의 구현체가 바뀌어야 하는 상황에 사용한다.
    - field: 이 방법은 test 를 어렵게 하고 circular dependency 가 생길 수 있다.  
      하지 않는게 좋다.
- `Scope Proxy` 어떤 bean 은 session 의 데이터를 사용하는 경우가 있을 수 있다.  
  session 은 어떤 유저가 http 요청을 보낼 때 유저당 하나 생성된다.  
  하지만 bean 생성은 application 이 실행되기 위한 준비과정이므로 session 생성 이전이다.  
  따라서 bean 에서 session 을 사용한다면 생성되지 않은 객체를 참조하므로 오류가 발생한다.  
  이를 위해 `proxy` 를 사용한다.
- `ApplicationContext` 생성은 대부분의 bean 생성 과정이 포함된다.  
  이는 문제가 발생하면 아예 application 실행을 막는 이유이다.  
  시작하기 전에 미리 만들고 요청마다 건네 주는 것이 효율적이다.  
  context 가 종료 되기 전 모든 bean 들은 `@PreDestroy` 를 실행하여 자원을 반납한다.
  그 후 context 도 자원을 반납하고 소멸되고 application 이 종료된다.
  prototype 의 bean 은 한 번 생성되면 더이상 context 가 관리하지 않는다.
- `application.yaml` `/resource` 에 위치한다.  
  중요한 정보(ip, port, password, ...) 가 담겨 있다(실제로는 정말 중요한 정보는 서버 내 환경변수에 등록한다).  
  이곳에서 값을 가져와야 할 때 `@Value` 를 사용한다.  
  `SpEL, Spring Expression Language` 으로 정규표현식과 같은 기능도 사용할 수 있다.
- `@ConfigurationProperties` 은 복잡한 구성의 config 를 가져올 수 있다.  
  `@Validated` 를 통해 올바른 값인지 확인할 수 있다.
- `PropertySource` 여러 위치에서 수집한 config 를 <key, value> pair 로 가지고 있다.  
  같은 key 값이면 우선순위가 높은 value 로 정해진다.  
  동적으로 값을 추가할수도 있다.
    1. **command line** (`-server.port=9000`)
    2. **OS env variable** (`SERVER_PORT=9000`)
    3. **JVM system config** (`Dserver.port=9000`)
    4. `application-{profile}.yaml`
    5. `application.yaml`
    6. `@PropertySource` 또는 `@TestPropertySource`로 명시한 외부 파일
- `@Conditional` 을 붙여 `application.yml` 의 조건에 따라 bean 생성을 결정할 수 있다.
- bean 생성 시 `DI` graph 를 그려 의존성을 주입하기에 대부분 문제가 없다.  
  하지만 graph 로는 알 수 없는 의존성이 있는 경우 bean 생성 순서를 정할 수 있다.
    - `@DependsOn(BeanName)` 해당 bean 이 먼저 초기화되어야 함을 알린다.
    - `@Order` 같은 interface 혹은 class 를 구현/상속하는 경우 이들간 순서를 정할 수 있다.  
      직접 참조하지 않을 때 사용하기 좋다.

</details>

<details>
<summary>2026-01-29</summary>

- null check 는 한 곳에 몰아서 하기 보단 각 계층에 적절하고 여러 곳에서 하는 게 좋다.
- repository 에서 발생한 exception 은 service 에서 처리해야 한다.
- custom type 이 2가지라면 boolean 으로 간단하게 정의할 수 있지만 나중에 확장을 고려하면 `enum` 을 쓰는 게 좋다.
- package 구조는 계층과 기능 기반으로 나뉜다.  
  전자는 소규모 프로젝트에 적합하다.  
  controller, service, repository package 로 나눈다.  
  전체적인 구조를 확인할 수 있다.  
  단점은 각 계층이 비대해지면 관리하기 어려울 수 있다.  
  후자는 domain 기반으로 나눈다.  
  즉, user, channel, message 등으로 package 를 구성하고 각각 controller, service, repository 가 있다.  
  응집도가 높고 나중에 한 부분만 따로 떼어내어 msa 하기 좋다.  
  단점은 domain 경계를 잘 나눠야 한다.

</details>

<details>
<summary>2026-02-04</summary>

- `reverse proxy` user request 가 서버로 향하는 것을 중간에 받아서 전달하는 proxy 이다.  
  `forward proxy` 는 서버에서 처리한 request 를 proxy 를 거쳐 user 에게 전달한다.
- `HTTP` web browser 와 web server 가 통신을 위한 규약.  
  request 를 보내면 response 을 보내 응답한다.  
  request 에는 state 가 없다, 여태까지 어떤 request 를 보냈는지 등 알 수 없다.  
  `HTTP` 는 `stateless` 라는 특징을 가진다.
- `HTTP` request 는 대략 아래와 같은 형식을 가진다.

> (HTTP Method) (endpoint) (HTTP version)  
> Headers  
> Body

- `Headers` key-value pair 로서 request 에 대한 meta data 를 의미한다.  
  request 에 담긴 data 가 어떤 것인지, browser 는 이 data 가 언제까지 유효한지 등이 담긴다.
- 대표적인 header 예시이다.
    - `content-type` data format; image, json, ...
    - `authorization` access token
    - `cache-control` browser cache
    - `user-agent` browser type; chrome, mobile, ...
- `Uniform Resource Location` resource 위치
    - key-value 는 filtering 할 때
    - value 만 있는 경우는 명확하게 어떤 자원 하나를 지정할 때
- `http method`
    - `GET` 조회, url 글자 수 2048자 제한, cache 가능, url 에 request 가 담기기 때문에 보안 수준이 낮음
    - `POST` 생성, cache 일반적으로 불가,
        - `login` 인증 정보를 생성
    - `PUT` 데이터 전체 수정, 전체 데이터를 덮어 씌울 때, 없으면 생성
    - `PATCH` 일부 수정
    - `DELETE` 삭제
- `멱등성, idempotent` 몇 번을 실행해도 결과가 달라지지 않는 성질.  
  예) hash("apple") apple 에 대한 hashcode 값은 몇 번을 계산해도 달라지지 않는다.  
  `GET`, `PUT`, `DELETE` 는 몇 번을 해도 결과가 같다.  
  `PUT` 은 같은 값에 같은 값을 덮어씌우니 동일한 결과가 나온다.
- `Representational State Transfer` http method 를 활용한 architecture 이다.  
  `RESTful api` 설계의 핵심은 url 이 명사, http method 가 동사로 표현한다.  
  예를 들어, `GET /getUser/1` -> `GET /user/1`
- http state code
    - 100 ~ 199 정보 전달, 거의 사용하지 않음
    - 200 ~ 299 request 성공
        - 200: request success
        - 201: resource created
        - 204: No content, 성공했지만 보낼 데이터가 없음, delete 요청 후
    - 300 ~ 399 redirect
    - 400 ~ 499 client error, request 가 잘못됨
        - 400: bad request, parameter 가 잘못되었거나 body format error 등
        - 401: unauthorized, 인증 실패로서 login 실패 혹은 token 잘못됨
        - 403: forbidden, 권한 없음, 인증은 되었으나 접근할 권한이 없음, 무조건 인증 후 인가
        - 404: not found, 없는 resource 요청
        - 415: unsupported media type, content-type 이 잘못된 경우
        - 429: too many requests, api 호출 한도 초과
    - 500 ~ 599 server error
        - 500: internal server error
        - 502: bad gateway, backend server >> proxy server(nginx, apache server, ...) 로의 response 문제
        - 503: service unavailable, 서버 과부하 혹은 점검
- client >> load balancing >> proxy server >> api gateway >> backend server

</details>

<details>
<summary>2026-02-05</summary>

- `Servlet` java 로 개발된 server-side component 이다.  
  request 를 처리한 결과를 http response 으로 반환하는 기술이다.  
  java 에서 web app 을 구현하기 위한 가장 기초적인 표준이다.
- servlet 은 singleton 으로 생성되며 아래와 같이 직접 개발할 수 있다.
  ```java
  @WebServlet(name = "helloServlet", urlPatterns = "/hello")
  public class HelloServlet extends HttpServlet {
      @Override
      protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
          response.setContentType("text/plain");
          response.setCharacterEncoding("UTF-8");
          response.getWriter().write("Hello, Servlet World!");
      }
  }
  ```
- servlet 은 tomcat 과 같은 servlet container 가 circle of life 를 관리한다.
- spring 기반의 `DispatcherServlet` 을 하나 가지고 있다.  
  여기서 request 를 적절한 controller 에 전달한다.  
  이를 thread 가 처리한다.
- 과거에는 수 많은 servlet 을 개발하고 container 에 등록했다.  
  지금은 dispatcher 하나만 만들고 이를 중심으로 request 를 처리한다.  
  이를 front controller pattern 이라 한다.
- servlet container 에는 여러 servlet 이 생성되는데 그 중 `defaultServlet` 이 있다.  
  이것은 application 내 resource 를 찾아 반환한다.  
  덕분에 web server 가 없어도 static resource 응답을 받을 수 있다.
    1. 정확히는 url 에 요청이 왔다
    2. `DispatcherServlet` 이 `@RequestMapping` 에 있는지 확인
    3. 없으면 `ResourceHttpRequestHandler` 가 `resource/static` 을 확인
    4. 없으면 `DefaultServlet` 이 `resource` 를 확인
- application 에 view template 을 가지고 있으면 무거워지기 때문에 이를 분리한다.  
  이제 servlet container 는 api server 가 되어 request 에 대한 json 을 반환하는 역할이 된다.  
  (이전에는 view 까지 rendering 해서 반환했다.)  
  front-end / back-end server 로 나누어 request 에 대한 json 을 front 에 넘기고 view 생성해 client 에게 보여준다.
- 이 구조는 front-end server 덕분에 `view` 와 `viewResolver` 가 더이상 쓰이지 않게 된다.
- `Dispatcher` 는 `HandlerMapping` 에게 어떤 controller 에게 이 request 를 보내야 하는지 확인한다.
- controller 를 찾았다면 `HandlerAdaptor` 에게 request 를 위임한다.
- adaptor 는 실제 controller 에게 request 를 전달하는데 이 과정에서 `HttpMessageConverter` 가 역직렬화 해준다.
- controller 는 response 를 adaptor 에게 전달하는데 이 과정에서 converter 가 직렬화 해준다.
- header 의 content-type 에 따라 converter 가 달라진다.
- endpoint `/hello` 와 `hello.html` 이 있다면 controller 를 먼저 연결한다.  
  dispatcher 는 먼저 `HandlerMapping` 에 요청하고 없으면 resource handler 에게 요청하기 때문이다.
- `/hello.html` 을 요청해도 `HandlerMapping` 을 호출한다.  
  모든 요청은 반드시 정해진 순서를 따르기 때문이다.
- static resource 설정  
  `/src/main/resources` 를 바탕으로 `/static`, `/public`, `/resources`, `/META-INF/resources` 내 resource
  를 불러올 수 있다.  
  예를 들면 `/static/css/hello.css` 를 요청하기 위해 `http://localhost:8080/css/hello.css` 로 하면 된다.
- path 를 추가하고 싶다면 `.yml` 에 다가 `spring.web.resources.static-locations: classpath:/custom-location/`
  라고 하면 된다.
- `Classpath` app 실행 시 모든 `.class` 를 다 메모리에 올리지 않는다.  
  runtime 시 필요할 때 불러오는데 원하는 class 가 어디있는지에 대한 경로 집합을 `Classpath` 라 한다.
- java 는 gc 가 있어 메모리 관리를 하지 않아도 된다.  
  jvm 이 있어 platform 상관없이 java byte code 가 있다면 실행할 수 있다.  
  하지만 무겁다. 메모리를 많이 쓰고 느리다. runtime 시 jit 가 통계 기반으로 최적화 해주긴 한다.  
  `AWS Lambda` 의 serverless, `MSA` 구조에서 java 의 단점은 치명적이다.  
  이런 jvm 을 개선한 `GraalVM` 이 등장했다.  
  c/cpp 처럼 `AOT, Ahead-Of-Time` compile 하여 기계어로 바꿔준다.  
  앞으로의 대세가 될 serverless, msa 환경에 적응하기 위해 등장한 것이다.

</details>

<details>
<summary>2026-02-06</summary>

- `RestClient` rest api 서버에 http 요청을 보낼 수 있는 library  
  예를 들어 필요한 데이터가 외부에 있다면, 기상 데이터 같은, backend server 는 http 요청을 해야 한다.  
  이를 도와주는 것이 `RestClient` 이다.  
  현재 spring 에서 `WebClient` 사용을 권장하고 있다.  
  이것은 비동기 처리 방식을 사용하는데 `WebFlux` 를 의존성에 추가해야 한다.
- `@ExceptionHandler` spring 에서 exception 이 발생했을 때 실행된다.
  ```java
  @GetMapping("/{id}")
  public Member getMember(@PathVariable Long id) {
      return memberService.findById(id)
          .orElseThrow(() -> new MemberNotFoundException(id));
  }
  
  @ExceptionHandler(MemberNotFoundException.class)
  public ResponseEntity<String> handleMemberNotFound(MemberNotFoundException e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
  }
  ```
  여기서는 같은 class 내 발생한 exception 에 대해서만 실행된다.  
  `@ControllerAdvice` 를 이용해 전역으로 처리할 수 있다.
- 원래 모든 exception 을 controller 계층에서 처리한다(아직 controller 계층을 구현하지 않아서... ㅋㅋ).  
  service 에 더이상 try-catch 를 사용하지 않는다.  
  모든 exception 은 controller 에서 처리해야 한다.

</details>

<details>
<summary>2026-02-09</summary>

- `@Controller` vs `@RestController`
    - 전자는 data 를 담아 view 를 반환한다. 후자는 데이터만 담는다.  
      후자는 front 와 backend 를 분리한다.  
      front 에서 요청이 발생하여 backend api 로 전달된다.
      backend server 는 어떤 view 에게 전달되는지 모른다.  
      다양한 client 가 있어서 전자는 이들에 맞게 개발해야 한다.
      후자는 front 와 backend 분리하여 데이터에만 집중할 수 있다.
    - `SEO, Search Engine Optimization` 검색 엔진 봇은 전세계 수 많은 웹 페이지를 방문한다.  
      봇은 웹 페이지를 읽고 어떤 분야인지 분석한다.  
      전자는 서버가 화면을 rendering 하여 보내주기 때문에 완성된 웹 페이지를 받을 수 있다.  
      후자는 데이터만 보내주고 rendering 은 client 에서 하기에 처음 받아 보는 웹 페이지가 비어 있다.  
      그래서 전자는 `SEO` 에 유리하고 후자는 불리하다.
- `Process` OS 로부터 resource 를 할당 받아 실행하는 작업 단위.
- `Thread` process 내 실행되는 흐름의 단위이며 process 내 존재한다.  
  process 내 여러 thread 가 존재할 수 있으며 resource 를 공유한다.
- process 공간
    - `Code`, `Data`, `Heap`, `Stack`
- thread 만의 독립적인 공간이 있다.
    - `Program Counter` thread 가 현재 실행 중인 명령어의 주소 저장소(어디까지 작업했는지 기록).
    - `Register Set` CPU 의 register 를 저장(현재 계산 중인 임시 데이터).
    - `Stack` method 호출 시 local variable 과 복귀 주소를 저장.

</details>

<details>
<summary>2026-02-10</summary>

- `REST` vs `graphQL`
    - 전자는 endpoint 에 따라 가져오는 데이터가 결정된다.    
      후자는 server 로부터 데이터를 효율적으로 가져오기 위함이 목적이다.  
      endpoint 는 `/graphql` 하나이고 scheme 에 따라 받는 데이터가 결정된다.
    - 전자는 원하는 데이터를 얻으려면 서로 다른 요청을 보내야 한다.  
      후자는 하나의 요청으로 해결된다.
    - 전자는 필요한 정보를 포함한 불필요한 정보도 가져온다.  
      예를 들어 유저의 이메일만 가져오고 싶은데 controller 가 `UserResponse` 를 반환하여 이메일 이외 정보를 얻게 된다.  
      후자는 resolver 가 있어서 요청을 적절하게 sql 로 바꿔서 원하는 정보를 가져온다.

</details>

<details>
<summary>2026-02-11</summary>

- `API, Application Programming Interface` program 을 위한 interface 혹은 specification.  
  마치 핸드폰을 사용하는데 이런 버튼을 누르면 이런 기능이 실행되고, ... 우리는 실행을 하면 결과를 받는다.  
  하지만 어떻게 동작하는지 모른다.  
  이를 `API` 라 한다.  
  java interface 도 동일하게 동작 원리는 몰라도 사용할 수 있다.
- `HTTP` 특징
    - `stateless` 인증을 받았다. 다음 요청에는 인증받았다는 증거를 넣어야 한다.  
      각 요청은 독립적이며 필요한 모든 정보를 포함해야 한다.
    - `connectionless` 응답 후 연결을 끊는다. 연결을 유지할 필요가 없다.
- 무상태성을 염두하고 api 설계해야 한다. 세션 정보 없이 실행 가능해야 한다.
- `Remote Procedure call` 별도의 원격 제어를 위한 코드 없이 다른 주소 공간 혹은 물리적으로 다른 공간의 함수나 프로시저 호출할 수 있는 기술.  
  과거에는 모든 코드가 한 프로세스에 있어서 원격 호출 필요가 없었다.  
  하지만 규모가 커지면서 서비스를 분리하고 분산 시스템이 등장하여 이러한 기술이 등장하게 되었다.
- `RPC` 문제점
    - 결합도 증가. 서버 메서드 시그니처가 수정되면 클라이언트도 수정해야 한다.
    - 네트워크 장애 시 관련 서비스에 문제 발생한다. 대응하기 어렵다.
- `RPC` 종류
    - `Remote Method Invocation` java 로 개발되었다. 언어에 종속된 것이 단점이다.
    - `CORBA` 언어 간 통신을 위한 미들웨어, 학습 비용이 높다.
    - `gRPC` 구글에서 개발, 최신 고성능, protocol buffer 기반.
- `REST, Representaional State Transfer` 네트워크 시스템을 어떻게 해야 효율적으로 설계하는가 에 대한 설계 스타일을 말한다.  
  통신 프로토콜에 종속되지 않지만 대부분 http 기반하여 설계된다.
- `RESTful api` 설계 원칙
    - uri 는 자원을, http method 는 행위를 나타낸다. uri 에 동사 같은 표현을 피한다.  
      uri 는 복수형 명사 기반으로 구성한다. `_` 말고 `-` 사용.
    - 일관성. 사용 방식과 결과가 예측 가능해야 한다.  
      응답의 구성도 일관되어야 한다. 자주 바뀌면 사용하는 쪽에서 대응하기 힘들다.
    - 계층 구조화. 논리적 트리구조
        - `GET /users/1/orders/23` -> user1 의 주문내역 중 하나, 23번, 를 조회.  
          users -> orders 로 종속관계 표현.  
          만약 전체 주문번호 23번을 의미한다면 굳이 users/1 이 없어도 된다.
    - 단순성. 복잡한 내부 규칙을 숨기고 다른 사람이 볼 때 직관적으로 이해할 수 있어야 한다.  
      한 가지 책임만 갖는다. uri 는 가능한 짧고 의미있게.
    - 확장성. 시간이 지나면 많은 기능이 추가된다. 확장을 고려해야 한다.
- 서비스 개발에 따라 api 도 변화한다. 버전이 올라 변화가 생긴다면 하위 버전 사용자들도 호환되게 해야 한다.  
  필드 삭제 대신 `depreacated` 를 붙여 곧 없어질 것임을 경고해야 한다.  
  parameter 추가를 하여 호환성을 유지할 수 있다.  
  api 에 수정사항이 있어서 이를 경고하는 의미로 status code 299 를 사용한다.  
  응답 헤더에 deprecation 내용을 제공한다.  
  공식적은 아니지만 관습적으로 `X-API-Deprecation-Notice`: `...` 형태로 응답한다.
- api 품질
    - `latency` 응답 받는 시간. 지연시간.
        - 변하지 않는 정적 데이터부터 캐싱 적용.
        - 조회 성능을 위해 필요한 필드로 구성된 DTO
        - DB 병목 가능성이 높다. 주기적으로 쿼리 로그 분석과 `explain` 활용.
    - `throughput` 초당 처리 가능한 요청 수
    - `error rate` 일정 시간 동안 오류 발생 비율
    - `cpu/memory usage` system resource 사용량
- `MSA` 단일 어플을 여러 개의 서비스를 나누어 운영하는 구조를 말한다.  
  기존에는 spring 기반 어플이면 jvm 기반인 기술을 사용해야 했다.  
  하지만 서비스를 분리하면서 실시간 채팅 서비스는 node.js, ... 등 기술 제한이 사라졌다.
- `MSA` 단점
    - 인프라가 잘 갖춰지지 않았다면 문제가 발생해 이를 수정하는데 오래 걸릴 수 있다.
    - 인프라를 유지하는데 많은 비용이 발생한다.
    - 데이터 일관성 유지하기 어렵다. 복잡한 분산 트랜잭션을 구현해야 한다.
    - 규모가 작으면 오버 엔지니어링 가능성이 높다.
    - api 문서 만들고 다른 팀과 소통하느라 시간과 비용이 든다.
- `serverless` cloud service 제공자가 서버를 관리한다. 기능 기반으로 개발한다.  
  spring 은 적절하지 않다. 실행하기 위해 준비 과정이 많이 필요하다.  
  servlet container 를 jvm 위에 올렸다가 내렸다가... 비효율적이다.
- `BaaS, Backend as a Service` 서버 기능 제공하는 서비스
    - `firebase` authentication, read-time DB, storage, alarm, cloud function, ...
        - 실시간 기능, 모바일 앱 친화적
        - 비싸다, NoSQL 만 지원
    - `Supabase` firebase 대안으로 `PostgreSQL` 기반의 `BaaS` 이다.

</details>

<details>
<summary>2026-02-12</summary>

- response time
    - 요청을 보내고 응답을 받은 시간
- latency
    - 요청 이후 첫 응답 바이트가 도착한 시간
- throughput
    - 처리 가능한 양, 부하 테스트 관련 지표
- availability
    - 시스템이 정상적으로 동작하는 비율. 99.9%(three nines), 99.99%(four nines)
- resilience
    - 장애 발생 시 다른 시스템에 영향을 주지 않고 격리하는 능력. circuit breaker, Retry, ...
- isolation
    - 장애 전파 방지. 결제 시스템 마비가 전체 서비스에 영향을 주면 안된다.
- consistency
    - uri, 요청/응답 구조, 상태코드는 일관되어야 한다.
- documentation
    - api 문서 생성을 자동화해야 한다.
- error message
    - 단순히 500 internal server error 로 끝나면 안된다. 좀 더 구체적인 내용이 담겨야 한다.
- aop 로 요청 처리시간을 log 로 남길 수 있다.  
  외부 라이브러리를 사용하여 각 엔드포인트에 대해 성능을 모니터링할 수 있다.
    - `Prometheus` 시계열 메트릭 수집.
    - `Grafana` Prometheus 와 연동하여 대시보드 생성.
    - `Spring Boot Actuator` 내부 어플 상태
- `HandlerInterceptor` 는 `HandlerAdaptor` 와 controller 사이에서 실행된다.
- `stateless` 모든 요청은 독립적이다. 서버는 이전 요청 정보를 세션에 저장하지 않는다.  
  매 요청 시 필요한 정보를 담아 보내야 한다.  
  때문에 수평 확장이 가능하다. `sticky session` 이 필요하지 않는다.
- request > dns server > (cdn) > lb > web server > api gateway > was  
  현대 어플리케이션은 하나의 서버만 띄우는 경우가 없다.
    1. `www.example.com/user/1` 최초 요청을 보냄.
    2. dns server 에서 `www.example.com` 의 ip 주소를 찾아 반환.  
       만약 정적 리소스를 원한다면 client 와 가장 가까운 cdn 이 반환.
    3. `123.123.123.123:8080/user/1` 로 요청을 보냄.
    4. lb 가 어떤 web server 로 보낼지 결정.
    5. web server 에서 처리할 수 없는 요청은 여러 gateway 중 하나에 보냄.
    6. gateway 에서 설정을 읽어 `/user` 를 담당하는 was 에 보냄.
    7. 요청을 처리.

</details>

<details>
<summary>2026-02-23</summary>

- `SOAP, Simple Object Access Protocol` vs `REST`
    - 데이터 전송 규약
    - 다른 언어, 다른 플랫폼 간 통신할 수 있는 프로토콜.
    - 전자는 엄격한 규칙에 의해 통신이 진행된다.
        - 후자는 이에 비교하면 가이드 라인 정도.
    - xml 기반으로 작성되며 http, smtp, ftp 등 여러 프로토콜 사용할 수 있다.
        - 후자는 주로 http/https 을 이용.
    - 전자는 보안이 중요한 경우에 사용한다. 브라우저에 캐시 저장을 할 수 없다. 상태를 가진다.
    - 엄격한 규칙에 DB 의 ACID 가 포함된다.

</details>

<details>
<summary>2026-02-24</summary>

- `Richardson` ??

</details>

<details>
<summary>2026-02-25</summary>

- `DataBaseManagementSystem` DB 라는 데이터 집합에 동시에 접근할 수 있도록 관리해주고 무결성과 영속성을 지원하는 소프트웨어이다.  
  또한 효율적인 검색과 저장을 지원한다.
- 등장배경
    - 여러 파일에 중복된 혹은 불일치 데이터 존재.
    - 검색 성능 저하.
    - 동시 접근 시 문제 발생(thread race condition 와 같은).
    - 백업 및 복구 어려움.
- DB 설계 도구
    - [dbdiagram.io](https://dbdiagram.io)
- 엔티티 간 관계 정의
    - `1:1` 하나의 데이터는 다른 하나의 데이터에 대응.
        - 우리나라 사람들은 오직 하나의 주민등록번호를 가진다.
    - `1:N` 하나의 데이터가 다른 여러 개의 데이터에 대응.
        - 달고나는 지역에 따라 여러 이름을 가진다.
    - `N:M` 하나의 데이터가 다른 여러 개의 데이터에 대응되고 이와 반대도 성립.
        - 학생은 여러 과목을 수강한다. 과목을 듣는 학생은 여러 명이다.
        - 이 관계의 엔티티는 반드시 중간에 연결 엔티티를 가져야 한다.
            - 학생 <-> (학생, 과목) <-> 과목
- 관계 설정 시 무결성을 유지해야 한다. 만약 삭제 시 관계있는 데이터들에 대한 수정이 필요하다.
- 식별자
    - 엔티티의 데이터들을 구분하게 해주는 속성.
    - 즉, 유일한 값.
- 기본키, 대체키
    - 둘 다 유일한 값을 가지며 인덱스가 생성된다.
    - 식별자 중 인스턴스 구분을 위해 선택된 키를 기본키라 한다.
    - 전자는 반드시 값이 존재해야 한다, null 불가.
    - 후자는 유일한 값을 가져야 하지만 null 값 허용.
- N:M 연결 테이블는 복합키를 가진다.
- 정규화
    - 테이블에 중복된 값이 많을 수 있다. 이러한 것이 쌓이면 db 크기가 커지게 된다.
    - 삽입, 수정, 삭제 연산 오류 발생 시 무결성 유지가 어렵다.
    - 쿼리 성능을 높일 수 있다.
- 테이블 네이밍 컨벤션
    - 소문자, 스네이크 케이스
    - 복수형
    - 접두사 지양
- 컬럼 설계 원칙
    - 저장효율(적절한 타입 선택), 무결성, 가독성
    - 가변 문자열: `VARCHAR(n)`
    - 긴 텍스트: `TEXT`
    - 정수: `SMALLINT/INT/BIGINT`
    - 날짜: `DATE`
    - 날짜+시간: `TIMESTAMP`
    - 부울 값: `BOOLEAN`

</details>

<details>
<summary>2026-02-26</summary>

- `application/octet-stream` request 를 보낼 때 content-type 지정하지 않거나 브라우저가 파일의 확장자를 모르는 경우(예:
  profile.dat)
  `application/octet-stream` 으로 보낸다.  
  `octet`(8비트) 즉 데이터의 흐름이라는 뜻으로 내가 보내는 파일이 뭔지 모르니 데이터 덩어리 자체로 보낸다 라는 의미이다.  
  모든 종류의 바이너리 파일 혹은 알 수 없는 데이터.
- 만약 `application/json` 을 예상했는데 `application/octet-stream` 이 전송된다면 상태코드 `415` 를 보낸다.
- 간단한 해결법으로 `WebMvcConfigurer` 를 상속한 config 를 만들어 message converter 추가하면 된다!
- 비즈니스 요구사항 분석
    - DB 설계 시 엔티티 관계 고려
    - 상품과 카테고리 정의
        - 예: 한 상품에 여러 카테고리 설정. 카테고리 확장 가능성? > 테이블 생성, 그렇지 않으면 필드로서.
    - ...
- `SQL` 기반 vs `ORM, Object Related Mapping`
    - `MyBatis`, `Spring JDBC` vs `JPA`, `Spring data JPA`
        - `MyBatis` SQL 과 java 를 연결. 쿼리 최적화가 필요할 때 용이. XML 로 정의. SQL 주도권이 개발자에게 있음.
        - 전자는 메모리 효율이 높다. 결과값을 java 가 관리(GC 에 등록).
        - 후자는 결과값을 영속성 컨텍스트에 저장하고 복사본 생성(차이가 발생하면 원본과 비교하기 위함).
        - 일회성 데이터를 가져올 때 전자를 사용해야 한다.
    - SQL 직접 작성 vs 객체 기반 매핑
    - 반복 코드 많음 vs 생산성 높음, 유지 보수 용이
    - 리포트, 통계, 튜닝 vs 업무 로직, 도메인 모델링
- `Java Persistence API` java 에서 구현된 표준 ORM 기술 명세.  
  인터페이스를 제공하며 실제 구현은 `Hibernate`.
- `persistence context` 객체 상태 관리 및 DB 동기화
    - snapshot 저장소
        - 1차 캐쉬: 객체 저장
        - 1차 캐쉬와 비교하기 위해 원본(snapshot) 보관. transaction 이 끝나면 비교하여 DB 에 저장(update query 생성).
        - 쓰기 지연 SQL 저장소: 객체에 대한 동작들에 대응하는 SQL 을 저장(예: 객체 생성 -> insert into).
    - entity manager 참조
        - context 를 관리하는 entity manager 를 참조하며 이를 통해 DB connection 을 획득.
    - lazy loading proxy
        - 객체를 바로 생성하지 않고 proxy 를 생성한다. 실제 데이터가 필요할 때 연산을 한다.
- 비유를 하자면 1차 캐쉬는 stack, 2차 캐쉬는 heap.
- `entityManager.persist()` 객체를 영속화(1차 캐쉬에 저장 및 sql 저장).
- `entityManager.commit()` snapshot 과 비교하여 변경 사항이 있는지 확인(`dirty check`).  
  변경 사항이 있으면 update query 를 sql 저장소에 저장.  
  이 후 DB 에 SQL 를 보내 실행(flush) 및 commit.
- 새로운 객체 생성은 영속화 되지 않아 commit 해도 DB 에 반영되지 않음.  
  반드시 생성하면 영속화 해야 한다.  
  하지만 너무 남발하면 안된다.  
  예를 들어 객체 생성 > 영속화 > 업데이트 > 커밋 vs 객체 생성 > 업데이트 > 영속화 > 커밋  
  전자보다 후자처럼 해야 한다.
- 객체를 가져오면 자동으로 영속화 된다.  
  영속화는 context 가 객체를 추적하고 있다는 의미.  
  실제 값을 참조하기 전까지 DB 에서 데이터를 가져오지 않음(lazy loading).  
  즉 알맹이 없는 껍데기 객체.

</details>

<details>
<summary>2026-02-27</summary>

| Integer                 | int       |
|-------------------------|-----------|
| reference type          | primitive |
| heap memory             | stack     |
| nullable                | nonnull   |
| impossible to calculate | possible  |

- 참조 무결성
    - 테이블 간 관계가 일관되게 유지하도록 보장하는 성질.
    - 외래키가 참조하는 데이터가 삭제 되었을 때 일관성과 무결성 유지하기 위함.
    - `cascade`
        - 삭제 시 참조하는 데이터도 삭제.
        - 참조하고 있으면 삭제 불가.
        - 삭제 시 null 로 시정.
- 인덱스
    - 검색 성능이 좋은 자료구조. 원하는 데이터를 빠르게 찾을 수 있음.
    - 종류
        - `B-tree`, `Hash`, `GiST`, `GIN`, `BRIN`, ...
    - 생성
        - where 에 자주 등장하는 컬럼.
        - 조인 키로 사용되는 컬럼.
        - order/group by 에 사용되는 컬럼.
        - distinct 자주 적용되는 컬럼.
        - like "value%" 는 앞부분 대응하는 경우를 찾는데 효율이 좋음.
            - like "%value%" 중간에 'value' 가 있는 단어를 찾는 것은 결국 모든 글자를 비교하는 것과 같음.
    - 복합 인덱스
    - 인덱스 생성 시 관련 테이블을 만들어 DB 전체 용량이 커짐. 꼭 만들어야 할 컬럼만.
    - insert, update, delete 가 잦다면 인덱스 최소화.
    - `PK`, `FK`, `unique` 는 자동으로 인덱스 생성.
- 역정규화
    - 조인은 매우 비싼 연산.
    - 정규화한 테이블들을 연결하여 거대한 테이블 운영.
    - 물론 무결성 위험이 있지만 조회 성능 대폭 상승.

</details>

<details>
<summary>2026-03-02</summary>

- SQL DDL vs DML
- 역정규화 필요성과 부작용

</details>

<details>
<summary>2026-03-03</summary>

-
- `N+1` 문제란?
- controller 에 entity 를 반환하면 생기는 문제점 ?

</details>

<details>
<summary>2026-03-08</summary>

- spring 에서의 proxy 는 bean 이다.

</details>

<details>
<summary>2026-03-11</summary>

- 초급 프로젝트 시작
- 다수결로 두번째 주제.
- 협업 규칙
- 09시 아침 스크럼
- 18시 오늘 하루 회고
- 코드 메인 리뷰어, 추가적으로 하고 싶으면 해도 됨. 결정은 메인 리뷰어가.
- 커밋, 이슈, 풀 리퀘스트 컨벤션
- 코어 타임 ? 13-16시

</details>

<details>
<summary>2026-03-12</summary>

## `Findex` 프로젝트 D-7

- [공공데이터](https://www.data.go.kr/data/15094807/openapi.do) 를 활용한 금융 분석 서비스
- 공공데이터 api 에서 데이터를 불러와 지수 데이터를 시각화합니다.

- ERD
- <img width=70% height=70% alt="Image" src="https://github.com/user-attachments/assets/8df169e5-b02f-487b-aa02-3faf9d5fecee" />

- 내 역할
    - `Index Info, 지수 정보`
    - 지수 데이터는 시가, 종가, 고가, 저가 등 지수에 대한 숫자 데이터이다.
    - 지수 정보는 이것에 대한 메타 데이터이다.
    - 지수 정보 목록 조회
        - 지수 id 혹은 이름으로 조회 가능
        - 지수 분류명, 지수 이름, 등록된 종목 수, ...
    - 지수 정보 등록
        - 사용자에 의해 지수 정보 등록
    - 지수 정보 삭제
        - 지수 id 로 삭제
    - 지수 정보 수정
        - 지수 id 로 정보 수정
    - 지수 정보 요약 목록 조회
        - 모든 지수 정보에 대해 id, 분류명, 이름을 조회
- 내가 한 일
    - 초기 셋팅
        - build.gradle, setting.gradle, readme.md, .github(issue, pr template),  
          java-google-style 적용, commit message template
- 나의 의견
    - `index_info` 에 대한 정규화를 제안했다.
        - `index_info` 의 (`index_classification`, `index_name`) 은 unique value 이다.
        - 이 부분을 분리하여 `index_full_name` table 을 만들고 `index_info` 가 참조하도록 제안했다.
        - 바로 기각이 되었는데 이 값들은 항상 조회되어야 하므로 정규화를 한다면 join 연산이 항상 발생한다.  
          따라서 굳이 정규화할 필요가 없다고 결론 내렸다.
    - 모든 table 에 `created_at` 추가 제안했다.
        - 이 값은 유저에게 보여주지 않아 필요없다는 의견이 있었다.
        - 하지만 디버깅 시 이 값이 필요할 수 있다고 설득했다.
        - 꼭 디버깅이 아니더라도 데이터가 언제 생성되었는지 기록은 필요할 것 같아 추가하는 것으로 결정했다.
    - `soft delete` 제안했다.
        - 이 프로젝트에는 데이터 복구할 필요가 없다.
        - 만약 참조하고 있는 데이터가 삭제된다면 무결성 문제가 생길 수 있다.  
          또한 연쇄 삭제가 제대로 동작하지 않은 경우가 발생할 수 있다.
        - 통계 쿼리를 사용할 때 활성화된 데이터가 적을 경우 도움이 될 수 있다.
        - 하지만 `is_delete` 라는 필드가 추가되어 쿼리가 복잡해진다.  
          고유한 값인지 확인할 때 조심해야 한다.
    - domain 기반 개발
        - 6명의 팀으로 구성되어 각각 맡은 도메인이 있다.
        - 기존에는 계층 기반(entity, repository, service, controller 끼리) 구조로 개발했다.
        - 프로젝트 구조를 도메인 별로 나누기로 했다.
            - `src/main/java/com/spring/findex/indexinfo`
            - `src/main/java/com/spring/findex/indexdata`
            - ...

</details>

<details>
<summary>2026-03-13</summary>

## `Findex` 프로젝트 D-6

- 나의 역할
    - [회의록 작성](https://innovative-snap-cf9.notion.site/260313-322cef5b9406800ab3fac9c8d1246a68?pvs=143)

- `gradle` 의 역할
    - jvm 위에서 동작한다.
    - java compiler 에게 compile 을 지시한다.
    - 수정된 파일만 골라서 compile 한다. 매번 모든 파일을 compile 하지 않아 속도가 빠르다.
    - compile option 을 한 곳에서 관리할 수 있다.
- `partial index`
    - 조건을 걸어 index 생성할 수 있다.
    - soft delete 를 위해 사용된다.
- `WebClient`
    - Http request 생성을 위해 사용된다.
    - 우리 프로젝트는 외부 api 에 데이터를 요청하여 DB 에 저장한다.
- `inner join` vs `left join`
    - 전자는 키 값이 동일한 데이터만 병합한다.
    - 후자는 왼쪽 테이블의 데이터는 모두 보존하되 오른쪽 테이블의 키 값과 일치하는 경우만 병합하고 아닌 데이터들은 null 값으로 채운다.

</details>


<details>

## `Findex` project D-day

- [Notion](https://www.notion.so/SB10-Findex-Team01-e411ec4ec3668217b0e701a73f31f1f3?source=copy_link)
- [Github repository](https://github.com/SB-Team1/sb10-findex-team01)

<summary>2026-03-20</summary>

### 프로젝트 개요

- [공공데이터 지수시세정보](https://www.data.go.kr/data/15094807/openapi.do#/) 에서 주요 지수의 시세정보를 제공해준다.
- 주가지수, 채권지수, 파생상품지수 등의 시가, 고가, 저가, 종가, 등락률, 거래량 등의 시세 항목을 포함하고 있다.
- 주가지수 시세(코스피, 코스닥 등 주요 주가지수의 시세) 데이터를 가져와 주어진 프론트엔드와 연결하는 프로젝트이다.

  <details>
  <summary>우리가 가져올 데이터는 다음과 같다.</summary>

  | 이름             | 설명                         |
                    |:---------------|:---------------------------|
  | lsYrEdVsFltRt  | 	지수의 전년말대비 등락율             |
  | basPntm        | 	지수를 산출하기 위한 기준시점          |
  | basIdx         | 	기준시점의 지수값                 |
  | basDt          | 	기준일자                      |
  | idxCsf         | 	지수의 분류명칭                  |
  | idxNm          | 	지수의 명칭                    |
  | epyItmsCnt     | 	지수가 채용한 종목 수              |
  | clpr           | 	정규시장의 매매시간종료시까지 형성되는 최종가격 |
  | vs             | 	전일 대비 등락                  |
  | fltRt          | 	전일 대비 등락에 따른 비율           |
  | mkp            | 	정규시장의 매매시간개시후 형성되는 최초가격   |
  | hipr           | 	하루 중 지수의 최고치              |
  | lopr           | 	하루 중 지수의 최저치              |
  | trqu           | 	지수에 포함된 종목의 거래량 총합        |
  | trPrc          | 	지수에 포함된 종목의 거래대금 총합       |
  | lstgMrktTotAmt | 	지수에 포함된 종목의 시가총액          |
  | lsYrEdVsFltRg  | 	지수의 전년말대비 등락폭             |
  | yrWRcrdHgst    | 	지수의 연중최고치                 |
  | yrWRcrdHgstDt  | 	지수가 연중최고치를 기록한 날짜         |
  | yrWRcrdLwst    | 	지수의 연중최저치                 |
  | yrWRcrdLwstDt  | 	지수가 연중최저치를 기록한 날짜         |
  </details>

- 위 데이터를 지수정보, 지수데이터로 나눈다.
  <details>
  <summary>지수정보는 지수데이터의 메타 데이터이며 다음과 같이 구성된다.</summary>

  | 필드명                 | 정보        | 설명                                    | 타입                 | 제약조건 |
          |:--------------------|:----------|:--------------------------------------|:-------------------|:-----|
  | Id                  | 	지수 정보 ID | 	지수 정보 ID                             | 	Integer           | 	PK  |
  | IndexClassification | 	지수 분류명   | 	지수 분류 이름                             | 	String, NOT NULL  | 	UK  |
  | IndexName           | 	지수명      | 	지수 이름                                | 	String, NOT NULL  | 	UK  |
  | EmployedItemsCount  | 	채용 종목 수  | 	주가 지수의 종목 수                          | 	Integer, NOT NULL |      |
  | BasePointInTime     | 	기준 시점    | 	주가 지수 기준 시점                          | 	Date              |      |
  | BaseIndex           | 	기준 지수    | 	시장의 전반적인 주가 수준을 종합적으로 나타내기 위해 산출한 지표 | 	Double, NOT NULL  |      ||
  | SourceType          | 	소스 타입    | 	정보가 입력된 출처를 의미합니다. (사용자, Open API)   | 	String, NOT NULL  |      |
  | Favorite            | 	즐겨찾기     | 	즐겨찾기 여부                              | 	Boolean, NOT NULL |      |

  </details>

### 역할

- 공통 설정
    - 모든 팀원이 동일한 환경에서 개발하기 위해 빌드 환경을 정의
    - [Google Java convention](https://google.github.io/styleguide/intellij-java-google-style.xml)
      적용
- 공공데이터 API 요청을 위한 WebClient 설정
    - 외부 API 요청을 위한 WebClient 설정
- 지수정보 데이터에 대한 CRUD
    - 요구사항에 따라 (지수 분류명, 지수 이름)은 고유한 값으로 설정
    - 조회는 2가지 경우로 분류
        - 지수정보 조회 시 Cursor 기반 Pagination 을 구현
            - 정렬 순서에 대해 nextCursor 보다 작은 값 혹은 같은 경우 idAfter 보다 작은 값을 가져옴
        - 지수 분류명, 지수 이름, 등록된 종목 수 3가지 분류 기준 중 하나에 대해 오름차운 혹은 내림차순으로 조회
        - 지수 분류명 혹은 지수 이름으로 부분 일치 조회

### 기술적 성과

- Querydsl로 동적 쿼리를 추상화 하였다.
- 배포 담당은 아니였지만 자동화 빌드(Github actions)와 Docker hub 를 사용해봤다.
    - actions 를 통해 빌드 성공 및 image 생성 후 hub 에 push

### 문제점 및 해결 과정

- 지수 분류명, 지수 이름 부분 일치 조회 성능 문제
    - (지수 분류명, 지수 이름) 중복 금지
    - 지수 분류명은 selectivity 가 낮고 지수 이름은 높음
    - 최대 240자이며 대소문자 상관없이 부분 일치 조회
    - (지수 이름, 지수 분류명) 복합 UK 설정
        - UK 는 인덱스도 생성된다. 지수 이름을 먼저 설정한 건 selectivity 가 높기 때문이다.
          단독 조회 시 지수 이름으로 해도 복합 인덱스에 의해 빠른 조회가 가능하다.
        - 지수 분류명 단독 인덱스를 추가하여 단독 조회 시 성능을 높였다.
    - 정리하자면 조회 시 지수 분류명, 지수 이름은 반드시 사용된다. 부분 일치 조회 시 인덱스가 없으면 성능이 하락하므로 인덱스를 추가하였다.
- 삭제 딜레마
    - 데이터 삭제 요청 시 Soft Or Hard Delete 딜레마
        - 팀원들과 멘토님과 상의 결과 Hard Delete 선택
    - 멘토님과 상의한 결과는 다음과 같다.
        - Soft Delete
            - 대다수의 경우 필요하다.
            - 특히 유저와 관련된 경우 물리적으로 삭제하지 않고 보관해야 한다.
        - Hard Delete
            - 보관해야 하는 의미가 없는 경우 물리적으로 삭제한다.
    - Soft Delete 를 하기 위한 과정은 다음과 같다.
        - 공공데이터 API 에 요청하여 원본 데이터를 저장한다.

          | ID | 지수 분류명  | 지수 명 | 소스타입     | 삭제 여부  |
                    |----|---------|------|----------|--------|
          | 1  | KRX 시리즈 | 철강   | OPEN_API | ACTIVE |

        - 유저가 같은 지수 분류명, 지수 명으로 생성하려 하지만 기존에 등록되어 있어 생성할 수 없다.
        - 유저가 데이터를 삭제한다

          | ID | 지수 분류명  | 지수 명 | 소스타입     | 삭제 여부   |
                    |----|---------|------|----------|---------|
          | 1  | KRX 시리즈 | 철강   | OPEN_API | DELETED |

        - 유저가 같은 지수 분류명, 지수 명으로 생성한다. 기존에 등록되어 있지만 삭제되어 있어 생성할 수 있다.

          | ID | 지수 분류명  | 지수 명 | 소스타입     | 삭제 여부   |
                    |----|---------|------|----------|---------|
          | 1  | KRX 시리즈 | 철강   | OPEN_API | DELETED |
          | 2  | KRX 시리즈 | 철강   | USER     | ACTIVE  |

        - 유저가 데이터를 삭제한다.

          | ID | 지수 분류명  | 지수 명 | 소스타입     | 삭제 여부   |
                    |----|---------|------|----------|---------|
          | 1  | KRX 시리즈 | 철강   | OPEN_API | DELETED |
          | 2  | KRX 시리즈 | 철강   | USER     | DELETED |

        - 유저가 동일한 지수 분류명, 지수 명으로 생성한다.  
          기존에 중복된 데이터가 있어 새로 생성하지 않고 삭제 여부를 수정한다.

          | ID | 지수 분류명  | 지수 명 | 소스타입     | 삭제 여부   |
                    |----|---------|------|----------|---------|
          | 1  | KRX 시리즈 | 철강   | OPEN_API | DELETED |
          | 2  | KRX 시리즈 | 철강   | USER     | ACTIVE  |

### 협업 및 피드백

- 요구 사항을 바라보는 시각이 달랐다.
    - 나의 의견
        - 공공 데이터가 제공하는 데이터의 양은 23만개로 모든 데이터를 미리 가져온다.
        - 유저가 원하는 데이터만 보여준다.
        - 연동을 원하는 경우 이미 DB 에 있다면 보여주고 없다면 공공데이터 API 호출한다.
        - 요구할 때마다 외부 API 호출하는 건 network i/o 가 많이 발생하여 서비스 품질이 나빠진다.
    - 팀의 의견
        - 유저가 원하는 데이터만 공공데이터 API 호출하여 가져온다.
        - 이것이 요구 사항에 더 가깝다.
        - 미리 가져온 데이터를 보여줘야 할 데이터와 아닌 것으로 어떻게 구분할지 고민해야 한다.

### 코드 품질 및 최적화

- 리팩토링을 하고 상속과 composition 을 적절하게 사용하였다.

### 향후 개선 사항 및 제안

- 데이터 분석
    - 우리가 사용할 데이터에 대한 데이터 분석을 하지 못해 아쉬웠다.
    - 예를 들어 지수 분류명의 최대 글자 수, 시가 총액의 최대값 등 분석했다면 조회 로직 구현 시 많은 도움이 되었을 것이다.
    - 공공데이터 API 명세서를 보면 지수 분류명과 지수 이름은 최대 240글자라고 되어 있다.
      하지만 실제 데이터들의 최대 글자 수와 평균 글자 수를 알았다면 인덱스 전략을 어떻게 할지 도움이 되었을 것이다.
- 쿼리 성능 테스트
    - 삽입
        - PK 생성 전략이 identity 라 여러 객체를 한번에 insert 해도 query 는 하나씩 생성되어 성능 문제가 있다.
        - sequence 로 바꿔 batch insert 가 가능하도록 변경
    - 조회
        - 지수 분류명 혹은 지수 이름으로 부분 일치 조회를 한다.
        - 이 과정에서 인덱스를 생성하였는데 DB 에서 제공하는 다양한 방법들이 있었다.
            - Trigram(3글자 쪼개기)로 문자열을 3글자씩 분리하여 인덱스 생성한다.
            - 부분 일치에서 향상된 성능을 얻을 수 있다.
- 외부 API 요청 시 비동기 구현
    - 응답을 받을 때까지 사용자는 기다려야 한다.
    - 이 부분은 사용자가 불편하게 느낄 수 있으므로 응답을 받으면 이벤트 리스너를 활용해 DB 에 저장하는 과정이 필요하다.
- 자동화 빌드 및 배포
    - Github actions 로 자동화 빌드를 구축한다.
    - 위 과정에 image 를 생성하고 docker hub 에 push 를 한다.
    - railway 에서 자동으로 내려받는다.

</details>

<details>
<summary>2026-03-23</summary>

- `Transaction`
    - `Isolation`
    - tx 의 원칙 중 하나이며 tx 간 격리를 말하며 여러 tx 가 접근할 때 생기는 문제를 해결할 수 있다.
        - `Dirty Read`
            - commit 되지 않은 데이터를 다른 tx 가 접근하는 경우.
            - 만약 rollback 이 된다면 잘못된 데이터를 읽게 된다.
        - `Non-repeatable Read`
            - 같은 조회 쿼리를 보냈는데 결과가 다른 경우.
            - 돈과 관련된 서비스의 경우 큰 문제가 발생하므로 해결해야 된다.
        - `Phantom Read`
            - 같은 범위 조회 쿼리를 보냈는데 없던 데이터가 생기는 경우.
            - `select` 이후 `Select ... for Update` 하는 경우 발생한다.
    - `Serializable`
        - lock 을 걸어 조회도 쓰기도 통제한다.
        - 위 3가지 문제가 발생하지 않는다.
        - deadlock 가능성이 높다.
        - 정합성을 보장한다.
    - `Repeatable read`
        - DB 조회를 한다.
        - tx 가 끝나지 않은 상황에 또 다른 tx 가 등장한다.
        - 기존 tx 는 이후 tx 가 존재한다면 `undo log` 를 확인하여 조회를 한다.
        - `undo log` 는 데이터 수정 시 원본이 저장되며 rollback 시 DB 에 덮어씌운다.
        - 이 과정에서 여러 버전이 생길 수 있는데 과거 버전(`MVCC, Multi-Version Concurrency Control`)을 보여주어 일관성을 유지한다.
        - 이 정책은 데이터 저장을 막지 않는다.
        - 조회 -> 또 다른 tx 에 의한 데이터 삽입 -> 또 다시 조회 시 추가된 데이터가 발생되는데 이를 `Phantom Read` 라 한다.
        - 하지만 데이터 삽입은 `undo log` 에 포함되지 않아 과거 버전을 참조할 수 있다.
    - `Read committed`
        - commit 데이터만 읽도록 한다.
        - `Dirty Read` 방지하지만 나머지는 발생.
        - `PostgreSQL` 기본값.
    - `Read uncomitted`
        - 가장 낮은 격리 수준.
        - 위 3가지 문제가 발생.
        - 정확성 보다 속도가 더 중요한 경우 사용.

</details>

<details>
<summary>2026-03-31</summary>

- jpa 에서 N+1 문제는 지연 로딩에 의해 발생한다.  
  객체를 가져오긴 하는데 모든 값을 가져오지 않는다.  
  객체 내 필드를 참조할 때 DB 에 쿼리를 보내 값을 가져온다.  
  이때 연관된 객체가 있는 경우 이를 가져오기 위해 추가로 쿼리를 보낸다.  
  여기서 N+1 문제가 발생한다.
- `MapStruct` 사용 시 mapper 간 의존관계가 있을 수 있다.  
`@Mapper(uses={...})` 를 이용해 의존관계를 설정할 수 있다.  
이렇게 사용하면 알아서 주입해주기 때문에 `NPE` 가 발생하지 않는다.  
- controller 의 request dto 는 `Serializable` 이 필요하지 않다.  
요청을 받을 때 body 에 json 형태로 받아 `Jackson` 에 의해 request dto 에 주입해준다.  
dto 가 `Serializable` 필요한 경우 `Http Session clustering`, `Cache storage`, `Message Broker` 등에 사용할 때 필요하다.
- JPA 는 `FROM / JOIN` 안에 서브쿼리를 지원하지 않는다.  
- `@DataJpaTest` 시 `@Transactional` 자동으로 적용된다.  
매 테스트마다 자동으로 롤백을 해준다.  
하지만 어짜피 롤백되니까 1차 캐쉬에만 두고 실제로 DB 에 쿼리를 보내지 않는다.  
따라서 테스트할 때 `EntityManager` 를 가져와 `flush` 를 해야 한다.  
`@SpringBootTest` 할 때 롤백을 위해 `@Transactional` 을 추가한다.  
이 경우도 `flush` 가 필요하다.
- `@DataJpaTest` 는 DB 를 알아서 띄운다.  
사전에 설정한 `schema.sql` 가 있다면 이를 적용하고 싶다.  
또한 테스트를 위한 `application.yml` 를 적용하고 싶다.  
하지만 알아서 테스트 환경을 구성하기 때문에 반드시 `@AutoConfigureTestDatabase(replace = Replace.NONE)` 를 class 에 추가해야 한다.
- 테스트 DB 로 `H2` 를 사용할 때 일부 SQL 은 파싱 하지 못하는 경우가 있다.
- `@ParameterizedTest` 는 테스트할 때 값을 파라미터로 주입해준다.  
어떤 데이터가 들어올지 계산한다.  
테스트 클래스를 생성한다.  
`@BeforeEach` 실행한다.  
테스트 실행한다.
- JPA 는 `ID(pk)` 가 필요하다.  
객체와 구분하기 위함이다.  
id 생성 전략이 `identify` 일 때 삽입하기 전까지 id를 정할 수 없다.  
UUID 인 경우 java 에서 생성하여 넘겨주기 때문에 bulk insert 가 가능하다.  
객체를 생성하여 1차 캐쉬에 올라가기 위해 구분자인 id 가 필요하다.  
그래서 DB 에 삽입 쿼리를 보내 id 를 받아온다.  
id 생성 전략이 `identify` 인 경우 반드시 DB 가 알려줘야 한다.  
`Hibernate` 는 id 생성 전략이 `identify` 인 경우 bulk 연산이 안된다.  
보통의 경우 100개의 데이터를 보내면 100개의 id를 가져와 순서대로 삽입한다.  
하지만 legacy DB 혹은 driver 에 따라 100개의 id 순서를 보장못하는 경우가 있다.  
`Hibernate` 의 한계점이다.  
그래서 `identify` 일 때 bulk insert 가 불가능하여 하나씩 쿼리를 보낸다.
- `pk` 타입은 상황에 따라 결정한다.  
빠른 검색과 join이 빈번한 경우 long 이 유리하다.  
보안이나 분산 시스템을 사용하는 경우 UUID 를 사용한다.  
내부에서는 long을 쓰고 외부에 보여줄때는 UUID 를 사용한다.
- http 표준에서 request body 는 json 으로, file 도 적절하게 같이 보낼 수 없다.  
이런 경우 `multipart/form-data` 라는 content-type 을 사용하면 body 를 독자적인 part 가 되어 multi-part 중 하나가 된다.  
이 부분은 application/json 타입이고 file 은 png 같은 타입으로 분리된 part 로 취급되어 요청을 보내게 된다.
- transactional 이 있는 service 에서 entity 를 반환했다.  
tx 를 벗어나면 entity 는 jpa 가 더이상 추적하지 않는다.  
1차 캐쉬에 없기 때문이다.  
이런 상태를 `detached` 라 한다.  
만약 이 객체 내 연관된 객체의 loading 방식이 lazy 라면 tx 를 벗어났기 때문에  
`LazyInitializationException` 이 발생한다.  
이 때문에 entity 를 dto 로 반환하는 이유이다.
- `detached` 는 왜 존재할까  
http 의 stateless 때문이다.  
데이터를 수정해보자.  
id와 수정할 데이터가 주어진다.  
id가 있으니 수정할 데이터 주입해 객체를 생성한다.  
이 객체는 detached 이다.  
서비스가 이 객체를 보면 id 가 있지만 1차 캐쉬에 없어 DB와 합병하기 위해 entity manager 는 merge() 를 호출한다.  
select 쿼리를 보내 뭐가 바뀐 건지 확인 후 현재 객체 값을 그대로 update 쿼리를 보낸다.  
null 값이 있어도 그대로 업데이트 한다.  
만약 객체를 조회해 없다면 insert 쿼리를 보낸다.  
즉, merge 에서 select 는 insert 혹은 update 를 판단하기 위함이다.  
다시 돌아와서 만약 http 가 stateful 이라면 client 와 server 가 계속 연결을 유지하며 DB connection 도 유지된다.  
그래서 생성하고 수정할때 계속 1차 캐쉬에 존재하므로 detached 가 없다.  
- update 할 때 우리는 객체를 불러와 값을 수정한다.  
dirty checking 에 의해 update 쿼리가 생성된다.  
덕분에 바뀐 부분만 수정할 수 있다.  
detached, 불완전한 객체를 사용하기 보단 안전하게 영속화된 객체를 사용하자.
- 새로 생성된 객체와 detached 차이는 merge 호출이다.  
새로운 객체니까 insert 쿼리를 생성한다(persist() 호출).  
detached 는 뭐가 바뀐지 혹은 존재하는지 알기 위해 select 후 insert or update 를 한다(merge() 호출).
- 객체 조회 후 객체가 생성되는 방법은 `reflection` 을 사용하여 값을 주입해준다.

</details>

<details>
<summary>2026-04-01</summary>

- `EntityManager.clear()` 1차 캐쉬와 sql 저장소 데이터들을 삭제한다.  
java memory 에는 남아 있지만 영속화되지 않은 상태, `detached` 가 된다.
- 객체를 생성하여 `repo.save(...)` 했다. 그리고 `repo.delete(...)` 했다. 쿼리는 몇 개가 생성될까.  
id 생성 전략에 따라 다르다.  
`identify` 경우 1차 캐쉬에 올리려면 당장 DB 에 보내 id 를 받아와야 한다.  
따라서 바로 insert 쿼리를 보낸다.  
그리고 나서 delete 쿼리를 보낸다.  
`sequence`, `UUID` 전략은 쓰기 지연 때문에 바로 쿼리를 보내지 않는다.  
1차 캐쉬에 삭제 표시를 남긴다.  
dirty checking 을 건너뛰고 hibernate 가 매핑 정보를 살펴본다.  
자식 객체가 있으면 재귀적으로 탐색하여 연관된 모든 객체들에 삭제 표시를 남긴다.  
그리고 적절히 delete 쿼리를 생성한다.  
이 과정에서 삭제 N+1 문제가 발생한다.  
`OneToMany` 관계에서 부모 객체 삭제 시 cascade = remove 로 하면 N+1 문제가 생긴다.
- `Transaction` 의 `readonly=true` 는 비교할 snapshot 을 만들지 않는다.  
원본이 없으니 dirty checking 도 안하고 쿼리도 생성하지 않는다.  
`@Immutable` 도 snapshot 을 만들지 않아 자원을 크게 아낄 수 있다.  
snapshot 은 deep copy 를 하지 않는다.
- jpa 는 기본적으로 쓰기 지연이다.  
중간에 DB 에 쿼리를 보내야 한다면 sql 저장소에 있는 쿼리 모두 보낸다.  
- native java 혹은 jpa entity 설계할 때 중첩된 혹은 계층적 구조는 메모리를 더 쓰지 않는다.  
A <- B <- C vs A, B, C  
전자처럼 계층 구조와 후자처럼 단독의 경우 메모리 사용량 차이가 없다.

</details>

<details>
<summary>2026-04-02</summary>

- 객체 생성 시 자식 객체를 주입할 때 주의사항.  
Message 생성 시 User, Channel, BinaryContent 객체들을 주입한다.  
User, Channel 은 반드시 존재해야 하므로 생성 전 유무를 확인한다.  
존재한다면 실제 객체를 가져오지 않고 proxy 객체를 생성해 주입해준다.  
BinaryContent 는 새로운 객체이다.  
save 시 Message 생성하는 query 1개, BinaryContent 갯수만큼 query N개, Message-BinaryContent 의 JoinTable 생성 query N개가 발생한다.  
이때 batch size 를 설정했다면 3개의 query 가 생성된다, Message 1개, BinaryContent 1개, Message-BinaryContent 1개.  
User, Channel 가 detached 일 때 주입할 때 문제가 생긴다.  
detached 는 불안정한 상태이므로 hibernate 가 query 생성할 때 하나로 묶지 않고 개별로 query 를 생성한다.  
즉, BinaryContent 갯수만큼 query 를 생성하며 JoinTable 도 마찬가지로 N개 생성한다.
- `JPA` 가 계획하고 행동은 `Hibernate` 가 한다.  
jpa 가 `OneToOne`, `Immutable` 과 같이 설계도를 만들면 hibernate 가 이를 보고 수행한다.  
`EntityManager` 를 살펴보면 interface 이며 구현은 hibernate 가 한다.  
그래서 dirty checking, sql 쓰기 저장소, persist, ... 모든 것을 hibernate 가 한다.
- `QueryDSL` 은 (bulk) 조회, 수정, 삭제를 할 수 있다.  
생성은 불가하며 오직 `EntityManager` 만 가능하다.

</details>

<details>
<summary>2026-04-04</summary>

- `EntityManager` 의 `flush` 는 3가지 단계의 동작을 한다.  
dirty checking을 발동시킨다.  
쓰기 지연 sql 저장소에 query 를 저장한다.  
DB에 query 를 보낸다.
- message 는 channel과 user, binaryContent를 참조하고 있다.  
channel은 message를 참조하지 않는다.  
현재 1차 캐쉬에 channel, message, user가 있다.  
channel을 삭제하면 message가 삭제되어야 한다.  
flush를 하면 `TransientObjectException` 발생한다.  
이유는 같이 삭제될 message가 1차 캐쉬에 있어서 `managed` 객체가 `removed` 객체를 참조하는 현상이 발생하기 때문이다.  
이때는 clear를 통해 1차 캐쉬를 비워야 한다.
- 1차 캐쉬에 channel, message, binaryContent 가 존재한다.  
message 는 나머지를 참조한다.  
channel 을 삭제한다.  
message도 삭제되어야 한다.  
channel은 누가 나를 참조하는지 모른다.  
message는 삭제될 객체를 참조하고 있어서 정합성 문제가 생긴다.  
따라서 `TransientObjectException` 이 발생한다.  
이 문제를 해결하기 위해 1차 캐쉬를 비워야 한다.  
- message가 삭제되면 binaryContent도 삭제된다.  
message는 삭제될 예정이다.  
binaryContent는 message를 참조하지 않기 때문에 문제가 발생하지 않는다.  
binaryContent는 message의 `orphanRemoval=true` 에 의해 삭제된다.
- `CascadeType.REMOVE` vs `orphanRemoval`
  - 공통점은 부모 객체가 삭제되면 자식 객체도 삭제된다.
  - 전자는 자식과 관계를 끊어도 자식은 삭제되지 않는다.
  - 후자는 삭제된다.
- `OneToMany` 관계에서 삭제할 때 `N+1`문제가 발생한다.  
jpa는 부모 객체 삭제 시 여러 자식 객체를 하나씩 삭제한다.  
이유는 자식 객체 하나씩 살펴보면서 연관된 객체가 있는지 검사한다.  
그래서 부모 객체 삭제 쿼리 1개 + 자식 객체 삭제 쿼리 N개가 생성된다.  
만약 한번에 모든 자식 객체를 지운다면 `@PreRemove` 실행되지 못하게 된다.  
jpa는 entity의 생명주기를 완벽히 보장하기 위해 이런 방식을 선택했다.

</details>

<details>
<summary>2026-04-06</summary>

- `Filo IO` class 에 대하여.  
application이 disk에 데이터 저장을 OS에게 요청한다.  
cpu는 메모리 어느 위치에 있는지 확인한다.  
DMA(Direct Memory Access) 컨트롤러가 이 데이터를 가지고 디스크 컨트롤러에게 넘긴다.  
디스크 컨트롤러는 데이터를 저장한다.  
완료가 되면 DMA는 작업완료라고 cpu에게 interrupt를 보낸다.
- generic은 다양한 데이터 타입에 대해 동작할 수 있도록 일반화하는 기능이다.  
컴파일 시점에 타입을 체크하여 안정성 보장한다.  
런타임에는 제네릭 타입 정보가 사라진다.  
이유는 제네릭 이전 코드와 호완 때문이다.  
다음과 같이 컴파일러가 작동한다.
  ```java
  // before compile
  public <T> T get(T entity) {
    return entity;
  }
  
  String txt = get("hello");
  Integer number = get(3);
  ```
  ```java
  // after
  public Object get(Object entity) {
    return entity;
  }
  
  String txt = (String) get("hello");
  Integer number = (Integer) get(3);
  ```
- `spring bean` 생명 주기  
spring container가 bean 설정들을 읽고 `new` 로 객체 생성한다.  
객체들 간의 의존성 그래프를 확인하고 생성자를 통해 필요한 객체를 주입해준다.  
`BeanPostProcessor`는 초기화 전처리를 한다.  
`@PostConstruct`를 실행한다.  
`InitializingBean`을 구현했거나 `afterPropertiesSet`이 있다면 실행하여 초기화를 한다.  
`BeanPostProcessor`에 의해 초기화가 끝나면 후처리가 진행된다.  
`@Transactional`, `@Async`같은 AOP가 있다면 proxy를 생성하여 container에 최종 등록한다.  
이젠 사용할 수 있는 bean이다.  
container 종료 전에 모든 bean들의 `@PreDestroy`를 실행하고 소멸시킨다.
- api 특성 중 추상화, 캡슐화
  - 추상화는 복잡한 내부로직을 단순한 인터페이스를 제공하는 성질이다.  
  내부 로직 변경 시 외부 코드에 영향을 주지 않는다.
  - 캡슐화는 구현 세부사항을 보호하기 위해 숨기고 정해진 방법으로 접근할 수 있게 혹은 필요한 부분만 노출하는 성질이다.
  - api는 위와 같은 특성을 가지고 있어 사용자는 복잡한 내부 구현을 몰라도 사용할 수 있고 검증된 로직을 사용할 수 있다.
- REST 등장 배경  
기존에는 무겁고 복잡한 방식의 통신 프로토콜(SOAP, XML-RPC, ...)을 사용했다.  
새로운 프로토콜을 만들지 말고 웹의 기본인 resource 위치, http method 를 명확하고 일관되게 사용하여 resource의 state를 주고 받는 아키텍쳐이다.  
- `HATEOAS, Hypermedia As The Engine of Application State` rest api가 도달할 수 있는 가장 완변학 형태.  
클라이언트는 url을 외우지 않는다.  
서버는 데이터와 함께 url을 준다.  
이걸 바탕으로 서버에게 요청하므로 url이 변경된다 해도 클라이언트는 수정할 필요가 없다.

</details>

<details>
<summary>2026-04-08</summary>

- `File IO` 는 cpu 점유율이 굉장히 낮다.  
하지만 thread는 점유하고 있다.  
blocking으로 처리하면 작업이 완료될 때까지 기다려야 한다.  
이 요청이 많아지면 cpu는 한가한데 request를 받아줄 thread가 부족해진다.
- spring mvc의 기본 방식은 blocking io이다.  
file io를 하는 상황에서 non-blocking으로 처리해보자.  
여러 개의 file을 처리할 때 여러 개의 worker가 처리하고 모든 io 작업이 끝나길 기다리는 master thread가 필요하다.  
이것은 사실 진짜 non-blocking 방식이 아니라 위임하는 방식이다.  
원래 non-blocking은 적은 자원으로 많은 요청을 처리하는 고효율 방식이다.  
하지만 이 경우는 오히려 thread를 만드는데 자원을 더 사용하고 context switching이 더 자주 발생한다.  
non-blocking을 하고 싶으면 모든 로직을 non-blocking으로 해야한다, DB까지도.  
- JDBC는 blocking이다.  
jpa(hibernate), mybatis도 내부적으로 jdbc를 사용한다.  
DB에 query를 보내고 응답을 받을 때까지 thread는 connection을 계속 가지고 기다린다(blocking).  
그래서 앞선 로직을 다 non-blocking으로 구현해도 DB 접근이 blocking이면 의미가 없다.  
DB는 (non)blocking과 상관없고 이를 연결하는 driver와 관련있다.  
non-blocking 지원하는 대표적인 예시가 `R2DBC`이다.  
non-blocking driver를 안쓰는 이유는 jpa와 같은 강력한 기능이 없어 개발하는게 쉽지 않다.

</details>

<details>

<summary>2026-04-28</summary>

- `CascadeType` 영속성 전이 정책에 대하여
  - `PERSIST` 부모 객체가 영속화될 때 자식 객체도 영속화 한다.
  - `MERGE` `detached`인 부모 객체를 다시 `managed`로 만들 때 자식 객체도 함께 바뀐다.
  - `REMOVE` 부모 객체가 삭제되면 자식 객체도 삭제된다.
  - `ALL` 위 옵션 모두 채택한다.
- 부하 테스트를 하면서 어디서 병목이 생기는지 파악한다.
  - 먼저 소스 코드에서 개선 부분을 찾는다.
  - 더이상 개선할 수 없을 때 다른 도구를 고려한다.  
- `Hikari CP` 는 DB 와 직접적으로 소통할 수 없다.  
Driver가 DB와 물리적으로 소통한다.  
query를 `TCP/IP` 전송 데이터로 번역해준다.  
Hikari는 spring boot의 DB connection pool을 관리한다.  
postgres는 기본값으로 100개의 connection pool이 있다.  
즉 DB에 접속할 수 있는 유저는 동시에 100명이라는 것이다.  
하지만 Hikari CP 갯수는 기본값이 10개이다.  
DB의 것과 비교해 상당히 적은데 사실 많을수록 좋은 것이 아니다.  
받을 수 있는 요청이 많아지면 이것들을 처리하기 위해 context switch가 발생하여 기하급수적으로 느려진다.  
즉 app에서 요청할 수 있는 connection의 갯수를 줄여서 빠르게 처리, 반납의 과정으로 성능을 높일 수 있다.  
한 app이 DB를 독점해도 connection pool size를 많이 늘리는 것은 비추천...
- `TPS` 와 `RPS` 차이
  - 전자는 transaction per second이며 초당 요청에 대한 응답 수를 말한다.
  - 후자는 request per second 로 초당 받고 있는 요청 수를 말한다.
  - 톰캣 스레드 풀에서 하나 가져와 `HttpServletRequest`를 생성해 `DispatcherServlet`에게 넘긴다.  
  후자는 이때 생성한 request 객체들의 갯수를 세는 것이다.
  - 기본적으로 전자는 후자를 넘을 수 없다. 다만 순간적으로 넘을 수 있다.
  - 전자와 후자를 비교해 후자에 비해 전자가 낮다면 어디선가 병목이 발생하고 있다는 뜻이다.
  - 그리고 후자는 두가지 기준이 있는데 k6 같은 부하 테스트는 톰캣이 request 객체 생성과 상관없이 요청을 보낸 수이다.  
  그래서 클라이언트 기준으로 후자가 1000이고 서버 기준 300이라면 700이 버려지고 있다는 뜻이다.
  - 비동기 앱의 경우 후자가 훨씬 높다. 전자에 비해 후자가 너무 높으면 OOM이 발생할 수 있다는 의미로 해석할 수 있다.

</details>

<details>
<summary>2026-05-08</summary>

- session 기반 인증
  - 서버에서 인증을 관리한다
  - 요청을 분산하여 여러 서버가 각자 인증을 관리한다
  - 그럼 동일한 유저의 요청은 인증을 담당한 서버로 할당된다
  - 만약 한쪽으로 요청이 몰리면 처리량을 넘기게 되어 문제가 발생한다
  - 즉 완벽한 부하 분산은 어렵다는 뜻이다
  - 그래서 한 곳에 세션 정보를 저장하여 여러 서버가 공유하도록 한다
  - 세션 스토리지에서 세션을 제어할 수 있다, 즉 문제가 발생하면 세션을 삭제하여 다시 인증 받도록 할 수 있다
  - 로그아웃하면 세션 스토리지의 데이터와 쿠키 삭제
- token 기반 인증
  - jwt(json web token)을 발행하여 header 에 넘겨준다
  - 즉 브라우저에 token 을 저장한다
  - 유저 정보를 token 으로 바꿀 수 있다. 또한 token 에서 평문으로 바꿀 수 있다
  - 서버의 수평 확장이 가능하다
  - token을 한번 발행하면 이게 탈취 됬는지 모른다, 이것이 유효 여부만 알 수 있다
  - token의 유효기간을 짧게 한다면 이를 약간 해결할 수 있다
  - token 을 2개 만든다
    - access token: 유저 정보를 token 으로 만들고 유효시간을 짧게한다
    - refresh token: 새로운 access token 을 만들기 위한 token으로 유효기간이 지난 access token 을 이 token 을 이용해 만든다
      - 이 token 을 복호화 해도 유저 정보를 얻을 수 없다
      - 이 token 이 만료될 때까지 사용한다
  - token 은 복호화를 해서 사용해야 하기 때문에 단방향 해싱을 사용하지 않는다
  - 민감한 정보를 포함하여 token 을 만들면 안된다
  - 이 방식은 완벽하게 로그아웃을 구현할 수 없다, 유효한 상태에서 서버가 로그아웃한 token 인지 모른다
- cookie는 브라우저가 보관하고 요청마다 자동 전송하는 데이터이다
  - http 특성 중 하나인 stateless 를 가지는데 유저의 상태(로그인 여부 등)을 복원하는데 사용된다
  - k-v 형태
  - 쿠키는 서버에서 만들고 브라우저에 보낸다
  - 쿠키는 브라우저 별 설정을 따른다, 크롬에서 자동 로그인했다면 엣지에서 적용되지 않는다
- 로그인 시 장바구니는 세션이나 쿠키에 저장하지 않고 DB에 저장한다
- 비로그인 시 세션이나 쿠키에 저장한다, 모바일에서는 자체 in-memory db 를 사용한다
- 세션 id 가 탈취되면 ip 주소나 디바이스 장치를 비교해서 이 세션을 만료시켜 버린다
- 많은 트래픽을 감당하려면 msa 가 좀 더 편리할 것이다  
scale-out이 편리할 것이고 token 기반 인증을 택했다면 따로 뭘 추가할 필요가 없을 것이다  
session 기반 인증은 redis cluster에서 관리하는데 여기서 장애가 발생하면 복구가 좀 더 어렵다  
그러니까 장애가 발생하는 건 피할 수 없어서 얼마나 빠르게 복구할 수 있는지 대책이 중요하다  
이 관점에서 redis cluster가 좀 더 어려움이 많을 것이다

</details>

<details>

<summary>2026-05-11</summary>

- javascript 의 모든 숫자는 double 로 취급한다.  
`const number = 1` 을 해도 내부적으로 `1.0`으로 취급한다.  
단 비트 연산자를 만나면 이 순간만큼은 `int32`로 강제 변환해서 계산한다.
- java 에서 `int` type casting vs `Math.floor`  
`int`로 type casting은 정수형 메모리 공간에 할당하므로 소수점은 truncated 된다(연산속도가 빠르다).  
`Math.floor`의 반환값은 여전히 `double`이며 `infinity` 혹은 `NaN` 같은 특수 케이스를 검사하므로 '상대적'으로 무겁다.
- `인증, authuentication` vs `인가, authorization`
  - 전자는 내가 누구인지 증명, 전자를 마치고 내가 이러한 요청을 보냈을 때 허가를 받는 과정이다.
  - 후자는 반드시 전자를 거쳐야 한다.
  - 앞으로 비밀번호는 평문이 아닌 암호화된 값으로 저장한다.
  - `BCypto`, `Argon2` 같은 암호화 방식이 있다.
  - 암호화는 순수함수(입력이 같으면 출력이 같아야 한다)이며 단방향이어야 한다.
    - 출력이 같으면 입력이 같다 -> 여기서는 잘못된 명제이다.
    - 비둘기 집 원리에 의해 입력은 무한대이고 출력은 한정된 값(2의 256승, `SHA-256` 기준)이다.
    - 암호화는 결정론적이야 한다.
- `authentication` 과 `Http` 관계
  - Http 는 `stateless`, `connectionless` 특성을 가진다.
  - 한번 인증을 하면 다음 요청에도 인증을 해야 한다.
  - 매번 요청을 보낼 때 마다 유저에게 인증을 요청해야 하므로 인증 결과를 보관하는 방법이 등장했다.
- `CSRF, Cross-Site Request Forgery` site 간 요청 위조
  - 해커의 사이트와 타겟 사이트(예: 은행)가 서로 교차. 사용자의 의도가 아닌데 해커가 사용자인 척 위조하려 요청을 보냄.
  - 사용자는 로그인하여 브라우저에 인증 쿠키를 서버로 부터 발급받음.
  - 해커에게서 메일을 받아 어떤 사이트 접속.
  - 접속 시 사이트에 숨어 있던 요청을 로그인한 사이트로 전송, 이때 브라우저에 저장된 쿠키도 같이 전송.
  - 사용자의 의도와 무관하게 타 사이트에서 요청을 위조.
  - 방어법
    - `SameSite` 서버가 쿠키를 보낼 때 이 옵션을 붙이면 특정 도메인 안에서 발생한 요청에만 쿠키를 같이 보낼 수 있다.
    - 위 방법을 쓸 수 없는 구형 사이트의 경우 일회용 비밀번호(token) 사용할 수 있다.  
    요청을 보낼 때 쿠키와 token 도 같이 보내야 하는데 `CSRF` 공격으로는 token 에 접근할 수 없다.
    - `Spring Security`를 사용하면 기본적으로 `CSRF` 방어 기능이 기본값이며 `POST`, `PUT`, `DELETE`의 상태를 변화 시키는 요청을 보낼 때 token 이 없으면 `403` exception 을 던진다.
    - 일반적으로 javascript로 쿠키에 접근할 수 있다. 하지만 `HttpOnly`가 붙은 쿠키는 오직 http 요청에만 쿠키를 담아 보내게 할 수 있다.  
    그래서 `SameSite` 혹은 `CSRF Token`, `HttpOnly`로 위조 요청을 막을 수 있다.
    - 정리하자면 `HttpOnly` 는 해커가 javascript 를 실행해 저장된 쿠키를 가져가는 것을 막을 수 있다.  
    `SameSite`, `CSRF Token`은 다른 사이트를 이용해 쿠키를 함께 보내는 것을 막을 수 있다.
- `HSTS(Http Strict Transport Security)`
  - client 에게 이 domain 은 무조건 https로 접근해야 한다는 정책을 알리는 응답 header이다.
  - http protocol은 데이터를 암호화하지 않고 평문으로 보낸다.  
  패킷 캡쳐 프로그램으로 데이터를 볼 수 있다.
  - 이 헤더는 `SSL Stripping, 중간자 공격`에 의해 탄생했다.
  - `example.com`을 접속하면 먼저 http로 요청을 보낸다.
  - 중간에서 해커가 패킷을 낚아 채어 해커는 `example.com`과 https 통신을 하고 응답을 http로 보내준다.
  - 사용자는 계속 http 로 통신하므로 암호화되지 않은 정보를 해커에게 보내게 된다.
  - 이 공격을 막기 위해 등장한 것이다.
  - 패킷을 볼 수 없게 만든 기술은 `Https`이다.
  - 취약점이 있는데 `example.com`은 https 로 요청해야 한다는 사실은 최초 한번은 요청을 보내야 알 수 있다.  
  이 때 http으로 요청을 보내기 때문에 해커에게 데이터를 털릴 수 있다.  
  그래서 브라우저 내부에 `HSTS Preload list` 가 있는데 여기서 참조를 하여 자동으로 https 로 보내준다.  
  덕분에 외부로 나가는 요청은 안전하게 보낼 수 있다.

</details>

<details>
<summary>2026-05-12</summary>

- `HttpServletRequest(Response)` 는 tomcat connector 이 요청을 받아 `DispatcherServlet` 에게 전달하는 객체이다.  
  ```text
  POST /api/auth/login HTTP/1.1
  Host: localhost:8080
  Content-Type: application/x-www-form-urlencoded
  
  username=clickerheroes&password=123
  ```
  connector 는 위 text를 적절하게 parsing 하여 request 객체로 만들어준다.  
- `HttpServletRequest`는 사실 interface 로 servlet container 마다 구현하는 방법이 다르다.  
먼저 `Netty`, `Untertow` 라는 servlet container 가 있다.  
raw text를 받으면 parsing 하는 방법에 약간 차이가 있는데 request가 들어왔다고 바로 parsing 하지 않는다.  
이 과정에서 lazy parsing을 하는데 필요한 부분이 있을 때 마다 그 부분만 parsing 해서 넘겨준다.  
랜카드로 들어오는 모든 데이터는 byte array 인데 이들이 memory에 차지 하는 크기는 데이터 크기와 거의 비슷하다.  
100 byte 크기의 데이터를 받으면 memory 에 연속된 공간의 100 byte를 차지한다.  
하지만 이것을 `String` 객체로 바꾸면 공간을 훨씬 더 차지하게 되어 gc의 작업량이 많아지게 된다.  
또한 decoding 시 cpu 연산이 필요하며 필요하지 않은 byte까지 변환하게 된다면 앱의 성능이 저하될 것이다.  
- 네트워크 전송되는 데이터는 무조건 byte 이다.  
servlet container 에 전달되기 전 byte 로 전달되며 web server, api gateway 등은 필요한 부분만 parsing 하고 byte 로 전달한다.
- Tomcat의 서블릿 컨테이너는 본래 스프링 컨테이너의 Bean을 직접 알지 못하며, 스프링 시큐리티의 복잡한 구조를 관리하기 어렵다.  
그래서 톰캣의 필터 체인에는 보안 로직을 직접 수행하지 않는 가짜 filter인 `DelegatingFilterProxy`를 꽂아 넣는다.  
요청이 들어오면 `DelegatingFilterProxy`는 스프링 컨테이너를 뒤져서 `springSecurityFilterChain`이라는 이름을 가진 Bean(`FilterChainProxy`)을 찾아 모든 처리를 위임한다.  
이로써 스프링 시큐리티와 관련된 모든 보안 filter logic은 servlet container를 벗어나, DI가 자유로운 spring container 내부에서 실행되게 된다.
- 인증 방법에는 `session`, `token` 기반 방법이 있다.
- `session` 기반 인증은 인증 정보가 담긴 session 을 생성하고 session id 를 header 에 `set-cookie`로 담아 브라우저 내 cookie 로 저장된다.
- `token` 기반 인증은 token 을 발급해준다. client 는 이 token 을 header 에 담아 전송한다. 이 token을 `JWT, JSON Web Token`이라 한다.  
서버는 header 의 token 을 검증한다. 분산 환경에 적합하다.

</details>

<details>
<summary>2026-05-14</summary>

- `Http` version 에 대하여
  - `HTTP/1.1` `HTTP/1.0`은 tcp connection을 만들고 끊고를 반복했다.
    - 이 버전은 만든 connection을 재사용할 수 있다.
    - `HoL, Head of Line Blocking` 데이터는 순서대로 전달되어야 한다.  
    앞선 데이터가 거대하다면 뒤 데이터는 계속 기다려야 한다.  
    `nginx` - `tomcat` 같은 내부망 통신은 지연 시간이 거의 없어 사용될 수 있다.
    - 이 버전의 가장 중요한 문제점은 불필요한 string parsing 이 일어난다는 것이다.  
    network data 전송은 byte 형태이다.  
    `1.1`은 byte를 읽어 문자열로 변환한다.  
    변환 후 문자열을 하나하나 읽어 `GET`을 확인하고 `\r\n`을 확인해야 한다.  
    이 과정에서 cpu 연산이 필요하여 resource 낭비가 되고 있다.
  - `HTTP/2` `HoL` 문제 해결을 위해 여러 개의 데이터를 분할해 순서 상관없이 병렬로 전송할 수 있다.
    - 규격화된 데이터 구조로 전송하여 문자열을 검색할 필요없이 정해진 offset 만큼 byte를 잘라 해석할 수 있게 된다.  
    덕분에 cpu parsing 속도가 비교도 안되게 빨라졌다.
    - 하지만 `TCP`에 의한 `HoL`문제가 남아 있다. 병렬로 송신해도 수신측은 순서대로 전달해 준다.  
    만약 중간에 네트워크 오류로 인해 패킷이 유실되었다면 이미 도착한 패킷은 유실된 패킷을 받을 때 까지 기다려야 한다.  
    다행히 유실된 패킷을 포함한 전체 데이터를 요청하지 않고 필요한 부분만 요청한다.
  - `HTTP/3` `TCP`를 버리고 `UDP` 기반에 google이 만든 `QUIC` protocol을 얹어 만들었다.
    - `TCP HoL` blocking 해결했다. 유실된 패킷만 재전송을 하고 나머지는 전달된다.
    - mobile 환경에서 자주 사용된다.
- `TCP, Transmission Control Protocol`
  - 장점
    - 완벽한 신뢰성, 순서 보장.
      - 앱에서는 유실된 패킷을 걱정할 필요가 없다.
    - 흐름 제어
      - 수신자의 buffer 가 가득차면 TCP는 송신자에게 그만 보내라고 통제한다.
    - 혼잡 제어
      - 네트워크가 데이터로 넘쳐 혼잡해지면 전송 속도를 줄이고 완화되면 속도를 올린다.
  - 단점
    - 무거운 초기 연결
      - 통신을 시작하기 전에 보내도 되는지 `확인 요청 -> 가능 -> 데이터 전송` 과정을 거쳐 msa 환경에서 병목이 생긴다.
    - slow start
      - 앞서 혼잡 제어 특성 때문에 초기에는 전송 속도를 낮게 하고 점점 올린다. 대역폭을 제대로 사용하지 못할 수 있다.
    - 메모리 낭비와 상태 유지
      - 신뢰성 보장을 위해 client - server 간 buffer 를 만들고 연결 상태를 추적한다.  
      때문에 데이터를 주고 받지 않아도 수 많은 곳과 연결 때문에 memory 소모가 크다.
- `UDP, User Datagram Protocol` 는 `TCP` 와 달리 connection 을 유지하지 않는다.
  - 장점
    - 3-way handshake 를 하지 않고 바로 데이터를 전송한다.
    - 송신 후 수신하면 끝이라(connectionless, unacknowledged) server memory 를 많이 쓰지 않는다.
    - 한번에 여러 곳으로 송신이 가능해 1:N 전송에 유리하다.
  - 단점
    - 신뢰성이 부족하다. 패킷이 유실되도 책임을 지지 않아 앱에서 관련 로직을 구현해야 한다.  
    또한 순서도 보장하지 않는다.
    - 네트워크가 혼잡해도 제어하지 않고 데이터를 마구 전송한다.
    - 비연결성(connectionless), 무응답(unacknowledged) 라서 수신 완료 응답을 받지 않는다.  
    이러한 특징 때문에 비동기 시스템이나 실시간 스트리밍 아키텍처에 적합하다.
    - tomcat 과의 궁합은 좋지 않다.  
    osi/L4 에서 해주던 tcp 의 역할까지 대신하게 된다. tcp 가 여러 개로 전달된 패킷을 하나로 합쳐 L7으로 전달해줬다.  
    이 역할을 tomcat 이 해야 하는데 모든 패킷이 도착할 때 까지 담당 스레드는 계속 기다려야 한다(blocking).
- 정리하자면 L4 에서 `TCP` - `UDP` 의 변경은 L7 에 영향을 끼친다.
- `HTTPS` 에는 버전이 없다. 단지 `HTTP`에 보안 기술을 더한 것이다.  
- `SSL, Secure Sockets Layer` 초기 보안 기술이고 여러 취약점으로 사장되었다.
- `TLS, Transport Layer Security` `SSL` 의 취약점을 보완해 현재 표준이 되었다. 1.0, 1.1, 1.2, 1.3 까지 있고 1.3이 최신 표준이다.
  - `HTTP/3` 에서는 `TLS 1.3`을 강제로 내장했다.
- `XSS, Cross-Site Scripting` 는 남의 웹사이트에 몰래 js 를 심어두고 여길 접속한 유저들의 정보를 탈취하는 것이다.
  - `HttpOnly` 가 붙은 cookie 는 js 로 접근할 수 없다.
  - `SameSite` 가 붙은 cookie 는 cookie 가 허용한 domain 에서만 서버로 전달된다.
  - `CSP, Content Security Policy` 에 의해 우리가 제공한 js 이외 inline script 실행을 금지시키는 브라우저 정책이다.
- `SQL Injection` 은 server 에서 막아야 한다.  
`Hibernate`, `MyBatis`를 사용한다면 걱정없다. SQL 이 아닌 글자 자체로 인식한다.
- `Cookie` 는 server 와의 대화를 위한 데이터이다.  
Http 의 stateless 특성 때문에 매 request 마다 인증을 해야 하는 번거로움을 피하기 위함이다.  
그래서 브라우저가 가지는 local, session storage 와 별개로 `Cookies` 라는 이름의 DB가 존재한다.
- web server 에서는 https 로 보낸 요청을 복호화하여 backend server 로 전달한다.  
또한 https 요청은 http 와 전혀 다른 것이 아니라 암호화 과정이 추가된 것 이다.  
그래서 java servlet 에는 `HttpServletRequest`만 존재한다.
- `CSR` 과 `SSR`, session 과 token 기반 인증에 대해.
  - `CSR`, `SSR`
    - rendering 방식. 전자는 client 가, 후자는 server 가 rendering 하여 client 에게 넘겨준다.
    - 전자는 static resource 만 제공해주고 필요한 데이터는 server 에 요청한다.
      - nginx가 static resource를 제공
    - 후자는 필요한 데이터 모두 포함하고 rendering 까지 하여 client 에게 넘겨준다.
      - node.js 기반 front server 가 rendering 하여 넘겨준다.  
      이 과정에서 필요한 데이터가 있으면 backend 에 요청할 수 있다.
      - `React` 를 개발하고 build 하면 static resource 가 만들어지고 이걸 nginx 가 serving 하면 `CSR` 방식이 된다.
      - node.js 역시 static resource 전달하는 것이 비효율적이다.
  - `session`, `token` 기반 인증
    - 전자는 `SSR` 의 경우 session id 를 server 에 저장하고 cookie 를 보낸다.
    `CSR` 은 `JWT`를 건네주고 js가 header 에 추가하여 request 를 보낸다.
  - `SSR` 에서는 cookie 를 자동으로 보내기 때문에 `CSRF` 공격 받을 수 있다.
  - `CSR` 은 `REST API` 구조이면 header 에 token 을 담아 보내기 때문에 `CSRF` 걱정이 없다.

</details>

<details>
<summary>2026-05-15</summary>

- `@Transactional` 유무에 대한 `DB Connection pool`
  - tx 가 붙으면 tx manager, 없으면 repository 가 `Hikari` 에게 connection 을 받아 온다.
  - db 접근 시 tx 유무 차이는 생각보다 크다.
    - tx 에는 `isolation` 설정을 할 수 있는데 다른 tx가 내가 참조하는 데이터에 접근 설정을 할 수 있다.
    - tx가 없을 때 repo 에서 조회한다 -> 어떤 tx가 이 데이터를 삭제한다 -> `Non-repeatable read` 발생
    - 즉 tx 는 `ACID`를 보장하므로 DB 조회 시 추가하도록 하자.
  - tx 가 없으면 DB 에 query 를 보내지 않는다. jpa 의 쓰기 지연 때문에 sql 저장소에 query 가 쌓이지만 flush and commit 이 없기 때문에 DB에 반영이 안된다.
  - 하지만 조회는 쓰기 지연에 해당되지 않아 바로 query를 보낸다. 다만 lazy loading 이 있고 이걸 꺼낸다면 문제가 발생한다.
  - 여러모로 tx 없이 DB 접근은 많은 불편함을 동반한다.
- browser 의 `SOP, Same-Origin Policy` 덕분에 타 도메인의 데이터를 읽을 수 없다.  
예를 들어 `hacker.com` 에 접속한 유저가 있다.  
여기서 다운 받은 js에 의해 `GET /example.com` 하여 credential data 를 가져오도록 해보자.  
그럼 `CSRF Token`을 포함하여 `example.com` html 을 만들어 보내주려고 한다.  
이때 `CORS`에 의해 `example.com` html 을 `hacker.com` 으로 보내는 것을 막는다.  
`CORS` 허용 목록에 `hacker.com`이 없기 때문이다.  
`SOP`는 타 도메인의 데이터를 읽을 수 없지만 보낼 수 있다.  
읽을 수 있는 예외는 `CORS`가 허용한 도메인이다.  
그래서 사실 `SOP`에 의한 에러인데 `CORS` 에러라고 나오는 이유가 이 때문이다.  
물리적으로 jwt 를 읽을 수 없기 때문에 `CSR` 에서 `CSRF` 설정을 꺼도 된다.
- browser 의 local storage 는 domain 별로 관리한다.  
때문에 `example.com` 에 저장된 jwt 는 `hacker.com` 에서 열람할 수 없다.  
그럼 이 jwt 를 가져오기 위해 `XSS` 공격을 해야한다.  
`example.com` 에 글을 작성하고 내부에 js 를 숨긴다.  
유저가 글을 읽을 때 jwt 를 hacker 에게 전달하려 할 때 jwt 속성에 `HttpOnly` 가 붙어 있어 보낼 수 없게 된다.
- 그럼 jwt 를 가져오지 않고 이용만 한다면 ?  
jwt 를 가져온다면 영구적으로 사용할 수 있지만 이걸 사용한다면 일시적인 피해를 입을 수 있다.  
다시 돌아와서 `example.com` 에 숨겨둔 js 에 의해 http 요청을 보내 피해를 줄 수 있다.  
그래서 `XSS` 를 막기 위해 유저가 입력한 글을 모두 텍스트로 만들어 script 가 실행할 수 없는 구조로 만들어야 한다.  
또한 `CSP, Content Security Policy`에 의해 `example.com`에 의한 js 를 제외한 모든 script 를 실행할 수 없도록 한다.
- `SSR`에서 `JWT` 를 사용하면 어떨까 ?
  - **최악이다.**
  - jwt 는 모든 요청에 header 에 담아 보내야 한다.
  - `<a>`, `<form>` 등은 browser 가 실행해 준다.  
  즉 local storage 에서 jwt 를 꺼내 header 에 담아 보내줄 수 없다.  
  jwt 가 없으니 log-out 된다.
  - 만약 이러한 tag 들을 custom 한다고 하자.  
  기존 기능을 막고 새롭게 customized 한 tag 를 사용해보자.  
  fetch 가 가능하지만 url 은 변하지 않는다.  
  뒤로가기도 동작하지 않는다.  
  물론 고칠 수 있지만 굉장히 수고스럽다.
  - fetch 하여 새로운 화면으로 갈아 끼운다면 memory leak 이 발생한다.  
  기존 화면에 등록된 event listener 들이 바로 제거되지 않는다.  
  화면을 갈아 끼우는 과정에서 `Flickering` 가 발생해 UX가 낮아진다.  
  새로운 화면은 `document.body.innerHTML = newHTML` 에 의해 바뀌어 지는데 HTML5 보안 정책에 의해 `<script>`를 실행할 수 없다.  
  - 따라서 `SSR` + `JWT` 조합은 최악이다.

</details>

<details>
<summary>2026-05-18</summary>

- `UsernamePasswordAuthenticationFilter` 는 form 기반 login 요청에 대해서만 인증을 해준다.
- `SSR` 은 서버에서 화면을 그려주기 때문에 token 을 form 안에 넣어줄 수 있다.  
그래서 form 제출하면 이 값과 server 의 값을 비교한다.  
이러한 패턴을 `Synchronizer Token Pattern, 동기화 토큰 패턴`이라 한다.
- `CSR` + session + csrf token 은 session id, token 둘 다 검증하므로 `Double submit pattern` 이라 한다.  
session id 와 csrf token 을 쿠키에 담아 보낸다.  
client 는 쿠키에서 csrf token 을 꺼내 header 에 담아 요청을 보낸다.  
이 과정에서 session id 는 쿠키이므로 자동으로 담겨 진다. `HttpOnly` 라 js에서 접근할 수 없다.  
token 은 쿠키에서 꺼내 header 로 담아 서버에서 header 와 만들어 둔 token 을 비교한다.  
이 때 `HttpOnly=false` 인데 쿠키에서 꺼내 header 에 담아 보내는 것 때문에 `CSRF` 공격을 방어할 수 있다.  
`XSS` 공격은 뚫리면 `CSRF` 대비책이 소용없기 때문에 front, backend 둘 다 조심해야 한다.
- csrf token 은 session 생명 주기를 따라간다. 매번 발급하지 않는다.  
로그인 시 session id 는 없고 csrf token 은 발급해 준다.  
이는 로그인 시도 자체도 csrf 공격의 대상이 될 수 있기 때문이다.  
따라서 csrf token 만 쿠키에 담아 보낸다.  
`CSR` 경우 token 을 담아 화면을 그려줄 수 없기에 front 에서 따로 csrf token 을 생성해주는 api 요청을 해야 한다.  
그래서 이를 발급해주는 handler method 를 구현한다.  
이 때 token 은 의미없는 깡통 token 이다.  
로그인이 성공한다면 새로운 token 을 발급해준다.  
이는 미리 브라우저에 token 을 강제로 하고 로그인 유도를 하는 공격으로 부터 방어하기 위함이다.  
이 공격을 `CSRF Token Fixation` 이라 한다.
- security config 에서 `.permitAll()` 은 filter 건너뛰게 해주는 것이 아니다.  
사전에 정의된 대로 모든 filter 들을 통과하고 마지막에 권한 검사를 할 때 exception 던지지 말라는 뜻이다.
- backend server 가 하나라면 tomcat memory 에 session id 를 저장하는게 빠르고 편하다.  
tomcat 은 `SessionManager`가 있어서 모든 session id 를 가지고 있다.  
로그아웃 혹은 timeout 시 session id 를 삭제한다.

</details>

<details>
<summary>2026-05-19</summary>

- `@FunctionalInterface` 의미  
함수형 인터페이스는 무조건 람다식으로 사용하라는 의미가 아니라 추상 메서드가 단 하나라는 의미이다.  
이것은 자바 8에서 생겼으며 새로운 함수 타입을 만들지 않고 추상 메서드가 단 하나인 인터페이스들을 람다로 쓸 수 있게 하였다.  
- `AuthenticationManager` 는 함수형 인터페이스이며 `authenticate` 라는 단 하나의 추상 메서드가 있다.  
개발자는 이걸 상속받아 구현할 수 있고 정말 간단하게 람다식을 이용해 구현할 수 있다.
- `AbstractAuthenticationProcessingFilter` spring security 초창기 부터 구현되어 있었고 form 로그인을 처리하기 위한 추상 클래스이다.  
여기에는 성공, 실패, 세션 생성기 등 여러 기능들을 다 포함하는 무거운 템플릿이다.
- `AuthenticationFilter` 는 spring security 최신 버전에서 등장하였다.  
`REST API`, `JWT` 가 대세가 되면서 composition이 가능한 가벼운 filter 로 설계 되었다.
- `AuthenticationFilter` 는 `OncePerRequestFilter` 추상 클래스를 상속 받아 구현하고 있다.  
`OncePerRequestFilter` 는 `GenericFilterBean`을 상속 받고 있다.  
`GenericFilterBean`의 문제점은 하나의 http 요청이 여러 번 filter 를 거치는 버그가 발생할 수 있다.  
그래서 `OncePerRequestFilter` 는 이미 filtering 이 되었으면 다음으로 넘겨버리도록 구현했다.  
`AbstractAuthenticationProcessingFilter` 는 중복 실행 방어가 조금 허술?하게 되어 있어 이를 보완한 것이 `OncePerRequestFilter` 이다.
- `BasicAuthenticationFilter` 는 `Authorization: Basic YWRtaW46MTIzNA==` 형태의 헤더 하나만 처리하기 위한 필터이다.  
사용할 일이 없다.
- `AuthenticationManager` 는 실제로 인증을 하지 않고 가지고 있는 provider 목록을 본 다음 처리할 수 있는 provider 에게 넘긴다.
  - 이것을 구현하는 구현체는 4가지가 있다.
  - `ProviderManager` manager 로서 실질적으로 동작하는 구현체이다. 모든 provider를 가지고 있는 목록이 있다.  
  이를 순회하면서 인증가능한 provider 에게 넘긴다.
  - `AuthenticationManagerDelegator` proxy 객체이며 순환 참조를 막기 위함이다.  
  예를 들어 custom user details service 가 auth manager 를 참조하는 경우를 생각해 보자.  
  이러면 manager 가 생성되어야 service 도 생성이 된다.  
  하지만 manager 도 service 가 필요하므로 순환 참조가 발생해 exception 을 던지고 종료된다.  
  이런 일을 막기 위해 service 에게 proxy 를 준다.  
  이 문제는 초기 bean 생성하는 과정에서 발생한다.
  - `NoOpAuthenticationManager` `No Operation` 이며 아무것도 안하는 manager 이다. `NPE` 발생을 막기 위함이다.
  - `ObservationAuthenticationManager` `ProviderManager`를 감싸고 있는 wrapper class 이다. logging 하고 싶을 때 사용한다.  
  실질적인 일은 `ProviderManager` 에게 위임한다.
- `ProvideManager` 는 여러 개 존재한다.  
spring security 는 여러 개의 security filter chain 을 지원한다.  
즉 여러 개의 `SecurityFilterChain` 을 등록할 수 있다.  
여기서 각각 filter chain 마다 `ProviderManager` 를 따로 배정한다.  
이 때 해당 provider manager 가 인증을 처리하지 못하면 참조하고 있던 parent provider manager 에게 인증을 맡긴다.  
예를 들어 `/api/**`, `/admin/**` 각각 담당하는 local provider manager 가 있다.  
만약 local manager 가 인증을 처리하지 못하면 내부에 parent provider manager 에게 인증을 위임한다.  
이 때 parent manager 들은 전역적으로 인증을 처리할 수 있는 provider 들을 가지고 있다.  
여기서도 인증을 못하면 exception 을 던진다.
- `AuthenticationProvider` 실제로 인증 로직을 실행한다.
- `CsrfTokenRepository` token 을 어디에 보관할지 결정한다, session memory 혹은 browser cookie.
- `CsrfTokenRequestHandler` token 을 어디서 가져올지 결정한다, header 혹은 form.  
그리고 서버에서 가지고 있는 token 과 비교한다.  
이 때 `BREACH attack` 을 방어하기 위해 security 에서 token 을 무작위로 `XOR Hashing` 하여 보내고 있다.  
client 에서 보낸 token 을 복호화하여 서버에 있는 token 과 비교한다.
- `BREACH, Browser Reconnaissance and Exfiltration via Adaptive Compression of HyperText` 공격이란 Https 를 뚫는게 아닌 압축 알고리즘(`GZIP`)의 허점을 찌르는 공격이다.  
server 에서 client 로 web page 를 보낼 때 압축을 해서 보낸다.  
`GZIP` 은 똑같은 문자열이 반복되면 짧은 기호로 묶어 용량을 줄인다.  
hacker 는 내용은 알 수 없지만 전체 packet 은 알 수 있다.  
이 공격은 4가지 조건이 필요하다.  
  - HTTPS: packet 의 크기를 알 수 있다.
  - 압축 알고리즘 사용: 중복 문자열 발생 시 크기가 줄어 든다.
  - `SSR`: token 을 본문에 담아 보내준다.
  - `Reflected`: hacker 가 유저의 브라우저를 해킹해 hacker 가 보낸 요청이 응답 html 에 포함되어야 한다.  
  예를 들어 hacker 가 조작하여 `science` 라는 글자를 보냈고 서버에서 `science` 라는 글자를 담아 응답을 보내줘야 한다.  

token 이 `secret` 이라면 hacker 는 처음에는 `a` 를 보낸다.  
packet 크기가 줄지 않아서 첫글자로 `a`는 아니게 된다.  
이번에는 `s` 를 보낸다. packet 크기가 줄었다. 첫글자 `s`를 맞췄다.  
이런 식으로 token 을 유추할 수 있다.  
따라서 서버에서는 token 을 암호화하여 매번 다른 token 을 client 에게 보내 유추할 수 없게 한다.
- client 입장에서는 어짜피 매번 새로운 token 을 받는데 아예 server 에서 매번 새로운 token 을 발급하는 건 어떨까 ?  
매번 새로운 token 을 발급해 준다면 여러 개의 tab에는 모두 token 이 다르고 마지막으로 생성된 tab 의 token 만이 진짜가 된다.  
따라서 나머지 tab 에서 요청을 보낸다면 문제가 생기게 된다.  
또한 하나의 web page 내 여러 개의 api 요청이 있을 수 있다.  
이것들 역시 token 이 달라 front 의 state 관리가 엉망이 된다.  
따라서 실제 token 은 하나로 고정하고 매번 암호화하여 새로운 token 을 보내게 된다.  
사실 이 문제는 `SSR` 에서 발생하며 `CSR` 에서는 문제가 되지 않는다.  
`CSR` 에서는 압축 알고리즘에 대한 공격이 통하지 않기 때문이다.

</details>

<details>
<summary>2026-05-26</summary>

- `WebSocket` 하나의 `TCP` 접속에 의존하여 client - server 간 full-duplex 통신을 제공하는 protocol 이다.
- `Json Web Token`  
`JWT` 는 `stateless`를 지향한다.  
위조 불가능한 token 을 client 에게 생성해준다.  
- `JWT` 의 구조
  - `Header(알고리즘)` + `.` + `Payload(유저 정보)` + `.` + `Signature(서명)` 으로 세 부분으로 나뉜다.
  - payload 에는 민감한 정보를 넣으면 안된다. 이것은 암호화된 정보가 아니라 평문으로 복호화할 수 있다.
  - server 는 secret key 를 가지는데 header, payload 를 encoding 하고 key 를 이용해 hashing 하여 signature 를 만든다.
  - client 가 token 을 보내면 header, payload 를 hashing 하여 signature 과 비교한다.
  - DB 조회를 통해 인증을 하지 않아도 된다.
- `CSR` 에서 `JWT` 를 browser memory 혹은 load storage 에 저장한다.  
header 에 `Authorization: Bearer <JWT>` 형태로 보낸다.
- mobile 에서는 cookie 와 같은 저장 공간이 없다.  
앱 내부 혹은 mobile storage 를 사용하는데 여기에 `JWT` 를 저장하고 요청마다 header 에 담아 보낼 수 있다.
- `SSR` 에서는 페이지 이동이 일어나 cookie 를 사용해야 한다.  
`JWT` 를 cookie 에 담아 사용하면 `CSRF`, `CORS` 문제가 발생한다.  
`JWT` 는 token 의 유효기간이 있다.  
logout 을 해도 token 의 유효할 수 있어 이를 막기 위해 blacklist 에 추가한다면 DB 조회를 하게 되므로 사실상 `JWT` 사용하는 이점이 없게 된다.
- `XSS` 에 의해 token 이 탈취되면 막을 수 없기에 수명이 짧은 `Access token` 과 이를 만드는 기간이 긴 `Refresh token` 구조를 사용해야 한다.
- access token 은 `JWT` 형태로 만들어지고 수명이 존재한다. 15분처럼 짧은 시간동안 유효하다.
- refresh token 은 access token 이 만료될 때 다시 만들어 준다.  
`JWT` 형태가 아니라 무작위의 문자열이다.  
이 token 은 DB 에 저장된다.
- client 는 두 token 을 받는다. access token 이 유효하다면 빠르게 인증된다.  
유효기간이 끝났다면 client 가 보낸 refresh token 이 유효한지 DB 를 참조해 확인한다.  
유저는 새로운 access token 을 받는다.
- refresh token 은 탈취되면 위험하므로 cookie 에 저장되고 `HttpOnly`, `Secure` 속성을 부여한다.
  - `Secure` 오직 `Https` 로 요청을 보낼 때만 cookie 를 server 에 전달하도록 한다.
- `Http/Https` 둘의 차이는 secure 적용이다. 즉 통신 프로토콜은 같고 secure 가 추가된 것이다.  
front 에서 https 로 보낼 때 backend 에 인증서가 없다면 요청이 거부된다.  
반대로 https 가 적용되었는데 http 로 보낸다면 https 로 redirect 301 이 강제될 수 있다.
- `Http/Https` 는 서로 다른 port(80/443) 을 사용하므로 요청을 구분할 수 있다.  
web server 가 암호화된 요청을 풀어 backend 에게 넘겨주고 header 에 `Forwarded-Proto: https` 를 추가하면 backend 에서 https 라는 것을 알 수 있다.
- refresh token 은 반드시 https 가 강요된다.  
access token 이 만료되어 새로 발급해야 하는 경우 refresh token 이 server 로 보내야 하는데 `Secure` 속성 때문에 보낼수가 없다.
- access token 은 local storage 에 저장하면 script 로 접근할 수 있기 때문에 module 의 private variable 에 저장한다.  
이러면 `XSS` 공격으로 탈취할 수 없다.  
그러나 탈취할 수 없지만 요청은 보낼 수 있기 때문에 `CSP` 설정을 해야 한다.
- payload 는 왜 암호화하지 않는가 ?  
암호화는 비밀유지하기 위함이다.  
`JWT` 의 목적은 데이터가 위조되지 않았음을 증명하는 것이다.  
굳이 암호화할 필요가 없다.  
또한 암호화한다면 payload 에 담긴 정보 중 username, role, expiration time 같은 정보를 복호화해야 한다.  
복호화하기 위해 key 를 가져야 하는데 browser 에게 key 를 주는 것은 보안상 위험하다.
- `Https` 를 적용하기 위해 인증서가 필요하다. 인증서는 dns 에 대해 발급해준다.

</details>

<details>
<summary>2026-05-27</summary>

- **signature 는 위조 여부를 검사하기 위한 값이다.**
- `JWT` signature 만드는 방식 비교
  - `HS256(대칭키), HMAC with SHA-256`
    - secret key 가 1개이다.
      - client 가 보낸 jwt 중 header, payload 를 signature 로 만들고 비교한다.
      - client 에게 보내줄 jwt 의 signature 를 만들기 위해 secret key 를 이용한다.
      - 위 두 과정에서 동일한 secret key 를 사용한다.
    - monolithic architecture 에서 사용하기 적절하다.
    - 연산이 비교적 빠르다.
  - `RS256(비대칭키), RSA with SHA-256`
    - signature 를 만드는 private key, signature 를 확인할 수 있는 public key 가 존재한다.
    - header + payload 를 hashing 한 값을 얻는다. private key 로 암호화한다. 이게 signature 이다.
    - client 로부터 jwt 를 받는다. header + payload 를 hashing 한 값을 얻는다. signature 를 public key 로 복호화한다.  
    복호화한 값은 hash 값으로 비교한다.
    - signature 만드는 서버(인증 서버)를 분리할 수 있어 private key 를 절대 노출시키지 않을 수 있다.
    - msa 에서 사용하기 적절하다.
    - RSA 기반 암호화 방식들은 연산이 많이 필요하다.
    - 여기서 public key 의 의미는 공개되어도 문제가 없다는 것이다.  
    인증서버에서 아예 public key 를 공개할 수 있다. 다른 서버들은 이걸 가져다 쓸 수 있다.  
    public key 만 가지고 있으면 위조를 할 수 없기에 공개해도 문제가 없다.

</details>

<details>
<summary>2026-05-29</summary>

- spring `@Async` 는 `AOP` 기반으로 동작한다.  
비동기로 처리하려면 반드시 다른 class 에서 구현해야 한다(self-invocation).
- `Runnable` 이란 thread 가 독립적으로 실행할 수 있는 작업의 단위이다. input, output 도 없다.
- `DDD, Domain-Driven Design` domain 주도 개발 구조  
이것은 domain 간 결합을 줄이기 위한 수평적 의존성 끊기이다.  
만약 User domain 에서 문제가 발생한다면 이를 의존하는 다른 domain 에도 영향을 끼치게 된다.  
규모가 커지게 되면 domain 을 분리하기 편하다.
- `Layered Architecture` 의존 방향이 수직이다.  
이 구조는 controller 가 service 를, service 가 repository 를 참조한다.  
controller 는 repository 에 변화가 생겨도 이를 몰라도 된다.  
service 가 달라져도 repository 를 수정할 필요가 없다.
- Event-Driven Architecture 는 의존성을 끊을 수 있는 방법 중 하나이다(또 다른 방법으로 추상화이며 결합을 낮출 수 있다 또는 Facade pattern).  
유저 회원 가입 시 user, user_credential 을 생성해야 한다.  
후자는 auth domain 이므로 domain 간 결합이 존재한다.  
이를 제거하기 위해 event 기반 구조를 사용하자.  
user 를 생성했다는 event 를 생성하면 이를 구독하는 auth 에서 받아 처리한다.  
user 는 auth 의 존재를 모른다.  
event dto 는 생성하는 쪽에서 소유한다.
- `DDD` 는 이론적으로? 다른 domain 참조를 금한다.  
하지만 앞서 ERD 를 만들 때 entity 간 관계를 맺고 있는데 어떻게 참조를 하지 않고 개발할 수 있을까?  
먼저 User entity 는 유저 프로파일 이미지 때문에 BinaryContent 를 참조한다.  
이때 User 는 entity 가 아니라 id 를 참조하도록 바꾼다.  
문제는 데이터 조립인데 controller 에서는 user 와 profile 데이터를 원한다.  
이렇게 극단적으로 분리하면 controller 에서 user, binary content service 를 참조해야 하고 각 결과물을 controller 에서 조립하게 된다.  
이것은 책임과 역할 분리가 제대로 안된 것이다.  
controller 는 request 를 service 에게 넘겨주는 책임을 가진다.  
하지만 두 service 를 참조해 나온 결과물을 조립하는 것은 business logic 에 대해 알게 되므로 적절하지 않다.  
그래서 이런 극단적인? 경우 controller - (Facade layer) - service 라는 계층을 추가하면 된다.  
각 service 에서 나온 결과물을 조립하여 controller 에게 전해주는 역할이다.  
이러면 domain 간 의존성을 낮출 수 있고 controller 는 business logic 을 몰라도 된다.

</details>

<details>
<summary>2026-05-30</summary>

- `Reflection`은 `Runtime` 시 실행된다.  
java code 는 compiler 에 의해 java bytecode 로 바뀐다.  
이 때 code optimizing 은 없다. 단순히 jvm 만 읽을 수 있는 byte code로 바꿔준다.  
interpreter 가 이 byte code 를 읽으며 반복되는 code 가 등장하면 jit 가 os 에 맞도록 기계어로 바꾸고 caching 한다.  
reflection 은 code 가 실행하기 전까지 무슨 값이 들어오고 반환되는지 모르기 때문에 jit 는 최적화를 포기한다.  
- `Reflection` 은 왜 느릴까? **권한 검사**를 받아야 한다.  
runtime 시 `method.invoke(...)` 를 호출하면 jvm 내부 보안 로직을 거쳐야 한다. 이 과정이 복잡하다.  
- spring proxy 는 어떻게 만들어지나 ?  
compile 시 proxy class 를 만들 수 있나 ?  
자바 코드를 빌드(컴파일)하는 시점에는 개발자가 짠 순수 코드만 존재한다.  
서버가 켜질 때 어떤 설정(application.yml, 환경 변수)이 주입될지 알 수 없다.  
***실행할 때 --spring.profiles.active=prod 혹은 dev 일지 모른다.***  
따라서 설정이 확정된 순간은 runtime 이며 이 때 proxy class 에 대한 코드를 작성하여 jvm meta space 에 저장한다.  
spring 에 내장된 byte code 생성 도구인 `CGLIB` 를 이용하여 생성한다.  
- `Spring` 과 `SpringBoot`  
spring 은 bean 등록 시 `dispatcher-servlet.xml` 에 작성해야 했다.  
필요한 설정들은 복잡한 `.xml` 혹은 방대한 java config 를 작성해야 했다.  
springboot 는 이 복잡한 설정들을 간소화 시켰다.  
annotation 만으로 bean 등록할 수 있고 설정도 간편히 할 수 있다.  
또한 DI, AOP 같은 강력한 기능들을 제공하여 개발에 편리함을 더해주었다.
- spring DI 에 관하여  
spring bean 을 생성하기 위해 다른 bean 을 참조할 수 있다.  
참조하는 bean 이 aop 를 사용한다면 무조건 proxy 객체를 넘겨주고 아니면 원본 객체를 넘겨준다.
- `@Configuration` 과 `@Bean` 에 대하여  
springboot 에서 bean 등록에는 2가지 방법을 사용한다.  
`@Configuration` 을 붙인 class 내 method에 `@Bean` 을 붙여 등록한다.  
위 방법에 대해 알아본다.  
`@Configuration` 을 붙이면 `CGLIB` 에 의해 proxy 를 생성한다.  
아래와 같은 config class 가 있다.  
```java
@Configuration
public class AppConfig {

  @Bean
  public SomethingProperties somethingProperties() {
    return new SomethingProperties();
  }

  @Bean
  public SomeService someService() {
    return new SomeService(somethingProperties());
  }
}
```
runtime 시 위 코드를 `CGLIB` 가 아래와 같이 만든다.  
```java
public class AppConfigProxy extends AppConfig {
    @Override
    public SomethingProperties jwtProperties() {
        if (IoC컨테이너에_somethingProperties가_있나?) {
            return IoC컨테이너에서_꺼내줌;
        } else {
          SomethingProperties bean = super.somethingProperties();
            IoC컨테이너에_저장(bean);
            return bean;
        }
    }
}
```

```java
@Component
public class AppConfig {

  @Bean
  public SomethingProperties somethingProperties() { // (1)
    return new SomethingProperties();
  }

  @Bean
  public SomeService someService() {
    return new SomeService(somethingProperties()); // (2)
  }
}
```
bean 등록하기 위해 `somethingProperties()` 를 실행한다.  
`someService()` 도 실행한다.  
이 때 내부에서 `somethingProperties()` 를 호출하는데 앞서 등록한 bean 을 사용하는 게 아닌 객체가 주입된다.  
즉 spring container 가 관리하지 않는 유령 객체가 `SomeService()` 에 주입받게 된다.  
`SomethingProperties` 가 변경 되어도 `SomeService` 에는 변화가 없다.  
이런 것을 `Lite mode` 라고 하는데 이를 사용하는 목적은 framework 개발이나 극도의 최적화를 위해 사용한다고 한다.  
- spring aop 에서 proxy 를 만드는 건 springboot 의 기본값인 `CGLIB` 이다.  
모든 proxy 는 `CGLIB` 에 의해 만들어진다.  
`@Configuration` 는 proxy 가 생성되는게 아니라 상속을 통해 새로 작성된다.  
그래서 proxy 가 아니다.  
aop proxy 는 원본 객체를 내부에 주소값을 가지고 있어서 위임한다.  
`@Configuration` 처럼 원본 객체를 대신하여 상속한 새로운 클래스만 남기는 annotation 은 없다.  
이것은 AOP 기술과는 다르다.  
그리고 원본 없이 proxy 를 만드는 경우가 있다.  
대표적으로 `@Repository`, `@Scope(...)`, `@Lazy` 가 있다.  
  - `@Repository`  
  `JpaRepository` 를 상속 받으면 구현체를 `Hibernate`가 만들어 주는 줄 알았다.  
  상속 받으면 `JDK Dynamic Proxy` 라는 `java.lang.reflect.Proxy` 순수 java 내장 library 가 이 interface 에 대한 proxy 를 만들어 준다.  
  이 proxy library 는 `CGLIB` 이전에 많이 사용했다.  
  오직 interface 만 proxy 를 만들 수 있다.  
  여튼 실질적인 기능을 하는 원본은 `SimpleJpaRepository` 이다.  
  이건 spring data jpa 가 미리 만들었다.  
  앞선 dynamic proxy 가 만든 proxy 에 위 클래스를 연결한다.  
  그리고 query 를 보낼 때 `Hibernate` 에게 위임한다.
  - `@Scope(...)`  
  bean 생성 주기가 다른 경우에 활용할 수 있다.  
  예를 들어 bean 중에는 http session 생성마다 생성되는 bean 이 있을 수 있다.  
  이 초기 bean 등록 시 위 bean 을 참조한다면 `ScopeNotActiveException` 가 발생되어 앱이 종료한다.  
  이 문제를 해결하기 위해 proxy 를 만들어 준다.  
  - `@Lazy`  
  생성 비용이 비싸 필요할 때 생성되도록 지연하는 bean 에 사용된다.

</details>

<details>
<summary>2026-05-31</summary>

- `DDD, Domain-Drive Develop` domain 기반 개발에 대하여.  
`DDD` 는 domain 간 분리를 통해 의존성을 낮추고 응집도를 높힐 수 있다.  
strict `DDD` 는 다른 domain 을 참조하지 않는다.  
예를 들어 다른 domain 의 entity 가 아닌 id 를 참조한다.  
의존성을 없앨 수 있어 서비스 규모가 커지면 따로 분리하기 좋다.  
하지만 id 만 참조하게 되면 나중에 데이터 조립 과정이 필요하다.  
외부 기술로 부터 100% 격리하기 위해 추가적인 과정이 필요하여 생산성이 떨어진다.  
- `Pragmatic DDD` 좀 더 유연한 `DDD`.  
외부 기술로 부터 완전히 격리한다는 건 특정 기술에 의존하지 않아 확정이 자유롭다.  
하지만 jpa 를 대신할 기술이 있을까? 가까운 미래에 우리가 이걸 다른 것으로 대체할 것인가 ?  
라는 질문을 한다면 NO.  
강력한 표준 기술은 포함하되, 비즈니스 로직의 응집도와 의존성 방향은 철저하게 지키자는 것이 `실용적 DDD` 이다.  
- `global` vs `common`
  - 전자는 특정 business 와 무관한 앱의 infra 에 대한 소스를 모아둔 package 이다.
    - `@Configuration`, `@ResControllerAdvice`, filter, AOP 등.
  - 후자는 모든 domain 이 가져다 쓰는 business skeleton 이다.
    - entity super class, global base exception, 공통 utils ...
  - 의존성 방향은 domain 은 common, global 을 참조할 수 있다.  
  global 또한 common 을 참조할 수 있다.  
  common 은 domain, global 을 몰라야 한다.

</details>

<details>
<summary>2026-06-05</summary>

- `SpringBoot` 이전과 이후 비교
  - 이전에는 war 를 만들고 servlet container 위에서 동작했다. 지금은 jar 내에 embedded tomcat 이 포함되어 단독으로 실행 가능하다.
  - 이전에는 servlet container 가 먼저 생성되서 filter 를 spring container 에 등록할 수 없었다.  
  이를 하기 위해 `DelegatingFilterProxy` 를 이용하는 복잡한 방법을 사용해야 했다.
  - 지금은 servlet container 보다 spring context(`ServletWebServerApplicationContext`) 가 먼저 생성된다.  
  servlet filter 라도 bean 으로 등록할 수 있다.  
  embedded tomcat 을 객체로 생성하여 filter 들을 주입해줄 수 있다.
- `Spring Container` vs `Spring Context`
  - 전자는 bean 의 life-cycle, DI 담당하는 순수한 핵심 코어 엔진이며 `BeanFactory` 이다.
  - 후자는 `BeanFactory` 를 상속받아 app 개발에 필요한 여러 기능을 포함하는 거대한 시스템.  
  `ApplicationContext` 이며 `BeanFactory` 를 상속한다.
- `Pragmatic DDD` 는 다른 domain 참조를 허용한다.  
다만 `무엇을` 참조하느냐에 따라 달려있다.  
현재 나는 `Auth` domain 의 service 에서 `UserRepository` 를 참조하고 있다.  
`Auth` domain 이 `User` jpa entity 구조를 알아야 한다.  
이것은 캡슐화를 파괴하고 결합도를 높히게 된다.  
이를 해결하기 위해 `DIP` 를 이용하자.  
```java
public interface AuthUserProvider {
  void doSomething();
}

public class AuthService {
  private final AuthUserProvider authUserProvider;
  // ...
}

public class UserProvider implements AuthUserProvider {
  // ...
}

```
이 방법을 사용하면 다른 domain 에서 User 를 조회할 때 interface 를 정의하고 UserProvider 에 구현하면 된다.  
즉 `ISP, Interface Segregation Principle` 을 따르는 구조가 된다.
- `UserRepository` 는 User domain 을 위한 CRUD를 구현해야 한다.  
만약 다른 domain 에서 사용할 query 를 같이 구현한다면 `SRP, Single Responsibility Principle` 이 깨진다는 의미이다.  
따라서 다른 domain 을 위한 repository 를 따로 만들면 좋다.  
앞서 설명한 `UserProvider` 를 이용하거나 좀 더 복잡한 query 가 필요하면 `QDSL`을 구현하자.
이걸 `CQRS, Command and Query Responsibility Segregation` pattern 이라 한다.
- layered architecture 의 핵심 장점은 단방향 의존성을 통한 관심사 분리이다.  
하위 계층에 대한 캡슐화와 추상화를 통해 각 계층은 자신의 역할에만 집중할 수 있어서 전반적인 결합도를 낮추고 응집도를 높인다.

</details>

<details>
<summary>2026-06-08</summary>

- User domain 의 service 구현 시 다른 domain 의 repository 를 참조했었다.  
다른 domain repository 를 주입받는다는 것은 객체 지향의 캡슐화를 무시하고 타 domain 의 DB 에 접근할 수 있다.  
이는 module 간 경계를 무너뜨리는 anti-pattern 이다.  
이를 해결하기 위해 interface 를 이용한 `DIP` 를 적용했다.  
User domain 은 타 domain 이 어떻게 저장되고 영속화되는지 전혀 알 필요가 없고 추상적인 reference 혹은 interface 에 의존하게 했다.  
그 결과 타 domain 의 변화는 User domain 에 영향을 끼치지 않게 되는 `OCP` 를 달성했다.  
의존성이 단방향으로 정리되어 monolithic -> msa 로 분리하기 용이할 수 있는 유연성을 확보했다.
- layered architecture 에서 pragmatic DDD 로 전환.  
app 기능 개발에 따라 계층형 구조의 한계를 느꼈다.  
controller -> service -> repository 라는 계층 분리로 역할과 책임의 분리는 유지했으나 service logic 이 점차 비대해졌다.  
위 계층 어디에도 속하지 않는 logic 이 생겼다.  
가장 큰 문제는 domain 간 경계가 불분명 했다.  
`UserService` 을 비롯한 service 가 다른 domain repository 를 주입받는 등 캡슐화가 파괴 되었다.  
또한 `User` 는 `UserStatus` 를 참조하고 있었다.  
기능 개발에 의해 `UserStatus` 가 대체 되었는데 단순히 entity 삭제가 아닌 `UserService` 의 전반적인 logic 을 수정해야 했다.  
이를 통해 domain 간 강한 결합을 느꼈다.  
따라서 다른 domain 의 변경에 강건하도록 `DDD` 로 전환하였다.  
핵심이 되는 `User`, `Auth` domain 을 rich entity model 로 하여 객체가 상태를 결정하도록 캡슐화 했다.  
다른 domain 의 데이터가 필요한 경우 `DIP` 를 적용해 결합도를 끊었다.  
또한 `write` 를 금지하고 오직 `read` 만 하도록 했다.  
strict DDD 는 현 상황에서는 적합하지 않다고 판단했다.  
entity 가 아닌 id 를 참조하는 entity model 은 현 상황에서 생산성이 떨어지므로 참조 관계는 유지했다.

</details>

<details>
<summary>2026-06-10</summary>

- `Webhook` 은 server 간 실시간 단방향 통신을 말한다.  
특정 이벤트가 발생했을 때 다른 server 로 push 한다.  
일반적으로 api 요청하여 데이터를 가져오는 방식과 반대로서 reverse api 라고도 한다.
- lazy loading 에 의해 proxy 객체를 가져온 경우 id 조회는 가능하다.  
그 외의 값을 가져오려고 한다면 select query 가 발생한다.  
jpa buddy 에 의해 생성된 equals, hashcode 는 select query 를 발생시키지 않는다.  
부모 객체는 자식 객체를 lazy loading 에 의해 proxy 객체로 갖고 있다.  
`orphanRemoval = true` 인 proxy 자식 객체가 다른 객체로 교체된다면 설정에 의해 기존 객체는 삭제된다.  
이 때 delete query 가 발생하는데 select query 는 생성되지 않는다.  
jpa 는 proxy 가 id 를 갖고 있다는 것을 알기에 불필요한 select query 가 발생하지 않는다.

</details>

<details>
<summary>2026-06-18</summary>

- WebSocket 연결할 때 주의사항.  
ws 연결 요청에는 http 요청을 보내는데 이 때 access token 같은 인증 정보를 담아 보낼 수 없다.  
이는 브라우저가 막아놓은 것이다.  
따라서 security 설정에 의해 ws upgrade 요청은 막히게 되므로 예외로 등록해야 한다.
- stomp url 전략에 대해.  
`/pub` 은 client -> server, `/sub` 은 server -> client.  
전자는 controller 에 `@MessageMapping` 붙은 handler method 가 전달 받고 `@SendTo`로 보낸다.  
url 을 정의할 때 크게 2가지를 고려한다.  
**모든 유저가 알아야 하는 사항인가** vs **일부 유저**
  - 전자의 url 예시로 `/sub/channels`
    - 모든 유저에게 공개 채널을 알려야 한다.
  - 후자는 `/sub/users/{id}/notifications`
    - 개인적인 알림은 특정 유저만 알아야 한다.
- 전역적인 메세지를 세분화하여 보낼 때 부작용.  
예를 들어 모두에게 보내는 알림 메세지를 전역적으로 1번 보내면 되는데 모든 유저 N명에게 보낸다면  
N번의 반복문으로 N개의 메세지를 생성하고 broker 에게 N번 전송 명령을 내려야 하고 out-bound traffic 이 급증한다.
- 세분화하여 보낼 메세지를 전역적으로 보내고 front 에서 filtering 을 할 때 부작용.  
특정 유저에게 보내는 메세지를 전역 채널로 보낸다면 front 에서 이를 filtering 해야 한다.  
백그라운드에서는 계속 자원을 소모하게 된다.  
만약 개인 정보가 담긴 메세지를 받는다면 보안에 치명적이다.

</details>

<details>
<summary>2026-06-23</summary>

- `ConcurrentHashMap` 동작 원리.  
이름을 보면 알 수 있듯, thread-safe hash map 이다.  
먼저 `Map` 내부에는 array 로 이루어진 `Bucket` 이라는 공간이 있다.  
```index = hash % array.size``` index 와 bucket 은 대응된다.  
다른 hash 값이어도 동일한 bucket 에 할당될 수 있다.  
그래서 같은 bucket 에 배정되면 단일 `LinkedList` 처럼 데이터를 저장한다.  
key 가 완전히 동일하면 덮어쓴다.  
`ConcurrentHashMap` 은 조회 시 lock을 걸지 않는다.  
`Map` 에는 hash 충돌 시 다음 노드를 가리키는 pointer 가 있다.  
이 pointer 에 `volatile` 을 적용한다.  
pointer 의 값은 다음 노드를 가리키는 주소이다.  
멀티 스레딩 환경에서 아직 업데이트 하지 않은 pointer 값을 가질 수 있다.  
pointer 를 최신값으로 가져와도 저장되어 있는 값이 최신이 아닐 수 있다.  
따라서 pointer 가 가리키는 node 내부에도 volatile을 선언했다.  
이런 node 들이 저장된 bucket은 배열인데 volatile 을 선언했다.  
배열 자체에 volatile 이 적용되지만 배열이 가지고 있는 값들은 volatile 에 의해 최신 상태를 보장 못한다.  
이를 보완하기 위해 cash 를 무시하고 `getObjectVolatile(table, ptr)` 을 실행한다.  
이것은 배열의 N번째 주소를 가리키면 cash 를 무시하고 ram 에서 데이터를 읽는다.
- `volatile` 은 강제로 최신 데이터를 가져오도록 한다.  
cpu 에는 L1, L2, L3 cash 가 있다.  
원하는 데이터가 cash 에 있다면 ram 으로 데이터 조회하지 않고 갖다 쓴다.  
즉 ram 에 저장된 데이터가 최신화가 안될 수 있다.  
`volatile` 은 cash 를 비우고 무조건 데이터를 읽을 때 ram 에서 가져오도록 한다.
- `List` 에는 왜 `ConcurrentList` 가 없을까?  
`List` 는 순서가 중요하다.  
N번째 데이터를 삭제 혹은 추가를 한다면 N+1번째 이후 데이터가 움직여야 한다.  
이 때 N보다 큰 K번째 데이터를 읽는다고 하면 문제가 생긴다.  
따라서 특정칸의 데이터에 lock 을 건다는 개념이 없고 List 전체에 락을 걸어야 한다.  
이러면 성능이 매우 하락하게 된다.  
데이터의 쓰기/삭제를 원활하게 하기 위해 `LinkedList` 를 쓴다고 해보자.  
N번째 데이터를 읽으려면 `O(N)`의 시간 복잡도가 있고 읽는 도중 lock 없이 추가 삭제를 한다면 문제가 발생할 것이다.  
그럼 N번째 데이터까지 lock 을 걸면 성능이 처참해진다.  
정리하면 순서를 보장하면서 완벽한 concurrent 를 제공하는 건 구조적으로 불가능하거나 성능이 처참하다.  
애초에 멀티 스레드 환경에서 list 를 쓴다는 건 추가/삭제는 별로 없고 배열 순회가 많은 경우에 사용하기 위함이다.
- `Map` 은 내부에 `HashTable` 이라는 배열을 가지고 있다.  
이 배열은 sparse 하다.  
`Map` 은 순회할 때 배열 전체를 살펴봐야 한다.  
대부분 빈 공간이라 배열 전체를 살펴보면서 값이 있는지 확인해야 한다.
- `LinkedHashMap` 은 `Map` 과 `Linked` 를 합친 자료구조이다.  
`Map` 처럼 sparse table 을 가지고 있다.  
차이는 데이터 끼리 연결(linked)되어 있어 순회하는데 빠르다.  
즉, 전제 table 을 순회하지 않고 첫번째 데이터가 다음 데이터의 위치를 알고 있어 저장된 데이터 갯수만큼 순회한다.  
입력한 key 의 순서 보장이 중요하고 순회하는 경우가 있다면 사용하기 적합하다.

</details>
