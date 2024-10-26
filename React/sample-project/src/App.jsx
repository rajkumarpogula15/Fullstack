// import React from 'react'
import Navbar from './components/Navbar.jsx' 
// <!--  -->
const App = () => {
  const data ={
    appname: "hello"
  }
  
  const logodata="mylogo"
  const test="hello world"


return (
    <>
    <p className="text-yellow-500">{text}</p>
    < Navbar appdata={data} logo={logodata} />
    </>
)
}
export default App