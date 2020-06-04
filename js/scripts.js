$(document).ready(function(){
  $("form#hogwartsQuiz").submit(function(event) {
    event.preventDefault();
    const favColor = parseInt($("input:radio[name=favColor]:checked").val());
    const favAnimal = parseInt($("input:radio[name=favAnimal]:checked").val());
    const favDrink = parseInt($("input:radio[name=favDrink]:checked").val());
    const totalPoints = favColor + favAnimal + favDrink
    let friend
    if (totalPoints > 6) {
      friend = "Hermione"
      $("#Hermione").removeClass("hidden");
    } else if (totalPoints <= 6 && totalPoints > 3) {
      friend = "Ginny"
      $("#Ginny").removeClass("hidden");
    } else {
      friend = "Ron"
      $("#Ron").removeClass("hidden");
    }
    $("#resultFriend").removeClass("hidden");
    console.log(totalPoints, friend)
  });
});