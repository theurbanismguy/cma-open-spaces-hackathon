
import { Mail, Globe, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-sm">info@cmaopenspaces.com</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  <span className="text-sm">cmaopenspaces.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Dates</h3>
              <div className="space-y-2 text-sm">
                <p>Registration Deadline: June 11th</p>
                <p>Hackathon: June 13-15, 2024</p>
                <p>Submission Deadline: June 15, 23:59</p>
                <p>Winner Announcement: Week 26</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">About the Competition</h3>
              <p className="text-sm">
                Part of Chennai's Third Master Plan development process, focusing on creating 
                sustainable, inclusive, and resilient open spaces for the city's future.
              </p>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8 text-center">
            <p className="text-sm opacity-80">
              © 2024 Chennai Metropolitan Development Authority (CMDA) Open Spaces Design Competition. 
              All rights reserved.
            </p>
            <p className="text-xs opacity-60 mt-2">
              Competition organized in collaboration with designated partners (Sponge Collaborative, PosadMaxwan)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
