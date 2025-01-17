import Link from "next/link"

const navItems = {
    '/': {
      name: 'home',
    },
    '/experience': {
      name: 'experience',
    },
    '/resume': {
      name: 'resume',
    },
  }
  
export default function Navbar (){
    return <>
    <aside className="-ml-[8px] mb-16 tracking-tight">
        <div className="lg:sticky lg:top-20">
            <nav className="flex flex-row items-end relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav">
             <div className="flex flex-row space-x-0 pl-10">
             {Object.entries(navItems).map(([path, { name }]) => {
              return name === "resume" ? (
                <a
                  key={path}
                  href="/Samuel_Software_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-700 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}

          </div>
          </nav>

        </div>
    </aside>
    </>
}