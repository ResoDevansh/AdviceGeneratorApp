let adviceBox = document.querySelector(".advice-box");
let container = document.querySelector(".container");

const randomAdviceGenerator = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error(
        `Error: Response received with error code ${response.status}`
      );
    }
    let data = await response.json();
    adviceBox.innerHTML = `"${data.slip.advice}"`;
    //   return data.slip.advice
  } catch (error) {
    console.log(error);
  }
};
randomAdviceGenerator();