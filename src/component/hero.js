import React from "react";

export default function Hero() {
  return (
    <section className="bg-black ">
      <div className="container sm:contianer flex flex-col items-center justify-center pt-24 text-white space-y-12  ">
        <header className=" text-4xl lg:text-5xl font-bold font-opensans text-center">
          <h1>Speakers & Sponsers</h1>
        </header>
        <p className='text-center text-silver lg:px-64 xl:px-92 md:px-32 sm:px-24 2xl:px-98 md:text-base sm:text-sm '>
          We are proud of our achievers to have proved their success through
          hard-work and dedication which has enabled them to achieve their dream
          job.
        </p>
        <div className="flex items-center justify-around space-x-6 lg:w-1/3 md:w-1/2 sm:w-55 mx-auto pt-2">
          <a href="#" className="sm:pr-2 text-ligreen hover:text-secondary">
            Request speaker
          </a>
          <a href="#" className="text-ligreen hover:text-secondary">
            Request sponsorship
          </a>
        </div>
        <div className="w-full pt-4">
            <div className="flex justify-center w-full bg-cover bg-center">
              <img src="../images/heroImage.png" alt="HeroImage" />
            </div>
          </div>
      </div>
    </section>
  );
}
