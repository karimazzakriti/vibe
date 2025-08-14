import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

const Space10Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="12" fill="none" className="text-black">
    <g fill="currentColor" clipPath="url(#a)">
      <path d="M0 7.775h2.388c.03 1.412.961 1.718 2.243 1.718 1.164 0 1.762-.422 1.762-1.192 0-.699-.437-.976-1.866-1.238L3.684 6.9C1.5 6.523.218 5.532.218 3.654c0-1.762 1.34-3.072 4.049-3.072 2.708 0 4.235 1.252 4.324 3.378h-2.33c-.058-.961-.57-1.456-1.95-1.456-1.078 0-1.588.393-1.588 1.048 0 .726.48 1.02 1.762 1.267l.874.16c2.488.451 3.582 1.4 3.582 3.163 0 2.184-1.747 3.276-4.397 3.276C1.587 11.417.014 10.017 0 7.775ZM18.755 4.31c0 2.096-1.384 3.494-3.83 3.494h-2.257v3.378h-2.46V.814h4.717c2.446 0 3.83 1.398 3.83 3.496Zm-2.46 0c0-.918-.584-1.413-1.53-1.413h-2.097v2.825h2.097c.946 0 1.53-.48 1.53-1.412ZM25.371 9.377h-4.31l-.597 1.805h-2.52L21.76.814h2.927l3.902 10.368h-2.607l-.61-1.805Zm-.699-2.053-.597-1.777a89.856 89.856 0 0 1-.873-2.621c-.292.903-.599 1.85-.858 2.621l-.597 1.777h2.925ZM28.485 5.999c0-3.335 2.01-5.417 5.17-5.417 2.46 0 4.5 1.354 4.907 3.946h-2.489c-.322-1.224-1.254-1.82-2.419-1.82-1.674 0-2.606 1.237-2.606 3.29 0 2.054.934 3.291 2.606 3.291 1.224 0 2.243-.714 2.476-2.097h2.46c-.32 2.767-2.387 4.225-4.936 4.225-3.087 0-5.169-2.084-5.169-5.418ZM42.324 3.013v1.879h4.965v2.066h-4.965V8.98h5.446v2.199h-7.908V.814h7.922v2.2h-5.46ZM53.636 11.182h-2.461v-6.48h-2.418V3.028l.233-.015c1.355-.087 2.345-.553 2.709-2.199h1.937v10.368ZM55.16 5.999c0-3.437 1.504-5.417 4.428-5.417C62.51.582 64 2.562 64 5.999c0 3.436-1.486 5.418-4.413 5.418-2.927 0-4.427-1.982-4.427-5.418Zm6.276 0c0-2.461-.67-3.379-1.85-3.379-1.18 0-1.866.918-1.866 3.379 0 2.46.67 3.378 1.867 3.378 1.196 0 1.85-.915 1.85-3.378Z"/>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 .582h64v10.837H0z"/>
      </clipPath>
    </defs>
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4.27048 5.588V4.484H11.8785V12.092H10.7625V8.576L10.8225 6.32L4.67848 12.5L3.88648 11.708L10.0185 5.528L7.66648 5.588H4.27048Z" fill="currentColor"/>
  </svg>
);

