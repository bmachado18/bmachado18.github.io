import {Link} from 'react-router-dom'

const Contacts = () => {
  return (
    <section className="bg-secondary px-5 pt-5 py-5" id="contact">
      <div className=" md-w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] border-red-900 pb-2">
          Contact Me
        </h2>
        <p>
            I am currently looking for a 4 or 12 month coop as Software Developer. If you
            want to discuss about that feel free to email me or reach me at my socials!
        </p>
        <p className="py-5">
          <span className="font-bold px-2">Email:</span>
          <Link to="mailto:brentmachado7@gmail.com" className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600">
            brentmachado7@gmail.com
          </Link>
        </p>
        <p className="py-5">
          <span className="font-bold px-2">LinkedIn:</span> 
          <Link to="https://www.linkedin.com/in/brent-machado/" className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600">
            Brent Machado
          </Link>
        </p>
        <p className="py-5">
          <span className="font-bold px-2">Github:</span> 
          <Link to="https://github.com/bmachado18" className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600">
            bmachado18
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Contacts