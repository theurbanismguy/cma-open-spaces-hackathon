
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    { date: "May 30th", event: "Registration opens", status: "completed" },
    { date: "June 10th", event: "Deadline for questions", status: "completed" },
    { date: "June 11th", event: "Registration closes", status: "completed" },
    { date: "June 12th", event: "Site packages released to teams", status: "upcoming" },
    { date: "June 13th", event: "Webinar & Inspiration Day", status: "upcoming" },
    { date: "June 14-15th", event: "Design Hackathon", status: "upcoming" },
    { date: "June 15th (23:59)", event: "Submission Deadline", status: "deadline" },
    { date: "Week 26", event: "Winner Announcement", status: "upcoming" }
  ];

  const fridaySchedule = [
    { time: "10:00", activity: "Introduction - Open Spaces in Chennai" },
    { time: "11:00", activity: "Presentation from PosadMaxwan and Sponge Collaborative (Online via Teams)" },
    { time: "12:00", activity: "(Optional) Q&A with organising team (Online via Teams)" },
    { time: "13:00", activity: "Workblock - Site analysis (suggestion)" },
    { time: "18:00", activity: "Presentation" }
  ];

  const saturdaySchedule = [
    { time: "8:00", activity: "Workblock - Design concept development (suggestion)" },
    { time: "12:00", activity: "(Optional) Q&A with organising team (Online via Teams)" },
    { time: "13:00", activity: "Workblock - Design development (suggestion)" }
  ];

  const sundaySchedule = [
    { time: "8:00", activity: "Workblock - Finetuning visuals (suggestion)" },
    { time: "12:00", activity: "(Optional) Q&A with organising team (Online via Teams)" },
    { time: "13:00", activity: "Workblock - Wrapping up" },
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
              Key dates and milestones for the competition
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">Competition Overview</h3>
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
                      <span className="text-sm font-medium text-blue-600 min-w-12">{item.time}</span>
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
                      <span className="text-sm font-medium text-green-600 min-w-12">{item.time}</span>
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
                      <span className={`text-sm font-medium min-w-12 ${item.isDeadline ? 'text-red-600' : 'text-purple-600'}`}>
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
