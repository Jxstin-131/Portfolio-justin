import ProjectCard from '../components/ProjectCard';

// 1. Interfaz para que App.tsx no marque error
interface ProjectsProps {
    lang: string;
}

function Projects({ lang }: ProjectsProps) {
    return (
        <section id="proyectos" className="py-24 relative">
            {/* Título de la sección */}
            <div className="flex flex-col mb-16">
                <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-[1px] bg-primary"></span>
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                        {lang === 'es' ? 'Portafolio' : 'Portfolio'}
                    </span>
                </div>
                <h2 className="text-5xl md:text-5xl font-black uppercase tracking-tighter text-white">
                    {lang === 'es' ? 'Trabajos' : 'Selected'}{" "}
                    <span className="text-primary">{lang === 'es' ? 'Seleccionados' : 'Work'}</span>
                </h2>
            </div>

            {/* Grilla Bento */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* 1. TALENTMATCH AI */}
                <ProjectCard
                    title="TalentMatch AI"
                    description={lang === 'es'
                        ? "Plataforma SaaS de reclutamiento que utiliza procesamiento de lenguaje natural (NLP) para emparejar candidatos con vacantes de forma inteligente."
                        : "SaaS recruitment platform using natural language processing (NLP) to intelligently match candidates with vacancies."
                    }
                    tags={["React", "NLP", "AI", "Tailwind"]}
                    className="md:col-span-8 md:row-span-1"
                    lang={lang} // <--- ESTO ES LO QUE FALTABA PARA QUITAR EL ROJO
                />

                {/* 2. SMART BIRD FEEDER */}
                <ProjectCard
                    title="Smart Bird Feeder"
                    description={lang === 'es'
                        ? "Sistema IoT con ESP32 y MicroPython. Monitoreo y alimentación automatizada con sensores integrados."
                        : "IoT system with ESP32 and MicroPython. Automated monitoring and feeding with integrated sensors."
                    }
                    tags={["IoT", "ESP32", "MicroPython"]}
                    className="md:col-span-4 md:row-span-1"
                    lang={lang} // <--- PASAMOS EL IDIOMA AL HIJO
                />

                {/* 3. USER EXPLORER */}
                <ProjectCard
                    title="User Explorer"
                    description={lang === 'es'
                        ? "Dashboard dinámico para gestión de personal con consumo de APIs externas y manejo de estados complejos."
                        : "Dynamic dashboard for personnel management consuming external APIs and complex state handling."
                    }
                    tags={["React", "Vite", "API"]}
                    className="md:col-span-4 md:row-span-1"
                    lang={lang} // <--- PASAMOS EL IDIOMA AL HIJO
                />

                {/* 4. CYBERSECURITY SYSTEM */}
                <ProjectCard
                    title="ISO 27001 Metrics"
                    description={lang === 'es'
                        ? "Diseño de sistema de procesamiento local bajo estándares internacionales de seguridad y evaluación de riesgos informáticos."
                        : "Local processing system design under international security standards and computer risk assessment."
                    }
                    tags={["Cybersecurity", "ISO/IEC 27001", "Security"]}
                    className="md:col-span-8 md:row-span-1"
                    lang={lang} // <--- PASAMOS EL IDIOMA AL HIJO
                />
            </div>
        </section>
    );
}

export default Projects;