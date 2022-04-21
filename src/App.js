
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res=> res.json())
    .then(data => setUsers(data))
  },[]) ;


  const handleAddUser = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    console.log(name, email);
  }


  return (
    <div className="App">
      <h1>My Own Data: {users.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder='name' />
        <input type="email" name="email" id="" placeholder='Email' />
        <input type="submit" value="Add User" />
      </form>
      <ul>
        {
          users.map(user=><li key={user.id}> id: {user.id} Name: {user.name} Email: {user.email}</li>)
        }
      </ul>
    </div>
  );
}

export default App; 
