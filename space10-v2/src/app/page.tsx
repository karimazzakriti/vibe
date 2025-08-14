'use client';

import { useState, useEffect } from 'react';

// Exact Space10 Logo SVG from extracted data
const Space10Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="12" fill="none">
    <g fill="currentColor" clipPath="url(#a)">
      <path d="M0 7.775h2.388c.03 1.412.961 1.718 2.243 1.718 1.164 0 1.762-.422 1.762-1.192 0-.699-.437-.976-1.866-1.238L3.684 6.9C1.5 6.523.218 5.532.218 3.654c0-1.762 1.34-3.072 4.049-3.072 2.708 0 4.235 1.252 4.324 3.378h-2.33c-.058-.961-.57-1.456-1.95-1.456-1.078 0-1.588.393-1.588 1.048 0 .726.48 1.02 1.762 1.267l.874.16c2.488.451 3.582 1.4 3.582 3.163 0 2.184-1.747 3.276-4.397 3.276C1.587 11.417.014 10.017 0 7.775ZM18.755 4.31c0 2.096-1.384 3.494-3.83 3.494h-2.257v3.378h-2.46V.814h4.717c2.446 0 3.83 1.398 3.83 3.496Zm-2.46 0c0-.918-.584-1.413-1.53-1.413h-2.097v2.825h2.097c.946 0 1.53-.48 1.53-1.412ZM25.371 9.377h-4.31l-.597 1.805h-2.52L21.76.814h2.927l3.902 10.368h-2.607l-.61-1.805Zm-.699-2.053-.597-1.777a89.856 89.856 0 0 1-.873-2.621c-.292.903-.599 1.85-.858 2.621l-.597 1.777h2.925ZM28.485 5.999c0-3.335 2.01-5.417 5.17-5.417 2.46 0 4.5 1.354 4.907 3.946h-2.489c-.322-1.224-1.254-1.82-2.419-1.82-1.674 0-2.606 1.237-2.606 3.29 0 2.054.934 3.291 2.606 3.291 1.224 0 2.243-.714 2.476-2.097h2.46c-.32 2.767-2.387 4.225-4.936 4.225-3.087 0-5.169-2.084-5.169-5.418ZM42.324 3.013v1.879h4.965v2.066h-4.965V8.98h5.446v2.199h-7.908V.814h7.922v2.2h-5.46ZM53.636 11.182h-2.461v-6.48h-2.418V3.028l.233-.015c1.355-.087 2.345-.553 2.709-2.199h1.937v10.368ZM55.16 5.999c0-3.437 1.504-5.417 4.428-5.417C62.51.582 64 2.562 64 5.999c0 3.436-1.486 5.418-4.413 5.418-2.927 0-4.427-1.982-4.427-5.418Zm6.276 0c0-2.461-.67-3.379-1.85-3.379-1.18 0-1.866.918-1.866 3.379 0 2.46.67 3.378 1.867 3.378 1.196 0 1.85-.915 1.85-3.378Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 .582h64v10.837H0z" />
      </clipPath>
    </defs>
  </svg>
);

// System detection functions (from extracted JavaScript)
const getOS = () => {
  if (typeof window === 'undefined') return 'Unknown';
  const userAgent = window.navigator.userAgent;
  if (userAgent.indexOf('Mac') !== -1) return 'macOS';
  if (userAgent.indexOf('Win') !== -1) return 'Windows';
  if (userAgent.indexOf('Linux') !== -1) return 'Linux';
  return 'Unknown';
};

const getScreenInfo = () => {
  if (typeof window === 'undefined') return '';
  return `${window.screen.width}×${window.screen.height}`;
};

