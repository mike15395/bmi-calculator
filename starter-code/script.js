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
const bmiClassification = document.getElementById("classification");
const bmiRange = document.getElementById("range");

const welcomeContainer = document.getElementById("welcome-container");
const bmiScoreContainer = document.getElementById("bmi-score-container");
const bmiInfoContainer = document.getElementById("bmi-info-container");

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
    if (!metricHeight.value || !metricWeight.value) {
      alert("please enter correct values");
      return;
    }
    welcomeContainer.style.display = "none";
    bmiInfoContainer.style.display = "block";
    bmiScoreContainer.style.display = "flex";
    let heightInMetres = metricHeight.value * 0.01;
    let calcMetric = metricWeight.value / (heightInMetres * heightInMetres);
    let bmiMetric = Math.floor(calcMetric * 100) / 100;
    bmiScore.innerHTML = bmiMetric;
    bmiClassification.innerHTML = giveBmiClassification(bmiMetric);
    bmiRange.innerHTML = healthyRangeMetric(heightInMetres);
  } else {
    if (
      !heightFeet.value ||
      !heightInch.value ||
      !weightPound.value ||
      !weightStone.value
    ) {
      alert("Please enter correct values");
      return;
    }
    welcomeContainer.style.display = "none";
    bmiInfoContainer.style.display = "block";
    bmiScoreContainer.style.display = "flex";

    let totalHeightInch =
      Number(heightFeet.value * 12) + Number(heightInch.value);
    let totalWeightPound =
      Number(weightStone.value * 14) + Number(weightPound.value);
    let calcImperial = totalWeightPound / (totalHeightInch * totalHeightInch);
    let bmiImperial = Math.floor(calcImperial * 703);
    bmiScore.innerHTML = bmiImperial;
    bmiClassification.innerHTML = giveBmiClassification(bmiImperial);
    bmiRange.innerHTML = healthyRangeImperial(totalHeightInch);
  }
});

function giveBmiClassification(bmi) {
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi > 18.5 && bmi <= 24.9) {
    return "Healthy";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else if (bmi >= 30) {
    return "Obese";
  }
}

function healthyRangeMetric(height) {
  let minWeight = Math.floor(18.5 * height * height * 100) / 100;
  let maxWeight = Math.floor(24.9 * height * height * 100) / 100;

  return `${minWeight}kgs-${maxWeight}kgs`;
}

function healthyRangeImperial(height) {
  let minWeight = (18.5 * height * height) / 703;
  let maxWeight = (24.9 * height * height) / 703;

  return `${Math.floor(minWeight * 100) / 100}lbs-${
    Math.floor(maxWeight * 100) / 100
  }lbs`;
}
