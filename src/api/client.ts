import { API_CONFIG, createApiUrl } from "./config";
import type {
  Launch,
  Rocket,
  Company,
  LaunchQueryOptions,
  QueryResponse,
} from "./types";

class SpaceXApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL;
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = createApiUrl(endpoint);

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Launches
  async getLaunches(
    options?: LaunchQueryOptions
  ): Promise<QueryResponse<Launch>> {
    return this.queryLaunches({}, options);
  }

  async getLaunch(id: string): Promise<Launch> {
    return this.request<Launch>(`${API_CONFIG.ENDPOINTS.LAUNCHES}/${id}`);
  }

  async getLatestLaunch(): Promise<Launch> {
    return this.request<Launch>(`${API_CONFIG.ENDPOINTS.LAUNCHES}/latest`);
  }

  async getNextLaunch(): Promise<Launch> {
    return this.request<Launch>(`${API_CONFIG.ENDPOINTS.LAUNCHES}/next`);
  }

  async getPastLaunches(options?: LaunchQueryOptions): Promise<Launch[]> {
    return this.request<Launch[]>(`${API_CONFIG.ENDPOINTS.LAUNCHES}/past`);
  }

  async getUpcomingLaunches(options?: LaunchQueryOptions): Promise<Launch[]> {
    return this.request<Launch[]>(`${API_CONFIG.ENDPOINTS.LAUNCHES}/upcoming`);
  }

  //filtering query
  async queryLaunches(
    query: Record<string, any>,
    options?: LaunchQueryOptions
  ): Promise<QueryResponse<Launch>> {
    return this.request<QueryResponse<Launch>>(
      `${API_CONFIG.ENDPOINTS.LAUNCHES}/query`,
      {
        method: "POST",
        body: JSON.stringify({
          query,
          options: {
            limit: options?.limit || 10,
            offset: options?.offset || 0,
            sort: options?.sort || { date_utc: "asc" },
            populate: options?.populate || [],
          },
        }),
      }
    );
  }

  // Rockets
  async getRockets(): Promise<Rocket[]> {
    return this.request<Rocket[]>(API_CONFIG.ENDPOINTS.ROCKETS);
  }

  async getRocket(id: string): Promise<Rocket> {
    return this.request<Rocket>(`${API_CONFIG.ENDPOINTS.ROCKETS}/${id}`);
  }

  // Company
  async getCompany(): Promise<Company> {
    return this.request<Company>(API_CONFIG.ENDPOINTS.COMPANY);
  }
}
export const getLaunchById = async (id: string): Promise<Launch> => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  if (!res.ok) throw new Error("Launch not found");
  return res.json();
};

export const spaceXApi = new SpaceXApiClient();
