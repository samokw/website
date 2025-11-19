import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">hi, i&apos;m samuel 👋</h1>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <p className="mb-4">
            I&apos;m a Software Engineering student at the University of Guelph, graduating in April 2026.
          </p>
          <p className="mb-4">
            I specialize in Statistics and have a strong interest in leveraging cloud infrastructure to build innovative and efficient applications.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image
            className="rounded-lg grayscale hover:grayscale-0 transition-all duration-500 ease-in-out object-cover"
            src="/IMG_7316.jpeg"
            alt="Samuel Okwusiuno"
            width={200}
            height={200}
            priority
          />
        </div>
      </div>
    </section>
  );
}
