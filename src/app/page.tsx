import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { FaChevronDown } from "react-icons/fa6";

export default function Home() {
  return (
    <main className={`min-h-screen `}>
      <Header />
      <Hero />
    </main>
  )
}
