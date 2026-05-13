import ProjectCard from '../components/ProjectCard';

// 1. Interfaz para App.tsx
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

            {/* Grilla Bento Equilibrada */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* 1. TALENTMATCH AI */}
                <ProjectCard
                    title="TalentMatch AI"
                    description={lang === 'es'
                        ? "Plataforma SaaS de reclutamiento con NLP para emparejar candidatos de forma inteligente."
                        : "SaaS recruitment platform with NLP to intelligently match candidates."
                    }
                    tags={["React", "NLP", "AI"]}
                    className="md:col-span-6 md:row-span-1"
                    lang={lang}
                />

                {/* 2. USER EXPLORER (El de la API de personas) */}
                <ProjectCard
                    title="User Explorer"
                    description={lang === 'es'
                        ? "Explorador dinámico que consume una API de terceros para generar perfiles en tiempo real."
                        : "Dynamic explorer consuming a third-party API to generate profiles in real-time."
                    }
                    tags={["React", "API Fetching", "Dynamic UI"]}
                    className="md:col-span-6 md:row-span-1"
                    lang={lang}
                />

                {/* 3. DYNAMIC INTERACTIVE CARD */}
                <ProjectCard
                    title="Interactive Card"
                    description={lang === 'es'
                        ? "Componente interactivo con actualización de estado bidireccional y validación instantánea."
                        : "Interactive component with two-way state updates and instant validation."
                    }
                    tags={["State Management", "Hooks"]}
                    className="md:col-span-4 md:row-span-1"
                    lang={lang}
                />

                {/* 4. SMART BIRD FEEDER */}
                <ProjectCard
                    title="Smart Bird Feeder"
                    description={lang === 'es'
                        ? "Sistema IoT con ESP32 para monitoreo y alimentación automatizada de aves."
                        : "IoT system with ESP32 for automated bird monitoring and feeding."
                    }
                    tags={["IoT", "ESP32", "MicroPython"]}
                    className="md:col-span-4 md:row-span-1"
                    lang={lang}
                />

                {/* 5. ISO 27001 METRICS */}
                <ProjectCard
                    title="Security Metrics"
                    description={lang === 'es'
                        ? "Evaluación de riesgos y métricas de seguridad basadas en estándares ISO/IEC."
                        : "Risk assessment and security metrics based on ISO/IEC standards."
                    }
                    tags={["Cybersecurity", "ISO 27001"]}
                    className="md:col-span-4 md:row-span-1"
                    lang={lang}
                />
            </div>
        </section>
    );
}

export default Projects;