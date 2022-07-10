import React , {useState} from 'react'


const Content = () => {
  const [name , setName] = useState('John');
  const [count , setCount] = useState(0); //declare the defualt state in the parathesis

  const handleNameChange = () => {
    const names = ['john','doe','james'];
    const random = Math.floor(Math.random() * 3) ;
    setName(names[random]); 
  } 
  
  const handleClick = () => {
    setCount(count + 1);
  }

  const handleClick2 = (methodName) => {
    console.log(`you clicked it ${methodName}`);
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  }

  return (
    <main>
    <p>Hello {name}!</p>

    <button onClick={handleNameChange}>Change Name</button>
    <button onClick={handleClick}>Click Counter</button>
    <button onClick={() => handleClick2('John')}>Click it</button>
    <button onClick={(e) => handleClick3(e)}>Click it</button>
    </main>
  )
}

export default Content