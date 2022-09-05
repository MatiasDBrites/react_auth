import { useContext, useEffect } from "react";
import { RequestContextPost } from "./context/RequestContextPost";
import { RequestContextPostProvider } from "./context/RequestContextPost";
import './App.css';
import Form from "./components/LarnuForm";
import Welcome from './components/LarnuGet';


function App() {
  const { logged }  = useContext(RequestContextPost)

  useEffect(() =>{
    console.log(logged);
  });

  return (
    
      <div className="App">
        <h1>Ejercicio de auth</h1>
        {
          logged ? <Welcome/> : <Form />
        }
      </div>
  )
}
export default App;