import { fetchUri } from "./fetches";

const items = fetchUri();
async function man(file,name) {
   const div = document.createElement("div");
   div.style.backgroundColor = "rgb(0,0,0)";
   div.style.width = "160px";
   div.style.height = "160px"
   document.appendChild(div);

   const filelink = document.createElement("button");

}

