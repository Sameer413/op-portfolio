import Footer from "./components/Footer";
import Header from "./components/Header";
import Greeting from "./components/home/Greeting";
import Skills from "./components/home/skills/Skills";


export default function Home() {

  return (
    <section>

      <Header />

      <Greeting />
      <Skills />

      <Footer />

    </section>
  );
}
