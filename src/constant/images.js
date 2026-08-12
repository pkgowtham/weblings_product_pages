import layerRaw from "../assets/images/layer.svg";
import emailRaw from "../assets/images/email.svg";
import emptyRaw from "../assets/images/empty.svg";
import mapRaw from "../assets/images/Basemap_image.svg";
import aboutRaw from "../assets/images/about.svg";
import loginRaw from "../assets/images/login.svg";
import calenderRaw from "../assets/images/calendar.svg";
import hrmsRaw from "../assets/images/hrms.svg";
import asiefRaw from "../assets/images/asief.svg";
import praveenRaw from "../assets/images/praveen.svg";
import diwagarRaw from "../assets/images/diwagar.svg";
import ragulRaw from "../assets/images/ragul.svg";
import subscribeRaw from "../assets/images/subscribe.svg";

const getSrc = (img) => (img && typeof img === "object" && img.src ? img.src : img);

export const layer = getSrc(layerRaw);
export const email = getSrc(emailRaw);
export const empty = getSrc(emptyRaw);
export const map = getSrc(mapRaw);
export const about = getSrc(aboutRaw);
export const login = getSrc(loginRaw);
export const calender = getSrc(calenderRaw);
export const hrms = getSrc(hrmsRaw);
export const asief = getSrc(asiefRaw);
export const praveen = getSrc(praveenRaw);
export const diwagar = getSrc(diwagarRaw);
export const ragul = getSrc(ragulRaw);
export const subscribe = getSrc(subscribeRaw);
