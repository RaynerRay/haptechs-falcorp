export const API_CONFIG = {
    BASE_URL: 'https://api.spacexdata.com/v4',
    ENDPOINTS: {
      LAUNCHES: '/launches',
      ROCKETS: '/rockets',
      COMPANY: '/company',
      HISTORY: '/history',
    },
  } as const;
  
  export const createApiUrl = (endpoint: string): string => {
    return `${API_CONFIG.BASE_URL}${endpoint}`;
  };