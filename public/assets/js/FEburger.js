$( document ).ready(function() {
    
    
$(".eat").on('click', putHandler);
$(".newBurger").on('click', submitHandler);

});

function putHandler (event) {
    console.log(event.target.id);
    event.preventDefault();
    fetch(`/${event.target.id}`, {method: "PUT"});
    reloader()
};

function reloader () {
    window.location.reload(true);
}

function submitHandler () {
    event.preventDefault();
    const str = $("#newBurg").val()
    fetch (`/${str}`, {method: "POST"})
    reloader();
}