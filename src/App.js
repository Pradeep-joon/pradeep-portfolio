
import './App.css';
import { NavBar } from './component/NavBar';
import { Banner } from './component/Banner';
import { Skill } from './component/Skill';
import { Project } from './component/Project';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function App() {
useEffect(() =>{
  fetch("/api")
  .then((res) => res.json())
  .then((data) =>{console.log(data)})
},[])

  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skill />
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
