document.addEventListener("DOMContentLoaded", function(event){
    document.getElementsByClassName("eat").map(addEventListener("click", (event) => {
        console.log(event.target.id);
        event.preventDefault();
        fetch(`/${event.target.id}`, { method: "PUT" })
    })).then(function(){
        console.log("burger eaten");
        fetch('/', { method: "GET" });
    }) 
  });