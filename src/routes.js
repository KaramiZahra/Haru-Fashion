import Main from "./Main";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Men from "./components/Store/Men/Men";
import Women from "./components/Store/Women/Women";
import Accessories from "./components/Store/Accessories/Accessories";
import New from "./components/Store/New/New";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";
import NotFound from "./NotFound";

const routes = [
  { path: "/Haru-Fashion", element: <Main /> },
  { path: "/Haru-Fashion/Header", element: <Header /> },
  { path: "/Haru-Fashion/Body", element: <Body /> },
  { path: "/Haru-Fashion/Footer", element: <Footer /> },
  { path: "/Haru-Fashion/Men", element: <Men /> },
  { path: "/Haru-Fashion/Women", element: <Women /> },
  { path: "/Haru-Fashion/Accessories", element: <Accessories /> },
  { path: "/Haru-Fashion/New", element: <New /> },
  { path: "/Haru-Fashion/Wishlist", element: <Wishlist /> },
  { path: "/Haru-Fashion/Cart", element: <Cart /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
