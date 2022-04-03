import MetricCard from 'components/metrics/Card';
import fetcher from 'lib/fetcher';
import { YouTube } from 'lib/types';
import useSWR from 'swr';

export default function YouTubeCard() {
  const { data } = useSWR<YouTube>('/api/youtube', fetcher);

  const subscriberCount = new Number(data?.subscriberCount);
  const viewCount = new Number(data?.viewCount);
  const link = 'https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw';

  return (
    <div className="my-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      <MetricCard
        header="YouTube Subscribers"
        link={link}
        metric={subscriberCount}
        isCurrency={false}
      />
      <MetricCard
        header="YouTube Views"
        link={link}
        metric={viewCount}
        isCurrency={false}
      />
    </div>
  );
}
