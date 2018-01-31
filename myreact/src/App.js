import React, {Component} from 'react';
import './App.css';


// 组件
// function formatDate (date) {
//   return date.toLocaleDateString();
// }

// function Comment (props) {
//   return (
//     <div className="Comment">
//       <div className="userInfo">
//         <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
//         <div className="UserInfo-name">{props.author.name}</div>
//       </div>
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{formatDate(props.date)}</div>
//     </div>
//   )
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning react!',
//   author: {
//     name: 'hello kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Comment date={comment.date} text={comment.text} author={comment.author}></Comment>
//       </div>
//     );
//   }
// }


// 组件拆分
// function formatDate (date) {
//   return date.toLocaleDateString();
// }

// function Avatar (props) {
//   return (
//     <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name}/>
//   );
// }

// function UserInfo (props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">{props.user.name}</div>
//     </div>
//   )
// }

// function Comment (props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment.date">{formatDate(props.date)}</div>
//     </div>
//   )
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning react!',
//   author: {
//     name: 'hello kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Comment date={comment.date} text={comment.text} author={comment.author}></Comment>
//       </div>
//     );
//   }
// }







/* ******************************************* state 和生命周期 **************************************************** */




// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     // 构造函数是唯一能够初始化this.state的地方
//     this.state = {date: new Date()};
//   }

//   // 生命周期钩子，当Clock的输出插入到DOM中时触发
//   componentDidMount() {
//     this.timeID = setInterval(() => this.tick(), 1000);
//   }

//   // 生命周期钩子,Clock组件从DOM中移除时触发
//   componentWillUnmount() {
//     clearInterval(this.timeID);
//   }

//   tick() {
//     //this.state.comment = 'Hello'不会重新渲染组件：
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>hello world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render () {
//     return (
//       <Clock />
//     )
//   }
// }



/* ******************************************* 事件处理 **************************************************** */

// class Toggle extends React.Component {
//   constructor (props) {
//     super(props);
//     console.log(this);
//     this.state = {isToggleOn: true};

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick () {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render () {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     )
//   }
// }

// class App extends Component {
//   render () {
//     return (
//       <Toggle />
//     )
//   }
// }

/* ******************************************* 条件渲染 **************************************************** */

// 组件的 render 方法返回 null 并不会影响该组件生命周期方法的回调。例如，componentWillUpdate 和 componentDidUpdate 依然可以被调用。

// function WarningBanner (props) {
//   if(!props.warn) {
//     return null;
//   }

//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   )
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: true}
//     console.log(this);
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick () {
//     this.setState(prevState => ({
//       showWarning: !prevState.showWarning
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <Page />
//     )
//   }
// }


/* ******************************************* 列表 和 key **************************************************** */

//Keys可以在DOM中的某些元素被增加或删除的时候帮助React识别哪些元素发生了变化。

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number, index) => 
//   <li key={index}>{number}</li>
// )

// class App extends Component {
//   render () {
//     return (
//       <ul>{listItems}</ul>
//     )
//   }
// }


//如果你提取出一个ListItem组件，你应该把key保存在数组中的这个<ListItem />元素上，而不是放在ListItem组件中的<li>元素上。

// function ListItem (props) {
//   return <li>{props.value}</li>;
// }

// function NumberList (props) {
//   const numbers = props.numbers;
//   // const ListItems = numbers.map((number) => 
//   //   <ListItem key={number.toString()} value={number} />
//   // )

//   //如果一个map()嵌套了太多层级，那可能就是你提取出组件的一个好时机。


//   return (
//     <ul>
//       {numbers.map((number) => 
//         <ListItem key={number.toString()} value={number} />
//       )}
//     </ul>
//   )
// }

// const numbers = [1, 2, 3, 4, 5];

// class App extends Component {
//   render () {
//     return (
//       <NumberList numbers={numbers} />
//     )
//   }
// }



// notice: Post组件可以读出props.id，但是不能读出props.key

  // const content = posts.map((post) =>
  //   <Post
  //     key={post.id}
  //     id={post.id}
  //     title={post.title} />
  // );

/* ******************************************* 表单 **************************************************** */

// class NameForm extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange (event) {
//     this.setState({value: event.target.value.toUpperCase()});
//   }

//   handleSubmit (event) {
//     alert('A name was Submitted ' + this.state.value);
//     event.preventDefault();
//   }

//   render () {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     )
//   }
// }

// class App extends Component {
//   render () {
//     return (
//       <NameForm />
//     )
//   }
// }


// select
// class FlavorForm extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite la Croix flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="Grapefruit">Grapefruit</option>
//             <option value="Lime">Lime</option>
//             <option value="Coconut">Coconut</option>
//             <option value="Mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit"/>
//       </form>
//     )
//   }
// }

// class App extends Component {
//   render () {
//     return (
//       <FlavorForm />
//     )
//   }
// }





//当你有处理多个受控的input元素时，你可以通过给每个元素添加一个name属性，来让处理函数根据 event.target.name的值来选择做什么。


/* ******************************************* 状态提升 **************************************************** */

const scaleNames = {
  c: 'Celsius',
  f: 'Fahreneit'
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    // this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    // const temperature = this.state.temperature; props是只读的
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input type="text" value={temperature} onChange={this.handleChange}/>
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />

      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Calculator />
    )
  }
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水会烧开</p>;
  }
  return <p>水不会烧开</p>;
}

/* ******************************************* 组合和继承 **************************************************** */










/* ******************************************* 高阶 **************************************************** */

export default App;