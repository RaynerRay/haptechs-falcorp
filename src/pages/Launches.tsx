import React, { useState } from 'react';
import {
  useLaunches,
} from '../api';

import type {
  Launch,
  LaunchesResponse,
} from '../api/types'; 
import { Link } from 'react-router-dom';

export const Launches: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const launchesPerPage = 8;
  const offset = (currentPage - 1) * launchesPerPage;

  const {
    data: launchesResponse,
    isLoading: launchesLoading,
    error: launchesError,
  } = useLaunches({
    limit: launchesPerPage,
    offset: offset,
  });

  const launches = (launchesResponse as LaunchesResponse)?.docs ?? [];
  const totalLaunches = (launchesResponse as LaunchesResponse)?.totalDocs ?? 0;
  const totalPages = Math.ceil(totalLaunches / launchesPerPage);


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

  const goToPrevious = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 7;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push('...');
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(1);
      pages.push('...');
      for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push('...');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
      pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  if (launchesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading SpaceX data...</p>
        </div>
      </div>
    );
  }

  if (launchesError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">
            Error loading launches: {launchesError.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Launches
            </h2>
           
            {totalLaunches > 0 && (
              <p className="text-sm text-gray-500 mt-2">
                Showing {offset + 1}-{Math.min(offset + launchesPerPage, totalLaunches)} of {totalLaunches} launches
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {launches && launches.length > 0 ? (
              launches.map((launch: Launch) => (
                <Link to={`/launches/${launch.id}`}>
                <div
                  key={launch.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Launch Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700">
                    {launch.links?.patch?.small ? (
                      <img
                        src={launch.links.patch.small}
                        alt={`${launch.name} patch`}
                        className="w-full h-full object-contain p-8 transition-transform duration-300 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-4xl mb-2">🚀</div>
                          <p className="text-sm font-medium">{launch.name}</p>
                        </div>
                      </div>
                    )}
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(launch.success ?? null)}`}>
                         {getStatusText(launch.success ?? null)}

                      </span>
                    </div>
                  </div>

                  {/* Launch Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {launch.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        {new Date(launch.date_utc).toLocaleDateString()}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Flight #{launch.flight_number}
                        {launch.details && ` • ${launch.details.substring(0, 100)}${launch.details.length > 100 ? '...' : ''}`}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-gray-100">
                      <button className="w-full border-2 border-blue-500 text-blue-500 hover:border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-all duration-200">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No launches found</p>
              </div>
            )}
          </div>

          {/* pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-2">
              {/* previous*/}
              <button
                onClick={goToPrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 shadow-sm'
                }`}
              >
                Previous
              </button>

              {/* numbers */}
              <div className="flex space-x-1">
                {getPageNumbers().map((page, index) => (
                  <React.Fragment key={index}>
                    {page === '...' ? (
                      <span className="px-3 py-2 text-gray-400">...</span>
                    ) : (
                      <button
                        onClick={() => goToPage(page as number)}
                        className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                          currentPage === page
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                        }`}
                      >
                        {page}
                      </button>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* next btn*/}
              <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 shadow-sm'
                }`}
              >
                Next
              </button>
            </div>
          )}

          {/* page info */}
          {totalPages > 1 && (
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                Page {currentPage} of {totalPages}
              </p>
            </div>
          )}
        </div>
      </section>


    </div>
    </>
  );
};

 ;