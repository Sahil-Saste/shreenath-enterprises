
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, Landmark, CheckCircle2 } from 'lucide-react';
import { SUBSIDY_INFO, BUSINESS_INFO } from '../constants';

const Services = () => {
  const serviceCategories = [
    {
      title: "Residential Solar",
      tagline: "Cut Bills by 90%",
      image: "https://images.unsplash.com/photo-1611367540803-0c3bc904af34?auto=format&fit=crop&q=80&w=1200",
      description: "Smart, aesthetic rooftop installations for homes that pay for themselves within 3-4 years.",
      points: ["Full Subsidy Assistance", "Quick 3-Day Installation", "Net Metering Handling"]
    },
    {
      title: "Commercial Solar",
      tagline: "Smart Business Asset",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e2?auto=format&fit=crop&q=80&w=1200",
      description: "Scale your business with zero-maintenance power plants that lower operational costs significantly.",
      points: ["Tax (AD) Benefits", "High Durability Structures", "Performance Monitoring"]
    },
    {
      title: "Industrial & Utility",
      tagline: "Large-Scale EPC",
      image: "https://unsplash.com/photos/an-aerial-view-of-a-large-solar-farm-hYfOeNvDXWg",
      description: "Mega-scale power solutions for factories and land-based projects with robust structural engineering.",
      points: ["Heavy Load Management", "MW-Scale Experience", "Grid Integration"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 py-32 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Solar background field" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Solar Services</h1>
          <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto">Providing end-to-end Solar EPC solutions across Maharashtra with a focus on quality and transparency.</p>
        </div>
      </section>

      {/* Residential Subsidy Spotlight - Image Removed and Content Centered */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-[3rem] p-10 md:p-16 flex flex-col items-center text-center border border-green-100 shadow-sm">
            <div className="max-w-3xl">
              <div className="inline-block bg-green-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">Government Support</div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">PM-Surya Ghar: <br /><span className="text-green-600">Residential Subsidy</span></h2>
              <p className="text-slate-600 text-xl mb-10 font-medium leading-relaxed">
                Homeowners can get a direct subsidy from the government. We handle the documentation for you to ensure a smooth transition to solar.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {SUBSIDY_INFO.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-green-200 shadow-sm">
                    <span className="block font-black text-slate-400 text-xs uppercase tracking-widest mb-2">{item.capacity}</span>
                    <span className="block font-black text-green-700 text-2xl">{item.amount}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-green-600 text-white px-10 py-5 rounded-xl font-black hover:bg-green-700 transition-all shadow-xl">
                Check Eligibility <ChevronRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {serviceCategories.map((service, idx) => (
              <div key={idx} className="group flex flex-col h-full">
                {/* Image Container */}
                <div className="aspect-[16/11] overflow-hidden rounded-[2.5rem] mb-8 relative shadow-xl bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black text-green-700 uppercase tracking-widest shadow-xl border border-white/50">
                      {service.tagline}
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-black text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-500 text-lg mb-8 font-medium leading-relaxed">{service.description}</p>
                  <div className="space-y-3 mb-8">
                    {service.points.map((p, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="bg-green-100 p-1 rounded-full">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                        </div>
                        <span className="text-slate-700 font-bold text-base">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 text-green-600 font-black text-lg hover:gap-4 transition-all mt-auto">
                  Inquire Now <ChevronRight className="h-6 w-6" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-950 py-32 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-green-500/30">
            <Zap className="h-12 w-12 text-green-500" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">Expert Site Consultation</h2>
          <p className="text-slate-400 text-2xl mb-16 leading-relaxed">Every roof is different. Our engineers visit your site for a precision layout and shadow analysis at zero cost.</p>
          <Link to="/contact" className="inline-block bg-green-600 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-green-700 transition-all shadow-2xl shadow-green-900/40">
            Book Site Visit Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
