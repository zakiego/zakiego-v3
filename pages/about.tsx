/* eslint-disable react/no-unescaped-entities */
import Container from 'components/Container';
import Image from 'next/image';
import Link from 'next/link';
import avatar from 'public/avatar.jpg';

import { siteconfig } from '~/siteconfig';

export default function About() {
  const { socials } = siteconfig;

  return (
    <Container title={`About – ${siteconfig.profile.name}`}>
      <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          About Me
        </h1>
        <div className="prose mb-8 leading-6 dark:prose-dark">
          <h2>Links</h2>

          <ul>
            {socials.map((social) => {
              return (
                <li key={social.link}>
                  {social.name}: <a href={social.link}>{social.display}</a>
                </li>
              );
            })}
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Lee Robinson, Director of Developer Relations at Vercel</p>
          <h3>Long, 3rd Person</h3>
          <p>
            Lee Robinson is the Director of Developer Relations at{' '}
            <a href="http://vercel.com/">Vercel</a>, where he helps developers
            build a faster web and leads the Next.js community. Prior to that,
            Lee was a Senior Software Engineer focused on the frontend. An
            educator, writer, and speaker, Lee has also created extensive
            courses on React and Next.js.
          </p>
          <h3>Long, 1st Person</h3>
          <p>
            Hey, I'm Lee. I lead Developer Relations at{' '}
            <a href="https://vercel.com/">Vercel</a>, where my team helps
            developers build a faster web. I'm a Next.js contributor and help
            lead our open-source communities. I've passionate about frontend
            development and have created courses on React, Next.js, and web
            development. I'm an advisor and investor in early stage startups.
          </p>
          <h3>Short, 3rd Person</h3>
          <p>
            Lee Robinson is the Director of Developer Relations at{' '}
            <a href="http://vercel.com/">Vercel</a>, where he helps developers
            build a faster web.
          </p>
          <h3>Short, 1st Person</h3>
          <p>
            Hey, I'm Lee. I lead Developer Relations at{' '}
            <a href="https://vercel.com/">Vercel</a>, where my team helps
            developers build a faster web.
          </p>
          <h3>Education</h3>
          <p>
            Lee Robinson graduated from Iowa State University with a BS in
            Computer Engineering.
          </p>
        </div>
      </div>
    </Container>
  );
}
