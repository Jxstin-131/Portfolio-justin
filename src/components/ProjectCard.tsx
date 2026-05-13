interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    className?: string;
    lang: string; // 1. Agregamos lang a la interfaz
}

const ProjectCard = ({ title, description, tags, className = "", lang }: ProjectProps) => {
    return (
        <div className={`group relative bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col justify-between min-h-[320px] ${className}`}>

            {/* Resplandor de fondo al hacer hover */}
            <div className="absolute -inset-px bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Patrón de puntos decorativo interno */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-dots opacity-0 group-hover:opacity-10 scale-150 pointer-events-none transition-opacity" />

            <div className="relative z-10">
                {/* Tags con estilo minimalista */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[9px] font-black uppercase tracking-[0.15em] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-500 group-hover:text-primary group-hover:border-primary/30 transition-all"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Título y Descripción (Vienen ya traducidos por las props) */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[90%]">
                    {description}
                </p>
            </div>

            {/* 2. Traducción del botón de acción en el Footer */}
            <div className="relative z-10 mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                <span>{lang === 'es' ? 'Explorar Caso de Estudio' : 'Explore Case Study'}</span>
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
        </div>
    );
};

export default ProjectCard;