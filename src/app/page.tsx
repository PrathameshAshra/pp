import { clsx } from "clsx";
import Image from "next/image";
import { Roboto, Montserrat } from "next/font/google";
import Transition from "./shared/Transition";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/components/navbar/components/ui/3d-card";
import { Spotlight } from "@/components/ui/Spotlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { WobbleCard } from "@/components/ui/wobble-card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Skeleton } from "@/components/ui/skeleton";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import WorkCard, { Projects } from "@/components/ui/workCard";

const roboto = Roboto({
  weight: ["400", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["400", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

export default function Home() {
  return (
    <main
      className={clsx({
        [roboto.className]: true,
        "bg-[#081318]": true,
        "h-screen": true,
        dark: true,
      })}
    >
      {/* <section></section> */}
      <Spotlight></Spotlight>
      <div className="h-[100vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <div className="flex justify-center flex-col items-center max-w-screen-lg">
            <HoverBorderGradient className="bg-transparent">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-lg mx-2 bg-[#6ABE5E]"></div>
                <p className="text-sm font-light">
                  Available for Opportunities
                </p>
              </div>
            </HoverBorderGradient>
            <p
              className={clsx({
                [montserrat.className]: true,
                "font-bold": true,
                "mt-5": true,
                "mb-5": true,
                "text-center": true,
              })}
            >
              Welcome to my <br /> digital abode
            </p>
            <p className="text-2xl mt-5 font-light ">
              I am an independent designer and developer
            </p>
            <p className="text-2xl mb-10 font-light ">
              My interest lies in brand experience and creating exterprise
              solutions
            </p>
            <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
              Lets connect
            </button>
          </div>
        </div>
      </div>

      {/* <section>
        <InfiniteMovingCards
          items={[
            { name: "Services", quote: "b", title: "c" },
            { name: "a", quote: "b", title: "c" },
            { name: "a", quote: "b", title: "c" },
            { name: "a", quote: "b", title: "c" },
          ]}
        ></InfiniteMovingCards>
      </section> */}
      <section>
        <p
          className={clsx({
            [montserrat.className]: true,
            "font-bold": true,
            "mt-5": true,
            "mb-5": true,
            "text-center": true,
            "text-4xl": true,
          })}
        >
          Currated Work
        </p>
        <p className="text-2xl mb-10 font-light text-center">
          Sample of my works
        </p>
        <div className="grid grid-cols-3 gap-3">
          <WobbleCard containerClassName="max-w-full">
            <div className="">
              <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1559628019-e73aae8d2a98?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;w=1471&amp;q=80"
                    alt="card-image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                    2023. The Data Duck
                  </h6>
                  <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Energy Trading systems for a european company
                  </h4>
                  <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Like so many organizations these days, Autodesk is a company
                    in transition. It was until recently a traditional boxed
                    software company selling licenses. Yet its own business
                    model disruption is only part of the story
                  </p>
                  <a href="#" className="inline-block">
                    <button
                      className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                      type="button"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        className="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </WobbleCard>
          <WobbleCard>
            <div className="">
              <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1517868163143-6eb6c78dbf54?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;w=1471&amp;q=80"
                    alt="card-image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                    2021. Tratwo
                  </h6>
                  <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Lyft launching cross-platform service this week
                  </h4>
                  <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Like so many organizations these days, Autodesk is a company
                    in transition. It was until recently a traditional boxed
                    software company selling licenses. Yet its own business
                    model disruption is only part of the story
                  </p>
                  <a href="#" className="inline-block">
                    <button
                      className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                      type="button"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        className="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </WobbleCard>
          <WobbleCard>
            <div className="">
              <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;w=1471&amp;q=80"
                    alt="card-image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                    2020. Mercer Mellor
                  </h6>
                  <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Lyft launching cross-platform service this week
                  </h4>
                  <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Like so many organizations these days, Autodesk is a company
                    in transition. It was until recently a traditional boxed
                    software company selling licenses. Yet its own business
                    model disruption is only part of the story
                  </p>
                  <a href="#" className="inline-block">
                    <button
                      className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                      type="button"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        className="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </WobbleCard>
        </div>
      </section>
      <section>
        <p
          className={clsx({
            [montserrat.className]: true,
            "font-bold": true,
            "mt-10": true,
            "mb-5": true,
            "text-center": true,
            "text-4xl": true,
          })}
        >
          My Services
        </p>
        <p className="text-2xl mb-10 font-light text-center">
          Some of my services
        </p>
        {
          <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        }
      </section>
      <section>
        <HoverEffect items={[{ description: "a", link: "b", title: "c" }]} />{" "}
      </section>
      <section>
        <MacbookScroll></MacbookScroll>{" "}
      </section>
      <section>
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Prathamesh Ashra™
              </a>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </main>
  );
}
