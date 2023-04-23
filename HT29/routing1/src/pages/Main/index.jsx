import React from 'react'
import AboutUs from '../AboutUs'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div> 
    
    <p>Hello Customer is an AI-powered Voice of Customer platform to collect, centralize and analyze feedback at scale, prioritize actions and take business critical decisions with confidence.

-Collect feedback with Hello Customer or connect with other feedback sources
-Powerful feedback analysis with the highest precision and deepest level of detail, out of the box and in real-time.
-Launch your feedback program in weeks, not months
-Enrich and segment your data
-Leverage actionable customer insights in no time

Discover how we help brands like Bridgestone, Securitas, Toyota financial services, TotalEnergies and Worldline prioritizing the most impactful Customer Experience projects on hellocustomer.com</p>
<Link to='about_us'><div>AboutUs</div></Link> 
</div>
      



  )
}
