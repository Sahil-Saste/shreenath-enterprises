
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, Phone, MessageSquare, Landmark, TrendingUp, Zap, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SUBSIDY_INFO } from '../constants';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Bright Energy For Bright Future */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2000" 
            alt="Large scale solar panel field" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-green-600/30 backdrop-blur-md border border-green-400/30 px-4 py-2 rounded-full mb-8">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white text-xs font-bold uppercase tracking-widest">Alibag's Trusted Solar Experts</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] drop-shadow-lg">
              Bright Energy <br />
              <span className="text-green-500">For Bright Future</span>
            </h1>
            <p className="text-xl text-slate-100 mb-10 leading-relaxed font-medium drop-shadow-md">
              Complete Solar Energy Solutions for Homes, Businesses & Industries. From Rooftop Systems to Large Solar Projects – Get a FREE Site Visit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center shadow-xl shadow-green-900/40 border-b-4 border-green-800">
                Book FREE Site Visit
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <a href={`tel:${BUSINESS_INFO.phone1}`} className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center border border-white/30">
                <Phone className="mr-2 h-5 w-5 text-green-400" /> {BUSINESS_INFO.phone1}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <TrustItem icon={<ShieldCheck className="h-8 w-8 text-green-600" />} text="Quality Standards" />
            <TrustItem icon={<Landmark className="h-8 w-8 text-green-600" />} text="Subsidy Support" />
            <TrustItem icon={<Zap className="h-8 w-8 text-green-600" />} text="Expert Installation" />
            <TrustItem icon={<Check className="h-8 w-8 text-green-600" />} text="Free Site Visit" />
          </div>
        </div>
      </div>

      {/* Residential Section - Modern House Image Restored */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-50"></div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-green-600/5 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
                <img 
                  src="https://unsplash.com/photos/a-house-with-a-solar-panel-on-the-roof-OiPtLN9_04w" 
                  alt="Modern house with solar rooftop panels" 
                  className="relative rounded-[2.5rem] shadow-2xl z-10 w-full h-[550px] object-cover border-8 border-white"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-green-600 font-black uppercase tracking-widest text-sm mb-4 block">Residential Solutions</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                Empower Your <span className="text-green-600 underline decoration-green-200 underline-offset-8">Home</span> With Solar
              </h2>
              <p className="text-slate-600 text-xl mb-10 leading-relaxed">
                Slash your monthly electricity bills by up to 90%. We provide premium monocrystalline panels that generate more power even in low light conditions.
              </p>
              
              <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-10 mb-10 shadow-2xl relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-600/20 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Landmark className="h-7 w-7 text-green-500" /> PM-Surya Ghar Govt. Subsidy
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                  {SUBSIDY_INFO.map((item, idx) => (
                    <div key={idx} className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                      <div className="text-slate-400 text-xs font-bold uppercase mb-1 tracking-wider">{item.capacity}</div>
                      <div className="text-green-400 font-black text-xl">{item.amount}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[11px] text-slate-400 font-medium">*Available for all eligible residential consumers.</p>
              </div>
              
              <Link to="/contact" className="inline-flex items-center text-green-700 font-black text-lg group">
                Check Eligibility & Book Free Visit 
                <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial & Industrial Section */}
      <section className="py-24 md:py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4 block">Business & Industry</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                Optimize Your <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Business</span> Cost
              </h2>
              <p className="text-slate-600 text-xl mb-10 leading-relaxed">
                Transform your idle roof space into a revenue-generating asset. Solar energy provides fixed-cost power for 25+ years.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingUp className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">ROI Focused</h4>
                  <p className="text-slate-500 font-medium text-sm">Typical payback period of 3-4 years for commercial units.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">High Yield</h4>
                  <p className="text-slate-500 font-medium text-sm">Tier-1 components ensures maximum generation year-round.</p>
                </div>
              </div>
              
              <Link to="/contact" className="inline-flex items-center text-blue-700 font-black text-lg group">
                Get Industrial Quote 
                <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] -rotate-3 transition-transform duration-700"></div>
                <img 
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Industrial commercial solar installation" 
                  className="relative rounded-[2.5rem] shadow-2xl z-10 w-full h-[550px] object-cover border-8 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-green-700 py-28 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Start Saving?</h2>
          <p className="text-green-100 text-2xl mb-12 font-medium">
            Schedule your <span className="text-white font-black underline decoration-yellow-400 decoration-4 underline-offset-8 italic">FREE technical site visit</span> today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link to="/contact" className="bg-white text-green-700 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-yellow-400 hover:text-green-900 transition-all shadow-2xl">
              Book Site Visit Now
            </Link>
            <a href={BUSINESS_INFO.whatsappLink} target="_blank" className="flex items-center gap-4 text-white font-black text-2xl hover:text-green-200 transition-colors group">
              <div className="bg-green-500 p-3 rounded-full">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const TrustItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex flex-col items-center text-center gap-4 group">
    <div className="mb-2 p-4 bg-green-50 rounded-2xl group-hover:bg-green-100 transition-colors duration-300">
      {icon}
    </div>
    <span className="text-slate-800 font-extrabold text-sm uppercase tracking-widest">{text}</span>
  </div>
);

export default Home;