const heroImages = [
  {
    src: "https://cdn.sanity.io/images/ag1krub5/production/a04239660def0402d9ed1ed309848a761e3b640e-762x411.png?max-h=1200&max-w=1200",
    width: 762,
    height: 411,
    alt: "Space10 Project 1"
  },
  {
    src: "https://cdn.sanity.io/images/ag1krub5/production/f66b1311cfa752955a8c6f10d254e2f62d3420cb-471x423.png?max-h=1200&max-w=1200",
    width: 471,
    height: 423,
    alt: "Space10 Project 2"
  },
  {
    src: "https://cdn.sanity.io/images/ag1krub5/production/6032b70eb6df7377e6176088269b7ab09fc4e1a6-1510x1324.png?max-h=1200&max-w=1200",
    width: 1510,
    height: 1324,
    alt: "Space10 Project 3"
  },
  {
    src: "https://cdn.sanity.io/images/ag1krub5/production/5074d06b9f6ad57c597535efafa520034e6701e5-2025x1434.png?max-h=1200&max-w=1200",
    width: 2025,
    height: 1434,
    alt: "Space10 Project 4"
  },
  {
    src: "https://cdn.sanity.io/images/ag1krub5/production/b238a18a53ad1986607a2e69071132d476291492-746x777.png?max-h=1200&max-w=1200",
    width: 746,
    height: 777,
    alt: "Space10 Project 5"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Images Grid */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-12 gap-4 p-4">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`relative ${
                index === 0 ? 'col-span-6' : 
                index === 1 ? 'col-span-3' :
                index === 2 ? 'col-span-3' :
                index === 3 ? 'col-span-6' : 'col-span-6'
              } ${
                index < 2 ? 'row-start-1' :
                index < 4 ? 'row-start-2' : 'row-start-3'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 2}
              />
            </div>
          ))}
        </div>

        {/* Navigation Overlay */}
        <div className="absolute top-0 left-0 right-0 z-10 p-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Space10Logo />
              <span className="sr-only">Go to Space 10 home page</span>
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                <NavigationMenuItem>
                  <Link href="/history" className="text-black hover:text-gray-600 transition-colors font-medium">
                    History
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/highlights" className="text-black hover:text-gray-600 transition-colors font-medium">
                    Highlights
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Main Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 max-w-2xl mx-4 text-center shadow-xl">
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-black leading-tight">
              SPACE10 has closed after almost a decade.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A research and design lab on a mission to create a better everyday life for people and the planet
            </p>
            
            <Button 
              variant="outline" 
              className="border-black text-black hover:bg-black hover:text-white transition-colors"
              asChild
            >
              <Link href="/history">
                <ArrowIcon />
                <span className="ml-2">Learn More</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="text-sm text-gray-600 mb-4">
                ©2024. SPACE10. <br />
                All Rights Reserved.
              </p>
              
              <div className="flex space-x-4 text-xs text-gray-500">
                <span>1920×100000</span>
                <span>Windows</span>
                <span>08:29:40</span>
              </div>
            </div>
            
            <div>
              <nav className="space-y-3">
                <Link href="/team" className="block text-sm text-gray-600 hover:text-black transition-colors">Team</Link>
                <Link href="/partners" className="block text-sm text-gray-600 hover:text-black transition-colors">Partners</Link>
                <Link href="/awards" className="block text-sm text-gray-600 hover:text-black transition-colors">Awards</Link>
                <Link href="/resources" className="block text-sm text-gray-600 hover:text-black transition-colors">Resources</Link>
                <Link href="/office" className="block text-sm text-gray-600 hover:text-black transition-colors">Office</Link>
              </nav>
            </div>
            
            <div>
              <nav className="space-y-3 mb-8">
                <Link href="https://www.instagram.com/space10/" className="block text-sm text-gray-600 hover:text-black transition-colors">Instagram</Link>
                <Link href="https://dk.linkedin.com/company/space-10" className="block text-sm text-gray-600 hover:text-black transition-colors">LinkedIn</Link>
                <Link href="https://www.spatial.io/s/SPACE10-Virtual-Public-63452f5578e70000017ad99d?share=1714815963659677697" className="block text-sm text-gray-600 hover:text-black transition-colors">Virtual</Link>
                <Link href="https://github.com/space10-community" className="block text-sm text-gray-600 hover:text-black transition-colors">GitHub</Link>
              </nav>
              
              <div className="space-y-2">
                <Link href="/privacy-policy" className="block text-xs text-gray-500 hover:text-gray-700 transition-colors">Privacy Policy</Link>
                <Link href="/terms-and-conditions" className="block text-xs text-gray-500 hover:text-gray-700 transition-colors">Terms & Conditions</Link>
                <button className="block text-xs text-gray-500 hover:text-gray-700 transition-colors">Cookie Settings</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
