import HeroImg from '../assets/images/hero.jpg'

const Bio = () => {
    return (
        <section className="bg-white px-5 text-gray-900 py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="pb-5 md:pb-0">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-5 border-b-[5px] w-[400px] border-red-900 pb-2">Hello World!</h1>
                    <p className="py-5">I am Brent, a Software Engineer who has graduate from the University of Victoria.</p>
                    <p className="py-5">I started exploring tech in 2016 through WordPress and game development with Python. Since then, I’ve focused on backend development, working with modern stacks and distributed systems, both in academic projects and research roles. Currently, I&apos
                        m a Graduate Researcher contributing to backend architecture and data processing workflows.</p>
                    <p className="py-5">This site is where I document what I’m building and learning.</p>
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
