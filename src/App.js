import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

const generateUsers = () => {
  return [
    {
      id:1,
      name:'mishka',
    },
    {
      id:2,
      name:'tamta',
    },
    {
      id:3,
      name:'nika',
    },
    {
      id:4,
      name:'gaga',
    },
    {
      id:5,
      name:'medea',
    },
    {
      id:6,
      name:'levani',
    },
    {
      id:7,
      name:'giorgi',
    },
    {
      id:8,
      name:'aleksi',
    },
    {
      id:9,
      name:'vazha',
    },
    {
      id:10,
      name:'nini',
    },
  ];
    
  
};
function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
     setUsers(generateUsers());
  },[]);
    
 const butOnClick = () =>{
  setUsers((prevState) => {
    const ind = Math.floor(Math.random() * users.length);
    const newUsersArray = prevState.filter((user, index) => index !== ind);
    return newUsersArray;
  })
};

useEffect(()=> {
  document.title = `${users.length} users left`
}, [users])


  return (
    <div className="App">
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>
      })}
      <button onClick={butOnClick}>washale useri</button>
    </div>
    
  );
  };


export default App;
