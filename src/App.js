import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ['john','doe','james'];
    const random = Math.floor(Math.random() * 3) ;
    return names[random]; 
  } 

  return (
    <div className="App">
        <p>Hello {handleNameChange()}</p>
      
    </div> 
  );
}

export default App;
