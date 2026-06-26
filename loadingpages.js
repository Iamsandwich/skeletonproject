function load1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("thejuice").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "skelepage1.txt", true);
  xhttp.send();
};

function load2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("thejuice").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "skelepage2.txt", true);
  xhttp.send();
}
function load3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("thejuice").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "skelepage3.txt", true);
  xhttp.send();
}
function load4() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("thejuice").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "skelepage4.txt", true);
  xhttp.send();
}