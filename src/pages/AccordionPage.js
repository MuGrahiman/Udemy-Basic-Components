import React from 'react'
import Accordion from '../components/Accordion'

function AccordionPage() {
  const items = [
    {id:"1",label : "react user",content:"labeled content can use for the react user"},
    {id:"2",label : "java script user",content:"labeled content can use for the java script user"},
    {id:"3",label : "css user",content:"labeled content can use can use for the css user"},
  ]
  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}

export default AccordionPage
