import HeroImg from '../assets/images/hero.jpg'

const Bio = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
            <div className="pb-5 md:pb-0">
                <h1 className="text-4xl lg:text-6xl">Hello World!</h1>
                <p className="py-5">I'm a Software Engineering undergrad that started post-secondary education in 2018. After pursuing a Bachelor of Sciences for Chemistry up until 2020, I decided
                    to chase a deeper inclination to technology and design by attending Software Engineering at UVic. This exciting transition interested me as early as 2016 when I was creating blogposts with Wordpress,
                    and exploring the realm of Pygame in 2018. </p>
                <p className="py-5">I love creating new things, solving puzzles, and sharing knowledge. This website is my space to share whatever things I come up with. Welcome!</p>
            </div>
            <div className="hero-img">
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