var start = document.getElementById("my-button");
var timer;
let count = 0;
let speed = 1000;
var ele = document.getElementById("timer");
document.getElementById("my-button1").style.display = "none";
document.getElementById("yanlis").style.display = "none";
document.getElementById("yanlistext2").style.display = "none";
//------------------------------------
start.addEventListener("click", function (event) {
  (function () {
    var sec = 1;
    timer = setInterval(() => {
      ele.innerHTML = "" + sec;
      sec++;
      document.getElementById("timer").style.display = "inline";
      document.getElementById("my-button2").style.display = "none";
      document.getElementById("my-button1").style.display = "inline";
      document.getElementById("my-button").style.display = "none";
      document.getElementById("xyz").style.display = "none";
      document.getElementById("yanlis").style.display = "none";
      document.getElementById("yanlistext2").style.display = "none";
//------------------------------------

      if (sec >= 5) {
        document.getElementById("timer").style.display = "none";
        document.getElementById("my-button").style.display = "none";
        document.getElementById("my-button").innerText = "TEKRAR";
      }
      let text = "    belki de hep savaşta gibi hiçbir zaman durmak istemiyor dünyaya bedel eşsiz ruhum dünyayı bilmek istemiyor"; // baştan 4 adet boşluk bırakılması gerek
      
      const chars = text.split(" ");
      for (i = 4; i < sec; i++) {
        document.getElementById("demo").style.display = "inline";
        document.getElementById("demo").innerHTML = chars[i];

      }
     //------------------------------------ 
      count++;
      if (sec > text.split(" ").length) {
        document.getElementById("demo").style.display = "none";
        clearInterval(timer);
        document.getElementById("my-button").style.display = "inline";
        document.getElementById("my-button1").style.display = "none";
        document.getElementById("my-button2").style.display = "inline";
        document.getElementById("xyz").style.display = "inline";
      }

    }, 500);
  })();
});
//------------------------------------
function pause() {
  clearInterval(timer);
  sec = 0;
  document.getElementById("demo").style.display = "none";
  document.getElementById("my-button").style.display = "inline";
  document.getElementById("my-button1").style.display = "none";
  if (sec >= 4) {
    document.getElementById("timer").style.display = "none";
  } else {
    document.getElementById("timer").style.display = "none";
  }
}

//------------------------------------

function kontrol() {

  let b = "belki de hep savaşta gibi hiçbir zaman durmak istemiyor dünyaya bedel eşsiz ruhum dünyayı bilmek istemiyor";
  clearInterval(timer);
  // document.getElementById("kontrolx").style.display = "inline";
  var x = (document.getElementById("kontrolText").value).trim();
  document.getElementById("yanlis").style.display = "inline";
  document.getElementById("yanlistext2").style.display = "inline";
//------------------------------------
  var fieldsa = x.split(' ');
  var fieldsb = b.split(' ');
  const intersection = fieldsa.filter(value => fieldsb.includes(value));
  var girilen = fieldsa.length;
  var dogru = intersection.length;
  var count = fieldsb.length;
  let difference = fieldsa.filter(x => !fieldsb.includes(x));
  var yanlis = difference.length;
  var bos = 0;
  let yanlistext = difference;
  document.getElementById("yanlis").innerHTML = yanlistext;
  //------------------------------------
  if(girilen<=count)
  {
    bos = count-girilen;
  }
  var fazla = 0;

  if (yanlis == 0) 
  {
    document.getElementById("yanlistext2").style.display = "none";
  }
  if(count<(dogru+yanlis))
  {
    fazla = (dogru+yanlis)-count
    alert("Girdiğin metindeki doğru sayısı ==> "+dogru+" \nGirdiğin metindeki yanlış veya boş sayısı ==> "+(yanlis)+"\n Fazla kelime girilen kelime sayısı ==>"+fazla+"\n")
  }
  else
  {
  alert("Girdiğin metindeki doğru sayısı ==> "+dogru+" \nGirdiğin metindeki yanlış veya boş sayısı ==> "+(yanlis+bos)+"\n")
  }
}
//------------------------------------
//------------------------------------
//------------------------------------
//------------------------------------
//------------------------------------
//------------------------------------
//------------------------------------
//------------------------------------
//------------------------------------
