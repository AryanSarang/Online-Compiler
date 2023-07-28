import './App.css';
import { React } from "react";
import CodeEditer from './components/CodeEditer';
import SplitPane, { Pane } from 'react-split-pane';
import EditNoteIcon from '@mui/icons-material/EditNote';

function App() {

  return (
    <div className="App">
      <h2> <EditNoteIcon className='brand' fontSize="large" /> Online Code Compiler</h2>
      <h6>Unleash Your Web Creativity: Code, Create, Elevate!</h6>

      <hr className='upperHr' />
      <div className="editor ">
        <SplitPane split='horizontal' className='mt-5 px-3 pt-5' maxSize={-100} minSize={100} defaultSize={500}>
          <div>
            <CodeEditer/>
          </div>
            
            <iframe id="output" height="100%" className='w-100 h-100' title="Output"/>
        
        </SplitPane>
      </div>
    </div>
  );
}

export default App;
