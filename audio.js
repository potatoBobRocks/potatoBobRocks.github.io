var audio = $("audio")[0];
var howlAudio = $("#howlaudio")[0];
var gatesAudio = $("#gatesaudio")[0];
var amishAudio = $("#amishaudio")[0];
console.log(howlAudio)
$("document").ready(function() {
  audio.play();
});

if ($("#rougarou") != null) {
  $("#rougarou").mouseenter(function() {
    howlAudio.play();
  });
  $("#billgates").mouseenter(function() {
    gatesAudio.play();
  })
  $("#coolguy").mouseenter(function() {
    amishAudio.play();
  })
}
