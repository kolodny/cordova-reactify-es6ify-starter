var React = require('react');

class Hello {
  constructor(name = 'World') {
    this.name = name;
  }
  valueOf() {
    return 'Hello ' + this.name;
  }
}

debugger;

console.log(React.renderToString(<div> {new Hello()} </div>));
