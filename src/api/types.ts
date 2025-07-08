export interface Launch {
    id: string;
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: string;
    static_fire_date_utc: string | null;
    static_fire_date_unix: number | null;
    tdb: boolean;
    net: boolean;
    window: number | null;
    rocket: string;
    success: boolean | null;
    failures: LaunchFailure[];
    upcoming: boolean;
    details: string | null;
    fairings: LaunchFairings | null;
    crew: string[];
    ships: string[];
    capsules: string[];
    payloads: string[];
    launchpad: string;
    cores: LaunchCore[];
    links: LaunchLinks;
    auto_update: boolean;
  }

  // export interface QueryResponse<T> {
  //   docs: T[];
  //   totalDocs: number;
  //   limit: number;
  //   totalPages: number;
  //   page: number;
  //   pagingCounter: number;
  //   hasPrevPage: boolean;
  //   hasNextPage: boolean;
  //   prevPage: number | null;
  //   nextPage: number | null;
  // }
  
  export interface QueryResponse<T> {
    docs: T[];
    totalDocs: number;
    limit: number;
    page: number;
    totalPages: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage?: number;
    nextPage?: number;
  }
  
  export type LaunchesResponse = QueryResponse<Launch>;
  
  export interface LaunchFailure {
    time: number;
    altitude: number | null;
    reason: string;
  }
  
  export interface LaunchFairings {
    reused: boolean | null;
    recovery_attempt: boolean | null;
    recovered: boolean | null;
    ships: string[];
  }
  
  export interface LaunchCore {
    core: string | null;
    flight: number | null;
    gridfins: boolean | null;
    legs: boolean | null;
    reused: boolean | null;
    landing_attempt: boolean | null;
    landing_success: boolean | null;
    landing_type: string | null;
    landpad: string | null;
  }
  
  export interface LaunchLinks {
    patch: {
      small: string | null;
      large: string | null;
    };
    reddit: {
      campaign: string | null;
      launch: string | null;
      media: string | null;
      recovery: string | null;
    };
    flickr: {
      small: string[];
      original: string[];
    };
    presskit: string | null;
    webcast: string | null;
    youtube_id: string | null;
    article: string | null;
    wikipedia: string | null;
  }
  
  export interface Rocket {
    id: string;
    name: string;
    type: string;
    active: boolean;
    stages: number;
    boosters: number;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    country: string;
    company: string;
    height: Dimension;
    diameter: Dimension;
    mass: Mass;
    flickr_images: string[];
    wikipedia: string;
    description: string;
  }
  
  export interface Dimension {
    meters: number;
    feet: number;
  }
  
  export interface Mass {
    kg: number;
    lb: number;
  }
  


  
  export interface Company {
    name: string;
    founder: string;
    founded: number;
    employees: number;
    vehicles: number;
    launch_sites: number;
    test_sites: number;
    ceo: string;
    cto: string;
    coo: string;
    cto_propulsion: string;
    valuation: number;
    headquarters: Headquarters;
    links: CompanyLinks;
    summary: string;
  }
  
  export interface Headquarters {
    address: string;
    city: string;
    state: string;
  }
  
  export interface CompanyLinks {
    website: string;
    flickr: string;
    twitter: string;
    elon_twitter: string;
  }
  
 
  
  // Query Options Types
  export interface LaunchQueryOptions {
    limit?: number;
    offset?: number;
    sort?: Record<string, 'asc' | 'desc'>;
    populate?: string[];
  }
  
  