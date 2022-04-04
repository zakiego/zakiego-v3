import Container from 'components/Container';

export default function UsesLayout({ children }) {
  return (
    <Container
      title="Uses – Lee Robinson"
      description="Here's what tech I'm currently using for coding, videos, and music."
    >
      <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          My Gear
        </h1>
        <p className="mt-2 mb-8 text-gray-700 dark:text-gray-300">
          Here's what tech I'm currently using for coding, videos, and music.
          Most of these have been accumulated over the past few years, with a
          recent office upgrade in 2020.
        </p>
        <div className="prose w-full dark:prose-dark">{children}</div>
      </article>
    </Container>
  );
}
