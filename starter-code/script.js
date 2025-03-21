const metricInput = document.getElementById("metric");
const imperialInput = document.getElementById("imperial");

const metricContainer = document.getElementById("metric-container");
const imperialContainer = document.getElementById("imperial-container");

let metricHeight = document.getElementById("metric-height");
let metricWeight = document.getElementById("metric-weight");

let heightFeet = document.getElementById("height-feet");
let heightInch = document.getElementById("height-inch");
let weightStone = document.getElementById("weight-stone");
let weightPound = document.getElementById("weight-pound");

const bmiResultSection = document.getElementById("result-section");
const bmiScore = document.getElementById("score");

let [...radios] = document.querySelectorAll('input[type="radio"]');
radios.map((ele) => {
  ele.addEventListener("input", function () {
    if (metricInput.checked) {
      metricContainer.style.display = "flex";
      imperialContainer.style.display = "none";
    } else {
      imperialContainer.style.display = "flex";
      metricContainer.style.display = "none";
    }
  });
});

bmiResultSection.addEventListener("click", function () {
  if (metricInput.checked) {
    let heightInMetres = metricHeight.value * 0.01;
    let calcMetric = metricWeight.value / (heightInMetres * heightInMetres);
    let bmiMetric = Math.floor(calcMetric * 100) / 100;

    console.log(bmiMetric, "bmi metric");
    bmiScore.innerHTML = bmiMetric;
  } else {
    let totalHeightInch =
      Number(heightFeet.value * 12) + Number(heightInch.value);
    console.log(totalHeightInch, "total inch height");
    let totalWeightPound =
      Number(weightStone.value * 14) + Number(weightPound.value);
    console.log(totalWeightPound, "total weight pound");
    let calcImperial = totalWeightPound / (totalHeightInch * totalHeightInch);
    let bmiImperial = Math.floor(calcImperial * 703);
    bmiScore.innerHTML = bmiImperial;
  }
});
