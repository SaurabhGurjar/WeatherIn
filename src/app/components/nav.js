import homeIcon from "../../assets/icons/home.svg";
import chartIcon from "../../assets/icons/chart.svg";
import mapIcon from "../../assets/icons/map.svg";
import calIcon from "../../assets/icons/calendar.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import expendIcon from "../../assets/icons/expend.svg";

const iconObj = {
    home: homeIcon,
    hourly: chartIcon,
    details: mapIcon,
    week: calIcon,
    settings: settingsIcon,
    expend: expendIcon
}

function createBtnObj() {
    const navBtns = document.querySelectorAll(".nav-btns");
    if (navBtns.length === 0) {
        throw new Error("No navigation buttons found.");
    }
    const navObj = {};
    navBtns.forEach((btn) => {
        const btnObj = {[btn.id]: btn};
        Object.assign(navObj, btnObj);
    });
    return navObj;
}

function addBtnIcon(btnElement, icon) {
    if (typeof icon !== "string" || icon.trim() === "" || btnElement === undefined || btnElement === null) {
        throw new Error("Invalid icon.");
    }
    const button = btnElement;
    button.innerHTML = icon;
}

export default function nav() {
    try {
        const navBtnObj = createBtnObj();
        Object.keys(navBtnObj).forEach((prop) =>  {
            addBtnIcon(navBtnObj[prop], iconObj[prop]);
        });
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}