import { fetchUri } from "./fetches";

const items = fetchUri();
async function main() {
   const div = document.createElement("div");
   div.style.backgroundColor = "rgb(0,0,0)";
   document.appendChild(div);
}