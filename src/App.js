import React, { Component } from 'react';

// functionコンポーネント記述
const App = () => (
  // クラスコンポーネント
  <Counter></Counter>
);


class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }
  countUp =()=> {
    // console.log(current_state);
    this.setState({count:this.state.count +1});
  }
  countDown=()=> {
    // console.log(current_state);
    this.setState({count:this.state.count -1});

  }
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div>counter:{this.state.count}</div>
        <button onClick={this.countUp}>+</button>
        <button onClick={this.countDown}>-</button>
      </React.Fragment>
    )
  }
}
export default App;
