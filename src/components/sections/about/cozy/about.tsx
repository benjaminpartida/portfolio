import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import Reveal from '@/components/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import RevealText from '@/components/text-reveal';

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      {/* TODO: Redesign for horizontal */}
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                About
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Me
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here&apos;s where I share my journey through tech, highlighting the
            experiences and passions that drive my innovative pursuits.
          </p>
        </div>
        <div className="space-y-4">
          <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <RevealText>
              He desarrollado aplicaciones con Flutter y tengo experiencia en
              tecnologías web, combinando mi pasión por el diseño y el
              desarrollo. Me interesa especialmente el punto donde ambos
              convergen, creando soluciones personalizadas a partir de las ideas
              de los clientes. Me adapto fácilmente a las necesidades del
              proyecto y disfruto superar desafíos. Tengo mayor experiencia con
              Flutter, React, HTML/CSS/JS, Python y C++, pero soy flexible y
              siempre estoy dispuesto a aprender nuevas tecnologías. Mi afinidad
              por las computadoras y el aprendizaje constante me impulsa a
              mejorar y crecer profesionalmente.
            </RevealText>
          </p>
          {/* <Button asChild>
            <Link href="resume.pdf" target="_blank">
              View Resume <ArrowUpRightIcon className="ml-2 size-5" />
            </Link>
          </Button> */}
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
