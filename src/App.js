import './App.css';
import { React } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';

function App() {
  const run = () => {

    let htmlCode = document.getElementsByClassName("cm-content")[0].innerText;
    let cssCode = "<style>" + document.getElementsByClassName("cm-content")[1].innerText + "<style>";
    let jsCode = document.getElementsByClassName("cm-content")[2].innerText;
    let output = document.querySelector(".editor #output");

    // console.log(htmlCode,cssCode,jsCode,output);
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(jsCode);
  }
  return (
    <div className="App">
    <h1>Online Code Compiler</h1>
      <hr className='upperHr'/>
      <div className="editor">
        <div className='inputFields'>
          <div className='lang-box'>
          <h2> <span> HTML </span> </h2>
            <CodeMirror id="html-code" height="350px"  extensions={[html()]} theme="dark" onKeyUp={run} />
          </div>
          <div className='lang-box'>
          <h2><span> CSS </span></h2>
            <CodeMirror id="css-code" height="350px"  extensions={[css()]} theme="dark" onKeyUp={run} />
          </div>
          <div className='lang-box'>
          <h2><span> JS </span></h2>
            <CodeMirror id="js-code" height="350px" extensions={[javascript({ jsx: true })]} theme="dark" onKeyUp={run} />
          </div>
        </div>
        <hr className='lowerHr'/>
        <iframe id="output" width="1500px" height="250px" title="Output"></iframe>
      </div>
    </div>
  );
}

export default App;
