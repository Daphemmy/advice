let adviceID = document.querySelector(".adv");
let adviceContent = document.querySelector(".quo");
let loading = document.querySelector(".loading");
let button = document.querySelector(".glow");

let adviceData = async () => {
  let response = await fetch("https://api.adviceslip.com/advice");
  //   console.log(response);
  let data = await response.json();
  loading.classList.add("d-none");
  adviceID.textContent = `ADVICE #${data.slip.id}`;
  adviceContent.textContent = `${data.slip.advice}`;
};

button.addEventListener("click", () => {
  location.reload();
});

setTimeout(() => {
  adviceData();
}, 2000);
