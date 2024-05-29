const About = () => {
  return (
    <div className="px-[15vw] py-[40px] sm:py-[60px] text-xl">

      <h1 className="font-bold text-4xl mb-7 text-center sm:text-left">
        About
      </h1>


      <p className="leading-8 text-center sm:text-left">
      PeduliCarbon adalah proyek yang dibuat untuk kompetisi <a href="https://www.instagram.com/p/C6BnZSBSuys/?igsh=dW1wMm1hd2xvMDB5" target="_blank" className="text-white font-bold relative">
          <span className="relative z-[5]">Capstone Project GDSC Universitas Diponegoro 2024</span>
          <svg className="w-full left-0 absolute stroke-[#02674e] top-[3px]" width="244" height="40" viewBox="0 0 244 40" fill="none">
            <path opacity="0.5" d="M3 21C20.1231 17.8525 37.9303 16.8192 55.3857 16.0719C84.6481 14.819 114.132 14.5194 143.388 15.9599C169.598 17.2503 195.455 20.3554 221.642 17.7519C228.347 17.0853 237.394 16.9679 244 16.9679" strokeWidth="20" strokeLinejoin="round" />
          </svg>
        </a>. Tujuan utamanya adalah untuk menunjukkan kepada masyarakat betapa buruknya perubahan iklim terhadap lingkungan. PeduliCarbon memungkinkan Anda mengukur jejak karbon Anda. Anda dapat melihat kode sumber kami di <a href="https://github.com/kdandy/pedulicarbon" target="_blank" className="text-white font-bold relative">
          <span className="relative z-[5]">GitHub</span>
          <svg className={`w-full left-0 absolute stroke-[#02674e] top-[3px]`} width="244" height="40" viewBox="0 0 244 40" fill="none">
            <path opacity="0.5" d="M3 21C20.1231 17.8525 37.9303 16.8192 55.3857 16.0719C84.6481 14.819 114.132 14.5194 143.388 15.9599C169.598 17.2503 195.455 20.3554 221.642 17.7519C228.347 17.0853 237.394 16.9679 244 16.9679" strokeWidth="40" strokeLinejoin="round" />
          </svg>
        </a>.
      </p>
      <p className="my-5 text-center sm:text-left">Dalam proyek ini kami menggunakan banyak alat modern seperti:</p>

      <ul className="list-disc pl-6 flex flex-col gap-[10px]">
        <li>
          <a href="https://nextjs.org" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.85] transition">Next.js</a> & <a href="https://react.dev/" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.85] transition">React.js</a>
        </li>
        <li>
          <a href="https://typescriptlang.org/" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.85] transition">Typescript</a>
        </li>
        <li>
          <a href="https://tailwindcss.com" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.85] transition">Tailwind CSS</a>
        </li>
        <li>
          <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.85] transition">React Three Fiber</a> & <a href="https://threejs.org/" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.85] transition">Three.js</a>
        </li>
        <li>
          <a href="https://postcss.org/" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.85] transition">Postcss</a>
        </li>
        <li>
          <a href="https://eslint.org/" target="_blank" className="border-b-[3px] border-white font-semibold sm:hover:opacity-[.85] transition">ESLint</a>
        </li>
      </ul>
    </div>
  )
}

export default About