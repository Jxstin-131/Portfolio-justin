import {
    SiReact, SiJavascript, SiHtml5, SiTailwindcss,
    SiGit, SiGithub, SiFigma
} from 'react-icons/si';
import { FaShieldAlt } from 'react-icons/fa'; // Usamos este escudo para evitar errores de exportación

// 1. Interfaz para App.tsx
interface SkillsProps {
    lang: string;
}

function Skills({ lang }: SkillsProps) {
    const skills = [
        {
            category: lang === 'es' ? "Frontend" : "Frontend",
            items: [
                { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
                { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
            ],
            icon: "💻"
        },
        {
            category: lang === 'es' ? "Control de Versiones" : "Version Control",
            items: [
                { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
                { name: "GitHub", icon: <SiGithub className="text-white" /> },
            ],
            icon: "🌿"
        },
        {
            category: lang === 'es' ? "Diseño y Lógica" : "Design & Logic",
            items: [
                { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
                { name: "UI/UX", icon: <div className="w-1 h-1 bg-primary rounded-full" /> },
                { name: lang === 'es' ? "Lógica" : "Logic", icon: <div className="w-1 h-1 bg-primary rounded-full" /> },
            ],
            icon: "🎨"
        },
        {
            category: lang === 'es' ? "Habilidades Blandas" : "Soft Skills",
            items: lang === 'es'
                ? [
                    { name: "Trabajo en Equipo", icon: "🤝" },
                    { name: "Aprendizaje Rápido", icon: "⚡" },
                    { name: "Comunicación", icon: "🗣️" }
                ]
                : [
                    { name: "Teamwork", icon: "🤝" },
                    { name: "Fast Learning", icon: "⚡" },
                    { name: "Communication", icon: "🗣️" }
                ],
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
                        className="group bg-[#0a0a0a] border border-white/10 p-6 rounded-[2rem] hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 blur-2xl group-hover:bg-primary/20 transition-all" />

                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</div>
                            <h4 className="text-white/90 text-[10px] font-black uppercase tracking-widest">
                                {skill.category}
                            </h4>
                        </div>

                        <div className="flex flex-col gap-2">
                            {skill.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between bg-white/5 border border-white/5 p-3 rounded-xl hover:bg-white/[0.08] transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                                            {item.icon}
                                        </span>
                                        <span className="text-[10px] font-bold text-slate-400 group-hover:text-white transition-colors">
                                            {item.name}
                                        </span>
                                    </div>
                                    <div className="w-1 h-1 bg-white/10 group-hover:bg-primary rounded-full transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Learning Path */}
            <div className="bg-white/5 border border-dashed border-white/20 p-8 rounded-[2rem] flex flex-col md:flex-row justify-between items-center text-center md:text-left opacity-80 mt-6 gap-4">
                <div className="flex flex-col items-center md:items-start">
                    <h5 className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1 italic">Learning Path</h5>
                    <p className="text-white text-[12px] font-bold uppercase tracking-tighter">
                        {lang === 'es' ? 'Actualmente explorando' : 'Currently exploring'}{" "}
                        <span className="text-primary underline decoration-primary/30 underline-offset-4">
                            {lang === 'es' ? 'Ciberseguridad' : 'Cybersecurity'}
                        </span>
                    </p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 animate-pulse">
                    <FaShieldAlt size={24} />
                </div>
            </div>
        </section>
    );
}

export default Skills;