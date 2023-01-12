import Map from "../comps/Map"
import style from "../styles/Home.module.css"
import Header from '../comps/Header'
import Footer from '../comps/Footer'

export default function Home() {
  return <>
    <div className={style.main}>
      <Header></Header>
      <p>Expo Line connects Downtown Vancouver with the cities of Burnaby, New Westminster, and Surrey.</p>
      <Map></Map>
    </div>
    <Footer></Footer>
  </>
}
