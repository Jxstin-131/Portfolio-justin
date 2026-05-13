// 1. Agregamos la interfaz para eliminar el error en rojo en App.tsx
interface SkillsProps {
    lang: string;
}

function Skills({ lang }: SkillsProps) {
    const skills = [
        {
            // Traducción dinámica de categorías
            category: lang === 'es' ? "Frontend" : "Frontend",
            items: ["React", "JavaScript", "Html", "Tailwind CSS"],
            icon: "💻"
        },
        {
            category: lang === 'es' ? "Control de Versiones" : "Version Control",
            items: ["Git", "GitHub", "Branch Management"],
            icon: "🌿"
        },
        {
            category: lang === 'es' ? "Diseño y Lógica" : "Design & Logic",
            items: ["Figma", "UI/UX", "Problem Solving"],
            icon: "🎨"
        },
        {
            category: lang === 'es' ? "Habilidades Blandas" : "Soft Skills",
            // Traducción de los items específicos de Soft Skills
            items: lang === 'es'
                ? ["Trabajo en Equipo", "Aprendizaje Rápido", "Comunicación", "Sociable"]
                : ["Teamwork", "Fast Learning", "Communication", "Social Skills"],
            icon: "🤝"
        }
    ];

    return (
        <section id="habilidades" className="py-24 relative">
            <div className="flex flex-col mb-16">
                <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-[1px] bg-primary"></span>
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                        {lang === 'es' ? 'Habilidades' : 'Skills'}
                    </span>
                </div>
                <h2 className="text-5xl md:text-5xl font-black uppercase tracking-tighter text-white">
                    Tech <span className="text-primary">Stack</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skills.map((skill) => (
                    <div
                        key={skill.category}
                        className="group bg-[#0a0a0a] border border-white/10 p-6 rounded-[2rem] hover:border-primary/40 transition-all duration-500"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</div>
                            <h4 className="text-white/90 text-[10px] font-black uppercase tracking-widest">
                                {skill.category}
                            </h4>
                        </div>

                        <div className="flex flex-col gap-2">
                            {skill.items.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-xl group-hover:border-white/10 transition-colors"
                                >
                                    <div className="w-1 h-1 bg-primary rounded-full" />
                                    <span className="text-[10px] font-bold text-slate-400 group-hover:text-white transition-colors">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Tarjeta de Interés Futuro traducida */}
            <div className="bg-white/5 border border-dashed border-white/20 p-6 rounded-[2rem] flex flex-col justify-center items-center text-center opacity-80 mt-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-xl mb-3">🛡️</div>
                <h5 className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">Learning Path</h5>
                <p className="text-white text-[10px] font-bold uppercase leading-tight">
                    {lang === 'es' ? 'Explorando' : 'Exploring'} <br />
                    <span className="text-primary">{lang === 'es' ? 'Ciberseguridad' : 'Cybersecurity'}</span>
                </p>
            </div>
        </section>
    );
}

export default Skills;