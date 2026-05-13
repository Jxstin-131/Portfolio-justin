import { useState } from 'react';

interface NavbarProps {
    currentLang: string;
    onLangChange: (lang: string) => void;
}

function Navbar({ currentLang, onLangChange }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-[100] px-6 py-6">
            <nav className="max-w-5xl mx-auto">
                <div className="bg-[#050505]/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl transition-all duration-300">

                    {/* LOGO */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-[10px] font-black text-white italic">
                            JS
                        </div>
                        <div className="text-sm font-bold tracking-tighter text-white hidden sm:block uppercase">
                            Justin<span className="text-primary">.</span>Sanchez
                        </div>
                    </div>

                    {/* LINKS CENTRALES (Escritorio) */}
                    <div className="hidden md:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5">
                        <div className="flex items-center gap-1">
                            <a href="#home" className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all">
                                {currentLang === 'es' ? 'Inicio' : 'Home'}
                            </a>
                            <a href="#about" className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all">
                                {currentLang === 'es' ? 'Sobre mí' : 'About'}
                            </a>
                            <a href="#experience" className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all">
                                {currentLang === 'es' ? 'Experiencia' : 'Experience'}
                            </a>
                            {/* Corregido de #projectos a #proyectos */}
                            <a href="#proyectos" className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all">
                                {currentLang === 'es' ? 'Proyectos' : 'Projects'}
                            </a>
                            {/* Corregido de #skills a #habilidades */}
                            <a href="#habilidades" className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all">
                                {currentLang === 'es' ? 'Habilidades' : 'Skills'}
                            </a>
                            {/* Corregido de #contact a #contacto */}
                            <a href="#contacto" className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all">
                                {currentLang === 'es' ? 'Contacto' : 'Contact'}
                            </a>
                        </div>
                    </div>

                    {/* LADO DERECHO: Selector + Resume */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
                            <button
                                type="button"
                                onClick={() => onLangChange('en')}
                                className={`px-3 py-1 text-[9px] font-black rounded-full transition-all duration-300 cursor-pointer ${currentLang === 'en' ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                EN
                            </button>
                            <button
                                type="button"
                                onClick={() => onLangChange('es')}
                                className={`px-3 py-1 text-[9px] font-black rounded-full transition-all duration-300 cursor-pointer ${currentLang === 'es' ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                ES
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white p-2 focus:outline-none cursor-pointer flex flex-col items-center justify-center gap-1.5"
                            aria-label="Toggle Menu"
                        >
                            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>

                {/* MENÚ DESPLEGABLE MÓVIL (Completo) */}
                {isOpen && (
                    <div className="mt-4 bg-[#050505]/95 border border-white/10 p-6 rounded-3xl md:hidden backdrop-blur-2xl shadow-2xl flex flex-col gap-5 text-center animate-in fade-in zoom-in duration-300">
                        <a href="#home" onClick={() => setIsOpen(false)} className="text-[11px] font-bold text-white uppercase tracking-widest">
                            {currentLang === 'es' ? 'Inicio' : 'Home'}
                        </a>
                        <a href="#about" onClick={() => setIsOpen(false)} className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            {currentLang === 'es' ? 'Sobre mí' : 'About'}
                        </a>
                        <a href="#experience" onClick={() => setIsOpen(false)} className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            {currentLang === 'es' ? 'Experiencia' : 'Experience'}
                        </a>
                        <a href="#proyectos" onClick={() => setIsOpen(false)} className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            {currentLang === 'es' ? 'Proyectos' : 'Projects'}
                        </a>
                        <a href="#habilidades" onClick={() => setIsOpen(false)} className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            {currentLang === 'es' ? 'Skills' : 'Skills'}
                        </a>
                        <a href="#contacto" onClick={() => setIsOpen(false)} className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            {currentLang === 'es' ? 'Contacto' : 'Contact'}
                        </a>
                        <button type="button" className="bg-primary text-white py-3 rounded-2xl font-bold uppercase text-[10px] tracking-widest">
                            {currentLang === 'es' ? 'Currículum' : 'Resume'}
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;