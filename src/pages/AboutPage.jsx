import SocialButtons from '../components/SocialButtons'

const AboutPage = () => {
  return (
    <section className="bg-primary px-5 pt-5 py-5">
      <div className=" md-w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5">
          Thanks for stopping by!
        </h2>
        <p className="py-5">
            I haven&apos;t got to this yet.. oops!
        </p>
        <p className="py-5">
            I am currently looking for a 4 or 12 month coop as a Software Developer. If you
            want to discuss coops or my projects feel free to email me or reach me at my socials anytime!
        </p>
        <div className="py-10">
          <SocialButtons />
        </div>
      
      </div>
    </section>
  )
}

export default AboutPage