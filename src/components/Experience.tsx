// 1. Interfaz para TypeScript
interface ExperienceProps {
    lang: string;
}

function Experience({ lang }: ExperienceProps) {
    const experiences = [
        {
            title: lang === 'es' ? "Desarrollador Frontend & Co-Fundador" : "Frontend Developer & Co-Founder",
            company: "TalentMatch AI",
            period: lang === 'es' ? "2026 - Presente" : "2026 - Present",
            description: lang === 'es' ? [
                "Liderando la arquitectura UI para una plataforma SaaS que utiliza Inteligencia Artificial para el reclutamiento.",
                "Desarrollo de interfaces dinámicas con React y Tailwind CSS, optimizando la experiencia del usuario final.",
                "Gestión de flujos de trabajo colaborativos mediante Git y GitHub, trabajando junto a un equipo de ingeniería."
            ] : [
                "Leading UI architecture for a AI-powered SaaS recruitment platform.",
                "Developing dynamic interfaces with React and Tailwind CSS, optimizing end-user experience.",
                "Managing collaborative workflows using Git and GitHub, working alongside an engineering team."
            ],
            tags: ["React", "AI Integration", "Leadership"]
        },
        {
            title: lang === 'es' ? "Ingeniería en Sistemas" : "Systems Engineering",
            company: "Universidad Tecnológica de Santiago (UTESA)",
            period: "2022 - 2026",
            description: lang === 'es' ? [
                "Cursando el último año de la carrera con un Índice Académico (GPA) de 3.7.",
                "Sólida formación en diseño de sistemas, estándares de seguridad y desarrollo de software escalable.",
                "Participación en proyectos técnicos destacados como sistemas IoT con ESP32 y análisis de normativas ISO/IEC."
            ] : [
                "Currently in the final year of the degree with a 3.7 GPA.",
                "Strong background in systems design, security standards, and scalable software development.",
                "Participated in key technical projects like IoT systems with ESP32 and ISO/IEC standard analysis."
            ],
            tags: [lang === 'es' ? "Sistemas" : "Systems", "ISO Standards", "GPA 3.7"]
        }
    ];

    return (
        <section id="experience" className="py-24 relative">
            <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-[1px] bg-primary"></span>
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                        {lang === 'es' ? 'Trayectoria' : 'Journey'}
                    </span>
                </div>
                <h2 className="text-5xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8">
                    {lang === 'es' ? 'Experiencia ' : 'Experience '}
                    <span className="text-primary">{lang === 'es' ? '& Educación' : '& Education'}</span>
                </h2>
            </div>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="group bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-primary/30 transition-all">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-primary transition-colors">
                                    {exp.title}
                                </h3>
                                <p className="text-primary font-bold text-lg">{exp.company}</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full self-start">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    {exp.period}
                                </span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {exp.description.map((item, i) => (
                                <li key={i} className="flex gap-4 text-slate-400 leading-relaxed">
                                    <span className="text-primary font-bold">—</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border ${tag === "GPA 3.7"
                                        ? "bg-primary/10 border-primary/20 text-primary"
                                        : "bg-white/5 border-white/10 text-slate-500"
                                        }`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;