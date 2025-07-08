import React, { useState } from 'react';
import {
  useRockets,
} from '../api';

import type {
  Rocket,
  LaunchesResponse,
} from '../api/types'; 
import { Link } from 'react-router-dom';

export const Rockets: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const launchesPerPage = 8;
  const offset = (currentPage - 1) * launchesPerPage;

//   const {
//     data: launchesResponse,
//     isLoading: launchesLoading,
//     error: launchesError,
//   } = useLaunches({
//     limit: launchesPerPage,
//     offset: offset,
//   });

//   const launches = (launchesResponse as LaunchesResponse)?.docs ?? [];
//   const totalLaunches = (launchesResponse as LaunchesResponse)?.totalDocs ?? 0;
//   const totalPages = Math.ceil(totalLaunches / launchesPerPage);

  
  const { data: rockets, isLoading: rocketsLoading } = useRockets();
//   const { data: company, isLoading: companyLoading } = useCompany();

  const getStatusColor = (success: boolean | null) => {
    if (success === true) return 'bg-green-100 text-green-800';
    if (success === false) return 'bg-red-100 text-red-800';
    return 'bg-yellow-100 text-yellow-800';
  };

  const getStatusText = (success: boolean | null) => {
    if (success === true) return 'Success';
    if (success === false) return 'Failed';
    return 'Pending';
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

//   const goToPrevious = () => {
//     if (currentPage > 1) goToPage(currentPage - 1);
//   };

//   const goToNext = () => {
//     if (currentPage < totalPages) goToPage(currentPage + 1);
//   };

//   const getPageNumbers = () => {
//     const pages: (number | string)[] = [];
//     const maxVisiblePages = 7;

//     if (totalPages <= maxVisiblePages) {
//       for (let i = 1; i <= totalPages; i++) pages.push(i);
//     } else if (currentPage <= 4) {
//       for (let i = 1; i <= 5; i++) pages.push(i);
//       pages.push('...');
//       pages.push(totalPages);
//     } else if (currentPage >= totalPages - 3) {
//       pages.push(1);
//       pages.push('...');
//       for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
//     } else {
//       pages.push(1);
//       pages.push('...');
//       for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
//       pages.push('...');
//       pages.push(totalPages);
//     }

//     return pages;
//   };

//   if (launchesLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading SpaceX data...</p>
//         </div>
//       </div>
//     );
//   }

//   if (launchesError) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-red-600">
//             Error loading launches: {launchesError.message}
//           </p>
//         </div>
//       </div>
//     );
//   }

  return (
    <>
    <div className="min-h-screen bg-gray-50">
 


      {/* rockets section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rocket Fleet
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tge vehicles that make space exploration possible.
            </p>
          </div>

          {rocketsLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading rockets...</p>
            </div>
          ) : rockets && rockets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(rockets as Rocket[]).map((rocket: Rocket) => (
                <div
                  key={rocket.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{rocket.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        rocket.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {rocket.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Type:</span> {rocket.type}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Success Rate:</span> {rocket.success_rate_pct}%
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Cost:</span> ${rocket.cost_per_launch?.toLocaleString()}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {rocket.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No rockets found</p>
            </div>
          )}
        </div>
      </section>
    </div>
    </>
  );
};

 ;