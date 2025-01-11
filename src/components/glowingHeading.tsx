import React from 'react'


type Props = {
    title: string;
  };

const GlowingHeading = (props:Props) => {
  return (
    <>
      <div className="flex justify-center items-center  font-[family-name:var(--font-deathStar)] my-4">
  <div className="text-center relative">
    {/* Top Border */}
    <div className="absolute top-0 left-0 right-0 border-2 p-0.5 border-purple-500 w-full"></div>
    
    {/* Text with Glow Effect */}
    <h1 className="text-3xl font-bold text-purple-500 text-border-2 py-2 text-transparent font-outline-2 glow-text  ">
      {props.title}
    </h1>
    
    {/* Bottom Border */}
    <div className="absolute bottom-0 left-0 right-0 border-2 p-0.5 border-purple-500 w-full"></div>
  </div>
</div>
    </>
  )
}

export default GlowingHeading
