import React from 'react';
import { CreditCard, Shield, Clock, Home, DollarSign, Users, BarChart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MobileFeatureRow from './MobileFeatureRow';

const MobileComparisonTable = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="propico" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="propico" className="font-medium">Stage Center</TabsTrigger>
          <TabsTrigger value="traditional" className="font-medium">Other Venues</TabsTrigger>
          <TabsTrigger value="self" className="font-medium">DIY Rental</TabsTrigger>
        </TabsList>

        <TabsContent value="propico">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="bg-[#f5f0ff] py-4 px-4 font-bold text-lg text-[var(--theme-primary)] text-center border-b border-gray-200">
              Stage Center
            </div>
            <div className="divide-y divide-gray-200">
              <MobileFeatureRow 
                icon={<CreditCard className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Full technical package included" 
                value="Lighting, sound, and technical staff"
                isPropico={true}
                isBetterValue={true} />
              <MobileFeatureRow 
                icon={<Shield className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Professional technical staff" 
                value="Expert technicians included"
                isPropico={true}
                isBetterValue={true} />
              <MobileFeatureRow 
                icon={<Clock className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Setup and coordination time" 
                value="<2 hours, handled by us"
                isPropico={true}
                isBetterValue={true} />
              <MobileFeatureRow 
                icon={<Home className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Rehearsal space access" 
                value="Complimentary included"
                isPropico={true}
                isBetterValue={true} />
              <MobileFeatureRow 
                icon={<DollarSign className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Sound system quality" 
                value="Professional concert-grade"
                isPropico={true}
                isBetterValue={true} />
              <MobileFeatureRow 
                icon={<Users className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Seating capacity" 
                value="500 seats"
                isPropico={true}
                isBetterValue={true} />
              <MobileFeatureRow 
                icon={<BarChart className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Overall value per event*" 
                value="₹2.5L all-inclusive"
                isPropico={true}
                isBetterValue={true} />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="traditional">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="bg-white py-4 px-4 font-bold text-lg text-center border-b border-gray-200">
              Other Venues
            </div>
            <div className="divide-y divide-gray-200">
              <MobileFeatureRow 
                icon={<CreditCard className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Full technical package included" 
                value="Equipment rental extra"
                isPropico={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Shield className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Professional technical staff" 
                value="Basic support only"
                isPropico={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Clock className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Setup and coordination time" 
                value="4-6 hours"
                isPropico={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Home className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Rehearsal space access" 
                value="Additional fee"
                isPropico={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<DollarSign className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Sound system quality" 
                value="Standard PA system"
                isPropico={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Users className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Seating capacity" 
                value="200-300 seats"
                isPropico={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<BarChart className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Overall value per event*" 
                value="₹3.5L+ (venue + equipment)"
                isPropico={false}
                isBetterValue={false} />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="self">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="bg-white py-4 px-4 font-bold text-lg text-center border-b border-gray-200">
              DIY Space Rental
            </div>
            <div className="divide-y divide-gray-200">
              <MobileFeatureRow 
                icon={<CreditCard className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Full technical package included" 
                value="DIY or hire separately"
                isPropico={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Shield className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Professional technical staff" 
                value="Handle yourself"
                isPropico={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Clock className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Setup and coordination time" 
                value="8-12 hours"
                isPropico={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Home className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Rehearsal space access" 
                value="Limited or none"
                isPropico={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<DollarSign className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Sound system quality" 
                value="Basic or rental"
                isPropico={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<Users className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Seating capacity" 
                value="Varies"
                isPropico={false}
                isBetterValue={false} />
              <MobileFeatureRow 
                icon={<BarChart className="w-5 h-5 text-[#ff6b6b]" />} 
                feature="Overall value per event*" 
                value="₹4L+ (all separate)"
                isPropico={false}
                isBetterValue={false} />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Footnote */}
      <p className="text-sm text-gray-600 text-center mt-4 mb-12">
        *Based on a 3-night event. Total value includes venue, equipment, and technical support
      </p>
    </div>
  );
};

export default MobileComparisonTable;
