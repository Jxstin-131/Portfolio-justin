export default function Navbar() {
    return (
        <nav className="h-20 flex items-center justify-between border-b border-white/5">
            <div className="text-xl font-bold text-white">J.SANCHEZ</div>
            <div className="flex gap-6 text-sm">
                <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                <button className="text-primary border border-primary px-4 py-1 rounded">Contact</button>
            </div>
        </nav>
    );
}