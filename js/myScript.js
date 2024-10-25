function openLab(evt, lab_number) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab_content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(lab_number).style.display = "block";
    evt.currentTarget.className += " active";
  }

function returnLab(event,lab_number){
  var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab_content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // tablinks = document.getElementsByClassName("tablinks");
    document.getElementById(lab_number).style.display = "block";
}


function openSubMenu(evt, number){

  let current = evt.currentTarget;
  let menu = document.getElementsByClassName("ul_detail");


  if(current.classList.contains("active")){
      current.classList.remove("active");
      // console.log(current.className);
      menu[number].style.display = "none";
  }else{
      current.classList.add("active");
      menu[number].style.display = "block";
  }
  // console.log(current);
}