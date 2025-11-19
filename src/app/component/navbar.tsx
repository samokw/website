import Link from "next/link"

const navItems = {
    '/experience': {
      name: 'experience',
    },
    '/resume': {
      name: 'resume',
    },
  }

const socialItems = {
  'mailto:okwusiunosamuel@gmail.com': {
    name: 'email',
  },
  'https://github.com/samokw': {
    name: 'github',
  },
}
  
export default function Navbar (){
    return (
      <aside className="md:w-[240px] md:flex-shrink-0 font-serif md:border-r md:border-neutral-200 dark:md:border-neutral-800 md:bg-neutral-50 md:dark:bg-neutral-900/50 md:h-screen md:sticky md:top-0 md:py-20 py-4 px-4 md:px-8">
        <div>
          <div className="mb-2 md:mb-8">
             <Link href="/" className="text-xl font-semibold tracking-tight hover:text-neutral-600 transition-colors block">
                samuel okwusiuno
             </Link>
             <hr className="mt-4 border-neutral-200 dark:border-neutral-800 hidden md:block" />
          </div>

          <nav
            className="flex flex-row md:flex-col items-start relative fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                return name === "resume" ? (
                  <a
                    key={path}
                    href="/Samuel_Software_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                  >
                    {name}
                  </a>
                ) : (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                  >
                    {name}
                  </Link>
                );
              })}
              
              <div className="hidden md:block mt-8 mb-2 px-2 text-xs font-medium text-neutral-400">
                Socials
              </div>
              
              {Object.entries(socialItems).map(([path, { name }]) => (
                 <a
                 key={path}
                 href={path}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
               >
                 {name}
               </a>
              ))}
            </div>
          </nav>
        </div>
      </aside>
    )
}