import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
// import About from "./components/About";
import React,{ useState } from 'react';
import Alert from './components/Alert';
// import {
//   // BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  //function to help to show alert message
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
    <Navbar title="Trimurti" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" headingOutput="Output :" mode={mode} />
      {/* <Router>  */}
        {/* <Routes>
          <Route exact path="/about" Component={About} />        
          <Route 
            exact path='/'
            element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" headingOutput="Output :" mode={mode} />}
          /> */}
          {/* <Route
            path="/home"
            Component={(props) => (
              <TextForm {...props} showAlert={showAlert} heading="Enter the text to analyze" headingOutput="Output :" mode={mode} />
            )}
          /> */}
          {/* <Route
            path="/home3" 
            render={(props) => <TextForm {...props} showAlert={`showAlert`} heading="Enter the text to analyze" headingOutput="Output :" mode={mode} />} 
          /> */}
        {/* </Routes> */}
      {/* </Router> */}
    </div>
    </>
  );
}

export default App;