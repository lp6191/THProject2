var numberOfStudents = $(".student-list li").length;
var paginationLinkContainer = $("<div></div>");
//check if the number of students is right.
//console.log(numberOfStudents);

//initial display of the page.
createLinks(numberOfStudents);
hideStudents(10);

// hide all but 10 students on the list
function hideStudents(lastToShow){
  $(".student-list").children().hide();
  $(".student-list").children().slice(lastToShow - 10, lastToShow).show();
}

//create pagination links
function createLinks(numberOfLinks){
  $(".student-list").after("<div></div>");
  $(".student-list").next().addClass("pagination");
  $(".pagination").append("<ul></ul>");
  for(var i = 0; i < (numberOfLinks / 10); i++){
    $(".pagination ul").append("<li></li>");
    $(".pagination li").last().append("<a></a>");
    $(".pagination a").last().attr("href", "#");
    $(".pagination a").last().text(i+1);
  }
}

//change the displayed page
$(".pagination a").click(function(){
  //find out which page you must display
  var page = $(this).text();
  page = parseInt(page);
  //console.log(page);

  //hide appropriate students
  hideStudents(page * 10);
});
//code above has been tested in Chrome, Edge and Firefox and worked in all three of them
