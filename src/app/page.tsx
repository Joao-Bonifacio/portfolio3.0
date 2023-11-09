import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AboutMe from "@/components/About"
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap w-full">
          <AboutMe />
          <Projects />
        </div>
        <section>
          <h2 className="text-xl font-bold text-gray-800">Contact</h2>
          <p className="mt-2 text-gray-600">
            Feel free to reach out to me at john@example.com.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;