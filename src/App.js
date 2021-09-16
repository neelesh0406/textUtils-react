import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');    //Default is light mode

  //To toggle b/w light and dark mode
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.color = 'white';
      // document.body.style.backgroundColor = '#132231';
      document.body.style.backgroundColor = bg;
      showAlert("Switched to dark mode", "success");
      // document.title = "TextUtils - Dark mode";
    } else {
      setmode('light');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      showAlert("Switched to light mode", "success");
      // document.title = "TextUtils - Light mode";
    }
  }

  const [bg, setbg] = useState("#132231");  //Decides the background color in Dark mode based on color scheme buttons
  const [btnColor, setBtnColor] = useState("primary");  //To modify the color of buttons on page according to color scheme

  //Function which gets triggered when any of the color schemes is selected (default bluish)
  const colorSelector = (event) => {
    if (event.target.value === 'primary') {
      setbg("#132231");
      setBtnColor("primary");
      document.body.style.backgroundColor = "#132231";
    }
    else if (event.target.value === 'success') {
      setbg("#0a1c13");
      setBtnColor("success");
      document.body.style.backgroundColor = "#0a1c13";
    }
    else {
      setbg("#430b0b");
      setBtnColor("danger");
      document.body.style.backgroundColor = "#430b0b";
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
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} colorSelector={colorSelector} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            {/* The reason to use 'exact' keyword before path is, react matches the path partially & that can cause issues
                /users  --> Component 1
                /users/profile  --> Component 1 */}
            <Route exact path="/about">
              <About mode={mode} bg={bg} />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter text for analysis here" mode={mode} showAlert={showAlert} bg={bg} btnColor={btnColor} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
