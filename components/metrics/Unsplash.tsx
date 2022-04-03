import MetricCard from 'components/metrics/Card';
import fetcher from 'lib/fetcher';
import { Unsplash } from 'lib/types';
import useSWR from 'swr';

export default function UnsplashCard() {
  const { data } = useSWR<Unsplash>('/api/unsplash', fetcher);

  const downloads = new Number(data?.downloads);
  const views = new Number(data?.views);
  const link = 'https://unsplash.com/@leerob';

  return (
    <div className="my-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      <MetricCard
        header="Unsplash Downloads"
        link={link}
        metric={downloads}
        isCurrency={false}
      />
      <MetricCard
        header="Unsplash Views"
        link={link}
        metric={views}
        isCurrency={false}
      />
    </div>
  );
}
