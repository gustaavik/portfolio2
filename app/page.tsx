import TimeMachine from "@/components/TimeMachine";
import Project from "@/components/projects/Project";
import ProjectElement from "@/types/ProjectElement";
import TimelineElement from "@/types/TimelineElement";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const timelineItems: TimelineElement[] = [
  {
    date: "Februar - Nu",
    title: "IT-Sikkerhedsuddannelse EAAA (Århus)",
    description:
      "Overbygning til datamatiker uddannelsen, hvor jeg lærer om IT-sikkerhed og hvordan man kan beskytte sig selv og sine data.",
  },
  {
    date: "August - December 2024",
    title: "Dynamicweb Praktik (Århus)",
    description:
      "Har været i praktik hos Dynamicweb, hvor jeg har arbejdet som backend udvikler i integration-teamet. Her kodet vi C#, .NET, MSSQL og Azure devops.",
  },
  {
    date: "2022 - nu",
    title: "Datamatiker EAAA (Århus)",
    description:
      "Går nu på 4. semester på datamatiker uddannelsen. Fokusere på software udvikling, databaser og machine learning.",
  },
  {
    date: "2021 - 2022",
    title: "Sabbatår (Odense)",
    description:
      "Dette år arbejdede jeg som lagermedarbejder og brugte en masse tid på at lære om webudvikling og cybersecurity.",
  },
  {
    date: "2019 - 2021",
    title: "Videndjurs GameIT (Grenå)",
    description:
      "Her var jeg på GameIT, som fokuseret på spiludvikling. Lærte også en masse om webudvikling og ui design.",
  },
  {
    date: "2018 - 2019",
    title: "Munkensdam Gymnasium (Kolding)",
    description:
      "Her gik jeg på Musik linjen, fik en masse venner og lærte en masse om musik. Var her dog kun 1. år før jeg droppede ud.",
  },
  {
    date: "2017 - 2018",
    title: "Højer Design Efterskole (Højer)",
    description:
      "Her gik jeg på Spiludviklings linjen, hvor jeg lærte at kode i C# og Unity. Tog efterskole i 9. klasse",
  },
];

