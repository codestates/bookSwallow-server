'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert('books', [
      {
        title: 'CODE 코드 (반양장) - 하드웨어와 소프트웨어에 숨어 있는 언어',
        authors: '찰스 펫졸드 지음, 김현규 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=53051178&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '다른 사람들과 의사소통하기 위하여 언어를 조작하고 새로운 의미를 만들어내는 독창적인 방법들을 우리에게 보여주고 있다. 또한 다른 사람들과 의사소통을 하려는 인간의 강렬한 욕망이 어떻게, 지난 두 세기 동안 기술적인 발전을 이루어냈는지 독득한 시각을 제공해 주고 있다.',
        publisher: '인사이트',
        cover_img:
          'https://image.aladin.co.kr/product/5305/11/cover/8966261256_1.jpg',
        price: 25000,
        like_count: 0,
      },
      {
        title: '객체지향의 사실과 오해 - 역할, 책임, 협력 관점에서 본 객체지향',
        authors: '조영호 지음',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=60550259&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '위키북스 IT Leaders 시리즈 23권. 객체지향이란 무엇인가? 이 책은 이 질문에 대한 답을 찾기 위해 노력하고 있는 모든 개발자를 위한 책이다.',
        publisher: '위키북스',
        cover_img:
          'https://image.aladin.co.kr/product/6055/2/cover/8998139766_1.jpg',
        price: 20000,
        like_count: 0,
      },
      {
        title:
          '독하게 시작하는 C 프로그래밍 - 널널한 개발자의 C 언어 마스터클래스',
        authors: '최호성 지음',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=62037102&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          'C 언어 문법이나 함수 사용법보다는 프로그래밍 기법을 익히는 데 중점을 두었다. 코드 한 줄 한 줄을 독하게 파고들어 C 언어 입문자나 C를 완벽히 이해하지 못한 독자가 반드시 C 언어를 숙달할 수 있도록 돕는다.',
        publisher: '루비페이퍼',
        cover_img:
          'https://image.aladin.co.kr/product/6203/71/cover/k322433122_1.jpg',
        price: 25000,
        like_count: 0,
      },
      {
        title: '윤성우의 열혈 자료구조 - C언어를 이용한 자료구조 학습서',
        authors: '윤성우 지음',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=14783463&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '자료구조 학습의 올바른 방법과 목표를 알려주는 책으로, 자료구조를 어떠한 방법으로 어떠한 수준까지 공부해야 하는지를 선배의 입장에서 이야기한다. 부록으로 12개월간 인터넷 무료강의를 들을 수 있는 쿠폰을 제공한다.',
        publisher: '오렌지미디어',
        cover_img:
          'https://image.aladin.co.kr/product/1478/34/cover/8996094064_1.jpg',
        price: 27000,
        like_count: 0,
      },
      {
        title: 'C++로 배우는 프로그래밍의 원리와 실제',
        authors: 'Bjarne Stroustrup 지음, 류광 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=7471523&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '에이콘 프로그래밍 언어 시리즈. 이 책은 실용적인 예제를 바탕으로 최신 C++ 표준인 C++11과 C++14의 새로운 기능은 물론, 구조적 프로그래밍과 객체지향 프로그래밍, 제네릭 프로그래밍을 비롯하여 현대적인 프로그래밍 언어를 관통하는 프로그래밍 패러다임의 진수를 체득할 수 있도록 한 책이다.',
        publisher: '대웅',
        cover_img:
          'https://image.aladin.co.kr/product/747/15/cover/8986044781_1.jpg',
        price: 53000,
        like_count: 0,
      },
      {
        title: '해커의 기쁨 (제2판) - 비트와 바이트 그리고 알고리즘',
        authors: '헨리 워렌 지음, 류광 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=28565527&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '헨리 워렌이 다시금 만들어 낸, 프로그래밍 핵(hack)들의 거부할 수 없는 모음집이다. 프로그래머가 좀 더 우아하고 효율적인 소프트웨어를 만드는 데 도움이 되는 시간 절약 기법들과 알고리즘, 요령들로 가득한 책이다.',
        publisher: '제이펍',
        cover_img:
          'https://image.aladin.co.kr/product/2856/55/cover/8994506691_1.jpg',
        price: 32000,
        like_count: 0,
      },
      {
        title: '문제로 풀어보는 알고리즘 - 프로그래밍 트레이닝 Q&A',
        authors: '황인욱.김용혁 지음',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=18425560&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '알고리즘 자체를 먼저 설명하기보다 문제를 제시하고 이를 해결하면서 독자 스스로 알고리즘을 떠올리게 해준다. 네 단계의 난이도로 차별된 문제들을 보며, 입문자들은 쉬운 문제부터 어려운 문제까지 순차적으로 진행할 수 있고, 숙련자라면 자신의 수준에 어울리는 문제들만 취사선택할 수도 있다.',
        publisher: '인사이트',
        cover_img:
          'https://image.aladin.co.kr/product/1842/55/cover/8966260462_1.jpg',
        price: 25000,
        like_count: 0,
      },
      {
        title: '자바의 신 - 전2권',
        authors: '이상민 지음, 김성박.박재성 감수',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=111321886&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '현장 중심으로 자바의 기본서를 다시 정의한 <자바의 신>의 개정판이다. 23명의 베타리더 및 감수자의 의견을 반영해 독자가 생각하며 학습할 수 있도록 구성하였다. Java 8 버전 내용과 JavaFX 내용을 추가하였고, 1판 독자의 의견을 수렴하여 기본서에 더 충실할 수 있도록 내용을 수정 및 보완하였다.',
        publisher: '로드북',
        cover_img:
          'https://image.aladin.co.kr/product/11132/18/cover/899792432x_1.jpg',
        price: 30000,
        like_count: 0,
      },
      {
        title: '이펙티브 자바 - 제3판',
        authors: '조슈아 블로크 지음, 개앞맵시 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=171196410&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          "자바 플랫폼 모범 사례 완벽 가이드 '이펙티브 자바'의 개정판. 3판에는 자바 7, 8, 9에서 자바 언어와 라이브러리에 추가된 특성들을 녹여냈다. 특히 그동안 객체 지향에 치중하던 자바에 새로 도입된 함수형 프로그래밍 요소도 자세히 알아본다.",
        publisher: '인사이트',
        cover_img:
          'https://image.aladin.co.kr/product/17119/64/cover/8966262287_1.jpg',
        price: 36000,
        like_count: 0,
      },
      {
        title: '토비의 스프링 3.1 세트 - 전2권',
        authors: '이일민 지음',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=19505747&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '스프링을 처음 접하거나 스프링을 경험했지만 스프링이 어렵게 느껴지는 개발자부터 스프링을 활용한 아키텍처를 설계하고 프레임워크를 개발하려고 하는 아키텍트에 이르기까지 모두 참고할 수 있는 스프링 완벽 바이블이다.',
        publisher: '에이콘출판',
        cover_img:
          'https://image.aladin.co.kr/product/1950/57/cover/8960773433_1.jpg',
        price: 75000,
        like_count: 0,
      },
      {
        title: '인사이드 머신',
        authors: '존 스토크스 지음, 전동환.안익진 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=899792&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '아마존 컴퓨터 인터넷 부문 탑 셀러에 랭크된 이 책은 매우 훌륭한 컴퓨터 아키텍처 책으로 명료한 설명과 논리적인 구성에 최신 내용을 담고 있다. 마이크로프로세서 분야에서 몇 년의 실무 경험이 있는 사람 뿐만 아니라 이 분야에 관한 지식이 필요한 학생이나 직장인에게 필수적인 책이다. 컬러로 된 그림들과 저자의 친절한 설명은 이 책을 읽는 재미를 배가해준다.',
        publisher: '에이콘출판',
        cover_img:
          'https://image.aladin.co.kr/product/89/97/cover/8960770124_1.jpg',
        price: 26000,
        like_count: 0,
      },
      {
        title: 'ARM 리눅스 커널 - 코드로 알아보는, 제2판',
        authors: '윤석훈 외 지음',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=146454214&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '최신 ARM64 커널의 주요 서브시스템을 코드 레벨에서 분석하고 있으며, 기존 원리를 코드를 직접 쫓아가며 명쾌하게 소개한다. ARMv8 아키텍처에 대한 내용뿐만 아니라 커널의 핵심 구동 원리를 완벽히 습득하는 데 필요한 거의 모든 내용을 담고 있으며, 360여 개의 그림을 통해 이해를 돕는다.',
        publisher: '제이펍',
        cover_img:
          'https://image.aladin.co.kr/product/14645/42/cover/k052532754_1.jpg',
        price: 44000,
        like_count: 0,
      },
      {
        title: '프로그래밍 패턴 - 프로그램을 작성하는 33가지 방법',
        authors: '크리스티나 로페즈 지음, 이상주 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=62884818&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          "위키북스 프로그래밍 & 프랙티스 시리즈 10권. 이 책은 1940년대 프랑스 작가 레몽 크노가 쓴 '문체 연습'이라는 책의 형식을 빌려 다양한 방법으로 프로그램을 작성하는 방법을 알려주는 책이다.",
        publisher: '위키북스',
        cover_img:
          'https://image.aladin.co.kr/product/6288/48/cover/k792433930_1.jpg',
        price: 25000,
        like_count: 0,
      },
      {
        title: '깐깐하게 배우는 파이썬 3 - 기본기를 다져주는 단계별 학습법',
        authors: '제드 쇼 지음, 정윤원 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=179103585&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '제대로 만들어진 52단계의 연습문제를 통해 파이썬을 배운다 하다 보면 컴퓨터의 동작 원리도, 좋은 프로그램은 어떻게 보이는지도, 코드를 읽고 쓰고 생각하는 법도 배우게 된다.',
        publisher: '인사이트',
        cover_img:
          'https://image.aladin.co.kr/product/17910/35/cover/8966262317_1.jpg',
        price: 22000,
        like_count: 0,
      },
      {
        title: '스칼라로 배우는 함수형 프로그래밍',
        authors: '폴 키우사노 & 루나르 비아르드나손 지음, 류광 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=54199516&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '함수형 프로그래밍을 배우고 일상적인 코딩 업무에 적용하고자 하는 프로그래머를 위한 일련의 튜토리얼로 구성되어 있다. 이 책은 논리적이고 간결하며 명확한 단계를 거쳐 기본 기법에서 고급 주제로 나아간다.',
        publisher: '제이펍',
        cover_img:
          'https://image.aladin.co.kr/product/5419/95/cover/6000817476_1.jpg',
        price: 28000,
        like_count: 0,
      },
      {
        title: '하스켈로 배우는 함수형 프로그래밍',
        authors: '오카와 노리유키 지음, 정인식 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=64869022&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '함수형 언어인 하스켈(Haskell)의 최신 버전을 사용하면서 현업의 실무자들을 위해 자바 8, C++ 11, C, 자바스크립트, 루비 등의 각종 명령형 언어와의 차이를 설명하고, 언어마다 새로운 기능의 활용 방법과 주의점 등을 풍부하게 포함하였다.',
        publisher: '제이펍',
        cover_img:
          'https://image.aladin.co.kr/product/6486/90/cover/k952433349_1.jpg',
        price: 30000,
        like_count: 0,
      },
      {
        title: 'Head First Design Patterns - 스토리가 있는 패턴학습법',
        authors: '에릭 프리먼 외 지음, 서환수 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=582754&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          "볼 거리가 많고 재미있으면서도, 머리 속에 쏙쏙 들어오는 방식으로 구성된 'Head First' 시리즈. 패턴의 근간이 되는 객체지향 디자인 원칙, 중요한 패턴, 디자인 적용 방법, 쓰지 말아야 하는 이유까지 쿨 하게 배울 수 있는 디자인 패턴 학습법이다. 괄호 채워넣기, 퍼즐, 수수께끼, 연습문제 등 흥미 유발을 위한 독특한 구성 방식이 특징이다.",
        publisher: '한빛미디어',
        cover_img:
          'https://image.aladin.co.kr/product/58/27/cover/8979143400_2.jpg',
        price: 28000,
        like_count: 0,
      },
      {
        title:
          '엔터프라이즈 애플리케이션 아키텍처 패턴 - 엔터프라이즈 애플리케이션 구축을 위한 객체지향 설계의 원리와 기법',
        authors: '마틴 파울러 지음, 최민석 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=68433810&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          "'리팩토링'의 저자로도 잘 알려진 마틴 파울러는 이 책에서 기업용 애플리케이션을 개발할 때 직면하는 갖가지 까다로운 문제와 이 문제의 해법을 모색하는 데 도움될 만한 패턴을 소개한다.",
        publisher: '위키북스',
        cover_img:
          'https://image.aladin.co.kr/product/6843/38/cover/k632434876_1.jpg',
        price: 35000,
        like_count: 0,
      },
      {
        title: 'Code Complete - 소프트웨어 구현에 대한 실무서, 제2판',
        authors: '스티브 맥코넬 지음, 서우석 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=556698&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '10년이 넘는 기간 동안 개발자들이 더 나은 소프트웨어를 만드는 데 도움을 주었던 최고의 프로그래밍 실무 지침서, <Code Complete> 제2판. 소프트웨어 구현에 대한 예술과 과학을 설명하기 위해서 최신의 기법들과 수백 개의 새로운 예제 코드가 포함되어 개정되었다.',
        publisher: '정보문화사',
        cover_img:
          'https://image.aladin.co.kr/product/55/66/cover/8956742561_1.jpg',
        price: 36000,
        like_count: 0,
      },
      {
        title: '다양한 언어로 배우는 정규표현식',
        authors: '신야 료마.스즈키 유스케.타카타 켄 지음, 김완섭 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=77612902&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '초보자도 정규표현식을 마스터할 수 있도록 ‘정규표현식이란 무엇인가?’부터 시작해서 정규표현식의 역사/구조/이론은 물론 정규표현식 처리를 위한 VM 설계 방침이나 JIT를 이용한 최적화 방법 등 정규표현식의 모든 것을 다루고 있다.',
        publisher: '제이펍',
        cover_img:
          'https://image.aladin.co.kr/product/7761/29/cover/k522434120_1.jpg',
        price: 26000,
        like_count: 0,
      },
      {
        title: '컴파일러 구조와 원리 - 컴파일러로 배우는 언어 처리 시스템',
        authors: '아오키 미네로우 지음, 이영희 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=7739014&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '일본을 대표하는 컴파일러의 권위자 중 한 명인 저자가 컴파일러를 실제로 구축하기 위한 과정을 설명한 책. 컴파일러의 이론을 다룬 이론서나 해설서가 아니고, 오로지 구축에 목적을 둔 책으로써 프로그램 언어로 쓰여진 소스 코드가 컴퓨터 안에서 어떻게 실행되는지를 순차적으로 설명하고 있다.',
        publisher: '한빛미디어',
        cover_img:
          'https://image.aladin.co.kr/product/773/90/cover/8979147686_1.jpg',
        price: 30000,
        like_count: 0,
      },
      {
        title: '클린 코더 - 단순 기술자에서 진정한 소프트웨어 장인이 되기까지',
        authors: '로버트 C. 마틴 지음, 정희종 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=86619346&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          "acornLoft 시리즈. 이 책은 프로그래머 '밥 아저씨' 로버트 마틴이 쓴 책으로, 프로 개발자가 되는 길을 알려준다. 수십 년의 경험을 바탕으로 장인 정신, 실천 기법, 도구뿐만 아니라 프로가 가져야 할 마음가짐과 태도를 알려준다.",
        publisher: '에이콘출판',
        cover_img:
          'https://image.aladin.co.kr/product/8661/93/cover/8960778818_1.jpg',
        price: 25000,
        like_count: 0,
      },
      {
        title: '코딩 더 매트릭스',
        authors: 'Philip N. Klein 지음, 마이클 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=59668511&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '소프트웨어 개발에 자주 사용되는 선형대수의 수학적 개념과 이론적 배경, 활용 기법을 전반적으로 소개하고, 이 개념들이 실제 프로그래밍에 어떻게 적용될 수 있는지 예제와 Lab 과제를 통해 보여 준다.',
        publisher: '루비페이퍼',
        cover_img:
          'https://image.aladin.co.kr/product/5966/85/cover/6000849455_1.jpg',
        price: 48000,
        like_count: 0,
      },
      {
        title:
          '러닝 자바스크립트 - ES6로 제대로 입문하는 모던 자바스크립트 웹 개발',
        authors: '이선 브라운 지음, 한선용 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=112137604&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          'ES6를 포함하여 최신 자바스크립트 개발을 주도하는 언어 특징과 기술, 관련 도구, 패러다임을 포괄적으로 다룬다. 변수나 제어 흐름, 함수와 같은 단순하고 직관적인 주제뿐만 아니라, 비동기 프로그래밍이나 정규표현식 같은 복잡하고 난해한 개념에 이르기까지 폭넓은 범위를 커버한다.',
        publisher: '한빛미디어',
        cover_img:
          'https://image.aladin.co.kr/product/11213/76/cover/8968483388_1.jpg',
        price: 28000,
        like_count: 0,
      },
      {
        title: '함수형 자바스크립트 프로그래밍',
        authors: '유인동 지음',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=123715872&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '자바스크립트에서 함수형 패러다임을 통해 보다 효율적인 코드를 만들고자 하는 개발자를 위한 실무 밀착형 가이드다. 책 전반에 걸쳐 함수의 응용을 매우 깊이 다루며, 실용적인 접근을 항상 함께한다.',
        publisher: '인사이트',
        cover_img:
          'https://image.aladin.co.kr/product/12371/58/cover/8966262120_1.jpg',
        price: 29000,
        like_count: 0,
      },
      {
        title: '관계형 데이터베이스 실전 입문 - 원리부터 배우는',
        authors: '오쿠노 미키야 지음, 성창규 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=87023892&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          'DB를 사용하여 애플리케이션 개발을 해 본 경험이 있는 개발자를 대상으로, 관계형 모델을 이해할 수 있게 안내함으로써 좀 더 효율적으로 DB를 설계하고, 적절하게 SQL을 구사할 수 있도록 필요한 지식을 모아 둔 책이다.',
        publisher: '위키북스',
        cover_img:
          'https://image.aladin.co.kr/product/8702/38/cover/k312535383_1.jpg',
        price: 28000,
        like_count: 0,
      },
      {
        title: 'SQL 레벨업 - DB 성능 최적화를 위한 SQL 실전 가이드',
        authors: '미크 지음, 윤인성 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=75566292&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '고성능 SQL 작성 방법을 초보자 눈높이에 맞춰 다양한 예제를 통해 설명한다. 보통 비싼 라이선스 때문에 오라클 같은 엔터프라이즈급 데이터베이스를 접하기가 어려운데, 이 책은 오라클과 100% 호환을 목표로 하는 오픈소스인 PostgreSQL을 사용하여 큰 비용을 들이지 않고도 엔터프라이즈급 데이터베이스를 다루는 기술을 경험할 수 있다.',
        publisher: '한빛미디어',
        cover_img:
          'https://image.aladin.co.kr/product/7556/62/cover/8968482519_1.jpg',
        price: 24000,
        like_count: 0,
      },
      {
        title: '리팩토링 Refactoring - 코드 품질을 개선하는 객체지향 사고법',
        authors: 'Martin Fowler 지음, 김지원 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=20793053&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '리팩토링은 코드의 동작이나 의도는 유지하면서 코드의 구조, 재사용성, 가독성을 개선해 코드의 악취를 제거하고 전체 디자인을 개선하는 방법이다. 이 책은 72가지 리팩토링 기법을 통해 코드를 점진적으로 개선하는 방법을 담고 있다.',
        publisher: '한빛미디어',
        cover_img:
          'https://image.aladin.co.kr/product/2079/30/cover/8979149719_1.jpg',
        price: 30000,
        like_count: 0,
      },
      {
        title:
          '윈도우 시스템 프로그램을 구현하는 기술 - 200개 이상의 함수와 예제로 배우는 윈도우 비동기 프로그래밍 가이드',
        authors: '이호동 지음',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=55346647&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '1부에서는 동기화 객체와 관련 함수, 스레드를 통해 스레드 동기화를 구현하는 다양한 방법을 다룬다. 2부에서는 OVERLAPPED 구조체를 이용한 비동기 또는 중첩 입출력, 그리고 이와 관련된 IOCP, 비동기 소켓, 쓰레드 풀에 대하여 설명하고 IPC에 활용하는 방법을 다룬다.',
        publisher: '한빛미디어',
        cover_img:
          'https://image.aladin.co.kr/product/5534/66/cover/8968481784_1.jpg',
        price: 50000,
        like_count: 0,
      },
      {
        title: '비밀의 언어 - 암호의 역사와 과학',
        authors: '사이먼 싱 지음, 이현경 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=71299612&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '암호의 역사, 그리고 제작과 해독의 투쟁을 통해 진화해 간 암호학의 비밀스런 성과에 관한 흥미로운 이야기. 저자 사이먼 싱은 고대 이집트에서 인터넷시대인 현대 정보사회에 이르기까지 암호 작성가와 암호 해독가 들의 비밀스런 세계에 흥미진진한 생기를 불어넣는다.',
        publisher: '인사이트',
        cover_img:
          'https://image.aladin.co.kr/product/7129/96/cover/8966261663_1.jpg',
        price: 22000,
        like_count: 0,
      },
      {
        title: '윤성우의 열혈 TCP/IP 소켓 프로그래밍 - 개정판',
        authors: '윤성우 지음',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=5928062&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '눅스와 윈도우 기반에서의 소켓 프로그래밍을 함께 설명하며, 초보자에게 적절한 설명과 예제를 통해서 소켓 프로그래밍에 대한 재미를 안겨주고자 한 책이다. 2003년도에 출간된 <열혈강의 TCP/IP 소켓 프로그래밍>의 개정판. ',
        publisher: '오렌지미디어',
        cover_img:
          'https://image.aladin.co.kr/product/592/80/cover/899609403x_1.jpg',
        price: 26000,
        like_count: 0,
      },
      {
        title:
          '파이썬 라이브러리를 활용한 머신러닝 - 사이킷런 핵심 개발자가 쓴 머신러닝과 데이터 과학 실무서, 번역개정판',
        authors: '안드레아스 뮐러.세라 가이도 지음, 박해선 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=186846299&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '머신러닝과 인공지능에 대한 사전 지식이 필요 없는 입문서로, 파이썬과 사이킷런을 중심으로 머신러닝 애플리케이션을 성공적으로 만드는 모든 단계를 밟아간다.',
        publisher: '한빛미디어',
        cover_img:
          'https://image.aladin.co.kr/product/18684/62/cover/k912635663_1.jpg',
        price: 32000,
        like_count: 0,
      },
      {
        title: 'DDD Start! - 도메인 주도 설계 구현과 핵심 개념 익히기',
        authors: '최범균 지음',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=84000742&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          'DDD(도메인 주도 설계)를 처음 접하는 개발자를 위한 책. DDD를 실제 업무에 적용할 수 있도록 기본적인 이론을 설명하고 이를 구현한 코드를 바탕으로 입문자가 헤매지 않고 DDD를 학습할 수 있도록 했다.',
        publisher: '지&선(지앤선)',
        cover_img:
          'https://image.aladin.co.kr/product/8400/7/cover/8993827443_1.jpg',
        price: 25000,
        like_count: 0,
      },
      {
        title: '해커를 위한 디자인 레슨',
        authors: '데이비드 카다비 지음, 윤지혜 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=21651846&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          "디자이너의 시선을 공학적인 사고의 틀에 맞춰 풀어낸 디자인 레슨. '코믹 산스 서체는 왜 비호감 서체가 되었나?' '황금비율이 언제나 완벽하지만은 않은 이유' 등과 같은 흥미진진한 이야기를 통해 디자인의 기본을 샅샅이 파헤친다.",
        publisher: '인사이트',
        cover_img:
          'https://image.aladin.co.kr/product/2165/18/cover/8966260470_1.jpg',
        price: 25000,
        like_count: 0,
      },
      {
        title:
          '프로젝트가 서쪽으로 간 까닭은 - 프로젝트 군상의 86가지 행동 패턴',
        authors: '톰 드마르코 외 지음, 박재호 외 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=4916013&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '프로젝트의 성공과 실패를 가늠하는 86가지 인간 행위의 패턴을 이야기하고 있다. 톰 드마르코를 포함한 여섯 명의 지은이가 자신의 프로젝트 관리/컨설팅 경험을 토대로 프로젝트 진행 과정에서 나타나는 다양한 군상들의 행위가 성공과 실패에 어떠한 영향을 미치는지에 대해 말한다.19회 졸트상 수상작.',
        publisher: '인사이트',
        cover_img:
          'https://image.aladin.co.kr/product/491/60/cover/8991268684_1.jpg',
        price: 14000,
        like_count: 0,
      },
      {
        title: '소트웍스 앤솔러지 : 소프트웨어 기술과 혁신에 관한 에세이',
        authors: '마틴 파울러 외 지음, 강규영 외 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=3273852&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '21세기 소프트웨어 개발의 최전선에서 그들이 실제 경험하고 적용하여 얻은 지혜와 통찰력이 어떠한 편집과 검열도 없이 자유롭게 표출된 책. 하나의 주제로 철저한 기획력의 산물인 전형적인 기술서들과는 달리, 소트웍스 사람 하나하나의 마음을 비춰주는 문장들로 채워져 있다.',
        publisher: '위키북스',
        cover_img:
          'https://image.aladin.co.kr/product/327/38/cover/8992939248_1.jpg',
        price: 22000,
        like_count: 0,
      },
      {
        title: '조엘이 엄선한 소프트웨어 블로그 베스트 29선',
        authors: '조엘 스폴스키 지음, 강유.허영주.김기영 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=615751&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '<조엘 온 소프트웨어>의 저자 조엘 스폴스키가 소프트웨어 업계 전문가들의 블로그 글, 에세이, 강연 등 최고의 글들을 모아 한 권의 책으로 엮었다. 소프트웨어 개발 관련서답게 코딩 스타일, 프로그래머 아웃소싱, 소셜 소프트웨어, 디지털 저작권 등 소프트웨어 개발에 대한 광범위한 주제를 다루고 있다.',
        publisher: '에이콘출판',
        cover_img:
          'https://image.aladin.co.kr/product/61/57/cover/8989975840_1.jpg',
        price: 22000,
        like_count: 0,
      },
      {
        title: '테스트 주도 개발',
        authors: '켄트 벡 지음, 김창준 외 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=533945&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          "최근 학계와 업계에서 많은 주목을 받고 있는 프로그래밍 방법인 '테스트 주도 개발(Test-Driven Development)'에 대해 설명한 책이다. 테스트 주도 개발을 퍼뜨린 장본인이며 객체 지향 프로그래밍의 선구자 중 한 사람인 켄트 벡이 직접 서술했고, 부록에는 TDD 시연 동영상을 수록했다.",
        publisher: '인사이트',
        cover_img:
          'https://image.aladin.co.kr/product/53/39/cover/8991268048_2.jpg',
        price: 25000,
        like_count: 0,
      },
      {
        title: '실용주의 프로그래머',
        authors: '앤드류 헌트 & 데이비드 토머스 지음, 김창준 외 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=38786788&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          "'실용적인 프로그래머'들의 경험에서 우러나오는 정제된 통찰과 지혜를 통해, 더 나은 프로그래머가 되도록 돕는 탈무드다. '어떻게' 보다는 '왜'를 생각하게 한고, 어떤 언어를 쓰고, 어떤 분야를 다루든지 상관없이 읽을 수 있다.",
        publisher: '인사이트',
        cover_img:
          'https://image.aladin.co.kr/product/3878/67/cover/8966261035_1.jpg',
        price: 25000,
        like_count: 0,
      },
      {
        title: '생각하는 프로그래밍 - 프로그래밍 본질에 관한 15가지 에세이',
        authors: '존 벤틀리 지음, 윤성준 외 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=34229085&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '프로그래밍에서 이런 사고력 훈련의 첫걸음은 데이터 구조나 알고리즘 같은 기초를 적절히 학습하고 이를 코드로 구현하고 단계적으로 개선해 가는 것으로 시작할 수 있다. 이 책은 이런 수련을 하는 데 유용한 고전이다.',
        publisher: '인사이트',
        cover_img:
          'https://image.aladin.co.kr/product/3422/90/cover/8966260993_1.jpg',
        price: 22000,
        like_count: 0,
      },
      {
        title: '맨먼스 미신 - 소프트웨어 공학에 관한 에세이',
        authors: '프레더릭 브룩스 지음, 강중빈 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=54124435&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '지은이 프레더릭 브룩스는 IBM 시스템/360 제품군과 그 운영 체제인 OS/360 프로젝트 관리자를 맡으며 겪었던 경험과 그 일에서 비롯된 깨달음을 녹여내 복잡한 프로젝트에 당면해 있는 개발자들과 관리자들에게 통찰을 제시한다.',
        publisher: '인사이트',
        cover_img:
          'https://image.aladin.co.kr/product/5412/44/cover/8966261329_1.jpg',
        price: 22000,
        like_count: 0,
      },
      {
        title: '소프트웨어 컨플릭트 2.0 - 개정판',
        authors: '로버트 L. 글래스 지음, 박재호 외 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=872121&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          "바쁘게 돌아가는 소프트웨어 개발 업계에서 '늘 그래왔다'는 변명이란 이름으로 반복되는 오류를 한 번쯤 제거하고 싶었던 적이 있었다면 이 책에 귀 기울여 보자. 50년 실무 개발 경력자가 소프트웨어 개발 업계에 던지는 날카로운 비평과 시대를 뛰어넘는 논쟁의 세계로 여러분을 초대한다.",
        publisher: '위키북스',
        cover_img:
          'https://image.aladin.co.kr/product/87/21/cover/8995856408_2.jpg',
        price: 22000,
        like_count: 0,
      },
      {
        title:
          '미래를 바꾼 아홉 가지 알고리즘 - 컴퓨터 세상을 만든 기발한 아이디어들',
        authors: '존 맥코믹 지음, 민병교 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=26837584&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '우리가 컴퓨터를 사용할 때, 컴퓨터 안에서는 무슨 일이 일어나고 있을까? 존 맥코믹은 이를 가능케 한 아홉 가지 위대한 알고리즘 이면의 기본적 아이디어를 다양한 비유와 예를 활용해 쉽고 정확하게 설명한다.',
        publisher: '에이콘출판',
        cover_img:
          'https://image.aladin.co.kr/product/2683/75/cover/8960774383_1.jpg',
        price: 18800,
        like_count: 0,
      },
      {
        title: '클린 코드 Clean Code - 애자일 소프트웨어 장인 정신',
        authors: '로버트 C. 마틴 지음, 이해영.박재호 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=34083680&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '로버트 마틴은 이 책에서 혁명적인 패러다임을 제시한다. 그는 오브젝트 멘토(Object Mentor)의 동료들과 힘을 모아 ‘개발하며’ 클린 코드를 만드는 최상의 애자일 기법을 정제해 책 한 권에 담았다.',
        publisher: '인사이트',
        cover_img:
          'https://image.aladin.co.kr/product/3408/36/cover/8966260950_1.jpg',
        price: 33000,
        like_count: 0,
      },
      {
        title: '알고리즘 산책 - 수학에서 제네릭 프로그래밍까지',
        authors: '알렉산더 A. 스테파노프 외 지음, 서환수 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=147966155&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '제네릭 프로그래밍의 개념을 적용해 STL을 만든 스테파노프가 강의하고, 다니엘 로즈가 정리한 프로그래밍과 수학 이야기. 제네릭 프로그래밍의 원리와 추상화에 대한 수학 개념을 살펴보면서 간결하고 정확한 코드를 작성하는 원리를 깨우친다.',
        publisher: '길벗',
        cover_img:
          'https://image.aladin.co.kr/product/14796/61/cover/k492532258_1.jpg',
        price: 26000,
        like_count: 0,
      },
      {
        title: '린 스타트업 - 지속적 혁신을 실현하는 창업의 과학',
        authors: '에릭 리스 지음, 이창수.송우일 옮김',
        url:
          'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=20648680&copyPaper=1&ttbkey=ttba9767tklp1154001&start=api',
        description:
          '린 스타트업의 창시자인 에릭 리스가 여러 번의 창업 실패와 성공 경험에 린 제조의 교훈을 접목해 스타트업 창업에 필요한 과학적인 접근 방식을 린 스타트업이라는 방법론으로 제시한다.',
        publisher: '인사이트',
        cover_img:
          'https://image.aladin.co.kr/product/2064/86/cover/8966260578_1.jpg',
        price: 18000,
        like_count: 0,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('books', null, {});
  },
};
