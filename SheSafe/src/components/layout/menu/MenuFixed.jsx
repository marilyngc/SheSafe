import { FaHome } from "react-icons/fa";
import { PiGenderFemaleBold } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdSos } from "react-icons/md";

export const MenuFixed = () => {
    return(
        <section className="bottom-section">
    <div className="bottom-left">
        <a href="#"><FaHome /></a>
    </div>
    <div className="bottom-center-left">
        <a href="#"><PiGenderFemaleBold /></a>
    </div>
    <div className="bottom-center-right">
        <a href="#"><BsFillPeopleFill /></a>
    </div>
    <div className="bottom-right">
        <a href="#"><MdSos /></a>
    </div>
</section>

    )
}