$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/srdiogolima.json', // My report card
    dataType: 'jsonp',
    success: function(response) {
      addCompletedCourses(response.courses.completed);
      addAchievementBadges(response.badges);
      addAvatar(response.user);
      addScore(response.user);
    }
  })

  function addCompletedCourses(courses) {
    $badges = $('#badges');//handle response
    courses.forEach(function(course) {
      addHtmlBadges(badges, course.title, course.badge, course.url);
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

  function addAchievementBadges(achievements) {
    $badges = $('#badges');//handle response
    achievements.forEach(function(achievement) {
      if(achievement.course_url == null){
        addHtmlBadges(badges, achievement.name, achievement.badge, "http://www.codeschool.com");
      }
    })
  }

  function addHtmlBadges(badges, title, img, url){
    var $course = $('<div />', {
      'class': 'course'
    }).appendTo($badges);

    $('<h3 />', {
      text: title
    }).appendTo($course);

    $('<img />', {
      src: img
    }).appendTo($course);
    $('<a />', {
      'class': 'btn btn-primary',
      target: '_blank',
      href: url,
      text: 'See Course'
    }).appendTo($course);
  }
})
