import React, { useState } from 'react'
import { Data } from './Data'
import Faq from './Faq'
import './faqs.css'

const Faqs = () => {
    const [faqs,setFaqs]=useState(Data)
  return (
      <main className='container'>
          <section className='faqs'>
              <h1>Faqs</h1>
              {faqs.map((faq) =>
                  <Faq key={faq.id} {...faq}/>
              )}
          </section>
    </main>
  )
}

export default Faqs