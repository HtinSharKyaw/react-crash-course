import React from 'react'

const Content = () => {
  const handleNameChange = () => {
    const names = ['john','doe','james'];
    const random = Math.floor(Math.random() * 3) ;
    return names[random]; 
  } 
  
  const handleClick = () => {
    console.log('you clicked it');
  }

  const handleClick2 = (name) => {
    console.log(`you clicked it ${name}`);
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  }

  return (
    <main>
    <p>Hello {handleNameChange()}!</p>
    <button onClick={handleClick}>Click it</button>
    <button onClick={() => handleClick2('John')}>Click it</button>
    <button onClick={(e) => handleClick3(e)}>Click it</button>
    </main>
  )
}

export default Content