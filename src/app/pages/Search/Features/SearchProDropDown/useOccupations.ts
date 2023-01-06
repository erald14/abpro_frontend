import { useState } from 'react';
import { useQuery } from 'react-query';
import { getRequest } from 'utils/api_request';

export type Occupation = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

type SelectedOption = {
  value: string;
  label: string;
};
const fetchOccupations = async () => {
  const response = await getRequest<Occupation[]>('/api/occupations');
  return response;
};

export function useOccupations() {
  const [selectedOccupation, setSelectedOccupation] =
    useState<SelectedOption | null>(null);

  const { data, error, isLoading } = useQuery<Occupation[]>(
    'occupations',
    fetchOccupations,
    {
      staleTime: 1,
      cacheTime: 600000,
      initialData: [],
    },
  );

  return {
    occupations: data || [],
    error,
    isLoading,
    selectedOccupation,
    setSelectedOccupation,
  };
}
