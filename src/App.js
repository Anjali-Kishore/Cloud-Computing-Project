
import './App.css';
import Datatable from './component/Datatable';
import { Menu, Typography } from 'antd';
import {Routes,Route,useNavigate} from 'react-router-dom';
import Home from './component/Home';
import Application from './component/Applicaton'
import ResourceData from './component/Resources'


function App({datatype}) {

  const navigate =useNavigate()
  return (
  <>
    <div className='appHeader'>
      <Typography.Title>Cloud Computing Data</Typography.Title>
    </div>
    <div className='sideMenu'>
      
      <Menu 
      onClick={({key})=>{
        navigate(key)
      }}
      
      items ={[
        {label:"Home",key:"/"},
        {label:"Data", key:"/data"},
      {label:"Application",key :"/applications"} ,
      {label:"Resources", key:"/resources"}]}>
      </Menu>
      <Content />
      
    </div>
    </>

  );
}
function Content(){
  return <div>
    <Routes>
      <Route path ="/" element={<div><Home/></div>}></Route>
      <Route path ="/data" element={<div><Datatable/></div>}></Route>
      <Route path ="/applications" element={<div><Application datatype={'applications'}/></div>}></Route>
      <Route path ="/resources" element={<div><ResourceData/></div>}></Route>
    </Routes>
  </div>
}

export default App;
