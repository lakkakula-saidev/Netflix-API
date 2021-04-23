const endpoint = 'https://striveschool-api.herokuapp.com/api/movies/'
const METHOD = 'POST'



async function uploadMovie(event){

    event.preventDefault()

    const newMovie = {
          name: document.querySelector("#m-name").value,
          description: document.querySelector("#m-description").value,
          category: document.querySelector("#m-category").value,
          imageUrl: document.querySelector("#m-url").value
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
          alert("Product added Successfully!!!");
          /* deleteInputValues(); */
        } else {
          alert("Problem in Adding Product!!!");
        }
}