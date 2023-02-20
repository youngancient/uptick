import "./style.css";

const Watch = () => {
  return (
    <button className="watch">
      <div className="in-watch">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_4_126)">
          <path
            d="M20 4C13.376 4 8 9.376 8 16C8 22.624 13.376 28 20 28C26.624 28 32 22.624 32 16C32 9.376 26.636 4 20 4ZM23.6 18.676L20.12 20.68C19.7011 20.9241 19.2249 21.0528 18.74 21.0528C18.2551 21.0528 17.7789 20.9241 17.36 20.68C16.9377 20.4384 16.5874 20.0887 16.3449 19.667C16.1024 19.2452 15.9764 18.7665 15.98 18.28V14.26C15.98 13.264 16.496 12.364 17.36 11.86C18.224 11.356 19.256 11.356 20.132 11.86L23.612 13.864C24.476 14.368 24.992 15.256 24.992 16.264C24.992 17.272 24.476 18.172 23.6 18.676Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_4_126"
            x="0"
            y="0"
            width="40"
            height="40"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.00392157 0 0 0 0 0.0705882 0 0 0 0 0.0745098 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4_126"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4_126"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <p>Watch Now</p>
      </div>
    </button>
  );
};

export default Watch;
