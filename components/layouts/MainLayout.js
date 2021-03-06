import React, { useState, useEffect } from "react";

//? main layout contains things like the header, footer , nav etc;
export default function mainLayout(props) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      console.log(checked);
      document.documentElement.setAttribute("data-color-scheme", "dark");
    } else {
      document.documentElement.setAttribute("data-color-scheme", "light"); // or just empty " "
    }
  }, [checked]);

  return (
    <>
      <header className="main__header u-mb-small">
        <h3>QuickCalc</h3>
        <label for="toggle">
          <input
            type="checkbox"
            checked={checked}
            className="main__header-checked"
            id="toggle"
            onChange={(e) => setChecked((prev) => !prev)}
          />
          {checked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
              className="toggleIcon "
            >
              <title>Moon</title>
              <path
                fill="#fff"
                d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="toggleIcon"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Contrast</title>
              <path d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zM128.72 383.28A180 180 0 01256 76v360a178.82 178.82 0 01-127.28-52.72z" />
            </svg>
          )}
        </label>
      </header>
      {props.children}
      <footer>
        <p className="footer-text">&copy; Designed and Built by Mends Albert</p>
        <ul className="footer-nav-items">
          <li className="footer-nav-item">
            <a href="https://github.com/graphica99">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // class="ionicon"
                viewBox="0 0 512 512"
                className="font-icon"
              >
                <title>Logo Github</title>
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
              </svg>
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="https://twitter.com/AlbertMends_">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // class="ionicon"
                viewBox="0 0 512 512"
                className="font-icon"
              >
                <title>Logo Twitter</title>
                <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
              </svg>
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // class="ionicon"
                viewBox="0 0 512 512"
                className="font-icon"
              >
                <title>Logo Instagram</title>
                <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
