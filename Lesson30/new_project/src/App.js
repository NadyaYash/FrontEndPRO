import './App.css';
import NavMenu from './components/NavMenu';
import Configurations from './pages/Configurations';
import {Routes, Route} from 'react-router-dom'
import Teams from './pages/Teams';
import Main from './pages/Main';
import {useState, useEffect} from 'react'
import {Context} from './context'


function App() {
 

  

const [teams, setTeams] = useState([]);

useEffect(()=>{
  setTeams(JSON.parse(localStorage.getItem('teams'))|| [])}, []) ;

useEffect( ()=> {
  localStorage.setItem('teams', JSON.stringify(teams))}, [teams]);

const addTeam = value=>{
  setTeams([...teams, {
    value,
    label:value
  }])
}

const [users, setUsers] = useState([]);

const add_member = (member, team) => {
  setUsers([...users, {
    id: Date.now(),
    member,
    team
  }])
  
}

const delete_member = id => setUsers(users.filter(el=> el.id !== id));

  return (
    <div>
      <Context.Provider value={{addTeam, teams, add_member, users, delete_member}}>
      <NavMenu />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='configurations' element={<Configurations/>} />
        <Route path='teams' element={<Teams/>} />
      
      </Routes>
      

      
      
      </Context.Provider>
     
    </div>
  );
}

export default App;
