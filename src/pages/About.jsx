import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We Love
        </h1>
        <div className="stats bg-primary shadow ">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque error,
        ullam reiciendis aliquam facilis corrupti fugit officiis modi delectus?
        Atque sit nostrum, tempora veniam quos suscipit cumque voluptatum
        blanditiis explicabo fugit consequatur vitae, quia reprehenderit nihil
        quisquam facere quas odit!
      </p>
    </>
  );
};

export default About;
