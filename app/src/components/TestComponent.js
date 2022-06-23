import React from 'react';
import './TestComponent.css'

function TestComponent(props) {
  if (props.text) {
    return (<h1 className='h1class'>{props.text}</h1>)
  }
  return (<h1 className='h1class'>текст отсутствует</h1>)

}

export default TestComponent