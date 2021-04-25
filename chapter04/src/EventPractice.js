import React, { useState } from 'react';

const EventPractice = () => {
  //const [username, setUsername] = useState('');
  //const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const { username, message } = form;

  //const onChangeUsername = (e) => setUsername(e.target.value);
  //const onChangeMessage = (e) => setMessage(e.target.value);

  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

/*
import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  // 바벨의 transform-class-propertis 문법을 이용하면 생성자 안해도 됨..
  // 이벤트 함수에 화살표 함수 사용
  //constructor(props) {
  //  super(props);
  //  this.handleChange = this.handleChange.bind(this);
  //  this.handleClick = this.handleClick.bind(this);
  //}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholde="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
*/

export default EventPractice;
