const adviceIdSpan = document.querySelector(".advice-id");
const quoteDiv = document.querySelector(".quote");
const iconBtn = document.querySelector(".icon-dice");
const circleDiv = document.querySelector(".circle-ids");
const title = document.querySelector(".title");
let isDisabled = false;

document.addEventListener(
  "DOMContentLoaded",
  async () => {
    await fetchAdvice();
  },
  false
);

iconBtn.addEventListener("click", async () => {
  if (isDisabled) 
    return;
  adviceIdSpan.innerHTML = '';
  quoteDiv.innerHTML = ''; 
  await fetchAdvice();
});

const fetchAdvice = async () => {
  title.style.marginBottom = "6rem";
  circleDiv.classList.remove("disabled");
  iconBtn.classList.add("disabled");
  isDisabled = true;
  setTimeout(async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const { id, advice } = data.slip;
    adviceIdSpan.innerHTML = id;
    quoteDiv.innerHTML = `“${advice}”`;
    circleDiv.classList.add("disabled");
    title.style.marginBottom = "0";
  }, 500);
  setTimeout(() => {
    iconBtn.classList.remove("disabled");
    isDisabled = false;
  }, 2000);
};