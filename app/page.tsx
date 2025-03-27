"use client";

import { useEffect, useRef, useState } from "react";
import EmailSVG from "@/assets/svgs/email";
import FacebookSVG from "@/assets/svgs/facebook";
import GithubSVG from "@/assets/svgs/github";
import LinkedinSVG from "@/assets/svgs/linkedin";
import PhoneSVG from "@/assets/svgs/phone";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const $follower = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef([]);

  useEffect(() => {
    console.log({ activeSection });
  }, [activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("id"));
          }
        });
      },
      { threshold: 0.9 } // Adjust threshold as needed for accuracy
    );

    // Observe all sections
    sectionRefs.current.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => {
      sectionRefs.current.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScroll = (event) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    const targetId = event.target.getAttribute("href").substring(1); // Get the section ID

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

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

  const displayHeaderText = () => {
    if (activeSection === "about-me") {
      return "About Me";
    } else if (activeSection === "experience") {
      return "Experience";
    } else if (activeSection === "projects") {
      return "Projects";
    }
  };
  // D3D3D3
  // try color for text
  return (
    <div className="font-[family-name:var(--font-dm-sans)] min-h-screen h-full overflow-visible sm:overflow-auto bg-[#090f3f] text-[#fffff]">
      <div
        ref={$follower}
        className="pointer-events-none hidden sm:fixed left-0 top-0 aspect-square w-[40vmin] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full will-change-transform"
      >
        <div className="flex items-center justify-center w-full h-full duration-75 rounded-full bg-radial from-gray-100/10 to-transparent animate-pulse">
          {/* <div className="h-[80%] w-[80%] bg-gradient-to-tl from-white/0 via-gray-100/100 to-transparent rounded-full justify-center items-center flex">
            <div className="h-[60%] w-[60%] bg-gradient-to-tl from-white/0 via-gray-100/100 to-transparent rounded-full justify-center items-center flex">
              <div className="h-[40%] w-[40%] bg-gradient-to-tl from-white/0 via-gray-100/100 to-transparent rounded-full justify-center items-center flex"></div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="pointer-events-none sticky sm:relative sm:hidden top-0 z-30 shadow-md bg-[#090f3f]">
        <h1 className="text-xl font-bold text-center p-4">
          {displayHeaderText()}
        </h1>
      </div>
      <main className="flex h-full sm:h-screen flex-col sm:flex sm:flex-row sm:gap-[32px] items-start px-8 py-16 sm:px-32 sm:py-24">
        {/* Fixed Side */}
        <div className="static w-full h-full pointer-events-none sm:px-32 sm:w-2/5 sm:h-full sm:fixed">
          <div className="flex flex-col items-start justify-center gap-1">
            <h1 className="text-3xl font-extrabold sm:max-xl:text-5xl">
              Niyoh Edwyn Villanueva
            </h1>
            <h2 className="text-xl font-extrabold sm:text-2xl">
              Software Engineer
            </h2>
            <div className="w-[80%] pt-5 sm:pt-0">
              <h3 className="text-sm font-semibold sm:text-base">
                I develop highly accessible and pixel perfect applications for
                mobile and the web.
              </h3>
            </div>
          </div>
          <div className="flex-col items-start justify-start hidden py-20 text-base font-semibold pointer-events-auto sm:flex gap-y-2">
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
          <div className="flex flex-row gap-x-2 items-center justify-start pt-10 sm:pt-15">
            <LinkedinSVG className="h-6 w-6 sm:h-10 sm:w-10" color="#ffff" />
            <GithubSVG className="h-6 w-6 sm:h-10 sm:w-10" color="#ffff" />
            <FacebookSVG className="h-6 w-6 sm:h-10 sm:w-10" color="#ffff" />
            {/* <EmailSVG className="h-10 w-10" color="#ffff" /> */}
            {/* <PhoneSVG className="h-8 w-8" color="#ffff" /> */}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="h-full sm:h-auto w-full pt-16 pb-16 ml-auto sm:px-32 sm:pb-32 sm:w-3/5 sm:pt-0">
          <section
            ref={(el) => (sectionRefs.current[0] = el)}
            className="space-y-8"
            id="about-me"
          >
            {/* <h1 className="text-xl sm:text-4xl">About Me</h1> */}
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
          </section>
          <section
            ref={(el) => (sectionRefs.current[1] = el)}
            className="pt-16"
            id="experience"
          >
            <h1 className="text-xl sm:text-4xl">Experience</h1>
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
          </section>
          <section
            ref={(el) => (sectionRefs.current[2] = el)}
            className="pt-16"
            id="projects"
          >
            <h1 className="text-xl sm:text-4xl">Projects</h1>
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
          </section>
        </div>
      </main>
    </div>
  );
}
