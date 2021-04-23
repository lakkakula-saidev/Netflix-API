let oldendpoint = "https://striveschool-api.herokuapp.com/api/movies/";
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
const METHOD = id ? "PUT" : "POST";
let endpoint = id ? oldendpoint + id : oldendpoint;

async function uploadMovie(event) {
  event.preventDefault();

  const newMovie = {
    name: document.querySelector("#m-name").value,
    description: document.querySelector("#m-description").value,
    category: document.querySelector("#m-category").value,
    imageUrl: document.querySelector("#m-url").value,
  };

  const response = await fetch(endpoint, {
    method: METHOD,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTk0N2IxZjBmYjAwMTVkOTE3ODYiLCJpYXQiOjE2MTkwMDc4MTUsImV4cCI6MTYyMDIxNzQxNX0.5aA8jMjlV02DqZlvnNr3gvugFDUf0vHMnmO5PZaiUi4",
    },
    body: JSON.stringify(newMovie),
  });

  if (response.ok) {
    /* if (id) {
            alert("Product edited Successfully!!!");
            location.assign("./Index.html");
            return;
          } */
    if (id) alert("Item edited Successfully!!!");
    if (!id) alert("Item added Successfully!!!");
    /* deleteInputValues(); */
  } else {
    alert("Problem in Adding Product!!!");
  }
}

async function displayItem() {
  console.log(endpoint);
  const response = await fetch(endpoint, {
    method: METHOD,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTk0N2IxZjBmYjAwMTVkOTE3ODYiLCJpYXQiOjE2MTkwMDc4MTUsImV4cCI6MTYyMDIxNzQxNX0.5aA8jMjlV02DqZlvnNr3gvugFDUf0vHMnmO5PZaiUi4",
    },
  });

  const itemData = await response.json();
  console.log(itemData);
  document.querySelector("#m-name").value = itemData.name;
  document.querySelector("#m-description").value = itemData.description;

  document.querySelector("#m-url").value = itemData.imageUrl;
  document.querySelector("#m-category").value = itemData.category;
  // document.querySelector("#m-delete").classList.remove("d-none");
}

async function deleteProduct() {
  try {
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTk0N2IxZjBmYjAwMTVkOTE3ODYiLCJpYXQiOjE2MTkwMDc4MTUsImV4cCI6MTYyMDIxNzQxNX0.5aA8jMjlV02DqZlvnNr3gvugFDUf0vHMnmO5PZaiUi4",
      },
    });
    alert("Product deleted Successfully!!!");
    location.assign("./Index.html");
  } catch {
    throw new Error("Problem Deleting Product");
  }
}

window.onload = function () {
  if (id) displayItem();
};
