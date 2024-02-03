import React from 'react'

const InputField = () => {
  return (
    <form className='input'>
        <input type="text" placeholder='Entere a task ' className='input-box'/>
        <button className='submit-btn'>
            Go 
        </button>
    </form>
  )
}

export default InputField