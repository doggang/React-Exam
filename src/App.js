import './App.css';
import { useState } from 'react';

function Header(props){
  return(
    <div>
      <h1><a href="/WEB/" onClick={(e)=>{
        e.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </div>
  )
}
function Nav(props){

  const topic = [];
  for(let i=1; i<=props.topics.length; i++){
    const t = props.topics[i-1];
    topic.push(<li key={i}><a href={"/read/"+t.id}>{t.title}</a></li>);
  }
  
  return(
    <div>
      <ul>
        {topic}
      </ul>
    </div>
  )
}

function Body(props){
  
  return(
    <div>
      <h2>html</h2>
      <p>html is...</p>
    </div>    
  )
}
function App() {
  const [mode, setMode] = "First";
  const topics = [
    {id:1, title:"html", body:"html is..."},
    {id:2, title:"css", body:"css is..."},
    {id:3, title:"js", body:"js is..."},
  ]
  return (
    <div>
      <Header title={"WEB"} onChangeMode={(e)=>{
        alert("asdf");
      }} />
      <Nav topics={topics}/>
      <Body/>
    </div>
  );
}

export default App;
