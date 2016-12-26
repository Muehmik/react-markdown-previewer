import React from 'react';

require('./App.css');

const marked = require('marked');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Hello</h1>
            <textarea onChange={this.handleChange.bind(this)} value={this.state.markdown} style={{width: 500}} className="form-control"/>
          </div>
          <div className="col-md-6">
            <h1>Preview</h1>
            <div dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
