const btn = document.getElementById("share-btn");
const share = document.getElementById("share");

btn.addEventListener("click", (e) => {
  share.classList.toggle("show");
});
