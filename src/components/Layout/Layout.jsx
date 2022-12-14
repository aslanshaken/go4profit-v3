import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  return (
      <div>
          <Header/>
          {props.children}
          <Footer />
      </div>
  )
}