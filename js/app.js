//Pseudocode:
//2 models:
  //users:
    //name
    //has many badges
  //badges:
    //name
    //score
    //belongs to a user

//User stories:
  //User can see all students in a cohort
  //User can go to student's page
  //User can create a badge for that student
  //User can upvote or downvote for a badge


// $(document).ready(function(){
//   indexLoad();
//   createBadge();
//   upvoteBadge();
//   downvoteBadge();
//   showUser();
//   addBadgeToUser();


// });


var users;
var theTemplateScript = $("#template-index").html();
$().ajax({
  url: "http://localhost:3000/users",
  type: "GET"
}).then(function(response){
  users = JSON.parse(response)
  debugger
  Handlebars.compile()
  })