export default function Home() {
  // State for interactive features from extracted JS
  const [time, setTime] = useState('');
  const [screenInfo, setScreenInfo] = useState('');
  const [osInfo, setOsInfo] = useState('');

  // Initialize system info and clock (exact logic from space10.com)
  useEffect(() => {
    // System detection
    setScreenInfo(getScreenInfo());
    setOsInfo(getOS());

    // Real-time clock
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="style_block__pY24x">
      <div className="style_page__xhyrL">
        {/* Header with exact classes from space10.com extracted HTML */}
        <header className="styles_header__4ixf5 grid">
          <nav className="styles_nav__gVxMi grid__item grid__item--md-4">
            <a className="styles_logo__EGQI6" href="/">
              <Space10Logo />
              <span className="sr-only">Go to Space 10 home page</span>
            </a>
            
            <ul className="styles_ul__OoQmc">
              <li>
                <a href="/history">History</a>
              </li>
              <li>
                <a href="/highlights">Highlights</a>
              </li>
            </ul>
          </nav>

          <div className="styles_widgets__Vs3HU grid__item grid__item--2 grid__item--lg-4">
          </div>

          <div className="styles_cta__tIZgq grid__item grid__item--4">
            <h1 className="styles_title__IYDyJ">SPACE10 has closed after almost a decade.</h1>
            <span className="styles_link__8tYkG">
              <a className="styles_cta__sCzHz styles_secondary__thPo_" target="_self" href="/history">
                <span className="style_icon__kkEnt">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.27048 5.588V4.484H11.8785V12.092H10.7625V8.576L10.8225 6.32L4.67848 12.5L3.88648 11.708L10.0185 5.528L7.66648 5.588H4.27048Z" fill="currentColor" />
                  </svg>
                </span>
                Learn More
              </a>
            </span>
          </div>
        </header>

        <div className="style_wrap__qByoc">
          <div className="style_content__mHBTb">
            <p className="h0 style_heading__dZ9Qs">
              A research and design lab on a mission to create a better everyday life for people and the planet
            </p>
            <div className="style_project__wKMBm">
              <div className="style_projectName__djfY1">SPACE10 has closed after almost a decade.</div>
              <a className="styles_cta__sCzHz styles_secondary__thPo_" target="_self" href="/history">
                <span className="style_icon__kkEnt">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.27048 5.588V4.484H11.8785V12.092H10.7625V8.576L10.8225 6.32L4.67848 12.5L3.88648 11.708L10.0185 5.528L7.66648 5.588H4.27048Z" fill="currentColor" />
                  </svg>
                </span>
                Learn More
              </a>
            </div>
          </div>

          {/* Footer with exact structure from space10.com extracted HTML */}
          <footer className="style_footer__Ubiit page-wrap">
            <span className="style_copyText__6Ms4i">
              ©2024. SPACE10. <br />All Rights Reserved.
            </span>
            
            <div className="style_info__2r7m7">
              <span className="style_infoItem__oRJcd">{screenInfo}</span>
              <span className="style_infoItem__oRJcd">{osInfo}</span>  
              <span className="style_infoItem__oRJcd">
                <time dateTime={new Date().toISOString()}>{time}</time>
              </span>
            </div>

            {/* Footer menus - exact structure from extracted HTML */}
            <ul className="style_menu__G8d4h style_menuOne__n4mY7">
              <li><a href="/team">Team</a></li>
              <li><a href="/partners">Partners</a></li>
              <li><a href="/awards">Awards</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/office">Office</a></li>
            </ul>

            <ul className="style_menu__G8d4h style_menuTwo__wCLoZ">
              <li><a href="https://www.instagram.com/space10/">Instagram</a></li>
              <li><a href="https://dk.linkedin.com/company/space-10">LinkedIn</a></li>
              <li><a href="https://www.spatial.io/s/SPACE10-Virtual-Public-63452f5578e70000017ad99d?share=1714815963659677697" target="_blank" rel="noopener">Virtual</a></li>
              <li><a href="https://github.com/space10-community">GitHub</a></li>
            </ul>

            <ul className="style_menu__G8d4h style_menuThree__v95L4">
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
              <li><button>Cookie Settings</button></li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
}