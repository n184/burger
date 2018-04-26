 $(function() {
     // body...

     $(".create-form").on("submit", function(event) {
         // Make sure to preventDefault on a submit event.
         event.preventDefault();

         var newBurger = {
             burger_name: $("#bur").val().trim(),

         };

         // Send the POST request.
         $.ajax("/", {
             type: "POST",
             data: newBurger
         }).then(
             function() {
                 console.log("created new burger");
                 // Reload the page to get the updated list
                 location.reload();
             }
         );
     });

     $(".devour").on("click", function(event) {

         event.preventDefault();
         var id = $(this).data("id");
         console.log("id", id);


         var newDevourState = {
             devoured: true
         };

         // Send the PUT request.
         $.ajax("/api/burgers/" + id, {
             type: "PUT",
             data: newDevourState
         }).then(
             function() {
                 console.log("changed devour to", newDevourState);
                 // Reload the page to get the updated list
                 location.reload();
             }
         );
     });

 })