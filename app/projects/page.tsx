import Project from '@/components/projects/Project'
import ProjectElement from '@/types/ProjectElement'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PROJECTS: ProjectElement[] = [
  {
    title: 'Portfolio 2.0',
    description: 'Dette er min nye portfolio hjemmeside, som jeg lavede i 2024.',
    tags: ['nextjs', 'react', 'typescript', 'tailwindcss', 'git'],
    link: 'https://gustavhaavik-portfolio2.vercel.app/',
    year: '2024'
  },
  {
    title: 'BartendR',
    description: 'En kammerat og jeg blev hyret til at lave en hjemmeside for en mobil bar virksomhed. Jeg har stået for alt frontend',
    tags: ['nextjs', 'react', 'typescript', 'tailwindcss', 'git'],
    link: 'https://bartendr.vercel.app/',
    year: '2024'
  },
  {
    title: 'Bror Portfolio',
    description: 'Dette er en hjemmeside som jeg lavede for min bror, som er musikere. Meget unik hjemmeside!',
    tags: ['nextjs', 'react', 'typescript', 'tailwindcss', 'git'],
    link: 'https://jkhaavik.vercel.app/',
    year: '2024'
  },
  {
    title: 'Medievale Gameengine',
    description: 'Dette er en game engine kodet i java som jeg begyndte på i 2023. Et hobby projekt efter jeg fik lyst til at lave et spil HELT fra bunden.',
    tags: ['java', 'git'],
    link: 'https://gustavhaavik-portfolio2.vercel.app/',
    year: '2023'
  },
  {
    title: 'SFO Administrations System',
    description: 'This is another example project',
    tags: ['example', 'project'],
    link: 'https://example.com',
    github: 'https://google.com',
    year: '2023'
  },
  {
    title: 'Geekminds Website',
    description: 'En hjemmeside for en lille virksomhed som jeg lavede i 2023.',
    tags: ['nextjs', 'react', 'typescript', 'tailwindcss', 'git'],
    link: 'https://geekminds-pd8z80w5m-6u5t4v.vercel.app/',
    year: '2023'
  },
  {
    title: 'Yatzy',
    description: 'Skole projekt hvor vi skulle lave en web app som kunne spille yatzy. Jeg var ansvarlig for frontend og sørge for at det hele hang sammen',
    tags: ['html', 'css', 'javascript', 'git'],
    link: 'https://yatzy-projekt.vercel.app/',
    github: 'https://github.com/GustavHaavik/YatzyProjekt',
    year: '2023'
  },
  {
    title: 'Portfolio 1.0',
    description: 'Det her var min gamle portfolio hjemmeside, som jeg lavede i 2021. Jeg har valgt at lave en ny, da jeg ikke var tilfreds med den gamle.',
    tags: ['html', 'nextjs', 'tailwindcss', 'react', 'git'],
    link: 'https://portfolio-6u5t4v.vercel.app/',
    github: 'https://github.com/GustavHaavik/portfolio',
    year: '2023'
  },
  {
    title: 'Ascii Cam',
    description: 'En processing applikation som tager kameraet på computer som input og omdanner billede til ascii karaktere ',
    tags: ['java', 'processing', 'git'],
    link: 'https://www.youtube.com/watch?v=x49Xm72Zeys',
    github: 'https://github.com/6u5t4v/AsciiMovie',
    year: '2022'
  },
]

const ProjectsPage = () => {
  return (
    <main className='flex flex-col items-center p-10 md:p-24 gap-32'>
      <section className="flex flex-col md:flex-row items-center justify-center md:max-w-[720px]">
        <Image
          src="/avatar.png"
          alt="Gustav Haavik"
          width={200}
          height={200}
          className="rounded-full aspect-square mb-4 md:mb-0"
        />
        <div className="ml-4 flex flex-col text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projekter</h1>
          <p className="text-xl font-light text-wrap">
            Her er nogle af mine offentlig projekter, som jeg har arbejdet på.
            Hvis du vil se flere projekter, så kan du besøge min <span className='text-blue-400'><Link href="https://github.com/gustavhaavik" target='_blank'>GitHub</Link></span> profil.
          </p>
        </div>
      </section>


      <section className='flex flex-col items-center justify-center md:max-w-5xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
          {PROJECTS.map((project, index) => {
            return <Project key={index} proj={project} />
          })}
        </div>
      </section>
    </main>

  )
}

export default ProjectsPage