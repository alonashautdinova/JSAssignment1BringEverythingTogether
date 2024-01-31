let navBtn = document.getElementsByClassName("nav-link");

for (let i = 0; i < navBtn.length; i++) {
  navBtn[i].addEventListener("click", function () {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  });
}
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  let username = document.getElementById("username").value;
  let phone = document.getElementById("phone").value;
  let location = document.querySelector('input[name="radio"]:checked').value;

  let table = document.querySelector("#table table tbody");
  let newRow = table.insertRow(-1);

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);

  cell1.innerHTML = username;
  cell2.innerHTML = phone;
  cell3.innerHTML = location;
});
