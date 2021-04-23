
const endpoint = 'https://striveschool-api.herokuapp.com/api/movies/'
let moviesData = []
let listLength;





async function getContent(){

    const response = await fetch(endpoint,{headers: {
            
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMTk0N2IxZjBmYjAwMTVkOTE3ODYiLCJpYXQiOjE2MTkwMDc4MTUsImV4cCI6MTYyMDIxNzQxNX0.5aA8jMjlV02DqZlvnNr3gvugFDUf0vHMnmO5PZaiUi4",
          }})

          moviesData= await response.json()
          
          createGenres()
          
}

function createGenres(){

    let genreDiv = document.getElementById('genres-list')
    let temp = moviesData.sort(function(a, b){
                      // ASC  -> a.length - b.length
                      // DESC -> b.length - a.length
                      return a.length - b.length
                    })
    temp.forEach(genre =>{genreDiv.innerHTML += `<a class="dropdown-item" href="./genre.html?category=${genre}">${genre.toUpperCase()}</a>`})
}


window.onload = function(){
    getContent()
}

