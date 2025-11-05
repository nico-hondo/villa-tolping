import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Marketing from '@/components/Marketing';
import AboutUs from '@/components/AboutUs';
import Testi from '@/components/Testi';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Marketing />
      <AboutUs/>
      <Testi/>
      <Booking/>
      <Contact/>
      <Faq/>
      <Footer />
    </> 
  );
}
