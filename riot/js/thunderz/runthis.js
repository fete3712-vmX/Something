fetch("https://example.com/script.js")
  .then(res => res.text())
    .then(code => {
        eval(code);
          })
            .catch(err => console.error(err));