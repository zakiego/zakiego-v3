import MetricCard from 'components/metrics/Card';
import fetcher from 'lib/fetcher';
import { Gumroad } from 'lib/types';
import useSWR from 'swr';

export default function GumroadCard() {
  const { data } = useSWR<Gumroad>('/api/gumroad', fetcher);

  const sales = new Number(data?.sales);
  const link = 'https://gumroad.com/leerob';

  return (
    <MetricCard header="Gumroad Sales" link={link} metric={sales} isCurrency />
  );
}
