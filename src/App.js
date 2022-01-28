import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Tabs.css';
import Tabs from './components/Tabs';
import BookCards from './components/BookCards';


const tabs = [
  { key: 0, value: "To read" },
  { key: 1, value: "In progress" },
  { key: 2, value: "Done" }
]

const cards = [
  {id: 1,"author": "Author1", "title": "Title1",
  "description": "Description1",
  "tags": ["one", "another"]},
  {id: 2,"author": "Author2", "title": "Title2",
  "description": "Description2",
  "tags": ["one", "another"]},
  {id: 3,"author": "Author3", "title": "Title3",
  "description": "Description3",
  "tags": ["one", "another"]},
];

function App() {
  return (
    <div className="App">
      <Tabs tabs={tabs} onSelect={()=>{}}/>
      <BookCards cards={cards}/>
    </div>
  );
}

export default App;
