import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getLaunchById } from "../api/client";

const LaunchDetail = () => {
  const { id } = useParams();

  const { data: launch, isLoading, error } = useQuery({
    queryKey: ["launch", id],
    queryFn: () => getLaunchById(id!),
    enabled: !!id,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading launch.</p>;
  if (!launch) return <p>Launch not found.</p>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div
                  key={launch.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                  {/* launch img */}
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
                    
                  </div>

                  {/* content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {launch.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        Date: {new Date(launch.date_utc).toLocaleDateString()}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Flight Number: {launch.flight_number}
                     
                      </p>

                      <h3 className="text-md text-gray-900 mt-2 font-bold">Details</h3>
                      <p>
                      {launch.details}
                      </p>
                     
                    </div>

                  
                  </div>
                </div>
    </div>
  );
};

export default LaunchDetail;
