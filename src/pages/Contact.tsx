import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import SectionHeading from '@/components/ui/SectionHeading';
import CustomButton from '@/components/ui/CustomButton';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(20, { message: "Message must be at least 20 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      toast.success("Your message has been sent successfully!");
      reset();
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      toast.error("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-builder-amber" />,
      title: 'Our Location',
      details: ['405 GANGOTRI ICON COMPLEX, Gotri - Vasna Rd, opp. GOKUL PARTY PLOT,  nr. BANSAL MULTIPLEX, Vadodara, Gujarat 390007']
    },
    {
      icon: <Phone size={24} className="text-builder-amber" />,
      title: 'Phone Number',
      details: ['+91 88494 32941']
    },
    {
      icon: <Mail size={24} className="text-builder-amber" />,
      title: 'Email Address',
      details: ['info@smdengineers.in']
    },
    {
      icon: <Clock size={24} className="text-builder-amber" />,
      title: 'Working Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 1:00 PM']
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 ">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0  z-10" />
          <div className="absolute inset-0 bg-[url('/photos/12.png')] bg-cover bg-center" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-white/90 text-lg mb-6">
              Get in touch with our team to discuss your construction project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div>
              <SectionHeading 
                title="Get In Touch"
                subtitle="We're here to answer any questions about your construction needs"
              />

              <div className="space-y-8 mt-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg text-builder-navy mb-2">{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 md:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-semibold text-builder-navy mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <motion.div 
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={30} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700 mb-4">
                      Thank you for reaching out. A member of our team will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-builder-amber/50 focus:border-builder-amber outline-none transition-colors ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="John Doe"
                          {...register('name')}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-builder-amber/50 focus:border-builder-amber outline-none transition-colors ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="your@email.com"
                          {...register('email')}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-builder-amber/50 focus:border-builder-amber outline-none transition-colors ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="(123) 456-7890"
                          {...register('phone')}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-builder-amber/50 focus:border-builder-amber outline-none transition-colors ${
                            errors.subject ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Project Inquiry"
                          {...register('subject')}
                        />
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-builder-amber/50 focus:border-builder-amber outline-none transition-colors ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Tell us about your project..."
                        {...register('message')}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <div>
                      <CustomButton 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full md:w-auto"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </CustomButton>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
     <section className="py-12">
  <div className="container mx-auto px-4">
    <div className="relative w-full overflow-hidden rounded-lg shadow-md" style={{ paddingTop: '56.25%' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29530.90575158244!2d73.141524!3d22.302099!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf92904f20b7%3A0xd701705c0d9769db!2sSMD%20ENGINEERS!5e0!3m2!1sen!2sin!4v1749190711075!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about working with us"
            center
          />

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What types of projects do you handle?",
                answer: "We specialize in residential, commercial, institutional, and renovation projects. Our experienced team can handle construction projects of various sizes and complexities, from custom homes to large commercial buildings."
              },
              {
                question: "How long does a typical construction project take?",
                answer: "Project timelines vary based on scope, complexity, and size. A small renovation might take a few weeks, while a custom home could take 6-12 months, and large commercial projects might require 12+ months. We provide detailed timelines during the planning phase."
              },
              {
                question: "Do you offer free estimates?",
                answer: "Yes, we offer free initial consultations and estimates for all potential projects. Our experts will assess your needs and provide a comprehensive estimate that outlines costs, timelines, and specifications."
              },
              {
                question: "Are you licensed and insured?",
                answer: "Yes, BuildPro is fully licensed, bonded, and insured. We maintain all necessary certifications and insurance coverages to protect both our clients and our team throughout the construction process."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-builder-navy mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;