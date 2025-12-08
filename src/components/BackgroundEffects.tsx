import React from "react";

const BackgroundEffects: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-35 rounded-full blur-3xl">
        <div className="absolute top-[-20%] left-[20%] size-100 bg-red-500  "></div>
        <div className="absolute top-[-30%] left-[-10%] size-150 bg-red-500  "></div>

        <div className="absolute top-[-20%] right-[10%] size-120 bg-red-400  "></div>
        <div className="absolute bottom-[5%] left-[5%] size-50 bg-red-400  "></div>
        
        <div className="absolute bottom-[-40%] right-[-20%] size-170 bg-red-400  "></div>

        <div className="absolute bottom-[-5%] right-[45%] size-50 bg-red-400  "></div>
        <div className="absolute bottom-[-20%] right-[45%] size-100 bg-red-400 "></div>
      </div>

      <div className="absolute inset-1 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[15%] text-pink-300 opacity-60 text-5xl">💗</div>
        <div className="absolute top-[20%] right-[15%] text-pink-300 opacity-50 text-4xl">💗</div>
        <div className="absolute bottom-[25%] left-[10%] text-pink-300 opacity-60 text-4xl">💗</div>
        <div className="absolute bottom-[40%] right-[20%] text-pink-300 opacity-50 text-5xl">💗</div>
      </div>
    </>
  );
};

export default BackgroundEffects;
