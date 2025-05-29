
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Users, Star, Award, IndianRupee } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      title: "₹1,00,000 Prize Money per Site",
      description: "One winning entry per site will be awarded ₹1,00,000 INR prize money and will receive the assignment to develop their proposal into a detailed design.",
      icon: IndianRupee
    },
    {
      title: "Public Online Exhibition",
      description: "All winning, shortlisted, and specially mentioned teams/individuals will have their work featured in a public online exhibition and potentially included in publications related to the Chennai Open Space Strategy.",
      icon: Star
    },
    {
      title: "Design Development Assignment",
      description: "Winning teams (First Prize) will be invited to present and discuss their ideas further with the design team of the Open Space Strategy and city officials, and will receive the assignment to develop their proposal into a detailed design.",
      icon: Award
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-yellow-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Awards and Jury
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Recognition and opportunities for outstanding contributions to Chennai's open space design
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-8 flex items-center">
                <Trophy className="h-6 w-6 text-primary mr-3" />
                Awards & Recognition
              </h3>
              <div className="space-y-6">
                {awards.map((award, index) => {
                  const IconComponent = award.icon;
                  return (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <IconComponent className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-secondary mb-2">{award.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {award.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-8 flex items-center">
                <Users className="h-6 w-6 text-primary mr-3" />
                Jury Panel
              </h3>
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-secondary mb-4">
                      Expert Evaluation Panel
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      Jury composition to be determined. The evaluation panel will consist of experts in urban planning, landscape architecture, and sustainable design.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-sm text-amber-800">
                        <strong>Note:</strong> Detailed jury information will be announced soon. 
                        Stay tuned for updates on our distinguished panel of experts.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5 inline-block">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-secondary">Total Prize Pool</h3>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">₹1,00,000 per site</div>
                <p className="text-muted-foreground max-w-2xl">
                  Beyond monetary awards, this hackathon offers participants the unique opportunity to contribute 
                  directly to Chennai's urban planning future and have their innovative ideas potentially 
                  implemented in the city's Third Master Plan through detailed design assignments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
