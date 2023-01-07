//create a react component that inputs a textarea and performs a fetch request
import React, {useState} from "react";
import "./App.css";

function App(){
  const [message, setMessage]=useState('');
  const [response, setResponse]=useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch('http://localhost:3001/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({message}),
    })
    .then((res) => res.json())
    .then((data) => setResponse(data.message));
  };

return(
  <div className="App">
    <h1>Steve Jobs ChatApp</h1>
 <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        placeholder="Ask Steve Anything!"
        onChange={(e) => setMessage(e.target.value)}>
      </textarea>
      <button type='submit'>Submit</button>
    </form>
   {response && <div><b>Steve:</b> {response}</div> }
  </div>
   
);
}
export default App;