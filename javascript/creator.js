import { fetchUri } from "./fetches.js";

async function main() {
    const items = await fetchUri();

    const div = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.width = "160px";
    div.style.height = "160px";

    document.body.appendChild(div);

    console.log(items);
}

main();
