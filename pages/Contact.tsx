
import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="solar-gradient py-28 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Ready to Go Solar?</h1>
          <p className="text-2xl text-emerald-100 max-w-3xl mx-auto font-medium">Book your FREE site visit today and start saving on your energy bills.</p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Direct Info */}
            <div className="space-y-12">
              <div>
                <span className="text-emerald-700 font-black uppercase tracking-widest text-sm mb-6 block">Get in Touch</span>
                <h2 className="text-5xl font-black text-slate-900 mb-8">Let's Discuss Your Project</h2>
                <p className="text-gray-500 text-xl leading-relaxed mb-10">
                  Our technical team is ready to evaluate your site and provide a customized ROI projection.
                </p>
              </div>

              {/* Technician Visual - Added as requested */}
              <div className="relative group mb-12">
                <div className="absolute -inset-4 bg-emerald-100 rounded-[2.5rem] -rotate-1"></div>
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Solar Technician Inspecting Rooftop Panels" 
                  className="relative rounded-[2rem] shadow-xl w-full h-[300px] object-cover z-10"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                 <ContactItem 
                   icon={<Phone className="h-7 w-7 text-emerald-700" />}
                   label="Call Us Directly"
                   val={
                     <div className="flex flex-col font-black text-2xl text-slate-900">
                       <a href={`tel:${BUSINESS_INFO.phone1}`} className="hover:text-emerald-700">{BUSINESS_INFO.phone1}</a>
                       <a href={`tel:${BUSINESS_INFO.phone2}`} className="hover:text-emerald-700">{BUSINESS_INFO.phone2}</a>
                     </div>
                   }
                 />
                 <ContactItem 
                   icon={<Mail className="h-7 w-7 text-emerald-700" />}
                   label="Email Inquiry"
                   val={<a href={`mailto:${BUSINESS_INFO.email}`} className="text-xl font-black text-slate-900 hover:text-emerald-700 break-all">{BUSINESS_INFO.email}</a>}
                 />
                 <ContactItem 
                   icon={<MapPin className="h-7 w-7 text-emerald-700" />}
                   label="Our Office"
                   val={<p className="text-xl font-black text-slate-900">{BUSINESS_INFO.address}</p>}
                 />
              </div>

              <div className="bg-emerald-950 p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
                <h4 className="text-2xl font-black mb-4">Fast-track with WhatsApp</h4>
                <p className="text-emerald-100/70 mb-8 text-lg">Send your rooftop photos or current electricity bill to get a quick estimate.</p>
                <a 
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  className="bg-green-500 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center hover:bg-green-600 transition-all shadow-xl shadow-green-500/20"
                >
                  <MessageSquare className="mr-3 h-6 w-6" /> Start Chat
                </a>
              </div>
            </div>

            {/* Premium Form */}
            <div className="bg-[#fafafa] rounded-[3rem] p-10 md:p-16 border border-slate-200 shadow-sm relative sticky top-32">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 px-8 py-3 rounded-full font-black text-emerald-950 shadow-xl border-4 border-white whitespace-nowrap">
                FREE SITE VISIT FORM
              </div>
              
              <form name="contact" method="POST" data-netlify="true" className="space-y-8 mt-6">
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="space-y-6">
                  <FormInput id="name" name="name" label="Full Name" placeholder="Rahul Patil" />
                  <FormInput id="phone" name="phone" label="Phone Number" placeholder="98XXXXXXXX" type="tel" />
                  
                  <div>
                    <label className="block text-sm font-black text-slate-500 uppercase tracking-widest mb-3">Project Type</label>
                    <select name="project" className="w-full px-6 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-bold text-slate-800 appearance-none">
                       <option>Residential Rooftop</option>
                       <option>Commercial Building</option>
                       <option>Industrial Plant</option>
                    </select>
                  </div>

                  <FormInput id="location" name="location" label="Property Location" placeholder="Alibag City / Near Beach / Chendhare" />

                  <div>
                    <label className="block text-sm font-black text-slate-500 uppercase tracking-widest mb-3">Additional Details</label>
                    <textarea name="message" rows={4} className="w-full px-6 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-medium text-slate-800" placeholder="e.g. Current monthly bill amount..."></textarea>
                  </div>
                </div>

                <button type="submit" className="w-full solar-gradient text-white font-black py-6 rounded-2xl hover:opacity-90 transition-all shadow-2xl shadow-emerald-200 text-xl flex items-center justify-center group">
                  Send Inquiry <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Professional Frame */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-[3.5rem] overflow-hidden shadow-2xl h-[600px] border-[12px] border-white relative group">
          <iframe 
            src={BUSINESS_INFO.googleMaps} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            title="Office Location"
          ></iframe>
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-6 rounded-3xl shadow-2xl border border-white/50 md:max-w-sm hidden md:block">
             <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-6 w-6 text-emerald-700" />
                <span className="font-black text-slate-900 uppercase tracking-widest text-xs">Our Office</span>
             </div>
             <p className="text-gray-600 font-bold">{BUSINESS_INFO.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactItem = ({ icon, label, val }: { icon: React.ReactNode, label: string, val: React.ReactNode }) => (
  <div className="flex items-start gap-8">
    <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 flex-shrink-0">
      {icon}
    </div>
    <div>
      <span className="text-slate-400 font-black uppercase tracking-widest text-xs mb-2 block">{label}</span>
      <div className="leading-tight">{val}</div>
    </div>
  </div>
);

const FormInput = ({ id, name, label, placeholder, type = "text" }: any) => (
  <div>
    <label htmlFor={id} className="block text-sm font-black text-slate-500 uppercase tracking-widest mb-3">{label}</label>
    <input 
      type={type} 
      id={id} 
      name={name} 
      required 
      placeholder={placeholder} 
      className="w-full px-6 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-bold text-slate-800 placeholder:text-slate-300" 
    />
  </div>
);

export default Contact;
