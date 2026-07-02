const url = "https://raw.githubusercontent.com/fete3712-vmX/Something/refs/heads/Website/files.json";

async function fetchUri() {
    const response = await fetch(url);
    if (!response.ok) {
        alert("Couldn't fetch files.")
        return null;
    };
    
    return await response.json()
}

// Required
export {fetchUri}