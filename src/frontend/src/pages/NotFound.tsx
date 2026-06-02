import { Link } from "@tanstack/react-router";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #e8f5ee 0px, #ffffff 20px, #ffffff 100%)",
      }}
      data-ocid="notfound.page"
    >
      {/* Green gradient accent at very top */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "20px",
          background: "linear-gradient(180deg, #1A7A4C 0%, #e8f5ee 100%)",
        }}
        aria-hidden="true"
      />

      {/* Mountain SVG silhouette */}
      <div className="w-full max-w-2xl mb-4 mt-8" aria-hidden="true">
        <svg
          viewBox="0 0 800 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-hidden="true"
        >
          {/* Background mountains */}
          <path
            d="M0 120 L120 50 L200 80 L320 20 L420 60 L520 30 L620 55 L720 10 L800 35 L800 120 Z"
            fill="#e8f5ee"
          />
          {/* Foreground main peaks */}
          <path
            d="M0 120 L80 70 L160 90 L260 35 L360 75 L440 30 L540 65 L640 45 L740 20 L800 50 L800 120 Z"
            fill="#e8f5ee"
            stroke="#c8e8d8"
            strokeWidth="1"
          />
          {/* Snow caps on peak 1 */}
          <path
            d="M260 35 L240 50 L280 50 Z"
            fill="#ffffff"
            stroke="#c8e8d8"
            strokeWidth="0.5"
          />
          {/* Snow caps on peak 2 */}
          <path
            d="M440 30 L420 47 L460 47 Z"
            fill="#ffffff"
            stroke="#c8e8d8"
            strokeWidth="0.5"
          />
          {/* Snow caps on peak 3 */}
          <path
            d="M740 20 L718 40 L762 40 Z"
            fill="#ffffff"
            stroke="#c8e8d8"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Animated Compass */}
      <div className="mb-8 relative" aria-label="Spinning compass illustration">
        {/* Outer static ring */}
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
          aria-hidden="true"
        >
          <circle
            cx="70"
            cy="70"
            r="65"
            stroke="#145C38"
            strokeWidth="2.5"
            fill="#f0faf4"
          />
          <circle
            cx="70"
            cy="70"
            r="55"
            stroke="#22A05E"
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
          />
          <text
            x="70"
            y="22"
            textAnchor="middle"
            fill="#145C38"
            fontSize="12"
            fontFamily="Montserrat, sans-serif"
            fontWeight="700"
          >
            N
          </text>
          <text
            x="70"
            y="126"
            textAnchor="middle"
            fill="#145C38"
            fontSize="12"
            fontFamily="Montserrat, sans-serif"
            fontWeight="700"
          >
            S
          </text>
          <text
            x="19"
            y="75"
            textAnchor="middle"
            fill="#145C38"
            fontSize="12"
            fontFamily="Montserrat, sans-serif"
            fontWeight="700"
          >
            W
          </text>
          <text
            x="121"
            y="75"
            textAnchor="middle"
            fill="#145C38"
            fontSize="12"
            fontFamily="Montserrat, sans-serif"
            fontWeight="700"
          >
            E
          </text>
          <circle cx="70" cy="70" r="5" fill="#145C38" />
        </svg>
        {/* Spinning needle */}
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{
            animation: "compass-spin 20s linear infinite",
            transformOrigin: "70px 70px",
          }}
        >
          <polygon points="70,28 64,70 70,66 76,70" fill="#145C38" />
          <polygon points="70,112 64,70 70,74 76,70" fill="#2ECC71" />
        </svg>
      </div>

      <style>{`
        @keyframes compass-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* Badge */}
      <span
        className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-5"
        style={{
          fontFamily: "Montserrat, sans-serif",
          background: "#e8f5ee",
          color: "#145C38",
        }}
      >
        404 — Trail Not Found
      </span>

      {/* Heading */}
      <h1
        className="text-4xl md:text-5xl font-bold text-center mb-4 leading-tight"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          color: "#145C38",
        }}
      >
        Lost on the trail?
      </h1>

      {/* Subtext */}
      <p
        className="text-center max-w-md mb-10 text-base md:text-lg"
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          color: "#6c757d",
        }}
      >
        The page you are looking for has wandered off the trail. Every great
        adventure has a detour — let us guide you back.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <Link
          to="/"
          data-ocid="notfound.go_home_button"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg focus-visible:outline-2"
          style={{
            background: "#145C38",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
          </svg>
          Go Home
        </Link>

        <Link
          to="/treks"
          data-ocid="notfound.browse_treks_button"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-primary hover:text-white focus-visible:outline-2"
          style={{
            border: "2px solid #145C38",
            color: "#145C38",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 17l4-8 4 4 4-7 4 5" />
            <path d="M3 20h18" />
          </svg>
          Browse Treks
        </Link>

        <Link
          to="/contact"
          data-ocid="notfound.contact_us_button"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-muted focus-visible:outline-2"
          style={{
            color: "#6c757d",
            fontFamily: "Montserrat, sans-serif",
            background: "transparent",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Contact Us
        </Link>
      </div>
    </div>
  );
}
