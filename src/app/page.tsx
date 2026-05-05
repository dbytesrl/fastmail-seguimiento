import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrackingOptions from "@/components/TrackingOptions";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrackingOptions />
      <ContactForm />
      <Footer />
    </main>
  );
}
