import { Route, Routes, useParams } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import TablaMultiplicar from "./TablaMultiplicar";
import NotFoundComponent from "./NotFoundComponent";
import CollatzComponent from "./CollatzComponent";

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
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/tabla/:minumero" element={<TablaMultiplicarElement />} />
      <Route path="/collatz/:minumero" element={<CollatzComponentElement />} />
      <Route path="*" element={<NotFoundComponent />} />
    </Routes>
  );
}
