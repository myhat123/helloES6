import React from 'react';

// 函数组件
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// class组件
class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

export default Welcome;
