//call the Button id and when click on it it will start the function
  $("#Button").click(function showdiv() {

//if the id email contain the value of 'g' and larger than 0
    if ($('#email').val().indexOf('red navbar') >= 0) {

//the id email value will be call this function to ...
      $('#email').val(function() {
// .. get the id of the Button and change it's own style to 'blue'
  $("ul").removeClass("new").addClass("red");
// end of this true function
      });
//else if the value dosen't contain the 'g' it will change the placeholder ..
}


/////////////////////////////////////////
//green
if ($('#email').val().indexOf('green navbar') >= 0) {
  $('#email').val(function() {
  // .. get the id of the Button and change it's own style to 'blue'
  $("ul").removeClass("new").addClass("green");
  // end of this true function
  });

}
///////////////////////////////////////////////////
//blue
// and call the input id which is it email and get a new value called no 'g'
if ($('#email').val().indexOf('blue navbar') >= 0) {
  $('#email').val(function() {
  // .. get the id of the Button and change it's own style to 'blue'
  $("ul").removeClass("new").addClass("blue");
  // end of this true function
  });

}
// THE ALERT function
if (  $('#email').val().indexOf!=('b')>=0) {
alert('h');
}


//end of the false function

//end the whole script

  });
  function showDiv() {
    document.getElementById('welcomeDiv').style.display = "block";
  //change the backgroundColor of the element
  var x = document.getElementById('nam').value;
  document.getElementById('welcomeDiv');
  welcomeDiv.style.backgroundColor= x;
  //Get the height of the element
  var y = document.getElementById('same').value;
  document.getElementById('welcomeDiv');
  welcomeDiv.style.height= y;
  //Get the width of the element
  var z = document.getElementById('widthing').value;
  document.getElementById('welcomeDiv');
  welcomeDiv.style.width= z;
  // change the background of element
}
