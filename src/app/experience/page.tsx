import Project from "../component/project";
import { site } from "@/content/site";

export default function Experience() {
  const { workExperience, projects } = site;

  return (
    <div>
    <section className="pb-12">
      <h1 className="mb-8 text-[30px] font-normal leading-tight tracking-[-0.01em] text-[var(--foreground)]">
        experience
      </h1>

      <div className="mb-12 space-y-9 lowercase">
        {workExperience.map((experience, index) => (
          <article key={index}>
            <div className="mb-2">
              <h2 className="text-[16px] font-normal leading-relaxed text-[var(--foreground)]">
                {experience.title}
              </h2>
              <p className="text-[14px] leading-relaxed text-[var(--soft)]">
                {experience.company} · {experience.location}
              </p>
              <p className="text-[13px] tabular-nums leading-relaxed text-[var(--soft)]">
                {experience.date}
              </p>
            </div>
            <ul className="space-y-2 text-[15px] leading-relaxed text-[var(--muted)]">
              {experience.responsibilities.map((item, i) => (
                <li key={i} className="pl-4 before:-ml-4 before:content-['-'] before:text-[var(--soft)]">
                  <span className="ml-2">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h2 className="mb-8 text-[24px] font-semibold leading-tight tracking-[-0.01em] text-[var(--foreground)]">
        projects
      </h2>
      <ul className="space-y-10 lowercase">
        {projects.map((project, index) => (
          <Project key={project.url + String(index)} project={project} />
        ))}
      </ul>
    </section>
    </div>
  );
}
