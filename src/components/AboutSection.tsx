
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Heart, Shield, Users, Lightbulb, HandHeart } from 'lucide-react';

const AboutSection = () => {
  const principles = [
    {
      icon: MapPin,
      title: "Access and Connectivity",
      description: "Ensuring spaces are easy and safe to reach, well-connected to surrounding neighbourhoods, and universally accessible to people of all ages and abilities."
    },
    {
      icon: Lightbulb,
      title: "Resilience",
      description: "Designing spaces that enhance ecological functions, mitigate climate impacts, support biodiversity, and are adaptable to changing conditions."
    },
    {
      icon: Heart,
      title: "Public Health",
      description: "Actively promoting physical activity, mental wellbeing, social interaction, and contributing to a healthier environment."
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Creating spaces that feel genuinely safe and welcoming for everyone, at all times of day, through thoughtful design and consideration for vulnerable groups."
    },
    {
      icon: Users,
      title: "Identity and Inclusivity",
      description: "Designing spaces that reflect and enhance Chennai's unique cultural identity and heritage, fostering social inclusion by catering to diverse community needs."
    },
    {
      icon: HandHeart,
      title: "Stewardship",
      description: "Proposing designs that are practical to manage and maintain within the local context, potentially incorporating community participation and environmental awareness."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Why Open Spaces?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Chennai, a metropolis shaped by its relationship with water and centuries of cultural layering, 
              is undergoing rapid urbanization. As part of the crucial process of formulating the Third Master Plan 
              for the Chennai Metropolitan Area (CMA), a comprehensive Open Space Strategy is being developed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-secondary">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">
                Chennai's invaluable open space network faces critical challenges including acute scarcity, 
                fragmentation, degradation, inequitable access, and climate change vulnerability. With less than 
                0.84 sq.m. of provided public open space per capita, the available space is insufficient and often fragmented.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Many existing spaces suffer from encroachment, pollution, and lack of consistent maintenance. 
                The increasing frequency of extreme heat events and devastating floods highlights the urgent need 
                for open spaces designed for resilience.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-secondary">The Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                This strategy aims to guide future planning, design, management, and maintenance of Chennai's 
                diverse open spaces to create a more sustainable, climate-adaptive, inclusive, and liveable 
                Chennai for all its citizens.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're looking for creative, context-specific, and implementable design concepts that directly 
                respond to these complex challenges and opportunities, demonstrating the transformative potential 
                of well-designed open spaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="principles" className="container mx-auto px-4 mt-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
            Guiding Principles
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We consider open spaces through six thematic guiding principles:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <principle.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="text-lg font-semibold text-secondary">{principle.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
