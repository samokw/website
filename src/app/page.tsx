import Image from "next/image";

export default function Home() {
  return (
    <>
    <h1 className="mb-10 text-3xl font-semibold tracking-tighter">{"sam's portfolio"}</h1>
    <Image className="mb-10"
    src="/IMG_7316.jpeg" 
    alt="Sunset"
    width={600}
    height={600}
    />
    <p className="mb-4 lowercase">{"Hello, my name is Samuel Okwusiuno, and I am a Software Engineering student at the University of Guelph, graduating in April 2026. I specialize in Statistics and have a strong interest in leveraging cloud infrastructure to build innovative and efficient applications."}</p>
    <p className="mb-4 lowercase">{"You can reach me at"} <a className="underline" href="mailto:okwusiunosamuel@gmail.com">okwusiunosamuel@gmail.com</a></p>
    
    </>
  );
}
