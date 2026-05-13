import justinImg from '../assets/Justin.jpeg';

// 1. Agregamos la interfaz para eliminar el error en rojo
interface HeroProps {
    lang: string;
}

function Hero({ lang }: HeroProps) {
    return (
        <section className="min-h-[85vh] flex items-center justify-center py-10 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">

                <div className="order-2 md:order-1 md:col-span-7 space-y-6 text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl lg:text-5xl font-black tracking-tighter leading-none text-white uppercase">
                        {lang === 'es' ? 'Ingeniero de Sistemas' : 'Systems Engineer'}<br />
                        <span className="text-primary">{lang === 'es' ? 'Desarrollador Frontend' : 'Frontend Developer'}</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed font-light text-balance">
                        {lang === 'es'
                            ? 'Construyendo soluciones frontend seguras y escalables con un enfoque en un buen UX & UI'
                            : 'Building secure and scalable frontend solutions with a focus on great UX & UI'
                        }

                        {lang === 'es' ? ' y rendimiento.' : ' and performance.'}
                    </p>
                    <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
                        <button className="bg-primary text-white px-10 py-4 rounded-full font-bold cursor-pointer shadow-lg shadow-primary/20 hover:bg-primary/80 transition-all uppercase tracking-widest text-sm">
                            {lang === 'es' ? 'Ver Proyectos' : 'View Projects'}
                        </button>
                    </div>
                </div>

                <div className="order-1 md:order-2 md:col-span-5 flex justify-center items-center relative">
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75" />

                    {/* ESTE DIV ES EL ESCUDO: color sólido, z-index alto y sin transparencia */}
                    <div className="relative p-1.5 rounded-full bg-[#050505] z-30 shadow-2xl border border-white/5">
                        <img
                            src={justinImg}
                            alt="Justin Sanchez"
                            className="relative w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-2 border-[#050505]" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;