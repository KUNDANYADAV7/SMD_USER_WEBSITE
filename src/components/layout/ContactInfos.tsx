import { useState } from "react";
import { X, PhoneCall, Mail, MapPin, Grid } from "lucide-react";

const ContactInfos = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Open Button - Now at top right */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 right-6 z-50 bg-yellow-400 text-black rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
      >
        <Grid className="w-6 h-6" />
      </button>

      {/* Background Blur */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
        />
      )}

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#0e1b2c] text-white transform transition-transform duration-300 ease-in-out z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-start p-4 border-b border-gray-700">
          <div>
            <h2 className="text-2xl font-extrabold text-yellow-400">SMD ENGINEER</h2>
            <p className="text-sm mt-1 text-gray-300">
              we’re committed to making the process of 
      building your dream home as enjoyable, simple, and hassle-free as possible.
            </p>
          </div>
          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Contact Info */}
        <div className="p-5 space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3">Address</h3>
            <div className="flex items-start space-x-3">
              <PhoneCall className="text-yellow-400 mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-300">Phone:</p>
                <p className="text-sm">+91 88494 32941</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 mt-4">
              <Mail className="text-[#ffc107] mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-300">Email Address:</p>
                <p className="text-sm">info@smdengineers.in</p>
              </div>
            </div>

          <div className="flex items-start space-x-3 mt-4">
  <MapPin className="text-yellow-400 w-7 h-7 flex-shrink-0 mt-1.5" />
  <div>
    <p className="text-sm font-semibold text-gray-300">Our Office:</p>
    <p className="text-sm text-gray-200">
      405 GANGOTRI ICON COMPLEX, Gotri - Vasna Rd, opp.
      <br />
      GOKUL PARTY PLOT, nr. BANSAL MULTIPLEX, Vadodara, Gujarat 390007
      <br />
      Building District, NY 10001
    </p>
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfos;
