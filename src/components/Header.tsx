
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleRegister = () => {
    window.open('https://forms.gle/Ueje9xbkn3SB23Kc7', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-gradient">CMA Open Spaces</h1>
            <span className="text-sm text-muted-foreground">Competition</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('principles')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Principles
            </button>
            <button 
              onClick={() => scrollToSection('hackathon')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Hackathon
            </button>
            <button 
              onClick={() => scrollToSection('timeline')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Timeline
            </button>
            <button 
              onClick={() => scrollToSection('submission')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Submit
            </button>
            <Button 
              onClick={handleRegister}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Register Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('principles')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Principles
              </button>
              <button 
                onClick={() => scrollToSection('hackathon')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Hackathon
              </button>
              <button 
                onClick={() => scrollToSection('timeline')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Timeline
              </button>
              <button 
                onClick={() => scrollToSection('submission')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Submit
              </button>
              <Button 
                onClick={handleRegister}
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Register Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
