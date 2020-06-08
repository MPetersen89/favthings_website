$(document).ready(function() {
    $("#formOne").submit(function(event) {
      const animalInput = $("input#animal").val();
      const colorInput = $("input#color").val();
      const foodInput = $("input#food").val();
      const musicInput = $("input#music").val();
  
      //$(".animal").text(animalInput);
      //$(".color").text(colorInput);
      //$(".food").text(foodInput);
      //$(".music").text(musicInput);
  
  let favThingsArray = [animalInput, colorInput, foodInput, musicInput];

  newArray = [];

  newArray.push(favThingsArray[2]);
  newArray.push(favThingsArray[1]);
  newArray.push(favThingsArray[3]);

  newArray.forEach(function(newArray) {
    alert('I love ' + newArray + "!")
  })

  alert(newArray);

  $("#arraylist").append(newArray[0]);
  $("#arrayList2").append(newArray[1]);
  $("#arrayList3").append(newArray[2]);

      event.preventDefault();
    });
  });