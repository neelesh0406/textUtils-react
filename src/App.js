import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode, setmode] = useState('light');    //Default is light mode

  //To toggle b/w light and dark mode
  const toggleMode = () => {
    if(mode==='light'){
      setmode('dark');
      document.body.style.color = 'white';
      document.body.style.backgroundColor = '#132231';
      showAlert("Switched to dark mode","success");
    }else{
      setmode('light');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      showAlert("Switched to light mode","success");
    }
  }

  const [alert, setalert] = useState(null);
  //Function to show alerts 
  const showAlert = (message, type) => {
                  setalert({
                    message: message,
                    type: type
                  })
                  //To make the alert disappear after 1.5 sec
                  setTimeout(() => {
                    setalert(null);
                  }, 1500);
  }


  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      <TextForm heading="Enter text for analysis here" mode={mode} showAlert={showAlert}/>
      {/* <About mode={mode}/> */}
    </div>
    </>
  );
}

export default App;
