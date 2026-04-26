import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";

// Helper function to handle classes since we removed the 'cn' utility for simplicity
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Hobbies", href: "#hobbies" },
  { name: "Contact", href: "#contact" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={classNames(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "border-b border-white/10 bg-black/80 backdrop-blur-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 group text-white decoration-transparent">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/30 transition-transform group-hover:scale-110">
            <Leaf className="h-5 w-5" />
          </div>
          <span className="font-sans text-lg font-bold tracking-tight">
            Akanda Sina <span className="text-emerald-500">Kilicarslan</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition-colors hover:text-emerald-500 decoration-transparent"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white hover:text-emerald-500 decoration-transparent"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
