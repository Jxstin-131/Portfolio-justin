import { useState } from 'react'; // 1. Importamos el hook para el estado
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './data/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
    // 2. Definimos el estado global del idioma (por defecto 'es')
    const [lang, setLang] = useState('es');

    return (
        <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-primary selection:text-white">

            {/* CAPA DE PUNTOS */}
            <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-dots animate-dots mask-radial opacity-40" />
            </div>

            {/* CAPA DE GLOWS */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
                <div className="absolute top-[20%] right-[-5%] w-[300px] h-[300px] bg-primary/5 blur-[80px] rounded-full" />
            </div>

            {/* 3. Pasamos el idioma actual y la función para cambiarlo al Navbar */}
            <Navbar currentLang={lang} onLangChange={setLang} />

            {/* CONTENIDO */}
            <div className="relative z-20 pt-32 md:pt-40">
                <div className="container mx-auto px-6">
                    <main className="space-y-32">

                        {/* 4. Pasamos la prop 'lang' a cada componente para que sepan qué idioma mostrar */}
                        <section id="home">
                            <Hero lang={lang} />
                        </section>

                        <About lang={lang} />

                        <Experience lang={lang} />

                        <Projects lang={lang} />

                        <Skills lang={lang} />

                        <Footer lang={lang} />

                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;