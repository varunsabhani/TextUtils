import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />,
  //     children: [
  //       {
  //         path: "/about",
  //         element: <About />,
  //       },
  //     ],
  //   },
  // ]);


  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
          <Route path='/about' element={<About mode={mode}/>} />
        </Routes>
        {/* <RouterProvider router={router} /> */}
        {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
      </div>
    </>
  );
}

export default App;
