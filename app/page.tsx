    "use client"

    import AIFeaturesSection from "./components/ui/AIFeatureSection"
    import FinalCtaSection from "./components/ui/CtaSection";
    import { motion } from 'framer-motion';
    import HeroSection from "./components/ui/hero-section"; // Path relatif untuk HeroSection landing page
    // Jika FeaturesSection dari chatbot mau digunakan di sini, pathnya perlu disesuaikan, contoh:
    // import { FeaturesSection } from './chatbot/features-section'; 

    export default function Demo (){
        return (
            <>
            <main>
            <HeroSection />
            <AIFeaturesSection/>
            <FinalCtaSection />
            {/* <FeaturesSection /> */}
            </main>
        </>
        )
    }
