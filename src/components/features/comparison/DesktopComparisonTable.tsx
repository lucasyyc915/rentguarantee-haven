
import React from 'react';
import { CreditCard, Shield, Clock, Home, DollarSign, Users, BarChart } from "lucide-react";

const DesktopComparisonTable = () => {
  return (
    <>
      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
        <div className="grid grid-cols-4">
          {/* Headers */}
          <div className="bg-gray-50 py-5 px-6 font-bold text-lg border-b border-gray-200">
            Features
          </div>
          <div className="bg-[#f5f0ff] py-5 px-6 font-bold text-lg text-[var(--theme-primary)] border-b border-gray-200">
            Stage Center
          </div>
          <div className="bg-white py-5 px-6 font-bold text-lg border-b border-gray-200">
            Other Venues
          </div>
          <div className="bg-white py-5 px-6 font-bold text-lg border-b border-gray-200">
            DIY Space Rental
          </div>

          {/* Venue Features */}
          <div className="bg-white py-4 px-6 flex items-center gap-3 border-b border-gray-200">
            <CreditCard className="w-5 h-5 text-[#ff6b6b]" />
            <span>Full technical package included</span>
          </div>
          <div className="bg-[#f5f0ff] py-4 px-6 font-medium text-[var(--theme-primary)] border-b border-gray-200">
            Lighting, sound, and technical staff
          </div>
          <div className="bg-white py-4 px-6 border-b border-gray-200">
            Equipment rental extra
          </div>
          <div className="bg-white py-4 px-6 border-b border-gray-200">
            DIY or hire separately
          </div>

          {/* Technical Support */}
          <div className="bg-white py-4 px-6 flex items-center gap-3 border-b border-gray-200">
            <Shield className="w-5 h-5 text-[#ff6b6b]" />
            <span>Professional technical staff</span>
          </div>
          <div className="bg-[#f5f0ff] py-4 px-6 font-medium text-[var(--theme-primary)] border-b border-gray-200">
            Expert technicians included
          </div>
          <div className="bg-white py-4 px-6 border-b border-gray-200">
            Basic support only
          </div>
          <div className="bg-white py-4 px-6 border-b border-gray-200">
            Handle yourself
          </div>

          {/* Setup time */}
          <div className="bg-white py-4 px-6 flex items-center gap-3 border-b border-gray-200">
            <Clock className="w-5 h-5 text-[#ff6b6b]" />
            <span>Setup and coordination time</span>
          </div>
          <div className="bg-[#f5f0ff] py-4 px-6 font-medium text-[var(--theme-primary)] border-b border-gray-200">
            &lt;2 hours, handled by us
          </div>
          <div className="bg-white py-4 px-6 border-b border-gray-200">
            4-6 hours
          </div>
          <div className="bg-white py-4 px-6 border-b border-gray-200">
            8-12 hours
          </div>

          {/* Rehearsal Access */}
          <div className="bg-white py-4 px-6 flex items-center gap-3 border-b border-gray-200">
            <Home className="w-5 h-5 text-[#ff6b6b]" />
            <span>Rehearsal space access</span>
          </div>
          <div className="bg-[#f5f0ff] py-4 px-6 font-medium text-[var(--theme-primary)] border-b border-gray-200">
            Complimentary included
          </div>
          <div className="bg-white py-4 px-6 border-b border-gray-200">
            Additional fee
          </div>
          <div className="bg-white py-4 px-6 border-b border-gray-200">
            Limited or none
          </div>

          {/* Sound Quality */}
          <div className="bg-white py-4 px-6 flex items-center gap-3 border-b border-gray-200">
            <DollarSign className="w-5 h-5 text-[#ff6b6b]" />
            <span>Sound system quality</span>
          </div>
          <div className="bg-[#f5f0ff] py-4 px-6 font-medium text-[var(--theme-primary)] border-b border-gray-200">
            Professional concert-grade
          </div>
          <div className="bg-white py-4 px-6 border-b border-gray-200">
            Standard PA system
          </div>
          <div className="bg-white py-4 px-6 border-b border-gray-200">
            Basic or rental
          </div>

          {/* Seating Capacity */}
          <div className="bg-white py-4 px-6 flex items-center gap-3 border-b border-gray-200">
            <Users className="w-5 h-5 text-[#ff6b6b]" />
            <span>Seating capacity</span>
          </div>
          <div className="bg-[#f5f0ff] py-4 px-6 font-medium text-[var(--theme-primary)] border-b border-gray-200">
            500 seats
          </div>
          <div className="bg-white py-4 px-6 border-b border-gray-200">
            200-300 seats
          </div>
          <div className="bg-white py-4 px-6 border-b border-gray-200">
            Varies
          </div>

          {/* Overall Value */}
          <div className="bg-white py-4 px-6 flex items-center gap-3 border-b border-gray-200">
            <BarChart className="w-5 h-5 text-[#ff6b6b]" />
            <span>Overall value per event*</span>
          </div>
          <div className="bg-[#f5f0ff] py-4 px-6 font-medium text-[var(--theme-primary)] border-b border-gray-200">
            ₹2.5L all-inclusive
          </div>
          <div className="bg-white py-4 px-6 border-b border-gray-200">
            ₹3.5L+ (venue + equipment)
          </div>
          <div className="bg-white py-4 px-6 border-b border-gray-200">
            ₹4L+ (all separate)
          </div>
        </div>
      </div>

      {/* Footnote */}
      <p className="text-sm text-gray-600 text-center mb-12">
        *Based on a 3-night event. Total value includes venue, equipment, and technical support
      </p>
    </>
  );
};

export default DesktopComparisonTable;
