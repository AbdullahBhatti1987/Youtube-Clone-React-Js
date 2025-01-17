// import { useState } from "react"
import indexcss from "index.css"
import SearchBar from "./SearchBar";

function Header() {
    // const [state, setState] = useState('')
    const youtubeLogo = "data:image/png;base64,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"

    return (
    <>
     <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={youtubeLogo} alt="Youtube Logo" />
     
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <SearchBar />
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Button
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>

    </>
  )
}

export default Header
