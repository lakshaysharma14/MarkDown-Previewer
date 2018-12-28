import React, { Component } from 'react';
import './App.css';
import sample from './sample.js';


let marked=require('marked');

class App extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      value:sample
     
    }
  }

//-------------------------------------------------------------------------------------
  
  handleChange = (e)=> 
  {
    this.setState({
      value: e
    });
    console.log(this.state.userInput);
  }

  getMarkdownText(ele) 
  {
    var rawMarkup = marked(ele, {sanitize: true});
    return { __html: rawMarkup};
  }

//--------------------------------------------------------------------------------------
render() 
{
  let {value} = this.state
  return (
    <div >
       
        <div className="card-panel #212121 grey darken-4">
          <h1 id = "one" className="center yellow-text bold">__^^MarkdownPreviewer^^__</h1>
        </div>

        
       <div className="col s6 ">
       <textarea id="editor" className="card-panel #e6ee9c lime lighten-3"
          value={value}
          placeholder="Input"
          rows="35"
          // cols="10"
          onChange={(e)=>this.handleChange(e.target.value)}
          /> 
      </div>

      <h4 className="center card-panel #dd2c00 deep-orange accent-4 ">$!-Markdown Result-!$</h4>

      <div className="col s6 card-panel #dcedc8 light-green lighten-4">
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(value)}} />
      </div>
     
    </div>
  );
}
}

export default App;