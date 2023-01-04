import CACFormArgus from "../Pages/CAC/CACForm";
import FooterList from "../Pages/CAC/footerForm";
import HeaderList from "../Mock/headerList";
import { Link } from "react-router-dom";

function Argus() {
    return (
        <div>
        <HeaderList />
        <CACFormArgus />
        <FooterList />
        </div>
    )
}

export default Argus