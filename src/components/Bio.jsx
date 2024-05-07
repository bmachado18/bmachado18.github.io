import HeroImg from '../assets/images/hero.jpg'

const Bio = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
            <div className="pb-5 md:pb-0">
                <h1 className="text-4xl lg:text-6xl font-bold mb-5 border-b-[5px] w-[400px] border-red-900 pb-2">Hello World!</h1>
                <p className="py-5">I'm a Software Engineering student starting formally in 2020. I began dabbling into technology in 2016, tinkering with HTML, CSS, and JS in Wordpress, as well as game development with Python and Pygame.
                    I've been in the academic space since 2018 pursuing a Bachelor of Science until diverting to a deeper passion software in 2020. Since then, I've been programming, collaborating, and learning extensively at the University of Victoria,
                     expecting to graduate for April 2025!</p>
                <p className="py-5">I love creating learning new things and sharing knowledge. This website is my space to share whatever things I come up with. Welcome!</p>
            </div>
            <div className="hero-img flex justify-center">
                <img
                    src={HeroImg}
                    alt="picture of me"
                    className="lg:w-4/5 rounded-full"
                />
            </div>
        </div>
    </section>  
  )
}

export default Bio