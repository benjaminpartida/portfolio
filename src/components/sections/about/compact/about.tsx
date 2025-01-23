import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <div className="space-y-4">
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I have worked in app development with Flutter and have
                experience in web technologies, combining my passion for design
                and development. I am especially interested in where both
                converge, creating custom solutions based on clients ideas. I
                easily adapt to the needs of the project and enjoy overcoming
                challenges. I have more experience with Flutter, React,
                HTML/CSS/JS, Python and C++, but I am flexible and always
                willing to learn new technologies. My affinity for computers and
                learning constantly drives me to improve and grow
                professionally.
              </p>
              <Button asChild>
                <Link href="resume.pdf" target="_blank">
                  View Resume <ArrowUpRightIcon className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-6">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="310"
              src="/images/hero.jpg"
              sizes="100vw"
              width="550"
            />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
