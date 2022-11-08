import Link from "next/link"
import React from "react"
// import { motion } from "framer-motion"

export const Nav = (): JSX.Element => {
   console.log("123")
   return (
      <nav>
         <a href="/" className="navbar-item" style={{ cursor: "pointer" }}>
            <svg
               className="pizza-svg1 mt-4"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 100 100"
               id="mainLogo"
            >
               <path
                  d="M37 0.766012L50.54 16.481L50.6306 16.5863L50.7626 16.6297L71.3728 23.4059L59.1203 39.8263L59.0272 39.951L59.0214 40.1065L58.2719 59.9614L37.126 54.4561L37 54.4233L36.874 54.4561L15.7281 59.9614L14.9786 40.1065L14.9728 39.951L14.8797 39.8263L2.62723 23.4059L23.2374 16.6297L23.3694 16.5863L23.46 16.481L37 0.766012Z"
                  fill="none"
               />
               <path
                  d="M45.7012 33.0869C45.7012 36.6807 44.7588 39.4004 42.874 41.2461C40.9893 43.082 38.2207 44 34.5684 44H29.4414V22.584H35.2275C38.6455 22.584 41.2432 23.4775 43.0205 25.2646C44.8076 27.0518 45.7012 29.6592 45.7012 33.0869ZM44.0752 33.1455C44.0752 30.0791 43.2939 27.7744 41.7314 26.2314C40.1787 24.6787 37.8936 23.9023 34.876 23.9023H30.9355V42.6816H34.4805C40.877 42.6816 44.0752 39.5029 44.0752 33.1455Z"
                  fill="none"
               />
            </svg>
         </a>
         <ul>
            <li>
               <Link href={"#"}>About</Link>
            </li>
            <li>
               <Link href={"#"}>Projects</Link>
            </li>
            <li>
               <button className="">Resume</button>
            </li>
         </ul>
      </nav>
   )
}