const PROJECTS: ProjectElement[] = [
  {
    title: "Commercify GO",
    description:
      "Mit commercify projekt genskrevet i go, nu med discounts, dynamic currencies og shipping",
    tags: ["git", "docker", "golang", "mobilepay", "postgresql"],
    github: "https://github.com/zenfulcode/commercifygo",
    year: "2025",
  },
  {
    title: "Vipps mobilepay Golang SdK",
    description:
      "Jeg har udviklet en Golang SdK for Vipps mobilepay, som gør det muligt at integrere Vipps betalinger i Golang applikationer.",
    tags: ["git", "golang", "mobilepay"],
    github: "https://github.com/gkhaavik/vipps-mobilepay-sdk",
    year: "2025",
  },
  {
    title: "HotelHunger website med Webshop",
    description:
      "Dette er en hjemmeside som jeg lavede for en kunde i 2024. Hjemmesiden er lavet i Next.js og har en webshop.",
    tags: [
      "nextjs",
      "react",
      "typescript",
      "tailwindcss",
      "git",
      "docker",
      "commercify",
      "mysql",
    ],
    link: "https://hotelhunger.nu",
    year: "2024",
  },
  {
    title: "Commercify WIP",
    description:
      "Ecommerce backend løsning, som startede som backend til en hjemmeside jeg lavede for et dansk band. Jeg har sidenhen udviklet det til en standalone backend løsning.",
    tags: [
      "springboot",
      "mysql",
      "liquibase",
      "docker",
      "nextjs",
      "shadcn",
      "git",
      "mobilepay",
    ],
    link: "https://commercify.app",
    github: "https://github.com/Zenfulcode/Commercify",
    year: "2024",
  },
  {
    title: "Portfolio 2.0",
    description:
      "Dette er min nye portfolio hjemmeside, som jeg lavede i 2024.",
    tags: ["nextjs", "react", "typescript", "tailwindcss", "git"],
    link: "https://gustavhaavik-portfolio2.vercel.app/",
    github: "https://github.com/gkhaavik/portfolio2",
    year: "2024",
  },
  {
    title: "BartendR",
    description:
      "En kammerat og jeg blev hyret til at lave en hjemmeside for en mobil bar virksomhed. Jeg har stået for alt frontend",
    tags: ["nextjs", "react", "typescript", "tailwindcss", "git"],
    link: "https://bartendr.vercel.app/",
    year: "2024",
  },
  {
    title: "Johansplace",
    description:
      "Dette er en hjemmeside som jeg lavede for min bror, som er musikere. Meget unik hjemmeside!",
    tags: ["sveltekit", "typescript", "tailwindcss", "git"],
    link: "https://johansplace.eu/",
    year: "2024",
  },
  {
    title: "Medievale Gameengine",
    description:
      "Dette er en game engine kodet i java som jeg begyndte på i 2023. Et hobby projekt efter jeg fik lyst til at lave et spil HELT fra bunden.",
    tags: ["java", "git"],
    github: "https://github.com/gkhaavik/Medievale",
    year: "2023",
  },
  {
    title: "Quickcheck OLF",
    description:
      "Eksamens projekt hvor vi skulle lave et system for en virksomhed. Her lavede vi et tjek- ind og ud system, med administrations færdigheder for en SFO i Odder.",
    tags: ["javascript", "html", "css", "firebase", "firestore", "git"],
    github: "https://github.com/mikkelon/quickcheck-olf",
    year: "2023",
  },
  {
    title: "Geekminds Website",
    description:
      "En hjemmeside for en virksomhed jeg oprettede tilbage i 2023, men kom aldrig rigtig i gang med. Hjemmesiden er dog færdig og klar til brug",
    tags: ["nextjs", "react", "typescript", "tailwindcss", "git"],
    link: "https://geekminds-git-main-6u5t4v.vercel.app/",
    year: "2023",
  },
  {
    title: "Yatzy",
    description:
      "Skole projekt hvor vi skulle lave en web app som kunne spille yatzy. Jeg var ansvarlig for frontend og sørge for at det hele hang sammen",
    tags: ["html", "css", "javascript", "git"],
    link: "https://yatzy-projekt.vercel.app/",
    github: "https://github.com/gkhaavik/YatzyProjekt",
    year: "2023",
  },
  {
    title: "Portfolio 1.0",
    description:
      "Det her var min gamle portfolio hjemmeside, som jeg lavede i 2021. Jeg har valgt at lave en ny, da jeg ikke var tilfreds med den gamle.",
    tags: ["html", "nextjs", "tailwindcss", "react", "git"],
    link: "https://portfolio-6u5t4v.vercel.app/",
    github: "https://github.com/gkhaavik/portfolio",
    year: "2023",
  },
  {
    title: "Ascii Cam",
    description:
      "En processing applikation som tager kameraet på computer som input og omdanner billede til ascii karaktere ",
    tags: ["java", "processing", "git"],
    link: "https://www.youtube.com/watch?v=x49Xm72Zeys",
    github: "https://github.com/gkhaavik/AsciiMovie",
    year: "2022",
  },
];

const EMAIL = "gustavhaavik@gmail.com";
const LINKEDIN = "gustavhaavik";
const GITHUB = "gkhaavik";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 md:p-24 gap-24">
      {/* About Me */}
      <section className="flex flex-col gap-8 md:max-w-[720px]">
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <Image
            src="/avatar.png"
            alt="Gustav Haavik"
            width={200}
            height={200}
            className="rounded-full aspect-square mb-4 md:mb-0"
          />
          <div className="ml-4 flex flex-col text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Gustav Haavik
            </h1>
            <p className="text-xl font-light text-wrap">
              Fullstack web- og software udvikler.
            </p>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-lg">Mere om mig</h1>
          <p className="text-justify">
            Jeg er 24 år og er uddannet Datamatiker. Jeg har kodet intensivt
            siden 2016, hvor fokus har været på spiludvikling. Har gennem tiden
            kodet i mange forskellige sprog og brugt diverse frameworks.
            <br />
            <br />
            Idag ligger jeg mest vægt på web- og software udvikling, men er
            altid åben for nye udfordringer.
          </p>
        </div>
      </section>

      <section className="flex flex-row gap-8 justify-center md:justify-between w-full md:max-w-sm">
        <Link href={`https://github.com/${GITHUB}`} target="_blank">
          <FaGithub size={48} />
        </Link>
        <Link href={`https://www.linkedin.com/in/${LINKEDIN}`} target="_blank">
          <FaLinkedin size={48} />
        </Link>
        <Link href={`mailto:${EMAIL}`} target="_blank">
          <MdEmail size={48} />
        </Link>
      </section>

      {/* Timeline */}
      <section className="flex flex-col items-center justify-center md:max-w-[720px]">
        <TimeMachine items={timelineItems} />
      </section>

      <section className="flex flex-col items-center justify-center md:max-w-[720px]">
        <h2 className="text-4xl font-bold mb-8">Projekter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          {PROJECTS.map((project, index) => {
            return <Project key={index} proj={project} />;
          })}
        </div>
      </section>
    </main>
  );
}
