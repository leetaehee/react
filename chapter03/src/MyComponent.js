import React from 'react';
//import { Component } from 'react';
import PropTypes from 'prop-types';

/** 클래스형 컴포넌트 */
/*
class MyComponent extends Component {
  static defaultProps = {
    name: '이태희',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다.
        <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}
*/

/** 함수형 컴포넌트 */
const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다. <br />
      Children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

/* 클래스형 컴포넌트의 경우는 아래와같이 안하고 클래스안에서도 지정할 수 있다. */
MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
