import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Anish from './another.jsx'

const anotherElement=(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
) 
ReactDOM.createRoot(document.getElementById('root')).render(

    <div >
      <App />
    <Anish/>
    </div>  
)
