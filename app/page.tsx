"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const $follower = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const xTo = gsap.quickTo($follower.current, "x", {
        duration: 2,
        ease: "power3",
      });

      const yTo = gsap.quickTo($follower.current, "y", {
        duration: 2,
        ease: "power3",
      });

      window.addEventListener("mousemove", (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
      });

      return () =>
        window.removeEventListener("mousemove", (e) => {
          xTo(e.clientX);
          yTo(e.clientY);
        });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const handleScroll = (event) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    const targetId = event.target.getAttribute("href").substring(1); // Get the section ID

    const targetElement = document.getElementById(targetId);
    if (targetId === "about-me//") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  return (
    <div className="font-[family-name:var(--font-dm-sans)] min-h-sceen overflow-y-scroll bg-[#090f3f] text-[#D4ADFC]">
      <div
        ref={$follower}
        className="pointer-events-none fixed left-0 top-0 aspect-square w-[40vmin] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full will-change-transform"
      >
        <div className="flex items-center justify-center w-full h-full duration-75 rounded-full bg-radial from-gray-100/10 to-transparent animate-pulse">
          {/* <div className="h-[80%] w-[80%] bg-gradient-to-tl from-white/0 via-gray-100/100 to-transparent rounded-full justify-center items-center flex">
            <div className="h-[60%] w-[60%] bg-gradient-to-tl from-white/0 via-gray-100/100 to-transparent rounded-full justify-center items-center flex">
              <div className="h-[40%] w-[40%] bg-gradient-to-tl from-white/0 via-gray-100/100 to-transparent rounded-full justify-center items-center flex"></div>
            </div>
          </div> */}
        </div>
      </div>
      <main className="flex h-screen flex-row gap-[32px] items-center sm:items-start px-32 py-24">
        {/* Fixed Side */}
        <div className="fixed w-1/2 h-full px-32">
          <div className="flex flex-col items-start justify-center gap-1">
            <h1 className="text-5xl font-extrabold">Niyoh Edwyn Villanueva</h1>
            <h2 className="text-2xl font-extrabold">Software Engineer</h2>
            <div className="w-[80%]">
              <h3 className="text-base font-semibold">
                I develop highly accessible and pixel perfect applications for
                mobile and the web.
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-20 text-base font-semibold gap-y-2">
            <Link
              className="duration-500 hover:text-2xl"
              href="#about-me"
              onClick={handleScroll}
            >
              About Me
            </Link>
            <Link
              className="duration-500 hover:text-2xl"
              href="#experience"
              onClick={handleScroll}
            >
              Experience
            </Link>
            <Link
              className="duration-500 hover:text-2xl"
              href="#projects"
              onClick={handleScroll}
            >
              Projects
            </Link>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="w-1/2 px-32 ml-auto pb-96">
          <div className="space-y-8" ref={aboutMeRef} id="about-me">
            <h1 className="text-4xl">About Me</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              eveniet mollitia praesentium repudiandae dolores quae harum atque
              veritatis pariatur voluptatibus autem, nesciunt, enim nemo
              laudantium voluptatum, illum et totam magni?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              ipsa nobis sed hic magni quos, doloremque unde quia qui? Omnis
              cupiditate sapiente corrupti necessitatibus ea perferendis, earum
              quas alias consectetur?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              eveniet mollitia praesentium repudiandae dolores quae harum atque
              veritatis pariatur voluptatibus autem, nesciunt, enim nemo
              laudantium voluptatum, illum et totam magni?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              ipsa nobis sed hic magni quos, doloremque unde quia qui? Omnis
              cupiditate sapiente corrupti necessitatibus ea perferendis, earum
              quas alias consectetur?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              eveniet mollitia praesentium repudiandae dolores quae harum atque
              veritatis pariatur voluptatibus autem, nesciunt, enim nemo
              laudantium voluptatum, illum et totam magni?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              ipsa nobis sed hic magni quos, doloremque unde quia qui? Omnis
              cupiditate sapiente corrupti necessitatibus ea perferendis, earum
              quas alias consectetur?
            </p>
          </div>
          <div className="pt-16" ref={experienceRef} id="experience">
            <h1 className="text-4xl">Experience</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              eveniet mollitia praesentium repudiandae dolores quae harum atque
              veritatis pariatur voluptatibus autem, nesciunt, enim nemo
              laudantium voluptatum, illum et totam magni?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              ipsa nobis sed hic magni quos, doloremque unde quia qui? Omnis
              cupiditate sapiente corrupti necessitatibus ea perferendis, earum
              quas alias consectetur?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              eveniet mollitia praesentium repudiandae dolores quae harum atque
              veritatis pariatur voluptatibus autem, nesciunt, enim nemo
              laudantium voluptatum, illum et totam magni?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              ipsa nobis sed hic magni quos, doloremque unde quia qui? Omnis
              cupiditate sapiente corrupti necessitatibus ea perferendis, earum
              quas alias consectetur?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              eveniet mollitia praesentium repudiandae dolores quae harum atque
              veritatis pariatur voluptatibus autem, nesciunt, enim nemo
              laudantium voluptatum, illum et totam magni?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              ipsa nobis sed hic magni quos, doloremque unde quia qui? Omnis
              cupiditate sapiente corrupti necessitatibus ea perferendis, earum
              quas alias consectetur?
            </p>
          </div>
          <div className="pt-16" ref={projectsRef} id="projects">
            <h1 className="text-4xl">Projects</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              eveniet mollitia praesentium repudiandae dolores quae harum atque
              veritatis pariatur voluptatibus autem, nesciunt, enim nemo
              laudantium voluptatum, illum et totam magni?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              ipsa nobis sed hic magni quos, doloremque unde quia qui? Omnis
              cupiditate sapiente corrupti necessitatibus ea perferendis, earum
              quas alias consectetur?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              eveniet mollitia praesentium repudiandae dolores quae harum atque
              veritatis pariatur voluptatibus autem, nesciunt, enim nemo
              laudantium voluptatum, illum et totam magni?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              ipsa nobis sed hic magni quos, doloremque unde quia qui? Omnis
              cupiditate sapiente corrupti necessitatibus ea perferendis, earum
              quas alias consectetur?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              eveniet mollitia praesentium repudiandae dolores quae harum atque
              veritatis pariatur voluptatibus autem, nesciunt, enim nemo
              laudantium voluptatum, illum et totam magni?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              ipsa nobis sed hic magni quos, doloremque unde quia qui? Omnis
              cupiditate sapiente corrupti necessitatibus ea perferendis, earum
              quas alias consectetur?
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
