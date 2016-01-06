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
$.ready(function(){
  indexLoad();
  showLoad();
})


function indexLoad() {
  var users;

  var theTemplateScript = $("#template-index")[0].innerHTML;

  var theTemplate = Handlebars.compile(theTemplateScript);

  $().ajax({
    url: "http://localhost:3000/users",
    type: "GET"
  }).then(function(response){
    data = {users: JSON.parse(response)}
    $('div.container')[0].innerHTML = theTemplate(data);
  }).then(function showLoad(){
  $('li a').on('click', function(e){
    e.preventDefault();
    var users;
    debugger
    var theTemplateScript = $("#template-index")[0].innerHTML;

    var theTemplate = Handlebars.compile(theTemplateScript);

    $().ajax({
      url: "http://localhost:3000/users",
      type: "GET"
    }).then(function(response){
      data = {users: JSON.parse(response)}
      $('div.container')[0].innerHTML = theTemplate(data);
    })
  })
}
  // var theCompiledHtml = theTemplate(users);

function showLoad()
}

