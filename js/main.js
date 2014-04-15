
$("#chat-close").click(function(e) {
    e.preventDefault();
    $("#chat-wrapper").toggleClass("active");
});


$("#chat-toggle").click(function(e) {
    e.preventDefault();
    $("#chat-wrapper").toggleClass("active");
});


$("#mainContainer" ).load("views/frontpage.html");

$("#home").click(function () {
   $("#mainContainer" ).load("views/frontpage.html");
    });
$("#nav2").click(function () {
    $("#mainContainer").html("").load("./views/contacts.html")
    });
$("#nav3").click(function () {
    $("#mainContainer").html("").load("./views/products.html")
    });
$("#nav4").click(function () {
    $("#mainContainer").html("").load("./views/savings.html")
    });
$("#nav5").click(function () {
    $("#mainContainer").html("").load("./views/newGroup.html")
    });