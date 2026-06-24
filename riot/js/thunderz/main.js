// ===== A executor =====
const win = document.createElement("div");
win.style.cssText = `
position:fixed;
left:50%;
top:50%;
transform:translate(-50%,-50%);
width:300px;
padding:10px;
background:#00ff04;
border:2px solid #000;
border-radius:8px;
z-index:99999;
font-family:sans-serif;
`;
document.body.appendChild(win);

// Title
const img = document.createElement("img");
img.src =
  "data:image/webp;base64,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";
  img.width = 50;
  img.height = 50;
  img.style.cssText = `
  position:
  `;

  win.appendChild(img);

  const title = document.createElement("h3");
  title.textContent = "Thunderz Executor";
  title.style.margin = "0 0 10px";
  win.appendChild(title);

  // Textbox
  const box = document.createElement("textarea");
  box.value = "// Thunderz Executor | Free JS Executor \\";
  box.style.cssText = `
  width:100%;
  height:80px;
  resize:none;
  `;
  win.appendChild(box);

  // Clear button
  const clearBtn = document.createElement("button");
  clearBtn.textContent = "Clear";
  clearBtn.onclick = () => (box.value = "");
  win.appendChild(clearBtn);

  // "Something" button
  const smthBtn = document.createElement("button");
  smthBtn.textContent = "Execute";
  smthBtn.style.marginLeft = "5px";
  smthBtn.onclick = () => {
    eval(box.value);
      alert("Execution succesfully done!");
      };
      win.appendChild(smthBtn);