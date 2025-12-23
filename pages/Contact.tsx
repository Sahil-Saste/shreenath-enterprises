
import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowRight, CheckCircle2, Send, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: 'Residential Rooftop',
    location: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp with clear labels and emojis
    const text = `*New Solar Inquiry - Shreenath Enterprises*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*Email:* ${formData.email}%0A` +
                 `*Project:* ${formData.project}%0A` +
                 `*Location:* ${formData.location}%0A` +
                 `*Details:* ${formData.message || 'No additional details'}`;

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/919604437523?text=${text}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white">
      {/* Header with Direct Action Buttons */}
      <section className="solar-gradient py-28 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">Ready to Go Solar?</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto font-medium mb-12">
            Get an instant quote and technical evaluation via WhatsApp or a direct call.
          </p>
          
          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <a 
              href={`tel:${BUSINESS_INFO.phone1}`} 
              className="w-full sm:w-auto bg-white text-emerald-800 px-8 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-2xl hover:bg-emerald-50 transition-all active:scale-95"
            >
              <Phone className="h-6 w-6" /> Call Now
            </a>
            <a 
              href={BUSINESS_INFO.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-2xl hover:bg-green-600 transition-all active:scale-95"
            >
              <MessageSquare className="h-6 w-6" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Direct Info */}
            <div className="space-y-12">
              <div>
                <span className="text-emerald-700 font-black uppercase tracking-widest text-sm mb-6 block">Contact Details</span>
                <h2 className="text-5xl font-black text-slate-900 mb-8">Contact Our Team</h2>
                <p className="text-gray-500 text-xl leading-relaxed mb-10">
                  Our engineers are available for site visits across Alibag and Maharashtra. Reach out via phone or the form.
                </p>
              </div>

              {/* Technician Visual */}
              <div className="relative group mb-12">
                <div className="absolute -inset-4 bg-emerald-100 rounded-[2.5rem] -rotate-1"></div>
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Solar Technician" 
                  className="relative rounded-[2rem] shadow-xl w-full h-[300px] object-cover z-10"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                 <ContactItem 
                   icon={<Phone className="h-7 w-7 text-emerald-700" />}
                   label="Call Us Directly"
                   val={
                     <div className="flex flex-col font-black text-2xl text-slate-900">
                       <a href={`tel:${BUSINESS_INFO.phone1}`} className="hover:text-emerald-700 transition-colors">{BUSINESS_INFO.phone1}</a>
                       <a href={`tel:${BUSINESS_INFO.phone2}`} className="hover:text-emerald-700 transition-colors">{BUSINESS_INFO.phone2}</a>
                     </div>
                   }
                 />
                 <ContactItem 
                   icon={<Mail className="h-7 w-7 text-emerald-700" />}
                   label="Email Address"
                   val={<a href={`mailto:${BUSINESS_INFO.email}`} className="text-xl font-black text-slate-900 hover:text-emerald-700 transition-colors break-all">{BUSINESS_INFO.email}</a>}
                 />
                 <ContactItem 
                   icon={<MapPin className="h-7 w-7 text-emerald-700" />}
                   label="Our Location"
                   val={
                    <div className="group cursor-pointer" onClick={() => window.open(BUSINESS_INFO.googleMapsDirectLink, '_blank')}>
                      <p className="text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors underline decoration-slate-200 underline-offset-4">{BUSINESS_INFO.address}</p>
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mt-1 block">Click to view on maps</span>
                    </div>
                   }
                 />
              </div>
            </div>

            {/* Premium WhatsApp Form Container */}
            <div className="bg-[#fafafa] rounded-[3rem] p-10 md:p-16 border border-slate-200 shadow-sm relative sticky top-32 min-h-[600px] flex flex-col justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 px-8 py-3 rounded-full font-black text-white shadow-xl border-4 border-white whitespace-nowrap flex items-center gap-2">
                <MessageSquare className="h-5 w-5" /> INSTANT WHATSAPP INQUIRY
              </div>
              
              <div className="mb-10 text-center">
                <p className="text-slate-500 font-bold">Fill details below and click "Send via WhatsApp" to share your inquiry instantly with our owner.</p>
              </div>

              <form onSubmit={handleSubmitToWhatsApp} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput 
                    id="name" 
                    name="name" 
                    label="Full Name" 
                    placeholder="e.g. Rahul Patil" 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <FormInput 
                    id="phone" 
                    name="phone" 
                    label="Phone Number" 
                    placeholder="98XXXXXXXX" 
                    type="tel" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput 
                    id="email" 
                    name="email" 
                    label="Email (Optional)" 
                    placeholder="rahul@example.com" 
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <div>
                    <label className="block text-sm font-black text-slate-500 uppercase tracking-widest mb-3">Project Type</label>
                    <select 
                      name="project" 
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full px-6 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-bold text-slate-800 appearance-none cursor-pointer"
                    >
                       <option>Residential Rooftop</option>
                       <option>Commercial Building</option>
                       <option>Industrial Plant</option>
                    </select>
                  </div>
                </div>

                <FormInput 
                  id="location" 
                  name="location" 
                  label="Site Location" 
                  placeholder="e.g. Chendhare, Alibag" 
                  value={formData.location}
                  onChange={handleInputChange}
                />

                <div>
                  <label className="block text-sm font-black text-slate-500 uppercase tracking-widest mb-3">Your Message / Requirements</label>
                  <textarea 
                    name="message" 
                    rows={3} 
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-medium text-slate-800" 
                    placeholder="e.g. I want to install a 3kW system. My monthly bill is ₹3000."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-green-500 text-white font-black py-6 rounded-2xl hover:bg-green-600 transition-all shadow-2xl shadow-green-200 text-xl flex items-center justify-center group"
                >
                  Send via WhatsApp <Send className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">Safe & Secure • Direct to Owner</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
          
          {/* Action Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-emerald-700 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-2xl border-4 border-white/20">
              <Navigation className="h-6 w-6" /> CLICK TO NAVIGATE
            </div>
          </div>

          {/* Floating Address Card */}
          <div 
            className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-6 rounded-3xl shadow-2xl border border-white/50 md:max-w-sm hidden md:block cursor-pointer hover:bg-white transition-all active:scale-95"
            onClick={() => window.open(BUSINESS_INFO.googleMapsDirectLink, '_blank')}
          >
             <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-6 w-6 text-emerald-700" />
                <span className="font-black text-slate-900 uppercase tracking-widest text-xs">Our Office</span>
             </div>
             <p className="text-gray-600 font-bold mb-4">{BUSINESS_INFO.address}</p>
             <div className="bg-emerald-600 text-white py-3 rounded-xl font-black text-sm text-center flex items-center justify-center gap-2">
               <Navigation className="h-4 w-4" /> Open in Google Maps
             </div>
          </div>

          {/* Mobile Direct Nav Overlay */}
          <a 
            href={BUSINESS_INFO.googleMapsDirectLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="absolute inset-0 md:hidden flex items-end p-6 bg-gradient-to-t from-black/20 to-transparent"
          >
            <div className="w-full bg-white p-4 rounded-2xl shadow-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Office Location</span>
                <p className="font-bold text-slate-900 text-sm">Tap to Navigate</p>
              </div>
              <div className="bg-emerald-600 p-3 rounded-xl">
                <Navigation className="h-5 w-5 text-white" />
              </div>
            </div>
          </a>
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

const FormInput = ({ id, name, label, placeholder, type = "text", value, onChange }: any) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-sm font-black text-slate-500 uppercase tracking-widest mb-3">{label}</label>
    <input 
      type={type} 
      id={id} 
      name={name} 
      required 
      value={value}
      onChange={onChange}
      placeholder={placeholder} 
      className="w-full px-6 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-100 outline-none transition-all font-bold text-slate-800 placeholder:text-slate-300" 
    />
  </div>
);

export default Contact;
