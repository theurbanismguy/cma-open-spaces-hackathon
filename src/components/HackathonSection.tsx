
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Users, Target } from 'lucide-react';

const HackathonSection = () => {
  const phases = [
    {
      day: "Thursday",
      date: "June 12th",
      title: "Get Informed",
      description: "Receive project packages and site information",
      color: "bg-blue-100 text-blue-800"
    },
    {
      day: "Friday",
      date: "June 13th", 
      title: "Get Inspired",
      description: "Webinars and presentations from leading designers",
      color: "bg-green-100 text-green-800"
    },
    {
      day: "Weekend",
      date: "June 14-15",
      title: "Hackathon",
      description: "Design development with mentor support and guidance",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <section id="hackathon" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Design Hackathon
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This design competition is structured as a Hackathon; a fast-paced, three-day online event 
              packed with creativity, collaboration, and inspiration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {phases.map((phase, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${phase.color}`}>
                    {phase.day}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{phase.date}</p>
                  <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-secondary">Competition Focus</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We are not looking for generic solutions, but for creative, context-specific, 
                  and implementable design concepts that directly respond to these complex challenges 
                  and opportunities. Your innovative ideas will demonstrate the transformative potential 
                  of well-designed open spaces.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-secondary/5 to-secondary/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-secondary">Team Collaboration</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Teams will move through different stages of the design process with support and 
                  guidance from mentors. Final submissions are due Sunday end of day, and on Monday, 
                  our expert jury will begin reviewing the projects and selecting the standout designs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;
