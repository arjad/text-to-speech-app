import {useSpeechSynthesis} from "react-speech-kit";
import React, { useState } from 'react';

export default function App() 
{
  const {speak} =useSpeechSynthesis();
  const [value, setvalue] = useState("");
  return (<div className="bg-dark pt-5" style={{height:"950px"}}>
    <div className="App container bg-dark">
    <div class="p-3 mb-2 bg-info text-white"><p>type ny text and it will be converted in to text</p></div>
     
     <textarea className="container" rows="10" value= {value} onChange={(e)=>setvalue(e.target.value)} placeholder="type text here ..."></textarea>

     <button type="button" onClick={()=>speak({text:value})} class="btn btn-info">speak</button>

    </div>
    </div>
  );
}
