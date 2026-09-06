import Image from "next/image";

export default async function Home() {
  return (
    <div className="bg-[#008B8B] flex flex-col py-6 gap-6 justify-between h-screen">
      <div />

      <div className="w-full flex items-center flex-col justify-center">
        <Image width={300} height={300} src="/whiterangvelogo.png" className="mb-5" alt="Logo" />

          <h1 className="w-screen text-[#008B8B] py-3 font-bold text-7xl sm:text-9xl bg-white mix-blend-lighten uppercase text-center">
            Coming Soon
          </h1>

        <p className="text-center my-3 text-lg text-white">
          Get ready! We&apos;re launching our product soon! <br /> See what all
          the buzz is about in our launch email.
        </p>
        <h3 className="text-xl font-semibold text-white">
          info@rangve.com
        </h3>
      </div>

      <div></div>
    </div>
  );
}