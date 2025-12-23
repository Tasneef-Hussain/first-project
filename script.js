function calculateGrade() {
  let name = document.getElementById("name").value;
  let math = parseFloat(document.getElementById("math").value);
  let english = parseFloat(document.getElementById("english").value);
  let science = parseFloat(document.getElementById("science").value);
}

//   // Validation check
  if (isNaN(math) || isNaN(english) || isNaN(science) || name.trim() === "") {
    alert(" Please enter all fields correctly!");
    return;
  }

  // Calculate total and average
  let total = math + english + science;
  let average = total / 3;
  let grade = "";

  // Grade conditions
  if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F (Fail)";

}

//   // Show result in console
  console.log("Student Name:", name);
  console.log("Total Marks:", total);
  console.log("Average Marks:", average.toFixed(2));
  console.log("Final Grade:", grade);

//   // Display on screen
  document.getElementById("result").innerHTML = `
    <p><strong>Student Name:</strong> ${name}</p>
    <p><strong>Total Marks:</strong> ${total}</p>
    <p><strong>Average Marks:</strong> ${average.toFixed(2)}</p>
    <p><strong>Final Grade:</strong> ${grade}</p>
}
