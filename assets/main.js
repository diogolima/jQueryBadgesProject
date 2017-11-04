$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/srdiogolima.json', // My report card
    dataType: 'jsonp',
    success: function(response) {
      addCompletedCourses(response.courses.completed);
      addAvatar(response.user);
      addScore(response.user);
    }
  })

  function addCompletedCourses(courses) {
    $badges = $('#badges');//handle response
    courses.forEach(function(course) {
      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      $('<img />', {
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($course);

    })
  }

  function addAvatar(user){
    $('<img />', {
      src: user.avatar
    }).appendTo($('#avatar'));
  }

  function addScore(user){
    $('<h2 />', {
      id: 'score',
      text: 'My Score:'+user.total_score
    }).appendTo($('#mySettings'));
  }
})
