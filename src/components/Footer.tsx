// 1. Agregamos la interfaz para eliminar el error en rojo en App.tsx
interface FooterProps {
    lang: string;
}

function Footer({ lang }: FooterProps) {
    return (
        <footer id="contacto" className="py-24">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                {/* Decoración de fondo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />

                {/* Badge de Disponibilidad */}
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                        {lang === 'es' ? 'Disponible para proyectos' : 'Available for projects'}
                    </span>
                </div>

                {/* Texto Principal */}
                <h2 className="text-5xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                    {lang === 'es' ? '¿Creamos algo ' : "Let's build something "}
                    <span className="text-primary">{lang === 'es' ? 'increíble?' : 'incredible'}</span>
                </h2>

                <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
                    {lang === 'es'
                        ? 'Actualmente enfocado en el desarrollo de interfaces modernas y escalables. Si buscas un desarrollador Frontend comprometido con el código limpio, hablemos.'
                        : 'Currently focused on developing modern and scalable interfaces. If you are looking for a Frontend developer committed to clean code, let’s talk.'
                    }
                </p>

                {/* Botones de Acción */}
                <div className="flex flex-wrap justify-center gap-4">
                    {/* Botón Email */}
                    <button className="flex items-center gap-3 bg-primary text-black font-black uppercase text-xs px-8 py-4 rounded-2xl hover:scale-105 transition-transform">
                        <span>📧</span>
                        {lang === 'es' ? 'Enviar Correo' : 'Send Email'}
                        <span className="text-lg">→</span>
                    </button>

                    {/* Botón GitHub */}
                    <a
                        href="https://github.com/Jxstin-131"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white/5 border border-white/10 text-white font-black uppercase text-xs px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors">
                        <span>🐙</span>
                        GitHub
                    </a>
                </div>

                {/* Copyright Final */}
                <div className="mt-20 pt-8 border-t border-white/5">
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">
                        © 2026 Justin A. Sánchez • {lang === 'es' ? 'Hecho con' : 'Built with'} React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;