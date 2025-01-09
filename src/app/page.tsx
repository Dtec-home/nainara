import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";


export default function Home() {
  return (
    <main className="min-h-screen">
     <Hero/>
     <About/>
     <Services />
     <Process />
     <Clients />
     <Contact />
    </main>
  )
}