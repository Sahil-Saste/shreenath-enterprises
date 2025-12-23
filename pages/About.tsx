
import React from 'react';
import { UserCheck, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Clean Header */}
      <section className="bg-green-700 py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Our Mission</h1>
          <p className="text-xl text-green-100 font-medium max-w-2xl mx-auto">Engineering a sustainable tomorrow with high-performance solar solutions for Maharashtra.</p>
        </div>
      </section>

      {/* Identity Section - Image Removed and Content Centered */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tight">Shreenath Enterprises</h2>
          <div className="space-y-6">
            <p className="text-slate-600 text-xl leading-relaxed">
              Based in Alibag and operating across Maharashtra, we are a dedicated Solar EPC (Engineering, Procurement, and Construction) firm focused on delivering high-yield renewable energy assets.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We bridge the gap between complex technology and the end-user. Whether you're a homeowner looking to slash electricity bills or an industrialist aiming for energy independence, we provide tailored systems that stand the test of time.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12">
            <AboutValueItem text="Certified Engineering Experts" />
            <AboutValueItem text="Premium Grade Solar Components" />
            <AboutValueItem text="Transparent ROI Projections" />
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Our Core Pillars</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm text-center border border-slate-100">
              <ShieldCheck className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-black mb-4">Integrity</h3>
              <p className="text-slate-500 font-medium">No hidden costs or over-promised outputs. We give you realistic, data-driven estimates.</p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm text-center border border-slate-100">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-black mb-4">Innovation</h3>
              <p className="text-slate-500 font-medium">We use the latest high-efficiency half-cut cells and robust inverter technology.</p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm text-center border border-slate-100">
              <UserCheck className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-black mb-4">Safety</h3>
              <p className="text-slate-500 font-medium">Our structural engineering exceeds local wind-speed safety norms for Maharashtra's coastal regions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutValueItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
    <span className="text-slate-800 font-bold text-lg">{text}</span>
  </div>
);

export default About;
