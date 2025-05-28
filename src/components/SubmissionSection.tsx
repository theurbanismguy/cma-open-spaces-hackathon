
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Users, Award, Upload, CheckCircle, AlertTriangle } from 'lucide-react';

const SubmissionSection = () => {
  const deliverables = [
    "6 slides in landscape format",
    "Brief site analysis with clear articulation of the main design concept and approach",
    "Diagrams explaining key strategies",
    "Explicit statement on how the design addresses the site questions",
    "Additional visual material such as plans, sections, perspectives as required",
    "1 A4 word document with concise narrative summarizing core idea, key design interventions, expected impact, and principle integration"
  ];

  const eligibilityCategories = [
    {
      title: "Bachelor and Masters Students",
      description: "Architecture, Planning, Landscape, Urban Design, Environmental Studies, Sociology and other related disciplines focused on the built or natural environment."
    },
    {
      title: "Design Professionals", 
      description: "Architects, Planners, Landscape Architects, Urban Designers, Engineers and other professionals with demonstrable experience in designing public spaces or urban environments."
    },
    {
      title: "General Public (18+)",
      description: "Individuals or community groups based in Chennai or elsewhere who have a demonstrable interest and passion for improving Chennai's open spaces."
    }
  ];

  const evaluationCriteria = [
    {
      title: "Understanding & Response to Context",
      percentage: "20%",
      description: "Depth of site analysis demonstrated; relevance and sensitivity of the proposal to the specific site's unique social, cultural, ecological, and physical context and challenges."
    },
    {
      title: "Design Concept & Originality", 
      percentage: "30%",
      description: "Clarity, coherence, creativity, and innovation of the core design idea and proposed interventions. Strength of the overall vision."
    },
    {
      title: "Alignment with Principles",
      percentage: "30%", 
      description: "How effectively and thoughtfully the design addresses and integrates the six guiding principles (Access & Connectivity, Resilience, Public Health, Safety, Identity & Inclusivity, Stewardship). Evidence of holistic thinking."
    },
    {
      title: "Feasibility & Communicability",
      percentage: "20%",
      description: "Plausibility and appropriateness of the concept within the Chennai context (considering potential implementation factors); clarity, rigour, and effectiveness of the graphic and written communication."
    }
  ];

  const submissionSteps = [
    "Register your team/participation via cmaopenspaces.com before June 11th",
    "You will be assigned a site and receive the site package on June 12th along with a unique Team ID",
    "Use June 13-15 to develop your proposals",
    "Upload your submission on cmaopenspaces.com",
    "Submit your entry before the official deadline of 23:59, June 15",
    "Do not mention names or other identifying elements on the entry. Only use the provided unique ID on your submission"
  ];

  return (
    <section id="submission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Submission & Evaluation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about deliverables, eligibility, and evaluation criteria
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-secondary">Deliverables</h3>
                </div>
                <ul className="space-y-3">
                  {deliverables.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Format:</strong> PDF | <strong>File Size:</strong> Maximum 25MB
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Upload className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-secondary">Submission Process</h3>
                </div>
                <ol className="space-y-3">
                  {submissionSteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">Eligibility Categories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {eligibilityCategories.map((category, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-semibold text-secondary">{category.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                <strong>Team Formation:</strong> Multi-disciplinary teams combining members from different eligible categories are highly encouraged.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">Evaluation Criteria</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {evaluationCriteria.map((criteria, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-secondary">{criteria.title}</h4>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {criteria.percentage}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {criteria.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 inline-block">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-secondary">Important Reminder</h3>
                </div>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  Submissions will be judged anonymously. Do not include names of participants or affiliations 
                  directly on the posters or in file names. Use the assigned Team ID only.
                </p>
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Register Your Team Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionSection;
