
import { Button } from '@/components/ui/button';
import { ArrowDown, Calendar, Users, Trophy } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegister = () => {
    window.open('https://forms.gle/Ueje9xbkn3SB23Kc7', '_blank');
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/lovable-uploads/d3af2685-3613-4420-8b04-d7b30808f0d0.png')`,
          transform: 'translateZ(0)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-tight">
            Chennai Metropolitan Area
            <br />
            <span className="text-secondary/80">Open Spaces</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">Hackathon</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary/80 mb-8 max-w-2xl mx-auto">
            Third Master Plan Design Hackathon for Chennai's Future Open Spaces
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Calendar className="h-5 w-5 text-secondary mr-2" />
              <span className="text-secondary font-medium">June 13-15, 2024</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Users className="h-5 w-5 text-secondary mr-2" />
              <span className="text-secondary font-medium">Multi-disciplinary Teams</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Trophy className="h-5 w-5 text-secondary mr-2" />
              <span className="text-secondary font-medium">Design Hackathon</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={handleRegister}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-3"
            >
              Register Your Team
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToAbout}
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout}>
          <ArrowDown className="h-6 w-6 text-secondary/60" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
