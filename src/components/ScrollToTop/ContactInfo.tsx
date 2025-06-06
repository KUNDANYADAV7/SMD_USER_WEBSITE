import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Phone, Mail, MapPin, Clock, Globe, X } from "lucide-react";
import { Grid2X2 } from "lucide-react";

interface ContactInfoProps {
  className?: string;
}

const ContactInfo = ({ className }: ContactInfoProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className={`bg-construction-yellow rounded-full p-3 shadow-float-button hover:bg-amber-400 transition-colors duration-300 ${className}`}>
          <Grid2X2 className="h-5 w-5 text-construction-dark" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#1A1F2C] border-none p-8 w-full max-w-lg">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="text-construction-yellow mr-2 text-3xl font-heading font-bold">BuildGo</div>
          </div>
          <SheetClose className="rounded-full bg-construction-yellow p-2 hover:bg-amber-400 transition-colors">
            <X className="h-5 w-5 text-[#1A1F2C]" />
          </SheetClose>
        </div>
        
        <div className="mb-10">
          <p className="text-white/70 mb-4 text-sm">
            Redefining the construction industry with innovative solutions, cutting-edge technology and sustainable practices
          </p>
          <div className="border-t border-white/10 pt-6 mt-6"></div>
        </div>
        
        <div className="space-y-8 text-white">
          <h3 className="text-2xl font-heading font-bold mb-6">Address</h3>
          
          <div className="flex items-start">
            <div className="rounded-full bg-construction-yellow/10 p-3 mr-4">
              <Phone className="h-6 w-6 text-construction-yellow" />
            </div>
            <div>
              <h4 className="font-medium text-white mb-1">Phone:</h4>
              <p className="text-white/70">+123 (256) 568 58</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="rounded-full bg-construction-yellow/10 p-3 mr-4">
              <Mail className="h-6 w-6 text-construction-yellow" />
            </div>
            <div>
              <h4 className="font-medium text-white mb-1">Email Address:</h4>
              <p className="text-white/70">info@buildgo.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="rounded-full bg-construction-yellow/10 p-3 mr-4">
              <MapPin className="h-6 w-6 text-construction-yellow" />
            </div>
            <div>
              <h4 className="font-medium text-white mb-1">Our Office:</h4>
              <p className="text-white/70">123 Construction Avenue, Building District, NY 10001</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="rounded-full bg-construction-yellow/10 p-3 mr-4">
              <Clock className="h-6 w-6 text-construction-yellow" />
            </div>
            <div>
              <h4 className="font-medium text-white mb-1">Working Hours:</h4>
              <p className="text-white/70">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-white/70">Saturday: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="rounded-full bg-construction-yellow/10 p-3 mr-4">
              <Globe className="h-6 w-6 text-construction-yellow" />
            </div>
            <div>
              <h4 className="font-medium text-white mb-1">Website:</h4>
              <p className="text-white/70">www.buildgo.com</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ContactInfo;



