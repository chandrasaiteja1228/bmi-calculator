document.getElementById("bmiForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultDiv = document.getElementById("result");

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultDiv.textContent = "Please enter valid height and weight.";
    resultDiv.style.color = "red";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
    resultDiv.style.color = "orange";
  } else if (bmi < 24.9) {
    category = "Normal weight";
    resultDiv.style.color = "green";
  } else if (bmi < 29.9) {
    category = "Overweight";
    resultDiv.style.color = "orange";
  } else {
    category = "Obesity";
    resultDiv.style.color = "red";
  }

  resultDiv.textContent = `Your BMI is ${bmi} (${category})`;
});
