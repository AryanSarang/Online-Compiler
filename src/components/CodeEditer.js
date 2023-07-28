import React from "react"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import SplitPane, { Pane } from 'react-split-pane';



const CodeEditer = (props) => {
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

    <div className='inputFields '>
    <SplitPane split="vertical" defaultSize={1000} minSize={400} maxSize={-100}>
      <SplitPane split="vertical" defaultSize={500} minSize={200} maxSize={-100}>
        <div className='lang-box h-100'>
          <HtmlIcon fontSize="large" htmlColor="#FD8D14" />
          <CodeMirror className="codeMirror h-100" height="100%" id="html-code" extensions={[html()]} theme="dark" onKeyUp={run} />
        </div>
        <div className='lang-box h-100'>
          <CssIcon fontSize="large" htmlColor="#9288F8" />
          <CodeMirror className="codeMirror h-100" height="100%" id="css-code" extensions={[css()]} theme="dark" onKeyUp={run} />
        </div>
        </SplitPane>
        
        <div className='lang-box h-100 '>
          <JavascriptIcon fontSize="large" htmlColor="#FFE17B" />
          <CodeMirror className="codeMirror h-100" height="100%" id="js-code" extensions={[javascript({ jsx: true })]} theme="dark" onKeyUp={run} />
        </div>
      </SplitPane>
    </div>

  )
};

export default CodeEditer;
