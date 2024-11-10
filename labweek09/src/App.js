import logo from './logo.svg';
import './App.css';
import InformationPage from './InformationPage'; 

function App() {
  const name = "Leonardo Pereira";
  const studentNum = "101419551";
  const college = "George Brown College, Toronto";

  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <InformationPage 
                  studentNum={studentNum} 
                  name={name} 
                  college={college} 
              /> 
          </header>
      </div>
  );
}

export default App;
