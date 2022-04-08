import Image from 'next/image';

export default function ReadCard({ url, title, description, date }) {
  // const formatDate = new Date(date);

  return (
    <a
      href={url}
      className="border-grey-200 w-full rounded-xl border bg-white p-4 no-underline transition-colors ease-in-out hover:bg-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
    >
      <h3 className="mt-2 text-left text-lg font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className=" mt-1 text-sm font-normal text-gray-700 line-clamp-2 dark:text-gray-400 ">
        {description}
      </p>
      <p className="mt-1 text-sm font-normal text-gray-700 opacity-60 line-clamp-1 dark:text-gray-400 ">
        {url}
      </p>
      <p className="mt-1 text-xs font-light text-gray-700 opacity-40 dark:text-gray-400">
        Dibaca pada {date}
        {/* {formatDate.toLocaleDateString('id-ID', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        })} */}
      </p>
    </a>
  );
}
