import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AboutMe from "@/components/About"

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <AboutMe />
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800">Projects</h2>
          <ul className="mt-2 text-gray-600">
            <li className="mb-2">
              <h3 className="text-lg font-bold">Project 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li className="mb-2">
              <h3 className="text-lg font-bold">Project 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li className="mb-2">
              <h3 className="text-lg font-bold">Project 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
        </section>
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