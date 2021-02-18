$( document ).ready(function() {
    
    
$(".eat").on('click', putHandler);
$(".newBurger").on('click', submitHandler);

});

async function putHandler (event) {
    console.log(event.target.id);
    event.preventDefault();
    await fetch(`/${event.target.id}`, {method: "PUT"});
    reloader()
};

function reloader () {
    location.reload(true);
}

async function submitHandler () {
    event.preventDefault();
    const str = $("#newBurg").val()
    await fetch (`/${str}`, {method: "POST"})
    reloader();
}