const Hero: React.FC = () => {
    return (
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            NAINARA EVENTS
          </h1>
          <p className="text-xl md:text-2xl mb-12">
            Flawless execution in event planning and management
          </p>
          <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
            Get Started
          </button>
        </div>
      </section>
    )
  }
  
  export default Hero;