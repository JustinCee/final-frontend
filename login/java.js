const myDb = window.localStorage;
const users = window.localStorage;

// login function
function loggingIn() {
  const username = document.getElementById("username-input").data;
  const password = document.getElementById("password-input").data;
  console.log(username, password);
  fetch("https://aqueous-brushlands-65716.herokuapp.com/user-registration/", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      console.log(res["access_token"]);

      if (
        res["description"] ==
        "Please retry typing in your username and password"
      ) {
        alert("Incorrect username or password");
      } else {
        myDb.setItem("jwt-token", res["access_token"]);
        users.setItem("users", username);
        console.log("Success");
        alert("You are Logged in");
        window.location.href = "./products/producsts.html";
      }
    });
}

function newUser() {
  const name = document.getElementById("first_name").value;
  const surname = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const address = document.getElementById("address").value;
  console.log(name, surname, email, username, password, address);

  try {
    if (
      typeof name === "number" ||
      typeof surname === "number" ||
      typeof cell === "string"
    ) {
      throw "Please enter the correct information in the fields";
    }
  } catch (j) {
    alert("Mistake: " + j);
  } finally {
    fetch("https://aqueous-brushlands-65716.herokuapp.com/user-registration/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: name,
        last_name: surname,
        email: email,
        username: username,
        password: password,
        address: address,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("You have been registered");

        if (data["message"] == "Success") {
          alert("Please go back to the Login page to view the products");
          window.location.href = "./index.html";
        } else {
          alert("Please fill in all the fields");
        }
      });
  }
};




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}