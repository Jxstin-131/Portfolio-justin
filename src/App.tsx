import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';

function App() {
    return (
        <div className="relative min-h-screen bg-[#050505] text-white">

            {/* CAPA DE PUNTOS (PUESTA AL FRENTE PARA TESTEAR) */}
            {/* CAPA DE PUNTOS */}
            <div
                className="fixed inset-0 z-50 pointer-events-none bg-dots animate-dots mask-radial"
            />

            {/* CAPA DE GLOWS (FONDO) */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10">
                <Navbar />
                <main className="container mx-auto px-6">
                    <Hero />
                    <section id="proyectos" className="py-20">
                        <ProjectCard />
                    </section>
                </main>
            </div>
        </div>
    );
}
export default App;