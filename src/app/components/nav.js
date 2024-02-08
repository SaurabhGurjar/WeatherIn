import Image from "./image";

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

function addBtnIcon(icon) {
    if (typeof icon !== "string" || icon.trim() === "") {
        throw new Error("Invalid icon.");
    }

    const img = new Image();
    img.addSrc(icon);
    img.addAlt("Navigation Button");
    return img.html;
}

function appendImg(navBtnObj, btnName, img) {
    if (!navBtnObj[btnName]) {
        console.warn(`Button with name '${btnName}' not found.`);
        return;
    }
    navBtnObj[btnName].appendChild(img);
}

export default function nav() {
    try {
        const navBtnObj = createBtnObj();
        Object.keys(navBtnObj).forEach((prop) =>  {
            appendImg(navBtnObj, prop, addBtnIcon(iconObj[prop]));
        });
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}