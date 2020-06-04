$(document).ready(function(){
  $("form#hogwartsQuiz").submit(function(event) {
    event.preventDefault();
    const favColor = parseInt($("input:radio[name=favColor]:checked").val());
    const favAnimal = parseInt($("input:radio[name=favAnimal]:checked").val());
    const favDrink = parseInt($("input:radio[name=favDrink]:checked").val());
    const totalPoints = favColor + favAnimal + favDrink
    const name = $("#name").val();
    let friend

    if(!name) {
      $("#nameQuestion").addClass("has-error");
      alert("Please add your name");
    } else {
      if (totalPoints > 6) {
        friend = "Hermione"
        $("#Hermione").removeClass("hidden");
        $("#Ginny, #Ron").addClass("hidden");
      } else if (totalPoints <= 6 && totalPoints > 3) {
        friend = "Ginny"
        $("#Ginny").removeClass("hidden");
        $("#Hermione, #Ron").addClass("hidden");
      } else {
        friend = "Ron"
        $("#Ron").removeClass("hidden");
        $("#Hermione, #Ginny").addClass("hidden");
      }
      $("#resultFriend").removeClass("hidden");
      $("#nameQuestion").removeClass("has-error");
    }
  });
});