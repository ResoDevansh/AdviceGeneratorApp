let adviceBox = document.querySelector(".advice-box");
let container = document.querySelector(".container");
let adviceID = document.querySelector(".id");
let dice = document.querySelector(".dice");
let currID;

const randomAdviceGenerator = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error(
        `Error: Response received with error code ${response.status}`
      );
    }
    let data = await response.json();
    let temp = Number.parseInt(`${data.slip.id}`, 10);
    if (temp == currID) {
      randomAdviceGenerator()
      return 
    }
    adviceBox.innerHTML = `"${data.slip.advice}"<img src="./images/pattern-divider-desktop.svg">`;
    adviceID.innerHTML = `${data.slip.id}`; ''
    currID = Number.parseInt(`${data.slip.id}`, 10)
  } catch (error) {
    console.log(error);
  }
};

randomAdviceGenerator()

dice.addEventListener("click", () => {
  console.log(currID)
  randomAdviceGenerator();
});
