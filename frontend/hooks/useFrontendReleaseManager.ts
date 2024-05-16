import { useAsync } from 'react-use';

export type Deployment = {
  frontendName: string;
  releaseId: string;
  releaseDate: string;
  status: 'active' | 'inactive' | 'unstable';
  createdAt: string;
  assets: string[];
};

export const useFrontendReleaseManager = <T = Deployment[]>() => {
  const value = useAsync(async (): Promise<T> => {
    const response = await fetch(`http://localhost:8080/v1/releases`);
    const data = await response.json();
    return data;
  });
  return value;
};
