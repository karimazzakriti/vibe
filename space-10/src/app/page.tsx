import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f6f3' }}>
      {/* Top Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
        {/* Left side - Logo */}
        <Link href="/" className="flex items-center">
          <Space10Logo />
          <span className="sr-only">Go to Space 10 home page</span>
        </Link>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/history" className="text-black hover:text-gray-600 transition-colors text-sm font-medium">
            History
          </Link>
          <Link href="/highlights" className="text-black hover:text-gray-600 transition-colors text-sm font-medium">
            Highlights
          </Link>
          
          {/* Hamburger Menu Icon */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-1">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-8 space-y-4">
                <Link href="/team" className="block text-sm text-gray-800 hover:text-black">Team</Link>
                <Link href="/partners" className="block text-sm text-gray-800 hover:text-black">Partners</Link>
                <Link href="/awards" className="block text-sm text-gray-800 hover:text-black">Awards</Link>
                <Link href="/resources" className="block text-sm text-gray-800 hover:text-black">Resources</Link>
                <Link href="/office" className="block text-sm text-gray-800 hover:text-black">Office</Link>
              </div>
            </SheetContent>
          </Sheet>
          
          <Link href="/press" className="text-black hover:text-gray-600 transition-colors text-sm font-medium">
            Press
          </Link>
        </div>

        {/* Right side - Learn More with closure message */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 hidden lg:block">SPACE10 has closed after almost a decade.</span>
          <Button 
            variant="outline" 
            size="sm"
            className="border-black text-black hover:bg-black hover:text-white transition-colors"
            asChild
          >
            <Link href="/history">
              Learn More
            </Link>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-8">
        {/* Large Centered Headline with generous top padding */}
        <div className="pt-24 pb-16 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black leading-tight tracking-tight uppercase">
            A RESEARCH AND DESIGN LAB<br />
            ON A MISSION TO CREATE<br />
            A BETTER EVERYDAY LIFE<br />
            FOR PEOPLE AND THE PLANET
          </h1>
        </div>

        {/* Significant whitespace then single centered image */}
        <div className="py-16 flex justify-center">
          <div className="max-w-2xl">
            <Image
              src="https://cdn.sanity.io/images/ag1krub5/production/6032b70eb6df7377e6176088269b7ab09fc4e1a6-1510x1324.png?max-h=1200&max-w=1200"
              alt="Kitchen retail space - SPACE10 research lab"
              width={800}
              height={700}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </main>

      {/* Bottom Footer */}
      <footer className="border-t border-gray-200 px-8 py-12 mt-24">
        <div className="container mx-auto">
          <div className="flex justify-between items-start">
            {/* Left side - Copyright and timestamp */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                ©2024. SPACE10.<br />
                All Rights Reserved.
              </p>
              <div className="flex space-x-4 text-xs text-gray-500">
                <span>1920×100000</span>
                <span>Windows</span>
                <span>08:29:40</span>
              </div>
            </div>

            {/* Right side - Three columns of links */}
            <div className="flex space-x-16">
              {/* Column 1 */}
              <div className="space-y-3">
                <Link href="/team" className="block text-sm text-gray-600 hover:text-black transition-colors">Team</Link>
                <Link href="/partners" className="block text-sm text-gray-600 hover:text-black transition-colors">Partners</Link>
                <Link href="/awards" className="block text-sm text-gray-600 hover:text-black transition-colors">Awards</Link>
                <Link href="/resources" className="block text-sm text-gray-600 hover:text-black transition-colors">Resources</Link>
                <Link href="/office" className="block text-sm text-gray-600 hover:text-black transition-colors">Office</Link>
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                <Link href="https://www.instagram.com/space10/" className="block text-sm text-gray-600 hover:text-black transition-colors">Instagram</Link>
                <Link href="https://dk.linkedin.com/company/space-10" className="block text-sm text-gray-600 hover:text-black transition-colors">LinkedIn</Link>
                <Link href="https://www.spatial.io/s/SPACE10-Virtual-Public-63452f5578e70000017ad99d?share=1714815963659677697" className="block text-sm text-gray-600 hover:text-black transition-colors">Virtual</Link>
                <Link href="https://github.com/space10-community" className="block text-sm text-gray-600 hover:text-black transition-colors">GitHub</Link>
              </div>

              {/* Column 3 */}
              <div className="space-y-3">
                <Link href="/privacy-policy" className="block text-sm text-gray-600 hover:text-black transition-colors">Privacy Policy</Link>
                <Link href="/terms-and-conditions" className="block text-sm text-gray-600 hover:text-black transition-colors">Terms & Conditions</Link>
                <button className="block text-sm text-gray-600 hover:text-black transition-colors text-left">Cookie Settings</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
