interface Read {
  url: string;
  title: string;
  description: string;
  date: string;
  caption: string;
}

export default function ReadCard({
  url,
  title,
  description,
  date,
  caption
}: Read) {
  return (
    <a
      href={url}
      target="_blank"
      className="border-grey-200 w-full rounded-xl border bg-white p-4 no-underline transition-colors ease-in-out hover:bg-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
      rel="noreferrer"
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
        {caption} {date}
      </p>
    </a>
  );
}
