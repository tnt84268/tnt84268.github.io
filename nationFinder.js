function mainFunction() {
    var nationsResponse = new XMLHttpRequest();
    nationsResponse.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("changeText").innerHTML = this.responseText;
        }
    };
    nationsResponse.open("GET", "http://cors.io/?https://politicsandwar.com/api/nations/", true);
    nationsResponse.send();
}
