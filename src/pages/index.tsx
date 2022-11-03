// import styles from "../styles/Home.module.css"

import { Footer, Nav } from "components"

const MainBody = (): JSX.Element => {
   return <main>body</main>
}
export default function Home(): any {
   return (
      <div className="h-screen w-full bg-primary flex flex-col">
         <Nav />
         <MainBody />
         <Footer />
      </div>
   )
}
