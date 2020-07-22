import React from "react";
import "./App.css";
//import Button from "button";
//import ReactDOM from "react-dom";

//const App = () => <h1>Hey</h1>;
/*
class App extends React.Component {
  render() {
    //return <h1>Hello1</h1>;
    return React.createElement("h1", null, "Hello eggHeads");
  }
}
*/
//const App = () => <h1>Hello stateless</h1>;
/*
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello2</h1>
        <b>bold </b>;
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    let txt = this.props.txt;
    return <h1>{txt}</h1>;
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired,
};

App.defaultProps = {
  txt: "this is the default txt",
};
*/
/*
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "this is the state txt",
    };
  }
  update(e) {
    this.setState({ txt: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
      </div>
    );
  }
}

const Widget = (props) => <input type="text" onChange={props.update} />;
*/
/*

class App extends React.Component {
  render() {
    return (
      <Button>
        I<Heart />
        React
      </Button>
    );
  }
}
const Button = (props) => <button>{props.childern}</button>;

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>;
  }
}

class App extends React.Component {
  render() {
    return <Title text="12345678" />;
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>;

Title.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`);
    }
    if (props[propName].length < 6) {
      return new Error(`${propName} was too short`);
    }
  },
};
*/
/*
class App extends React.Component {
  constructor() {
    super();
    this.state = { currentEvent: "----" };
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({ currentEvent: e.type });
  }
  render() {
    return (
      <div>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onFocus={this.update}
          onTouchMove={this.update}
          onTouchStart={this.update}
          onTouchEnd={this.update}
          cols="30"
          rows="10"
        />
        <h1>{this.state.currentEvent}</h1>
      </div>
    );
  }
}
*/
/*
class App extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({ val: this.state.val + 1 });
  }

  componentWillMount() {
    console.log("componentWillMount");
    this.setState({ m: 2 });
  }

  render() {
    console.log("render");

    return (
      <button onClick={this.update}>{this.state.val * this.state.m}</button>
    );
  }
  componentDiMount() {
    console.log("componentDiMount");
    this.inc = setInterval(this.update, 500);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.inc);
  }
}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById("a"));
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("a"));
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    );
  }
}
export default Wrapper;
*/
/*
class App extends React.Component {
  constructor() {
    super();
    this.state = { increasing: false };
  }
  update() {
    ReactDOM.render(
      <App val={this.props.val + 1} />,
      document.getElementById("root")
    );
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ increasing: nextProps.val > this.props.val });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }
  render() {
    console.log(this.state.increasing);
    return <button onClick={this.update.bind(this)}>{this.props.val}</button>;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`);
  }
}
App.defaultProps = { val: 0 };
*/

/*

class App extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };
  }
  componentWillMount() {
    fetch("http://swapi.co/api/people/?format=json")
      .then((response) => response.json())
      .then(({ results: items }) => this.setState({ items }));
  }
  filter(e) {
    this.setState({ filter: e.target.value });
  }
  render() {
    let items = this.state.items;
    if (this.state.filter) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    }
    return (
      <div>
        <input type="text" onChange={this.filter.bind(this)} />
        {items.map((item) => (
          // <h4 Key={item.name}>{item.name}</h4>
          <Person key={item.name} person={item} />
        ))}
      </div>
    );
  }
}
const Person = (props) => <h4>{props.person.name}</h4>;

export default App;
*/

/*
const HOC = (InnerComponent) =>
  class extends React.Component {
    constructor() {
      super();
      this.state = { count: 0 };
    }

    update() {
      this.setState({ count: this.state.count + 1 });
    }

    componentWillMount() {
      console.log("will mount");
    }
    render() {
      return (
        <InnerComponent
          {...this.props}
          {...this.state}
          update={this.update.bind(this)}
        />
      );
    }
  };
class App extends React.Component {
  render() {
    return (
      <div>
        <Button>button</Button>
        <hr />
        <LabelHOC>label</LabelHOC>
      </div>
    );
  }
}
const Button = HOC((props) => (
  <button onClick={props.update}>
    {props.childern}-{props.count}
  </button>
));

class Label extends React.Component {
  componentWillMount() {
    console.log("label will mount");
  }
  render() {
    return (
      <label onMouseMove={this.props.update}>
        {this.props.children}-{this.props.count}
      </label>
    );
  }
}
const LabelHOC = HOC(Label);
export default App;
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: " /*add your jsx here */ ",
      output: "",
      err: "",
    };
  }
  update(e) {
    let code = e.target.value;
    console.log(code);
    try {
      this.setState({
        output: window.Babel.transform(code, { presets: ["es2015", "react"] })
          .code,
        err: "",
      });
    } catch (err) {
      this.setState({ err: err.message });
    }
  }
  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
            onChange={this.update.bind(this)}
            defaultValue={this.state.input}
          />
          <pre>{this.state.output}</pre>
        </div>
      </div>
    );
  }
}
export default App;

/*
class App extends React.Component{
  render(){
    return(
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
      </Parent>
    )
  }
}
class Parent extends React.Component{
  render(){
    //console.log(this.props.children)
    //let items=React.Children
    //.forEach(this.props.children, child => console.log(child.props.className))

    //let items=React.Children.toArray(this.props.children)
    let items=React.Children.only(this.props.children)
    console.log(items)
    return null
  }
}
export default App;
*/
