import {Link} from 'react-router-dom'

import SocialButtons from './SocialButtons'

const Contacts = () => {
  return (
    <section className="bg-secondary px-5 pt-5 py-5" id="contact">
      <div className=" md-w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] border-red-900 pb-2">
          Contact Me
        </h2>
        <p className="py-5">
            Thanks for stopping by. I am currently looking for a 4 or 12 month coop as a Software Developer. If you
            want to discuss coops or my projects feel free to email me or reach me at my socials anytime!
        </p>
        <div className="py-10">
          <SocialButtons />
        </div>
      
      </div>
    </section>
  )
}

export default Contacts