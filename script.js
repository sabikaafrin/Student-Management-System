const students = [];
function addStudent() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  if (name && age && email) {
    students.push({ name, age, email });
    displayStudents(students);
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
  } else {
    alert("Please fill all fields");
  }
}

function displayStudents(list) {
  const container = document.getElementById("studentList");
  container.innerHTML = "";

  for (let student of list) {
    container.innerHTML =
      container.innerHTML +
      "<div class='student'>" +
      student.name +
      "<br>" +
      "Age: " +
      student.age +
      "<br>" +
      "Email: " +
      student.email +
      "</div>";
  }
}

function searchStudent() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const filtered = students.filter((student) =>
    student.name.toLowerCase().includes(searchValue)
  );

  const resultsElement = document.getElementById("results");
  const studentList = document.getElementById("studentList");

  if (filtered.length === 0) {
    studentList.innerHTML = ""; 
    resultsElement.innerHTML = "No search results found";
  } else {
    displayStudents(filtered);
    resultsElement.innerHTML = ""; 
  }
}