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
`/src/main/resources` 를 바탕으로 `/static`, `/public`, `/resources`, `/META-INF/resources` 내 resource 를 불러올 수 있다.  
예를 들면 `/static/css/hello.css` 를 요청하기 위해 `http://localhost:8080/css/hello.css` 로 하면 된다.
- path 를 추가하고 싶다면 `.yml` 에 다가 `spring.web.resources.static-locations: classpath:/custom-location/`  라고 하면 된다.
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
- `Thread` process 내  실행되는 흐름의 단위이며 process 내 존재한다.  
process 내 여러 thread 가 존재할 수 있으며 resource 를 공유한다.  
- process 공간
  - `Code`, `Data`, `Heap`, `Stack` 
- thread 만의 독립적인 공간이 있다.
  - `Program Counter` thread 가 현재 실행 중인 명령어의 주소 저장소(어디까지 작업했는지 기록). 
  - `Register Set` CPU 의 register 를 저장(현재 계산 중인 임시 데이터).
  - `Stack` method 호출 시 local variable 과 복귀 주소를 저장.

</details>