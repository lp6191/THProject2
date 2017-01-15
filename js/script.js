var numberOfStudents = $(".student-list li").length;
//check if the number of students is right.
//console.log(numberOfStudents);

/*
------------- functions below handle the basic functionality
*/

// hide all but 10 students on the list
function hideStudents(lastToShow){
  $(".student-list").children().hide();
  $(".student-list").children().slice(lastToShow - 10, lastToShow).show();
}

//create pagination links
function createLinks(numberOfLinks){
  $(".pagination").remove();
  $(".student-list").after("<div></div>");
  $(".student-list").next().addClass("pagination");
  $(".pagination").append("<ul></ul>");
  for(var i = 0; i < (numberOfLinks / 10); i++){
    $(".pagination ul").append("<li></li>");
    $(".pagination li").last().append("<a></a>");
    $(".pagination a").last().attr("href", "#");
    $(".pagination a").last().text(i+1);
    if (i == 0) {
      $(".pagination a").addClass("active");
    }
  }
}

//function that changes the displayed page
function linkClicked(){
  $(".pagination a").click(function(){
    $(".active").removeClass("active");
    //find out which page you must display
    var page = $(this).text();
    page = parseInt(page);
    //console.log(page);
    $(this).addClass("active");
    //hide appropriate students
    hideStudents(page * 10);
  });
}

//create the search bar
function createSearch(){
  $(".page-header h2").after("<div></div>");
  $(".page-header h2").next().addClass("student-search");
  $(".student-search").append("<input>");
  $(".student-search input").attr("placeholder", "Search for students...");
  $(".student-search").append("<button></button>");
  $(".student-search button").text("Search");
}

/*
-------------------functions below handle the events after the search.
*/
//hide students if there are more than 10 matches per search
function hideStudentsAfterSearch(lastToShow){
  $(".searchedFor").addClass("currentSearch");
  $(".searchedFor").hide();
  $(".currentSearch").slice(lastToShow - 10, lastToShow).show();
}
//handle the pagination click after the search.
function linkClickedAfterSearch(){
  $(".pagination a").click(function(){
    $(".active").removeClass("active");
    //find out which page you must display
    var page = $(this).text();
    page = parseInt(page);
    $(this).addClass("active");
    //console.log(page);
    //hide appropriate students
    hideStudentsAfterSearch(page * 10);
  });
}

//------initial display of the page.
createSearch();
createLinks(numberOfStudents);
hideStudents(10);
linkClicked();

//search button functionality
$(".student-search button").click(function(){
  var searchString = $(".page-header input").val();
  //console.log(searchString);

  //revert to initial page if the search string is empty.
  if(searchString === ""){
    $(".noMatch").hide();
    createLinks($(".student-list li").length);
    hideStudents(10);
    linkClicked();
    numberOfStudents = $(".student-list li").length;
  }else{
    $(".noMatch").hide();
    $(".currentSearch").removeClass("currentSearch");
    $(".searchedFor").removeClass("searchedFor");
    //hide all students and show the ones that fit the criterea.
    $(".student-list").children().hide();
    $("h3:contains('" + searchString +"')").parents(".student-list li").addClass("searchedFor").show();
    $(".email:contains('" + searchString +"')").parents(".student-list li").addClass("searchedFor").show();
    numberOfStudents = $(".searchedFor").length;
    console.log(numberOfStudents);
    createLinks(numberOfStudents);
    hideStudentsAfterSearch(10);
    linkClickedAfterSearch();
  }
  //display the message if the search results are emprty.
  if(numberOfStudents === 0){
    $(".page").append("<p>No match was found</p>");
    $(".page p").addClass("noMatch");
  }
});
//code above has been tested in Chrome, Edge and Firefox and worked in all three of them
