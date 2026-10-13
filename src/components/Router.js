import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import TablaMultiplicar from "./TablaMultiplicar";
import NotFoundComponent from "./NotFoundComponent";
import CollatzComponent from "./CollatzComponent";
import MenuComponent from "./MenuComponent";

function TablaMultiplicarElement() {
  const { minumero } = useParams();
  return <TablaMultiplicar numero={minumero} />;
}

function CollatzComponentElement() {
  const { minumero } = useParams();
  return <CollatzComponent numero={minumero} />;
}

export default function Router() {
  return (
    <BrowserRouter>
      <MenuComponent>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route
            path="/tabla/:minumero"
            element={<TablaMultiplicarElement />}
          />
          <Route
            path="/collatz/:minumero"
            element={<CollatzComponentElement />}
          />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </MenuComponent>
    </BrowserRouter>
  );
}
