import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    { date: "May 30th", event: "Registration opens", status: "upcoming" },
    { date: "June 10th", event: "Deadline for questions", status: "upcoming" },
    { date: "June 11th", event: "Registration closes", status: "upcoming" },
    { date: "June 12th (15:30)", event: "Site packages released to teams", status: "upcoming" },
    { date: "June 13th", event: "Webinar & Inspiration Day", status: "upcoming" },
    { date: "June 14-15th", event: "Design Hackathon", status: "upcoming" },
    { date: "June 15th (23:59)", event: "Submission Deadline", status: "deadline" },
    { date: "Week 25", event: "Jury delivers results", status: "upcoming" },
    { date: "End of June", event: "First prize winning teams share detailed designs", status: "upcoming" }
  ];

  const fridaySchedule = [
    { time: "Morning", activity: "Workblock - Site analysis (suggestion)" },
    { time: "Afternoon", activity: "Workblock - Site analysis (suggestion)" },
    { time: "15:00", activity: "(optional) Presentation (introduction to sites and the open space strategy)" }
  ];

  const saturdaySchedule = [
    { time: "Morning", activity: "Workblock - First design concepts (suggestion)" },
    { time: "10:00", activity: "(optional) Presentation (principles and examples)" },
    { time: "Afternoon", activity: "Workblock - Design frameworks (suggestion)" }
  ];

  const sundaySchedule = [
    { time: "Morning", activity: "Workblock - Visuals of the design (suggestion)" },
    { time: "Afternoon", activity: "Workblock - Finalising and writing (suggestion)" },
    { time: "23:59", activity: "Deadline", isDeadline: true }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'deadline':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-700 bg-green-50';
      case 'deadline':
        return 'text-red-700 bg-red-50';
      default:
        return 'text-blue-700 bg-blue-50';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Timeline
            </h2>
            <p className="text-lg text-muted-foreground">
              Key dates and milestones for the hackathon
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">Hackathon Overview</h3>
            <div className="space-y-4">
              {timelineEvents.map((item, index) => (
                <Card key={index} className={`border-0 shadow-sm ${getStatusColor(item.status)}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(item.status)}
                        <span className="font-medium">{item.date}</span>
                      </div>
                      <span className="text-right">{item.event}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-secondary">Friday June 13th</h3>
                </div>
                <div className="space-y-3">
                  {fridaySchedule.map((item, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <span className="text-sm font-medium text-blue-600 min-w-16">{item.time}</span>
                      <span className="text-sm text-muted-foreground text-right flex-1 ml-3">
                        {item.activity}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-semibold text-secondary">Saturday June 14th</h3>
                </div>
                <div className="space-y-3">
                  {saturdaySchedule.map((item, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <span className="text-sm font-medium text-green-600 min-w-16">{item.time}</span>
                      <span className="text-sm text-muted-foreground text-right flex-1 ml-3">
                        {item.activity}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-600 mr-2" />
                  <h3 className="text-xl font-semibold text-secondary">Sunday June 15th</h3>
                </div>
                <div className="space-y-3">
                  {sundaySchedule.map((item, index) => (
                    <div key={index} className={`flex justify-between items-start ${item.isDeadline ? 'border-l-4 border-red-500 pl-2' : ''}`}>
                      <span className={`text-sm font-medium min-w-16 ${item.isDeadline ? 'text-red-600' : 'text-purple-600'}`}>
                        {item.time}
                      </span>
                      <span className={`text-sm text-right flex-1 ml-3 ${item.isDeadline ? 'text-red-600 font-semibold' : 'text-muted-foreground'}`}>
                        {item.activity}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
