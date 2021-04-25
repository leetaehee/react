import React, { Fragment } from 'react';
import './App.css';

function App() {
  // 감싸인 요소..
  /*
  return (
    <div>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>  
    </div>
  );
  */

  /*
  return (
      <Fragment>
        <h1>리액트 안녕!</h1>
        <h2>잘 작동하니?</h2>
      </Fragment>
  );
  */

  /*
  return (
    <>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
  */

  // 자바스크립트 표현..
  /*
  const name = '리액트';
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
  */

  // if 문 대신 조건부 연산자
  /*
  const name = '리액트';
  return (
    <div>
      {name === '리액트' ? (
          <h1>리액트입니다.</h1>
        ) : (
          <h2>리액트가 아닙니다.</h2> 
      )};
    </div>
  );
  */

  // AND 연산자(&&)를 사용한 조건부 렌더링 - 삼항연산자..
  /*
  const name = '뤼액트';
  return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>;
  */

  // AND 연산자(&&)를 사용한 조건부 렌더링
  /*
  const name = '뤼액트';
  return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>;
  */

  // undefined를 렌더링하지 않기..
  /*
  const name = undefined;
  return name;
  */

  // undefined를 렌더링하지 않기.. 단 JSX 내부에서는 괜찮음
  /*
  const name = undefined;
  return <div>{name}</div>;
  */

  // undefined를 렌더링 예외처리
  /*
  const name = undefined;
  return <div>{name || '리액트'}</div>;
  */

  // 인라인 스타일링 .. 객체 형태로 주입
  /*
  const name = '리액트';
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px', // font-size -> fontSize
    fontWeight: 'bold', // font-weight -> fontWeight
    padding: 16 // 단위를 생략하면 px로 지정됩니다. 
  };
  return <div style={style}>{name} </div>
  */

  // 인라인 스타일링 ... 직접선언
  /*
  const name = '리액트';
  return (
    <div
      style={{
        // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px', // font-size -> fontSize
        fontWeight: 'bold', // font-weight -> fontWeight
        padding: 16 // 단위를 생략하면 px로 지정됩니다. 
      }}
    >
      {name}
    </div>
  );
  */

  // class 대신 className 사용..
  /*
  const name = '리액트';
  return <div className="react">{name}</div>;
  */

  // 꼭 닫아야 하는 태그..
  // 주석..
  const name = '리액트';
  return (
    <>
      {/* 주석은 이렇게 작성합니다. */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
      >
        {name}
      </div>
      // 하지만 이런 주석이나 /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
      <input></input>
      {/* 아래 태그를 self-closing 태그라고 부릅니다. 선언하면서 동시에 닫을 수 없는 태그.. */}
      <input />
    </>
  );

  // Prettier 테스트..  자동 들여쓰기 테스트
  // 아래는 주석을 풀지말고 복사만 해서 바로 그 아래 넣을것
  /*
  const name = '리액트';
  return (
    <div>
      <div className="reacg">{
        name
      }</div>
              <h1>들여쓰기가 이상한</h1>
            <h2>코드</h2>
      <p>입니다.</p>
            </div>
  );
  */

  // 이거를 실행 할것
  /*
  const name = '리액트';
  return (
    <div>
      <div className="reacg">{name}</div>
      <h1>들여쓰기가 이상한</h1>
      <h2>코드</h2>
      <p>입니다.</p>
    </div>
  );
  */
}

export default App;
