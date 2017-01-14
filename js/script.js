var numberOfStudents = $(".student-list li").length;
var paginationLinkContainer = $("<div></div>");
//check if the number of students is right;
//console.log(numberOfStudents);
// hide all but 10 students on the list
function hideStudents(firstToShow, lastToShow){
  $(".student-list").children().hide();
  $(".student-list").children().slice(firstToShow, lastToShow).show();
}

//create pagination links
function createLinks(numberOfLinks){
  $(".student-list").after("<div></div>");
  $(".student-list").next().addClass("pagination");
  $(".pagination").append("<ul></ul>");
  for(var i = 0; i < (numberOfLinks / 10); i++){
    $(".pagination ul").append("<li></li>");
    $(".pagination li").last().append("<a></a>");
  }
}

hideStudents(0, 10);
createLinks(numberOfStudents);
