console.log("Start script.js")
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var index in names) {
  var firstLetter = names[index].charAt(0).toLowerCase();

  if (firstLetter == 'j') {
    byeSpeaker.speak(names[index]);
  } else {
    helloSpeaker.speak(names[index]);
  }
}
