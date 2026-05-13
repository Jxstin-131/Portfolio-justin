// 1. Interfaz para TypeScript
interface AboutProps {
    lang: string;
}

function About({ lang }: AboutProps) {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[1px] bg-primary"></span>
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                        {lang === 'es' ? 'Perfil' : 'Profile'}
                    </span>
                </div>

                <h2 className="text-5xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8">
                    {lang === 'es' ? 'Estudiante de' : 'Systems'}{" "}
                    <span className="text-primary text-outline">
                        {lang === 'es' ? 'Sistemas' : 'Student'}
                    </span>
                </h2>

                <div className="space-y-6">
                    <p className="text-slate-400 leading-relaxed text-xl md:text-2xl">
                        {lang === 'es' ? (
                            <>
                                Estudiante de Ingeniería de Sistemas en <span className="text-white font-bold">UTESA</span>.
                                Me enfoco en el desarrollo <span className="text-white font-bold">Frontend</span>, construyendo interfaces
                                que combinan diseño limpio con código organizado.
                            </>
                        ) : (
                            <>
                                Systems Engineering student at <span className="text-white font-bold">UTESA</span>.
                                I focus on <span className="text-white font-bold">Frontend</span> development, building interfaces
                                that combine clean design with organized code.
                            </>
                        )}
                    </p>

                    <p className="text-slate-400 leading-relaxed text-xl md:text-2xl">
                        {lang === 'es' ? (
                            <>
                                Tengo un fuerte dominio de <span className="text-white font-bold">Git</span> para el control de versiones y trabajo colaborativo. Además, me apasiona el mundo de la <span className="text-primary font-bold">Ciberseguridad</span>, área en la que estoy empezando a explorar y aprender con el objetivo de aplicarla en el desarrollo de software seguro.
                            </>
                        ) : (
                            <>
                                I have a strong command of <span className="text-white font-bold">Git</span> for version control and collaborative work. Additionally, I am passionate about <span className="text-primary font-bold">Cybersecurity</span>, a field I am beginning to explore and learn with the goal of applying it to secure software development.
                            </>
                        )}
                    </p>

                    {/* Badge de Educación */}
                    <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl mt-4">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-xs font-black uppercase tracking-widest text-slate-300">
                            {lang === 'es' ? 'Estudiante Universitario en UTESA' : 'UTESA University Student'}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;