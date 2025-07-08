import { useQuery, useQueryClient } from '@tanstack/react-query';
import { spaceXApi } from './client';

import type { 

  LaunchQueryOptions,
} from './types';

//eys
export const QUERY_KEYS = {
  launches: ['launches'] as const,
  launch: (id: string) => ['launches', id] as const,
  latestLaunch: ['launches', 'latest'] as const,
  nextLaunch: ['launches', 'next'] as const,
  pastLaunches: ['launches', 'past'] as const,
  upcomingLaunches: ['launches', 'upcoming'] as const,
  queryLaunches: (query: Record<string, any>, options?: LaunchQueryOptions) => 
    ['launches', 'query', query, options] as const,
  rockets: ['rockets'] as const,
  rocket: (id: string) => ['rockets', id] as const,
  company: ['company'] as const,

} as const;

// Launch hooks
export const useLaunches = (options?: LaunchQueryOptions) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.launches, options],
    queryFn: () => spaceXApi.getLaunches(options),
    staleTime: 5 * 60 * 1000, 
    gcTime: 10 * 60 * 1000, 
  });
};

export const useLaunch = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.launch(id),
    queryFn: () => spaceXApi.getLaunch(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const useLatestLaunch = () => {
  return useQuery({
    queryKey: QUERY_KEYS.latestLaunch,
    queryFn: () => spaceXApi.getLatestLaunch(),
    staleTime: 2 * 60 * 1000, 
    gcTime: 5 * 60 * 1000,
  });
};

export const useNextLaunch = () => {
  return useQuery({
    queryKey: QUERY_KEYS.nextLaunch,
    queryFn: () => spaceXApi.getNextLaunch(),
    staleTime: 1 * 60 * 1000, 
    gcTime: 5 * 60 * 1000,
  });
};

export const usePastLaunches = (options?: LaunchQueryOptions) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.pastLaunches, options],
    queryFn: () => spaceXApi.getPastLaunches(options),
    staleTime: 10 * 60 * 1000, // used more time here because past launches data doesnt change
    gcTime: 30 * 60 * 1000, 
  });
};

export const useUpcomingLaunches = (options?: LaunchQueryOptions) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.upcomingLaunches, options],
    queryFn: () => spaceXApi.getUpcomingLaunches(options),
    staleTime: 2 * 60 * 1000, // upcoming less time for upcoming launches because they can change)
    gcTime: 10 * 60 * 1000,
  });
};

export const useQueryLaunches = (
  query: Record<string, any>, 
  options?: LaunchQueryOptions,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: QUERY_KEYS.queryLaunches(query, options),
    queryFn: () => spaceXApi.queryLaunches(query, options),
    enabled: enabled && Object.keys(query).length > 0,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

// Rocket Hooks
export const useRockets = () => {
  return useQuery({
    queryKey: QUERY_KEYS.rockets,
    queryFn: () => spaceXApi.getRockets(),
    staleTime: 60 * 60 * 1000, //rockets don't change often)
    gcTime: 2 * 60 * 60 * 1000, 
  });
};

export const useRocket = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.rocket(id),
    queryFn: () => spaceXApi.getRocket(id),
    enabled: !!id,
    staleTime: 60 * 60 * 1000, 
    gcTime: 2 * 60 * 60 * 1000,
  });
};

// Company Hook
export const useCompany = () => {
  return useQuery({
    queryKey: QUERY_KEYS.company,
    queryFn: () => spaceXApi.getCompany(),
    staleTime: 24 * 60 * 60 * 1000,
    gcTime: 48 * 60 * 60 * 1000, 
  });
};




// invalidate queries
export const useInvalidateQueries = () => {
  const queryClient = useQueryClient();

  return {
    invalidateAllLaunches: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.launches });
    },
    invalidateAllRockets: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.rockets });
    },
    invalidateAll: () => {
      queryClient.invalidateQueries();
    },
  };
};