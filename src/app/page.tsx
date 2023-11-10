import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AboutMe from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import CV from "@/components/Download_CV"

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/3 mx-auto">
            <AboutMe />
            <Contact />
            <CV />
          </div>
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;