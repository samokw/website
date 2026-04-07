import Project from "../component/project";
import { site } from "@/content/site";

export default function Experience() {
  const { workExperience, projects } = site;

  return (
    <div className="mx-auto max-w-2xl">
    <section>
      <h1 className="font-display mb-8 text-2xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
        work experience
      </h1>
      <div className="mb-12 divide-y divide-[var(--border)]">
        {workExperience.map((experience, index) => (
          <div key={index} className="flex flex-col gap-2 py-8 first:pt-0 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-lg font-semibold text-[var(--foreground)]">
                {experience.title}
              </h2>
              <span className="tabular-nums text-sm text-[var(--muted)]">
                {experience.date}
              </span>
            </div>
            <p className="mb-2 text-sm text-[var(--muted)]">
              {experience.company} • {experience.location}
            </p>
            <ul className="ml-4 list-outside list-disc space-y-1 text-sm text-[var(--foreground)]/90">
              {experience.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h1 className="font-display mb-8 text-2xl font-semibold tracking-[-0.02em] text-[var(--foreground)]">
        projects
      </h1>
      <ul className="flex flex-col space-y-8">
        {projects.map((project, index) => (
          <Project key={project.url + String(index)} project={project} />
        ))}
      </ul>
    </section>
    </div>
  );
}
