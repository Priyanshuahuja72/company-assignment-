import {Routes , Route} from "react-router-dom";
import Registration from './pages/Registration';
import ApplicationOne from './pages/ApplicationOne';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element = {<Registration/>}/>
      <Route path = '/second' element = {<ApplicationOne/>}/>
    </Routes>
    </>
  )
}

export default App
