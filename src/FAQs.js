import React , {useState} from 'react'
import { faqsData } from './data'
import FAQ from './FAQ'
import "./FAQs.css"

const FAQS = () => {

    const [faqs, setFaqs] = useState(faqsData)

  return (
   <main className='container'>
    <section className='faqs'>
        <h1>
        <h1>FAQs</h1>
        {faqs.map((faq) => (
          <FAQ key={faq.id} {...faq} />
        ))}
        </h1>
    </section>
   </main>
  )
}

export default FAQS
