import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import ReadCard from '~/components/ReadCard';
import ReadLayout from '~/layouts/read';
import { siteconfig } from '~/siteconfig';
import { supabase } from '~/utils/supabaseClient';

export default function Projects() {
  const { projects } = siteconfig;

  return (
    <ReadLayout
      title="Projects"
      summary="Koleksi dari project yang saya kerjakan."
    >
      <p>Favorite technology stacks</p>
      <ul>
        {siteconfig.techStack.map((tech) => {
          return (
            <li key={tech.name}>
              <Link href={tech.href} passHref>
                <div className="cursor-pointer">
                  <span>{tech.name}</span>{' '}
                  {tech.category ? `- ${tech.category}` : ''}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="my-2 mt-4 grid w-full grid-cols-1 gap-4 ">
        <h2>Projects</h2>
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className=" w-full rounded-xl   p-4 no-underline transition-colors ease-in-out "
            >
              <Image
                src={project.img}
                alt={project.title}
                height={332.2}
                width={544.5}
                className="rounded-3xl"
              />
              <h3 className="mt-3 text-center">{project.title}</h3>
              <div className="-mt-4">
                {project.url && (
                  <a href={project.url}>
                    <p className="text-center">{project.url}</p>
                  </a>
                )}
                {!project.url && <p className="text-center italic">private</p>}
              </div>
            </div>
          );
        })}
      </div>
    </ReadLayout>
  );
}

// export async function getStaticProps() {
//   const { data, error } = await supabase
//     .from<Project>('projects')
//     .select()
//     .order('id', { ascending: false });

//   console.log(data);

//   return { props: { projects: data } };
// }
