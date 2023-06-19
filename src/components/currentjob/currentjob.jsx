import React from 'react'
import './currentjob.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const currentjob = () => {
  return (
  <section id='currentjob'> 
<h2>My Current Job</h2>

<div className='container jobDesc'>
<div className='experience_frontend'>

  <h3>Sainsburys Local</h3>
  <h3>Trading Assistant</h3>
  <div className='jobDesc_content'>
    <p>
  • Increased store revenue and profit by delivering excellent customer service, brand management, stock control, workforce planning, and asset protection.

     </p>

    <p>
    • Recruited and retained a diverse and talented team that reflected the brand values.
   </p>
    <p>
    • Implemented and maintained company layouts and promotional events with operational excellence and high shop floor standards.
 </p>
   <p>
   • Reviewed business performance regularly and devised clear action plans for improvement.
 </p>
    <p>
    • Trained, coached and developed the store team according to business priorities and needs.
</p>

        <p>
        • Set an example for the team and lead by example.        </p>


  </div>
  </div>
</div>
</section>
 )
  }
export default currentjob