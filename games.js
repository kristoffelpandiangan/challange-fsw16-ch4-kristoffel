var player_score = 0;
var com_score = 0;

var result = "";

function myFunction(by_user) {
  var by_com = Math.floor(Math.random() * 3) + 1;
  var com = "";

  document.getElementById("guntingcom").style.backgroundColor = "";
  document.getElementById("batucom").style.backgroundColor = "";
  document.getElementById("kertascom").style.backgroundColor = "";

  switch (by_com) {
    case 1:
      com = "gunting";

      if (by_user == "kertas") {
        result = "LOSE";
      } else if (by_user == "batu") {
        result = "WIN";
      } else {
        result = "DRAW";
      }

      document.getElementById("guntingcom").style.backgroundColor = "yellow";
      console.log(by_user);
      console.log(com);
      break;

    case 2:
      com = "batu";

      if (by_user == "kertas") {
        result = "WIN";
      } else if (by_user == "gunting") {
        result = "LOSE";
      } else {
        result = "DRAW";
      }

      document.getElementById("batucom").style.backgroundColor = "yellow";
      console.log(by_user);
      console.log(com);
      break;

    case 3:
      com = "kertas";

      if (by_user == "batu") {
        result = "LOSE";
      } else if (by_user == "gunting") {
        result = "WIN";
      } else {
        result = "DRAW";
      }
      document.getElementById("kertascom").style.backgroundColor = "yellow";
      console.log(by_user);
      console.log(com);
      break;

    default:
      result = "Error";
      console.log(by_user);
      console.log(com);
      break;
  }

  console.log(result);

  const info = document.getElementById("info");
  info.innerHTML = result;

  var html_result = document.getElementById("info");
  if (result == "LOSE") {
    html_result.style.backgroundColor = "red";
    html_result.style.color = "white";
  } else if (result == "WIN") {
    html_result.style.backgroundColor = "lime";
    html_result.style.color = "white";
  } else {
    html_result.style.backgroundColor = "gray";
    html_result.style.color = "white";
  }

  if (result == "WIN") {
    player_score++;
  }
  if (result == "LOSE") {
    com_score++;
  }
  console.log(player_score);
  console.log(com_score);

  document.getElementById("playerscore").innerHTML = player_score;
  document.getElementById("comscore").innerHTML = com_score;
}

document.querySelector("#restart").addEventListener("click", function () {
  window.location.reload();
  return false;
});
