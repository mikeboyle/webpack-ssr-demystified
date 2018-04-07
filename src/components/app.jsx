const React = require("react");
const CoolDivs = require("./cool-divs");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      numOfDivs: 0
    };
  }

  handleClick() {
    const newNum = this.state.numOfDivs + 1;
    this.setState({
      numOfDivs: newNum
    });
  }

  render() {
    return(
      <div className="cool-div-app">
        <h1>Let's make some cool divs!</h1>
        <button className="btn" onClick={this.handleClick}>
          Click me to make a div!
        </button>
        <CoolDivs
          numOfDivs={this.state.numOfDivs}
        />
      </div>
    );
  }
}

module.exports = App;
