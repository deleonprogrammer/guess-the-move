// Useful functions and constants that may be needed across the different JavaScript files.

export const pieceSvgs = {
  blackPawnSvg: (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
      <path
        d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z"
        style={{
          opacity: 1,
          fill: "#000000",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "#000000",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </svg>
  ),

  blackKnightSvg: (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
      <g
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000000",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(0,0.3)"
      >
        <path
          d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
          style={{ fill: "#000000", stroke: "#000000" }}
        />
        <path
          d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
          style={{ fill: "#000000", stroke: "#000000" }}
        />
        <path
          d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
          style={{ fill: "#ffffff", stroke: "#ffffff" }}
        />
        <path
          d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
          transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
          style={{ fill: "#ffffff", stroke: "#ffffff" }}
        />
        <path
          d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z "
          style={{ fill: "#ffffff", stroke: "none" }}
        />
      </g>
    </svg>
  ),

  blackBishopSvg: (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
      <g
        style={{
          opacity: 1,
          fill: "none",
          fillRule: "evenodd",
          fillOpacity: 1,
          stroke: "#000000",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(0,0.6)"
      >
        <g
          style={{
            fill: "#000000",
            stroke: "#000000",
            strokeLinecap: "butt",
          }}
        >
          <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z" />
          <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />
          <path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />
        </g>
        <path
          d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
          style={{
            fill: "none",
            stroke: "#ffffff",
            strokeLinejoin: "miter",
          }}
        />
      </g>
    </svg>
  ),

  blackRookSvg: (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
      <g
        style={{
          opacity: 1,
          fill: "#000000",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000000",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(0,0.3)"
      >
        <path
          d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z "
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z "
          style={{ strokeLinecap: "butt", strokeLinejoin: "miter" }}
        />
        <path
          d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z "
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z "
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M 12,35.5 L 33,35.5 L 33,35.5"
          style={{
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: 1,
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M 13,31.5 L 32,31.5"
          style={{
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: 1,
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M 14,29.5 L 31,29.5"
          style={{
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: 1,
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M 14,16.5 L 31,16.5"
          style={{
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: 1,
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M 11,14 L 34,14"
          style={{
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: 1,
            strokeLinejoin: "miter",
          }}
        />
      </g>
    </svg>
  ),

  blackQueenSvg: (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
      <g
        style={{
          fill: "#000000",
          stroke: "#000000",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      >
        <path
          d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
          style={{ strokeLinecap: "butt", fill: "#000000" }}
        />
        <path d="m 9,26 c 0,2 1.5,2 2.5,4 1,1.5 1,1 0.5,3.5 -1.5,1 -1,2.5 -1,2.5 -1.5,1.5 0,2.5 0,2.5 6.5,1 16.5,1 23,0 0,0 1.5,-1 0,-2.5 0,0 0.5,-1.5 -1,-2.5 -0.5,-2.5 -0.5,-2 0.5,-3.5 1,-2 2.5,-2 2.5,-4 -8.5,-1.5 -18.5,-1.5 -27,0 z" />
        <path d="M 11.5,30 C 15,29 30,29 33.5,30" />
        <path d="m 12,33.5 c 6,-1 15,-1 21,0" />
        <circle cx="6" cy="12" r="2" />
        <circle cx="14" cy="9" r="2" />
        <circle cx="22.5" cy="8" r="2" />
        <circle cx="31" cy="9" r="2" />
        <circle cx="39" cy="12" r="2" />
        <path
          d="M 11,38.5 A 35,35 1 0 0 34,38.5"
          style={{ fill: "none", stroke: "#000000", strokeLinecap: "butt" }}
        />
        <g style={{ fill: "none", stroke: "#ffffff" }}>
          <path d="M 11,29 A 35,35 1 0 1 34,29" />
          <path d="M 12.5,31.5 L 32.5,31.5" />
          <path d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5" />
          <path d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5" />
        </g>
      </g>
    </svg>
  ),

  blackKingSvg: (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
      <g
        style={{
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000000",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        <path
          d="M 22.5,11.63 L 22.5,6"
          style={{
            fill: "none",
            stroke: "#000000",
            strokeLinejoin: "miter",
          }}
          id="path6570"
        />
        <path
          d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
          style={{
            fill: "#000000",
            fillOpacity: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37"
          style={{ fill: "#000000", stroke: "#000000" }}
        />
        <path
          d="M 20,8 L 25,8"
          style={{
            fill: "none",
            stroke: "#000000",
            strokeLinejoin: "miter",
          }}
        />
        <path
          d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.5,26.6 L 22.5,24.5 C 20,18 10.85,14 6.97,19.85 C 4.5,25.5 13,29.5 13,29.5"
          style={{ fill: "none", stroke: "#ffffff" }}
        />
        <path
          d="M 12.5,30 C 18,27 27,27 32.5,30 M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5 M 12.5,37 C 18,34 27,34 32.5,37"
          style={{ fill: "none", stroke: "#ffffff" }}
        />
      </g>
    </svg>
  ),

  whitePawnSvg: (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
      <path
        d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z"
        style={{
          opacity: 1,
          fill: "#ffffff",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "#000000",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </svg>
  ),

  whiteKnightSvg: (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
      <g
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000000",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(0,0.3)"
      >
        <path
          d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
          style={{ fill: "#ffffff", stroke: "#000000" }}
        />
        <path
          d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
          style={{ fill: "#ffffff", stroke: "#000000" }}
        />
        <path
          d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
          style={{ fill: "#000000", stroke: "#000000" }}
        />
        <path
          d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
          transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
          style={{ fill: "#000000", stroke: "#000000" }}
        />
      </g>
    </svg>
  ),

  whiteBishopSvg: (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
      <g
        style={{
          opacity: 1,
          fill: "none",
          fillRule: "evenodd",
          fillOpacity: 1,
          stroke: "#000000",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(0,0.6)"
      >
        <g
          style={{
            fill: "#ffffff",
            stroke: "#000000",
            strokeLinecap: "butt",
          }}
        >
          <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z" />
          <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />
          <path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />
        </g>
        <path
          d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
          style={{
            fill: "none",
            stroke: "#000000",
            strokeLinejoin: "miter",
          }}
        />
      </g>
    </svg>
  ),

  whiteRookSvg: (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
      <g
        style={{
          opacity: 1,
          fill: "#ffffff",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000000",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(0,0.3)"
      >
        <path
          d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
          style={{ strokeLinecap: "butt" }}
        />
        <path
          d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"
          style={{ strokeLinecap: "butt" }}
        />
        <path d="M 34,14 L 31,17 L 14,17 L 11,14" />
        <path
          d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"
          style={{ strokeLinecap: "butt", strokeLinejoin: "miter" }}
        />
        <path d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" />
        <path
          d="M 11,14 L 34,14"
          style={{
            fill: "none",
            stroke: "#000000",
            strokeLinejoin: "miter",
          }}
        />
      </g>
    </svg>
  ),

  whiteQueenSvg: (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45">
      <g
        style={{
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 1.5,
          strokeLinejoin: "round",
        }}
      >
        <path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z" />
        <path d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 11,36 C 9.5,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z" />
        <path d="M 11.5,30 C 15,29 30,29 33.5,30" style={{ fill: "none" }} />
        <path
          d="M 12,33.5 C 18,32.5 27,32.5 33,33.5"
          style={{ fill: "none" }}
        />
        <circle cx="6" cy="12" r="2" />
        <circle cx="14" cy="9" r="2" />
        <circle cx="22.5" cy="8" r="2" />
        <circle cx="31" cy="9" r="2" />
        <circle cx="39" cy="12" r="2" />
      </g>
    </svg>
  ),

  whiteKingSvg: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path strokeLinejoin="miter" d="M22.5 11.63V6M20 8h5" />
        <path
          fill="#fff"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
        />
        <path
          fill="#fff"
          d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"
        />
        <path d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0" />
      </g>
    </svg>
  ),
};

// Given a piece as it appears in FEN, this method returns the algebraic notation for it.
// For example, "N" for "n" or "N", which both represent the knight.
// The pawn gets an empty string.
// This method assumes valid input.
const getPieceInAlgebraicNotation = (pieceInFen) => {
  let res = pieceInFen.toUpperCase();
  if (res === "P") {
    res = "";
  }
  return res;
};

// Returns the rank in algebraic notation, given a rank index.
// The rank indexes in this program follow the order of appearance in FEN,
// so that 0 represents the eighth rank, and 7 the first one.
// This method assumes the rankIndex is a numeric value within proper range.
const getRankNumberFromIndex = (rankIndex) => {
  return 8 - rankIndex;
};

// Returns the appropriate file given a file index. The indexes
// go from 0 to 7, with 0 representing the a-file, and 7 the h-file.
// In case of bad input, the h-file is returned as a default.
const getFileCharacterFromIndex = (fileIndex) => {
  let res = "h";
  switch (fileIndex) {
    case 0:
      res = "a";
      break;
    case 1:
      res = "b";
      break;
    case 2:
      res = "c";
      break;
    case 3:
      res = "d";
      break;
    case 4:
      res = "e";
      break;
    case 5:
      res = "f";
      break;
    case 6:
      res = "g";
      break;
    case 7:
    // Fall through.
    default:
      res = "h";
      break;
  }
  return res;
};

// Here, I call "normal" the one without any capture symbol and without disambiguation,
// so that Nd2 could be Nbd2 or Nfd2.
// Since pawns yield an empty string, their movement is correctly represented by their target square here.
const getNormalAlgebraicNotationInterpretation = (
  pieceInAlgebraicNotation,
  targetFileInAlgebraicNotation,
  targetRankInAlgebraicNotation,
  promotionPiece
) => {
  return (
    pieceInAlgebraicNotation +
    targetFileInAlgebraicNotation +
    targetRankInAlgebraicNotation +
    promotionPiece
  );
};

// N1d2, N3d2, and the like.
const getRankUnambiguousAlgebraicNotationInterpretation = (
  pieceInAlgebraicNotation,
  originalRankInAlgebraicNotation,
  targetFileInAlgebraicNotation,
  targetRankInAlgebraicNotation
) => {
  return (
    pieceInAlgebraicNotation +
    originalRankInAlgebraicNotation +
    targetFileInAlgebraicNotation +
    targetRankInAlgebraicNotation
  );
};

// Nbd2, Nfd2, and the like.
// This covers pawn captures.
const getFileUnambiguousAlgebraicNotationInterpretation = (
  pieceInAlgebraicNotation,
  originalFileInAlgebraicNotation,
  targetFileInAlgebraicNotation,
  targetRankInAlgebraicNotation,
  promotionPiece
) => {
  let res =
    pieceInAlgebraicNotation +
    originalFileInAlgebraicNotation +
    targetFileInAlgebraicNotation +
    targetRankInAlgebraicNotation +
    promotionPiece;

  if (
    pieceInAlgebraicNotation === "K" &&
    originalFileInAlgebraicNotation === "e"
  ) {
    if (targetFileInAlgebraicNotation === "c") {
      res = "O-O-O";
    } else if (targetFileInAlgebraicNotation === "g") {
      res = "O-O";
    }
  }

  return res;
};

// Returns an object with all potential algebraic notation interpretations for the specified piece, and origin and target squares.
// I'll use simplified algebraic notation, and then convert the moves from the PGN into this more convenient
// notation for comparison. That way I don't have to deal with capture, check, and checkmate symbols, which don't add
// any necessary meaning.
// Promotion piece designates the piece that the pawn promotes to, if it applies
// (otherwise it should be an empty string). In the future, I could make better checks,
// as, for instance, a promotion would only happen if a pawn reached the eighth or first ranks,
// and that's very easy to validate. It's not needed for this particular program, though.
// Promotions go in the "normal" part of the resulting object, where needed,
// or in the fileDisambiguation part if they're the result of a capture.
// They're also written in a simplified form, e.g.: e8=Q would simply be e8Q.
// Finally, to simplify the programming task, and since it doesn't lead to any loss
// of information, the "right move", meaning the one that will be correct in algebraic notation,
// will be featured in at least one of the interpretations given in the resulting object,
// but not necessarily in more than one of them (as it is, again, unnecessary, so that calculation can be avoided).
// One such case, for instance, will be O-O, which will be featured in the file disambiguation part (due to it
// needing the parameter of the original file),
// but not checked for in the others.
// Example of output for this method:
//  {
//    normal: "Nd2",
//    fileDisambiguation: "N1d2",
//    rankDisambiguation: "Nbd2",
//  };
export function getAllPossibleAlgebraicNotationInterpretations(
  piece,
  originalFileIndex,
  originalRankIndex,
  targetFileIndex,
  targetRankIndex,
  promotionPiece
) {
  const pieceInAlgebraic = getPieceInAlgebraicNotation(piece);
  const originalFileInAlgebraic = getFileCharacterFromIndex(originalFileIndex);
  const originalRankInAlgebraic = getRankNumberFromIndex(originalRankIndex);
  const targetFileInAlgebraic = getFileCharacterFromIndex(targetFileIndex);
  const targetRankInAlgebraic = getRankNumberFromIndex(targetRankIndex);
  return {
    normal: getNormalAlgebraicNotationInterpretation(
      pieceInAlgebraic,
      targetFileInAlgebraic,
      targetRankInAlgebraic,
      promotionPiece
    ),
    fileDisambiguation: getFileUnambiguousAlgebraicNotationInterpretation(
      pieceInAlgebraic,
      originalFileInAlgebraic,
      targetFileInAlgebraic,
      targetRankInAlgebraic,
      promotionPiece
    ),
    rankDisambiguation: getRankUnambiguousAlgebraicNotationInterpretation(
      pieceInAlgebraic,
      originalRankInAlgebraic,
      targetFileInAlgebraic,
      targetRankInAlgebraic
    ),
  };
}

// Get all the information about squares and pieces from the corresponding segment of a FEN
// string.
// Returns an array of squares containing the FEN letter corresponding to the piece,
// or an empty string if the square is empty. The squares are numbered according to their
// order in the FEN string, so that the 0 index (first square) would be a8,
// and the index 63 (sixty-fourth square) would be h1. Note that to use these indexes
// for movement calculation in the future it'll be better to add a unit to every one of them,
// so that index 0 is simply square 1. For the purposes of this method, though,
// the indexes are completely fine, and no further calculation is needed.
const getSquareDataFromFen = (piecesInFen) => {
  const squares = [];
  let i = 0;
  while (i < piecesInFen.length) {
    let currentValue = piecesInFen[i];
    if (currentValue !== "/") {
      let emptySquares = parseInt(currentValue);
      if (isNaN(emptySquares)) {
        // Found an actual piece, not a slash or a number indicating empty space.
        squares.push(currentValue);
      } else {
        // Found a number of empty squares.
        for (let j = 0; j < emptySquares; ++j) {
          squares.push("");
        }
      }
    }
    ++i;
  }
  return squares;
};

// Preconditions: 1. The provided move is in proper simplified algebraic notation,
// and is not castles.
// 2. Turn is 'w' or 'b'.
// Returns the piece to move, in FEN ('p' for black pawn, for instance).
const getPieceToMove = (turn, moveInSimplifiedAlgebraicNotation) => {
  let pieceToMove = "P";
  // The first character, provided the move isn't castles, which is a precondition of this operation,
  // is either a capital letter representing the piece, or a lowercase one representing
  // the file where the pawn to move is located.
  let firstCharacterOfMove = moveInSimplifiedAlgebraicNotation[0];
  if (
    firstCharacterOfMove === "N" ||
    firstCharacterOfMove === "B" ||
    firstCharacterOfMove === "R" ||
    firstCharacterOfMove === "Q" ||
    firstCharacterOfMove === "K"
  ) {
    pieceToMove = firstCharacterOfMove;
  }
  if (turn === "b") {
    pieceToMove = pieceToMove.toLowerCase();
  }
  return pieceToMove;
};

// Returns the number of the square in my 1-64 nomenclature (where 1 is a8 and 64 is h1, as they appear in a FEN),
// given a square in algebraic notation (e.g.: 'a1'). Notice that if we want to convert the
// result to an index to use with the squares array elsewhere, we're going to have to deduct a unit.
// The given square could be '-' (this is the case for the en passant target square of the FEN, for instance, sometimes,
// if there's no pawn to be captured there). In such a case, this operation will return -1 as a result (an invalid square number).
const getSquareIn64Nomenclature = (squareInAlgebraic) => {
  let res = -1;
  if (squareInAlgebraic !== "-") {
    const fileInAlgebraic = squareInAlgebraic[0];
    const rankInAlgebraic = squareInAlgebraic[1];
    let fileAddend = 8;
    switch (fileInAlgebraic) {
      case "a":
        fileAddend = 1;
        break;
      case "b":
        fileAddend = 2;
        break;
      case "c":
        fileAddend = 3;
        break;
      case "d":
        fileAddend = 4;
        break;
      case "e":
        fileAddend = 5;
        break;
      case "f":
        fileAddend = 6;
        break;
      case "g":
        fileAddend = 7;
        break;
      case "h":
      default:
        fileAddend = 8;
        break;
    }
    const rankAddend = (8 - parseInt(rankInAlgebraic)) * 8;
    res = fileAddend + rankAddend;
  }
  return res;
};

// Does the reverse of the previous operation: given a square in 1-64 nomenclature,
// it returns the algebraic equivalent. Useful for cases where disambiguation is used.
const convertSquareIn64ToAlgebraic = (squareIn64) => {
  let file;
  let rank;
  let maxSquareInRank;
  let rankFound = false;
  for (let i = 8, j = 8; !rankFound && i <= 64; i += 8, --j) {
    if (squareIn64 <= i) {
      rankFound = true;
      maxSquareInRank = i;
      rank = "" + j;
    }
  }
  switch (squareIn64) {
    case maxSquareInRank:
      file = "h";
      break;
    case maxSquareInRank - 1:
      file = "g";
      break;
    case maxSquareInRank - 2:
      file = "f";
      break;
    case maxSquareInRank - 3:
      file = "e";
      break;
    case maxSquareInRank - 4:
      file = "d";
      break;
    case maxSquareInRank - 5:
      file = "c";
      break;
    case maxSquareInRank - 6:
      file = "b";
      break;
    case maxSquareInRank - 7:
    default:
      file = "a";
      break;
  }
  return file + rank;
};

// squareIn64: A square in 1-64 nomenclature.
// disambiguationCondition: A string representing a file or a rank in algebraic, such as 'a' or '1',
// or even a file AND rank (this can happen with knights, queens, and even bishops!).
// This method treats with all such cases very neatly.
// Returns: true if the square belongs to the file, rank, or square specified in the disambiguation condition, or false otherwise.
const squareFulfillsDisambiguationCondition = (
  squareIn64,
  disambiguationCondition
) => {
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  return squareInAlgebraic.includes(disambiguationCondition);
};

// Precondition:
// moveInSimplifiedAlgebraicNotation is a valid, simplified algebraic notation move
// that isn't castles.
// turn === 'b' || 'w'
// original piece is the piece in FEN, such as 'p' for black pawn.
// Returns an object with the piece and target square in algebraic form.
// The reason it returns the piece is important: it's because in the case of a promotion,
// that piece will be different from the one who left the original square.
// Example: An input of 'Nbd7' with turn === 'b' will return { piece: 'n', square: 'd7'}.
// Example 2: An input of 'e8Q' will return { piece: 'Q', square: 'e8'}.
const getDestinationSquareInAlgebraic = (
  originalPiece,
  turn,
  moveInSimplifiedAlgebraicNotation
) => {
  const lastCharacter =
    moveInSimplifiedAlgebraicNotation[
      moveInSimplifiedAlgebraicNotation.length - 1
    ];
  let piece;
  let targetSquare;
  if (
    lastCharacter === "N" ||
    lastCharacter === "B" ||
    lastCharacter === "Q" ||
    lastCharacter === "K"
  ) {
    piece = turn === "b" ? lastCharacter.toLowerCase() : lastCharacter;
    targetSquare = moveInSimplifiedAlgebraicNotation.substring(
      moveInSimplifiedAlgebraicNotation.length - 3,
      moveInSimplifiedAlgebraicNotation.length - 1
    );
  } else {
    piece = originalPiece;
    targetSquare = moveInSimplifiedAlgebraicNotation.substring(
      moveInSimplifiedAlgebraicNotation.length - 2
    );
  }

  return { piece, square: targetSquare };
};

// Preconditions: The provided move is in proper simplified algebraic notation.
// The piece is as it appears in the FEN.
// turn === 'b' || 'w'
// Postcondition:
// Returns an object with the piece that will reach the target square (this is important in the case of a promotion)
// and the square where the piece will land after the move, in the 1-64 nomenclature,
// using the order of the squares as they appear in the FEN (1 is a8, 64 is h1).
// Example of return: { piece: 'p', square: ''}
const getDestinationSquare = (
  piece,
  turn,
  moveInSimplifiedAlgebraicNotation
) => {
  let res;
  let squareInAlgebraicNotation;
  if (moveInSimplifiedAlgebraicNotation === "O-O-O") {
    switch (piece) {
      case "r":
        squareInAlgebraicNotation = { piece: "r", square: "d8" };
        break;
      case "R":
        squareInAlgebraicNotation = { piece: "R", square: "d1" };
        break;
      case "k":
        squareInAlgebraicNotation = { piece: "k", square: "c8" };
        break;
      case "K":
      default:
        squareInAlgebraicNotation = { piece: "K", square: "c1" };
        break;
    }
    res = getSquareIn64Nomenclature(squareInAlgebraicNotation);
  } else if (moveInSimplifiedAlgebraicNotation === "O-O") {
    switch (piece) {
      case "r":
        squareInAlgebraicNotation = { piece: "r", square: "f8" };
        break;
      case "R":
        squareInAlgebraicNotation = { piece: "R", square: "f1" };
        break;
      case "k":
        squareInAlgebraicNotation = { piece: "k", square: "g8" };
        break;
      case "K":
      default:
        squareInAlgebraicNotation = { piece: "K", square: "g1" };
        break;
    }
  } else {
    squareInAlgebraicNotation = getDestinationSquareInAlgebraic(
      piece,
      turn,
      moveInSimplifiedAlgebraicNotation
    );
  }

  res = {
    piece,
    square: getSquareIn64Nomenclature(squareInAlgebraicNotation.square),
  };
  return res;
};

// Preconditions:
// 1. turn === 'b' || 'w'
// 2. moveInSimplifiedAlgebraicNotation is what its name indicates, in string form.
// Returns an array with all the destination squares for the pieces, in the following
// form (this is an example):
// [{
//  piece: 'r',
//  square: 62 (equivalent to f8)
// },
//  {
// piece: 'k',
// square: 63 (equivalent to g8)
// }]
// The example has two pieces, since the move was O-O with Black to move.
// Aside from castling, every other move will only yield an array with
// one piece and its corresponding square as a result.
const getAllDestinationSquares = (turn, moveInSimplifiedAlgebraicNotation) => {
  const res = [];
  // If the move is castles, the origin and
  // destination squares for both rook and king are preestablished.
  if (
    moveInSimplifiedAlgebraicNotation === "O-O-O" ||
    moveInSimplifiedAlgebraicNotation === "O-O"
  ) {
    const rook = turn === "b" ? "r" : "R";
    const king = turn === "b" ? "k" : "K";
    res.push(
      getDestinationSquare(rook, turn, moveInSimplifiedAlgebraicNotation)
    );
    res.push(
      getDestinationSquare(king, turn, moveInSimplifiedAlgebraicNotation)
    );
  } else {
    const pieceToMove = getPieceToMove(turn, moveInSimplifiedAlgebraicNotation);
    res.push(
      getDestinationSquare(pieceToMove, turn, moveInSimplifiedAlgebraicNotation)
    );
  }
  console.log("DESTINATION SQUARES 1: ", res);
  return res;
};

// Get all the information about a position from a given FEN string.
// Example of output:
// {
//   squares: ['r', 'n', ..., '', '', 'P', 'P', ..., 'N', 'R'],
//   turn: 'w',
//   whiteCanCastleKingside: true,
//   whiteCanCastleQueenside: true,
//   blackCanCastleKingside: true,
//   blackCanCastleQueenside: true,
//   enPassantTarget: -1 (if there's no en passant target; if there is, then the square
// in 1-64 nomenclature),
//   halfmovesSinceLastPawnMoveOrCapture: 0,
//   moveNumber: 1
// }
const getFenData = (fen) => {
  const arrayOfFen = fen.split(" ");
  const squares = getSquareDataFromFen(arrayOfFen[0]);
  const turn = arrayOfFen[1];
  const whiteCanCastleKingside = arrayOfFen[2].includes("K");
  const whiteCanCastleQueenside = arrayOfFen[2].includes("Q");
  const blackCanCastleKingside = arrayOfFen[2].includes("k");
  const blackCanCastleQueenside = arrayOfFen[2].includes("q");
  const enPassantTarget = getSquareIn64Nomenclature(arrayOfFen[3]);
  const halfmovesSinceLastPawnMoveOrCapture = parseInt(arrayOfFen[4]);
  const moveNumber = parseInt(arrayOfFen[5]);
  return {
    squares,
    turn,
    whiteCanCastleKingside,
    whiteCanCastleQueenside,
    blackCanCastleKingside,
    blackCanCastleQueenside,
    enPassantTarget,
    halfmovesSinceLastPawnMoveOrCapture,
    moveNumber,
  };
};

// These two methods: isSquareOnTheAFile and isSquareOnTheHFile,
// are useful for move calculation, because if we count +7 or +9 from a certain square,
// for instance, we normally get a diagonally adjacent square, but not if
// such a square is on the edge of the board (in such a case, only one of the two, +7 or +9,
// will give a diagonal square; and, again, for bishops, queens, and kings, it'll be necessary
// to additionally check for the rank not to be on one of the edges, but not for pawns).
const isSquareOnTheAFile = (squareIn64) => {
  return (
    squareIn64 === 1 ||
    squareIn64 === 9 ||
    squareIn64 === 17 ||
    squareIn64 === 25 ||
    squareIn64 === 33 ||
    squareIn64 === 41 ||
    squareIn64 === 49 ||
    squareIn64 === 57
  );
};

const isSquareOnTheHFile = (squareIn64) => {
  return squareIn64 % 8 === 0;
};

const isSquareOnTheEighthRank = (squareIn64) => {
  return squareIn64 < 9;
};

const isSquareOnTheFirstRank = (squareIn64) => {
  return squareIn64 > 56;
};

// By "first" here we mean first that appears in the FEN,
// so first in the 1-64 nomenclature. b8 is the first square
// of the b-file, for instance.
// In short, it's the square on the eighth rank for such a file.
const getFirstSquareInFile = (squareInAlgebraic) => {
  let res = 8;
  const fileInAlgebraic = squareInAlgebraic[0];
  switch (fileInAlgebraic) {
    case "a":
      res = 1;
      break;
    case "b":
      res = 2;
      break;
    case "c":
      res = 3;
      break;
    case "d":
      res = 4;
      break;
    case "e":
      res = 5;
      break;
    case "f":
      res = 6;
      break;
    case "g":
      res = 7;
      break;
    case "h":
    default:
      res = 8;
      break;
  }
  return res;
};

// Returns the square in the a-file for such a rank.
// MODIFIED
const getFirstSquareInRank = (rankInAlgebraic) => {
  let res = 57;
  switch (rankInAlgebraic) {
    case "8":
      res = 1;
      break;
    case "7":
      res = 9;
      break;
    case "6":
      res = 17;
      break;
    case "5":
      res = 25;
      break;
    case "4":
      res = 33;
      break;
    case "3":
      res = 41;
      break;
    case "2":
      res = 49;
      break;
    case "1":
    default:
      res = 57;
      break;
  }
  console.log("res in getFirstSquareInRank: ", res);
  return res;
};

// Second easiest after the king, because factors such as
// the length of the move in simplified algebraic notation are already
// an indicator of where the pawn comes from.
const getSquaresToVacateForPawnMove = (
  oldFenData,
  moveInSimplifiedAlgebraicNotation,
  destinationSquares
) => {
  let res = [];
  const pieceToLookFor = oldFenData.turn === "b" ? "p" : "P";
  // If the move in algebraic notation is only two characters (such as e4), or of
  // three, with the last character being a promotion piece (such as g8N), then
  // the move isn't a capture, and the pawn can only be located one or two squares
  // behind the target square.
  if (
    moveInSimplifiedAlgebraicNotation.length === 2 ||
    (moveInSimplifiedAlgebraicNotation.length === 3 &&
      destinationSquares[0].piece !== pieceToLookFor)
  ) {
    let squareToCheck = destinationSquares[0].square;
    let found = false;
    // The iterator is necessary, as we only need to do two checks at most
    // (pawns can't move more than two squares in one go).
    let i = 0;
    while (!found && squareToCheck >= 1 && squareToCheck <= 64 && i < 2) {
      if (pieceToLookFor === "p") {
        squareToCheck -= 8;
      } else {
        squareToCheck += 8;
      }

      console.log("squareToCheck: " + squareToCheck);
      console.log("pieceToLookFor: " + pieceToLookFor);
      // The number of the square is one more than the index.
      if (oldFenData.squares[squareToCheck - 1] === pieceToLookFor) {
        found = true;
      }
      console.log("found: " + found);
      ++i;
    }
    res.push({ piece: pieceToLookFor, square: squareToCheck });
  } else {
    // It's a capture, and whether en passant or not, it can be treated in the exact same way.
    // The square in question only depends on the file the pawn came from, and its color.
    // IMPORTANT: Notice that one of the two candidate squares can be nonsense,
    // in particular in the case of a target square on the edge of the board (a-file or h-file).
    // However, this doesn't matter for our calculation, since the square that makes no sense
    // has no chance of coinciding with the file the pawn came from, so it will never
    // be returned as a result.
    let squareToCheck = destinationSquares[0].square;
    const pawnsFileInAlgebraic = moveInSimplifiedAlgebraicNotation[0];
    const changeSignMultiplier = pieceToLookFor === "p" ? -1 : 1;
    let candidateSquare = squareToCheck + changeSignMultiplier * 7;
    let candidateSquareInAlgebraic =
      convertSquareIn64ToAlgebraic(candidateSquare);
    if (candidateSquareInAlgebraic[0] === pawnsFileInAlgebraic) {
      res.push({ piece: pieceToLookFor, square: candidateSquare });
    } else {
      // For pawns there are only two options for capture (even considering en passant, since in that case,
      // the target square is a different one, and can only be reached in two ways for capture: very important detail).
      // Therefore, once we discard one of the options, we know the remaining one has to be it.
      candidateSquare = squareToCheck + changeSignMultiplier * 9;
      res.push({ piece: pieceToLookFor, square: candidateSquare });
    }
  }
  return res;
};

// The easiest, as there can only be one king.
const getSquaresToVacateForKingMove = (oldFenData) => {
  let res = [];
  const pieceToLookFor = oldFenData.turn === "b" ? "k" : "K";
  let found = false;
  for (let i = 0; i < oldFenData.squares.length && !found; ++i) {
    if (oldFenData.squares[i] === pieceToLookFor) {
      // Remember that the 1-64 nomenclature starts, of course, at 1, not
      // 0, unlike the index of the squares.
      res.push({ piece: pieceToLookFor, square: i + 1 });
      found = true;
    }
  }
  return res;
};

const getSquaresToVacateForRookMove = (
  oldFenData,
  moveInSimplifiedAlgebraicNotation,
  destinationSquares
) => {
  const res = [];
  const piece = destinationSquares[0].piece;
  const targetSquare = destinationSquares[0].square;

  console.log("getSquareToVacateForRookMove: piece: ", piece);
  console.log("getSquarestoVacateForRookMove: targetSquare: ", targetSquare);

  // The disambiguation condition can be a file, rank, or
  // a whole square.
  let disambiguationCondition;
  if (moveInSimplifiedAlgebraicNotation.length === 4) {
    disambiguationCondition = moveInSimplifiedAlgebraicNotation[1];
  } else if (moveInSimplifiedAlgebraicNotation.length === 5) {
    disambiguationCondition = moveInSimplifiedAlgebraicNotation.substring(1, 3);
  } else {
    disambiguationCondition = "";
  }

  let candidateSquare = targetSquare;
  let found = false;
  // This boolean will be true if a border of the board, or an enemy piece,
  // is reached, as that means the original square can't possibly be further in the
  // current direction.
  let limitReached = false;
  let pieceOnCandidateSquare;

  // Search to the left.
  while (!found && !limitReached) {
    candidateSquare = getSquareLeft(candidateSquare);
    // The getSquareLeft method returns -1 in case the edge of the board is
    // reached.
    if (candidateSquare < 1) {
      limitReached = true;
    } else {
      pieceOnCandidateSquare = oldFenData.squares[candidateSquare - 1];
      // If it found another piece on the square, then the original square can't
      // be further in that direction.
      if (pieceOnCandidateSquare !== "" && pieceOnCandidateSquare !== piece) {
        limitReached = true;
      } else if (
        pieceOnCandidateSquare === piece &&
        squareFulfillsDisambiguationCondition(
          candidateSquare,
          disambiguationCondition
        )
      ) {
        found = true;
        res.push({ piece, square: candidateSquare });
      }
    }
  }

  candidateSquare = targetSquare;
  limitReached = false;

  // Search up.
  while (!found && !limitReached) {
    candidateSquare = getSquareUp(candidateSquare);
    // The getSquareUp method returns -1 in case the edge of the board is
    // reached.
    if (candidateSquare < 1) {
      limitReached = true;
    } else {
      pieceOnCandidateSquare = oldFenData.squares[candidateSquare - 1];
      // If it found another piece on the square, then the original square can't
      // be further in that direction.
      if (pieceOnCandidateSquare !== "" && pieceOnCandidateSquare !== piece) {
        limitReached = true;
      } else if (
        pieceOnCandidateSquare === piece &&
        squareFulfillsDisambiguationCondition(
          candidateSquare,
          disambiguationCondition
        )
      ) {
        found = true;
        res.push({ piece, square: candidateSquare });
      }
    }
  }

  candidateSquare = targetSquare;
  limitReached = false;

  // Search right.
  while (!found && !limitReached) {
    candidateSquare = getSquareRight(candidateSquare);
    // The getSquareRight method returns -1 in case the edge of the board is
    // reached.
    if (candidateSquare < 1) {
      limitReached = true;
    } else {
      pieceOnCandidateSquare = oldFenData.squares[candidateSquare - 1];
      // If it found another piece on the square, then the original square can't
      // be further in that direction.
      if (pieceOnCandidateSquare !== "" && pieceOnCandidateSquare !== piece) {
        limitReached = true;
      } else if (
        pieceOnCandidateSquare === piece &&
        squareFulfillsDisambiguationCondition(
          candidateSquare,
          disambiguationCondition
        )
      ) {
        found = true;
        res.push({ piece, square: candidateSquare });
      }
    }
  }

  candidateSquare = targetSquare;
  limitReached = false;

  // Search down.
  while (!found && !limitReached) {
    candidateSquare = getSquareDown(candidateSquare);
    // The getSquareUp method returns -1 in case the edge of the board is
    // reached.
    if (candidateSquare < 1) {
      limitReached = true;
    } else {
      pieceOnCandidateSquare = oldFenData.squares[candidateSquare - 1];
      // If it found another piece on the square, then the original square can't
      // be further in that direction.
      if (pieceOnCandidateSquare !== "" && pieceOnCandidateSquare !== piece) {
        limitReached = true;
      } else if (
        pieceOnCandidateSquare === piece &&
        squareFulfillsDisambiguationCondition(
          candidateSquare,
          disambiguationCondition
        )
      ) {
        found = true;
        res.push({ piece, square: candidateSquare });
      }
    }
  }

  console.log("res al final de getSquaresToVacateForRookMove: ", res);

  return res;
};

const getSquaresToVacateForBishopMove = (
  oldFenData,
  moveInSimplifiedAlgebraicNotation,
  destinationSquares
) => {
  const res = [];
  const piece = destinationSquares[0].piece;
  const targetSquare = destinationSquares[0].square;

  console.log("getSquareToVacateForBishopMove: piece: ", piece);
  console.log("getSquarestoVacateForBishopMove: targetSquare: ", targetSquare);

  // The disambiguation condition can be a file, rank, or
  // a whole square.
  let disambiguationCondition;
  if (moveInSimplifiedAlgebraicNotation.length === 4) {
    disambiguationCondition = moveInSimplifiedAlgebraicNotation[1];
  } else if (moveInSimplifiedAlgebraicNotation.length === 5) {
    disambiguationCondition = moveInSimplifiedAlgebraicNotation.substring(1, 3);
  } else {
    disambiguationCondition = "";
  }

  let candidateSquare = targetSquare;
  let found = false;
  // This boolean will be true if a border of the board, or an enemy piece,
  // is reached, as that means the original square can't possibly be further in the
  // current direction.
  let limitReached = false;
  let pieceOnCandidateSquare;

  // Search upward to the left.
  while (!found && !limitReached) {
    candidateSquare = getSquareLeftUpDiagonal(candidateSquare);
    // The method returns -1 in case the edge of the board is
    // reached.
    if (candidateSquare < 1) {
      limitReached = true;
    } else {
      pieceOnCandidateSquare = oldFenData.squares[candidateSquare - 1];
      // If it found another piece on the square, then the original square can't
      // be further in that direction.
      if (pieceOnCandidateSquare !== "" && pieceOnCandidateSquare !== piece) {
        limitReached = true;
      } else if (
        pieceOnCandidateSquare === piece &&
        squareFulfillsDisambiguationCondition(
          candidateSquare,
          disambiguationCondition
        )
      ) {
        found = true;
        res.push({ piece, square: candidateSquare });
      }
    }
  }

  candidateSquare = targetSquare;
  limitReached = false;

  // Search upward to the right.
  while (!found && !limitReached) {
    candidateSquare = getSquareRightUpDiagonal(candidateSquare);
    // The method returns -1 in case the edge of the board is
    // reached.
    if (candidateSquare < 1) {
      limitReached = true;
    } else {
      pieceOnCandidateSquare = oldFenData.squares[candidateSquare - 1];
      // If it found another piece on the square, then the original square can't
      // be further in that direction.
      if (pieceOnCandidateSquare !== "" && pieceOnCandidateSquare !== piece) {
        limitReached = true;
      } else if (
        pieceOnCandidateSquare === piece &&
        squareFulfillsDisambiguationCondition(
          candidateSquare,
          disambiguationCondition
        )
      ) {
        found = true;
        res.push({ piece, square: candidateSquare });
      }
    }
  }

  candidateSquare = targetSquare;
  limitReached = false;

  // Search downward to the right.
  while (!found && !limitReached) {
    candidateSquare = getSquareRightDownDiagonal(candidateSquare);
    // The method returns -1 in case the edge of the board is
    // reached.
    if (candidateSquare < 1) {
      limitReached = true;
    } else {
      pieceOnCandidateSquare = oldFenData.squares[candidateSquare - 1];
      // If it found another piece on the square, then the original square can't
      // be further in that direction.
      if (pieceOnCandidateSquare !== "" && pieceOnCandidateSquare !== piece) {
        limitReached = true;
      } else if (
        pieceOnCandidateSquare === piece &&
        squareFulfillsDisambiguationCondition(
          candidateSquare,
          disambiguationCondition
        )
      ) {
        found = true;
        res.push({ piece, square: candidateSquare });
      }
    }
  }

  candidateSquare = targetSquare;
  limitReached = false;

  // Search downward to the left.
  while (!found && !limitReached) {
    candidateSquare = getSquareLeftDownDiagonal(candidateSquare);
    // The method returns -1 in case the edge of the board is
    // reached.
    if (candidateSquare < 1) {
      limitReached = true;
    } else {
      pieceOnCandidateSquare = oldFenData.squares[candidateSquare - 1];
      // If it found another piece on the square, then the original square can't
      // be further in that direction.
      if (pieceOnCandidateSquare !== "" && pieceOnCandidateSquare !== piece) {
        limitReached = true;
      } else if (
        pieceOnCandidateSquare === piece &&
        squareFulfillsDisambiguationCondition(
          candidateSquare,
          disambiguationCondition
        )
      ) {
        found = true;
        res.push({ piece, square: candidateSquare });
      }
    }
  }

  console.log("res al final de getSquaresToVacateForBishopMove: ", res);

  return res;
};

// To calculate the squares where a rook may have come from,
// we have to check all other squares along the same file
// as the target, and those along the same rank as the target.
// The disambiguation in this case may be a file or rank disambiguation.
// I should make this method such that it can be reused by the queen,
// same as the bishop method.
// EDITED: I added "deprecated" to the end, because the method wasn't working.
// Now I'll use the new one.
const getSquaresToVacateForRookMoveDeprecated = (
  oldFenData,
  moveInSimplifiedAlgebraicNotation,
  destinationSquares
) => {
  const res = [];
  const piece = destinationSquares[0].piece;
  // Here we are not in the case of castles, as that move is treated separately,
  // so we can safely assume, even though the piece to move is the rook, that
  // we're dealing with just a rook move, and the destination square is a single one.
  const targetSquare = destinationSquares[0].square;
  // In the case of the rooks, the only possible disambiguation is of one character
  // (a file or a rank). With other pieces, such as knights, bishops, and queens, even
  // a whole square can be used for disambiguation in some cases.
  // Since I intend to use this method also for the queen, not just the rook,
  // I'll include the disambiguation for it just in case.
  // This is how it'd be if it were only for the rook:
  // const disambiguationCondition =
  //   moveInSimplifiedAlgebraicNotation.length === 4
  //     ? moveInSimplifiedAlgebraicNotation[1]
  //     : "";
  // However, if we want to use this also for the queen,
  // just in case, it's better to consider the
  // disambiguation of complete squares too
  let disambiguationCondition;
  if (moveInSimplifiedAlgebraicNotation.length === 4) {
    disambiguationCondition = moveInSimplifiedAlgebraicNotation[1];
  } else if (moveInSimplifiedAlgebraicNotation.length === 5) {
    disambiguationCondition = moveInSimplifiedAlgebraicNotation.substring(1, 3);
  } else {
    disambiguationCondition = "";
  }

  // We check all of the squares on the same file
  // as the target one, and then all of the squares
  // on the same rank if we still haven't found the origin.
  // Of course, among the checks, we make sure that
  // our candidate square isn't the same as the target,
  // first of all.
  const firstSquareInFile = getFirstSquareInFile(
    moveInSimplifiedAlgebraicNotation[
      moveInSimplifiedAlgebraicNotation.length - 2
    ]
  );

  console.log("FIRST SQUARE IN FILE: ", firstSquareInFile);
  let candidateSquare;
  let found = false;
  for (
    let i = firstSquareInFile;
    !found && i <= firstSquareInFile + 8 * 7;
    i += 8
  ) {
    candidateSquare = i;
    if (
      oldFenData.squares[candidateSquare - 1] === piece &&
      candidateSquare !== targetSquare &&
      squareFulfillsDisambiguationCondition(
        candidateSquare,
        disambiguationCondition
      )
    ) {
      found = true;
      console.log("Found while checking files: ", candidateSquare);
      console.log("i:", i);
      res.push({ piece, square: candidateSquare });
    }
  }
  const firstSquareInRank = getFirstSquareInRank(
    moveInSimplifiedAlgebraicNotation[
      moveInSimplifiedAlgebraicNotation.length - 1
    ]
  );
  console.log("FIRST SQUARE IN RANK: ", firstSquareInRank);
  for (let j = firstSquareInRank; !found && j < firstSquareInRank + 8; ++j) {
    candidateSquare = j;
    if (
      oldFenData.squares[candidateSquare - 1] === piece &&
      candidateSquare !== targetSquare &&
      squareFulfillsDisambiguationCondition(
        candidateSquare,
        disambiguationCondition
      )
    ) {
      found = true;
      console.log("Found while checking ranks: ", candidateSquare);
      console.log("j:", j);
      res.push({ piece, square: candidateSquare });
    }
  }
  return res;
};

// To calculate the square for the bishop,
// we start checking squares along the diagonals in all
// four directions, until hitting an edge on each of them.
// Take into account that maybe the target square is
// already on one of the edges, in which case we only
// need to check in two of the four directions, and have
// to first determine which two we have to check.
// EDITED: Added deprecated to the end, as now I'll use another
// method, since this one failed due to not considering the occupied squares
// in the middle, much like the rook one.
const getSquaresToVacateForBishopMoveDeprecated = (
  oldFenData,
  moveInSimplifiedAlgebraicNotation,
  destinationSquares
) => {
  const res = [];
  const piece = destinationSquares[0].piece;
  const targetSquare = destinationSquares[0].square;

  // With bishops, the disambiguation condition can be a file, rank, or
  // a whole square.
  let disambiguationCondition;
  if (moveInSimplifiedAlgebraicNotation.length === 4) {
    disambiguationCondition = moveInSimplifiedAlgebraicNotation[1];
  } else if (moveInSimplifiedAlgebraicNotation.length === 5) {
    disambiguationCondition = moveInSimplifiedAlgebraicNotation.substring(1, 3);
  } else {
    disambiguationCondition = "";
  }

  let candidateSquare = targetSquare;

  let candidateSquareInAlgebraic =
    convertSquareIn64ToAlgebraic(candidateSquare);

  // If the current square to check is already on one of the edges,
  // that will mean not checking squares in certain directions.
  // We will continue performing this check as we move in all diagonals
  // from the target square.
  let continueToCheckInUpperRightDirection =
    !candidateSquareInAlgebraic.includes("h") &&
    !candidateSquareInAlgebraic.includes("8");
  let continueToCheckInLowerRightDirection =
    !candidateSquareInAlgebraic.includes("h") &&
    !candidateSquareInAlgebraic.includes("1");
  let continueToCheckInUpperLeftDirection =
    !candidateSquareInAlgebraic.includes("a") &&
    !candidateSquareInAlgebraic.includes("8");
  let continueToCheckInLowerLeftDirection =
    !candidateSquareInAlgebraic.includes("a") &&
    !candidateSquareInAlgebraic.includes("1");

  let found = false;
  while (!found && continueToCheckInUpperLeftDirection) {
    candidateSquare -= 9;
    if (
      oldFenData.squares[candidateSquare - 1] === piece &&
      squareFulfillsDisambiguationCondition(
        candidateSquare,
        disambiguationCondition
      )
    ) {
      found = true;
      res.push({ piece, square: candidateSquare });
    } else {
      candidateSquareInAlgebraic =
        convertSquareIn64ToAlgebraic(candidateSquare);
      continueToCheckInUpperLeftDirection =
        !candidateSquareInAlgebraic.includes("a") &&
        !candidateSquareInAlgebraic.includes("8");
    }
  }

  candidateSquare = targetSquare;

  while (!found && continueToCheckInUpperRightDirection) {
    candidateSquare -= 7;
    if (
      oldFenData.squares[candidateSquare - 1] === piece &&
      squareFulfillsDisambiguationCondition(
        candidateSquare,
        disambiguationCondition
      )
    ) {
      found = true;
      res.push({ piece, square: candidateSquare });
    } else {
      candidateSquareInAlgebraic =
        convertSquareIn64ToAlgebraic(candidateSquare);
      continueToCheckInUpperRightDirection =
        !candidateSquareInAlgebraic.includes("h") &&
        !candidateSquareInAlgebraic.includes("8");
    }
  }

  candidateSquare = targetSquare;

  while (!found && continueToCheckInLowerLeftDirection) {
    candidateSquare += 7;
    if (
      oldFenData.squares[candidateSquare - 1] === piece &&
      squareFulfillsDisambiguationCondition(
        candidateSquare,
        disambiguationCondition
      )
    ) {
      found = true;
      res.push({ piece, square: candidateSquare });
    } else {
      candidateSquareInAlgebraic =
        convertSquareIn64ToAlgebraic(candidateSquare);
      continueToCheckInLowerLeftDirection =
        !candidateSquareInAlgebraic.includes("a") &&
        !candidateSquareInAlgebraic.includes("1");
    }
  }

  candidateSquare = targetSquare;

  while (!found && continueToCheckInLowerRightDirection) {
    candidateSquare += 9;
    if (
      oldFenData.squares[candidateSquare - 1] === piece &&
      squareFulfillsDisambiguationCondition(
        candidateSquare,
        disambiguationCondition
      )
    ) {
      found = true;
      res.push({ piece, square: candidateSquare });
    } else {
      candidateSquareInAlgebraic =
        convertSquareIn64ToAlgebraic(candidateSquare);
      continueToCheckInLowerRightDirection =
        !candidateSquareInAlgebraic.includes("h") &&
        !candidateSquareInAlgebraic.includes("1");
    }
  }

  return res;
};

// For the queen, I'll simply call the methods for rook
// and bishop, since the movement is the same.
const getSquaresToVacateForQueenMove = (
  oldFenData,
  moveInSimplifiedAlgebraicNotation,
  destinationSquares
) => {
  let res = getSquaresToVacateForRookMove(
    oldFenData,
    moveInSimplifiedAlgebraicNotation,
    destinationSquares
  );
  if (res.length === 0) {
    res = getSquaresToVacateForBishopMove(
      oldFenData,
      moveInSimplifiedAlgebraicNotation,
      destinationSquares
    );
  }
  return res;
};

// This is helpful for the movement of the knight.
const canGoTwoLeft = (squareIn64) => {
  let res = false;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  res = !squareInAlgebraic.includes("b") && !squareInAlgebraic.includes("a");
  return res;
};

// This is helpful for the movement of the knight.
const canGoOneLeft = (squareIn64) => {
  let res = false;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  res = !squareInAlgebraic.includes("a");
  return res;
};

// This is helpful for the movement of the knight.
const canGoTwoUp = (squareIn64) => {
  let res = false;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  res = !squareInAlgebraic.includes("7") && !squareInAlgebraic.includes("8");
  return res;
};

// This is helpful for the movement of the knight.
const canGoOneUp = (squareIn64) => {
  let res = false;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  res = !squareInAlgebraic.includes("8");
  return res;
};

// This is helpful for the movement of the knight.
const canGoTwoRight = (squareIn64) => {
  let res = false;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  res = !squareInAlgebraic.includes("g") && !squareInAlgebraic.includes("h");
  return res;
};

// This is helpful for the movement of the knight.
const canGoOneRight = (squareIn64) => {
  let res = false;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  res = !squareInAlgebraic.includes("h");
  return res;
};

// This is helpful for the movement of the knight.
const canGoTwoDown = (squareIn64) => {
  let res = false;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  res = !squareInAlgebraic.includes("2") && !squareInAlgebraic.includes("1");
  return res;
};

// This is helpful for the movement of the knight.
const canGoOneDown = (squareIn64) => {
  let res = false;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  res = !squareInAlgebraic.includes("1");
  return res;
};

// Useful for rook and queen.
// Returns the number of the square to the left
// if there is a square to the left, and -1 otherwise.
const getSquareLeft = (squareIn64) => {
  let res = squareIn64 - 1;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  if (squareInAlgebraic.includes("a")) {
    res = -1;
  }
  return res;
};

// Useful for rook and queen.
// Returns the number of the square up
// if there is such a square, and -1 otherwise.
const getSquareUp = (squareIn64) => {
  let res = squareIn64 - 8;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  if (squareInAlgebraic.includes("8")) {
    res = -1;
  }
  return res;
};

// Useful for rook and queen.
// Returns the number of the square to the right
// if there is such a square, and -1 otherwise.
const getSquareRight = (squareIn64) => {
  let res = squareIn64 + 1;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  if (squareInAlgebraic.includes("h")) {
    res = -1;
  }
  return res;
};

// Useful for rook and queen.
// Returns the number of the square down
// if there is a square down, and -1 otherwise.
const getSquareDown = (squareIn64) => {
  let res = squareIn64 + 8;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  if (squareInAlgebraic.includes("1")) {
    res = -1;
  }
  return res;
};

// Useful for bishop and queen.
// Returns the number of the square that is diagonally adjacent
// upwards and to the left,
// if there is such a square, and -1 otherwise.
const getSquareLeftUpDiagonal = (squareIn64) => {
  let res = squareIn64 - 9;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  if (squareInAlgebraic.includes("a") || squareInAlgebraic.includes("8")) {
    res = -1;
  }
  return res;
};

// Useful for bishop and queen.
// Returns the number of the square that is diagonally adjacent
// upwards and to the right,
// if there is such a square, and -1 otherwise.
const getSquareRightUpDiagonal = (squareIn64) => {
  let res = squareIn64 - 7;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  if (squareInAlgebraic.includes("h") || squareInAlgebraic.includes("8")) {
    res = -1;
  }
  return res;
};

// Useful for bishop and queen.
// Returns the number of the square that is diagonally adjacent
// downwards and to the left,
// if there is such a square, and -1 otherwise.
const getSquareLeftDownDiagonal = (squareIn64) => {
  let res = squareIn64 + 7;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  if (squareInAlgebraic.includes("a") || squareInAlgebraic.includes("1")) {
    res = -1;
  }
  return res;
};

// Useful for bishop and queen.
// Returns the number of the square that is diagonally adjacent
// downwards and to the right,
// if there is such a square, and -1 otherwise.
const getSquareRightDownDiagonal = (squareIn64) => {
  let res = squareIn64 + 9;
  const squareInAlgebraic = convertSquareIn64ToAlgebraic(squareIn64);
  if (squareInAlgebraic.includes("h") || squareInAlgebraic.includes("1")) {
    res = -1;
  }
  return res;
};

// Similar to the bishop, here I also need to check
// that the piece isn't nearing the edges. In this case,
// however, such a check is a bit more involved, due to the
// peculiar movement of the knight, where some of its jumps
// aren't available anymore just when approaching the edge,
// not necessarily touching it yet.
// That's the difficult part.
const getSquaresToVacateForKnightMove = (
  oldFenData,
  moveInSimplifiedAlgebraicNotation,
  destinationSquares
) => {
  const res = [];
  const piece = destinationSquares[0].piece;
  const targetSquare = destinationSquares[0].square;

  console.log("getSquareToVacateForknightMove: piece: ", piece);
  console.log("getSquarestoVacateforknightMove: targetSquare: ", targetSquare);

  // With knights, the disambiguation condition can be a file, rank, or
  // a whole square.
  let disambiguationCondition;
  if (moveInSimplifiedAlgebraicNotation.length === 4) {
    disambiguationCondition = moveInSimplifiedAlgebraicNotation[1];
  } else if (moveInSimplifiedAlgebraicNotation.length === 5) {
    disambiguationCondition = moveInSimplifiedAlgebraicNotation.substring(1, 3);
  } else {
    disambiguationCondition = "";
  }

  let candidateSquare = targetSquare;
  let found = false;

  if (canGoTwoUp(targetSquare) && canGoOneLeft(targetSquare)) {
    candidateSquare -= 17;
    if (
      oldFenData.squares[candidateSquare - 1] === piece &&
      squareFulfillsDisambiguationCondition(
        candidateSquare,
        disambiguationCondition
      )
    ) {
      found = true;
      res.push({ piece, square: candidateSquare });
    }
  }

  candidateSquare = targetSquare;

  if (!found && canGoTwoUp(targetSquare) && canGoOneRight(targetSquare)) {
    candidateSquare -= 15;
    if (
      oldFenData.squares[candidateSquare - 1] === piece &&
      squareFulfillsDisambiguationCondition(
        candidateSquare,
        disambiguationCondition
      )
    ) {
      found = true;
      res.push({ piece, square: candidateSquare });
    }
  }

  candidateSquare = targetSquare;

  if (!found && canGoTwoLeft(targetSquare) && canGoOneUp(targetSquare)) {
    candidateSquare -= 10;
    if (
      oldFenData.squares[candidateSquare - 1] === piece &&
      squareFulfillsDisambiguationCondition(
        candidateSquare,
        disambiguationCondition
      )
    ) {
      found = true;
      res.push({ piece, square: candidateSquare });
    }
  }

  candidateSquare = targetSquare;

  if (!found && canGoTwoLeft(targetSquare) && canGoOneDown(targetSquare)) {
    candidateSquare += 6;
    if (
      oldFenData.squares[candidateSquare - 1] === piece &&
      squareFulfillsDisambiguationCondition(
        candidateSquare,
        disambiguationCondition
      )
    ) {
      found = true;
      res.push({ piece, square: candidateSquare });
    }
  }

  candidateSquare = targetSquare;

  if (!found && canGoTwoDown(targetSquare) && canGoOneLeft(targetSquare)) {
    candidateSquare += 15;
    if (
      oldFenData.squares[candidateSquare - 1] === piece &&
      squareFulfillsDisambiguationCondition(
        candidateSquare,
        disambiguationCondition
      )
    ) {
      found = true;
      res.push({ piece, square: candidateSquare });
    }
  }

  candidateSquare = targetSquare;

  if (!found && canGoTwoDown(targetSquare) && canGoOneRight(targetSquare)) {
    candidateSquare += 17;
    if (
      oldFenData.squares[candidateSquare - 1] === piece &&
      squareFulfillsDisambiguationCondition(
        candidateSquare,
        disambiguationCondition
      )
    ) {
      found = true;
      res.push({ piece, square: candidateSquare });
    }
  }

  candidateSquare = targetSquare;

  if (!found && canGoTwoRight(targetSquare) && canGoOneUp(targetSquare)) {
    candidateSquare -= 6;
    if (
      oldFenData.squares[candidateSquare - 1] === piece &&
      squareFulfillsDisambiguationCondition(
        candidateSquare,
        disambiguationCondition
      )
    ) {
      found = true;
      res.push({ piece, square: candidateSquare });
    }
  }

  candidateSquare = targetSquare;

  if (!found && canGoTwoRight(targetSquare) && canGoOneDown(targetSquare)) {
    candidateSquare += 10;
    if (
      oldFenData.squares[candidateSquare - 1] === piece &&
      squareFulfillsDisambiguationCondition(
        candidateSquare,
        disambiguationCondition
      )
    ) {
      found = true;
      res.push({ piece, square: candidateSquare });
    }
  }

  console.log("res al final del caballo: ", res);

  return res;
};

// Example of oldFenData:
// {
//   squares: ['r', 'n', ..., '', '', 'P', 'P', ..., 'N', 'R'],
//   turn: 'w',
//   whiteCanCastleKingside: true,
//   whiteCanCastleQueenside: true,
//   blackCanCastleKingside: true,
//   blackCanCastleQueenside: true,
//   enPassantTarget: -1 (if there's no en passant target; if there is, then the square
// in 1-64 nomenclature),
//   halfmovesSinceLastPawnMoveOrCapture: 0,
//   moveNumber: 1
// }
// Example of destinationSquares:
// [{
//  piece: 'P',
//  square: 37 (equivalent to e4)
// }]
// Returns an array with the squares that need vacating after the move
// (the squares the pieces moved from, that is), for example:
// [{piece: 'p', square: 13}]
const getSquaresToVacate = (
  oldFenData,
  moveInSimplifiedAlgebraicNotation,
  destinationSquares
) => {
  let res = [];
  // The cases of castles are the easiest, since we already know the squares
  // the pieces came from.
  if (moveInSimplifiedAlgebraicNotation === "O-O-O") {
    if (oldFenData.turn === "b") {
      res.push({ piece: "r", square: 1 });
      res.push({ piece: "k", square: 5 });
    } else {
      res.push({ piece: "R", square: 57 });
      res.push({ piece: "K", square: 61 });
    }
  } else if (moveInSimplifiedAlgebraicNotation === "O-O") {
    if (oldFenData.turn === "b") {
      res.push({ piece: "r", square: 8 });
      res.push({ piece: "k", square: 5 });
    } else {
      res.push({ piece: "R", square: 64 });
      res.push({ piece: "K", square: 61 });
    }
  } else {
    const piece = destinationSquares[0].piece;
    console.log("piece detected in getSquaresToVacate: ", piece);
    const pieceInUppercase = piece.toUpperCase();
    if (pieceInUppercase === "P") {
      res = getSquaresToVacateForPawnMove(
        oldFenData,
        moveInSimplifiedAlgebraicNotation,
        destinationSquares
      );
    } else if (pieceInUppercase === "N") {
      res = getSquaresToVacateForKnightMove(
        oldFenData,
        moveInSimplifiedAlgebraicNotation,
        destinationSquares
      );
    } else if (pieceInUppercase === "B") {
      res = getSquaresToVacateForBishopMove(
        oldFenData,
        moveInSimplifiedAlgebraicNotation,
        destinationSquares
      );
    } else if (pieceInUppercase === "R") {
      res = getSquaresToVacateForRookMove(
        oldFenData,
        moveInSimplifiedAlgebraicNotation,
        destinationSquares
      );
    } else if (pieceInUppercase === "Q") {
      res = getSquaresToVacateForQueenMove(
        oldFenData,
        moveInSimplifiedAlgebraicNotation,
        destinationSquares
      );
    } else {
      res = getSquaresToVacateForKingMove(oldFenData);
    }
  }

  console.log("res at the end of getSquaresToVacate: ", res);

  return res;
};

// Given a FEN position and a move in simplified algebraic notation,
// return an object with all the necessary information to make a new FEN
// with the resulting position.
// The squares where the pieces to move are located at in the old FEN, and their
// target squares after the move (I say pieces in plural because of the possibility
// of castles, which would involve two of them).
// Example of the return of this function:
// {
// oldFenData:
// {
//   squares: ['r', 'n', ..., '', '', 'P', 'P', ..., 'N', 'R'],
//   turn: 'w',
//   whiteCanCastleKingside: true,
//   whiteCanCastleQueenside: true,
//   blackCanCastleKingside: true,
//   blackCanCastleQueenside: true,
//   enPassantTarget: -1 (if there's no en passant target; if there is, then the square
// in 1-64 nomenclature),
//   halfmovesSinceLastPawnMoveOrCapture: 0,
//   moveNumber: 1
// },
// destinations:
// [{
//  piece: 'P',
//  square: 37
// }],
// squaresToVacate:
// [{piece: 'P', square: 53}]
// }
const getDataFromFenAndMove = (oldFen, moveInSimplifiedAlgebraicNotation) => {
  let res;

  const oldFenData = getFenData(oldFen);

  // Array with the target square and name of the piece for every piece involved in the move
  // (most often, just one piece, but it's two if the move is castles).
  // Unlike the potentialSquaresToVacate, the destinations are known.
  const destinations = getAllDestinationSquares(
    oldFenData.turn,
    moveInSimplifiedAlgebraicNotation
  );

  console.log("DESTINATION: ", destinations);

  // Array with the pieces and squares that need to be vacated
  // after the move. In other words, it says which pieces just moved
  // (usually this will only be one piece, but castling is an exception).
  const squaresToVacate = getSquaresToVacate(
    oldFenData,
    moveInSimplifiedAlgebraicNotation,
    destinations
  );

  console.log("SQUARES TO VACATE: ", squaresToVacate);

  res = {
    oldFenData,
    destinations,
    squaresToVacate,
  };

  return res;
};

// squares has the form:
// ['r', 'n', 'b' ..., '', '', 'P', 'P', etc.]
const generateFenPiecesFromArray = (squares) => {
  let res = "";
  let counterOfSquaresInRank = 0;
  let emptySpaceCounter = 0;
  for (let i = 0; i < squares.length; ++i) {
    // This check for the slash goes first, as otherwise
    // there'd be an extra slash in the end that we don't want.
    if (counterOfSquaresInRank === 8) {
      if (emptySpaceCounter > 0) {
        res += emptySpaceCounter;
        emptySpaceCounter = 0;
      }
      res += "/";
      counterOfSquaresInRank = 0;
    }
    if (squares[i] === "") {
      ++emptySpaceCounter;
    } else {
      if (emptySpaceCounter > 0) {
        res += emptySpaceCounter;
        emptySpaceCounter = 0;
      }
      res += squares[i];
    }
    ++counterOfSquaresInRank;
  }

  // Have to check one more time for empty squares, for the case
  // where the last few squares on the first rank are empty.
  // Notice that in this case I don't use the slash.
  if (emptySpaceCounter > 0) {
    res += emptySpaceCounter;
    emptySpaceCounter = 0;
  }

  return res;
};

// Given a FEN position and a move in simplified algebraic (e.g. Ngc7 instead of Ngxc7+),
// this operation returns a new FEN position, resulting of applying the move to the given one.
export const obtainNewFen = (oldFen, moveInSimplifiedAlgebraicNotation) => {
  let res = "";

  let dataFromFenAndMove = getDataFromFenAndMove(
    oldFen,
    moveInSimplifiedAlgebraicNotation
  );

  console.log("dataFromFenAndMove: ", dataFromFenAndMove);

  const turn = dataFromFenAndMove.oldFenData.turn === "w" ? "b" : "w";

  // TODO: whiteCanCastleKingside and all of the other details, so that the FEN
  // is accurate. That being said, for the purposes of this program, I only need
  // the turn and the positions of the pieces. The rest is irrelevant.

  // whiteCanCastleKingside would look similar to this, but also needs taking into consideration
  // if the rook has moved from the a1-square.
  //  const whiteCanCastleKingside = (dataFromFenAndMove.oldFenData.whiteCanCastleKingside &&
  //!(dataFromFenAndMove.destinations.length === 2 && dataFromFenAndMove.oldFenData.turn === 'w'));

  const squares = dataFromFenAndMove.oldFenData.squares;

  for (let i = 0; i < dataFromFenAndMove.destinations.length; ++i) {
    // Remember that the index is one less than the square in 1-64 form.
    squares[dataFromFenAndMove.destinations[i].square - 1] =
      dataFromFenAndMove.destinations[i].piece;
  }

  for (let j = 0; j < dataFromFenAndMove.squaresToVacate.length; ++j) {
    squares[dataFromFenAndMove.squaresToVacate[j].square - 1] = "";
    console.log("squaresToVacate: ", dataFromFenAndMove.squaresToVacate);
  }

  // TODO: Generate the last part of the FEN properly. Right now it's just dummy data,
  // but the point is that I don't think we need it for the purposes of this game.
  res = `${generateFenPiecesFromArray(squares)} ${turn} KQkq - 0 1`;
  return res;
};
