const json = "";
const response = await fetch(json);
const data;

if (response.ok) {
    data = await response.json();
}
