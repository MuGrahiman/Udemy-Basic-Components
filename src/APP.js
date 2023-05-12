import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordianPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import CounterPage from "./pages/CounterPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

function APP() {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4' >
      <Sidebar />
      <div className='col-span-5'>
      <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/Button">
          <ButtonPage />
        </Route>
        <Route path="/Accordian">
          <AccordianPage />
        </Route>
        <Route path="/Modal">
          <ModalPage />
        </Route>
        <Route path="/Table">
          <TablePage />
        </Route>
        <Route path="/Count">
          <CounterPage initialVal={10}/>
        </Route>
      </div>
    </div>
  );
}

export default APP;
