import React, { Component } from "react";
import marked from "marked";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import ClearButton from "./components/ClearButton";
import "./App.css";

const initialState = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/175px-Markdown-mark.svg.png)
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: initialState,
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  getMarkdownText() {
    var rawMarkup = marked(this.state.text, { breaks: true });
    return { __html: rawMarkup };
  }

  clearEditor = () => {
    this.setState({
      text: "",
    });
  };

  render() {
    const { text } = this.state;
    return (
      <div className='App'>
      <header>MarkDown Previewer</header>
        <div className='input'>
          <ClearButton Click={this.clearEditor}>Clear Editor</ClearButton>
          <Editor value={text} onChange={this.handleChange} />
        </div>
        <Preview className='converter' HTML={this.getMarkdownText()} />
      </div>
    );
  }
}

export default App;


/* <div className='row'>
  <div className='col-6'>
    <h4>Enter Your markdown Here</h4>
    <textarea
      name=''
      id='editor'
      cols='30'
      rows='10'
      value={text}
      onChange={this.handleChange}></textarea>
  </div>
  <div
    className='col-6'
    id='preview'
    dangerouslySetInnerHTML={this.getMarkdownText()}
  />
</div>; */