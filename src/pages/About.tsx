import React from "react";
import { useCompany } from "../api";

import AboutSection from "../components/AboutSection";

export const About: React.FC = () => {
  const { data: company, isLoading: companyLoading } = useCompany();

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* hero section*/}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                About SpaceX
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Exploring the cosmos, one launch at a time
              </p>
            </div>

            {/* company info cards */}
            {!companyLoading && company && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold">{company.founded}</h3>
                  <p className="text-blue-100">Founded</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold">
                    {company.employees?.toLocaleString()}
                  </h3>
                  <p className="text-blue-100">Employees</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold">{company.founder}</h3>
                  <p className="text-blue-100">Founder</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold">
                    {company.valuation
                      ? `$${(company.valuation / 1000000000).toFixed(0)}B`
                      : "N/A"}
                  </h3>
                  <p className="text-blue-100">Valuation</p>
                </div>
              </div>
            )}
          </div>
        </section>

        <AboutSection />
      </div>
    </>
  );
};
