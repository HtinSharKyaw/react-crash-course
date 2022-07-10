import React from 'react'

const Content = () => {
  const handleNameChange = () => {
    const names = ['john','doe','james'];
    const random = Math.floor(Math.random() * 3) ;
    return names[random]; 
  } 
  
  return (
    <main>
    <p>Hello {handleNameChange()}</p>
    </main>
  )
}

export default Content