/* Header search on non-homepage pages: pressing Enter sends the
   keywords to the homepage feed, which searches everything
   (articles + social posts). The homepage itself filters live via
   app.js, so this script skips it. */
(function () {
  var box = document.querySelector(".search-shell input");
  if (!box || document.querySelector("#feed-grid")) return;
  box.addEventListener("keydown", function (event) {
    if (event.key !== "Enter") return;
    var q = box.value.trim();
    if (!q) return;
    window.location.href = "index.html?q=" + encodeURIComponent(q);
  });
})();
