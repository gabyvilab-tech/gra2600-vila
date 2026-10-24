/* HEADER: logo and nav, shared by every page */
fetch("includes/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("page-top").innerHTML = data;
  });

/* FOOTER: shared by every page */
fetch("includes/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("page-bottom").innerHTML = data;
  });