$(function () {

    $.ajax({
        url: 'https://www.codeschool.com/users/Zantetsu.json',
        dataType: 'jsonp',
        success: function (response) {
            var courses = response.courses.completed;
            for (var i = 0; i < courses.length; i++) {

                var element = "<div class='course'><h3>"
                + courses[i].title
                 + "</h3><img src='" + courses[i].badge
                 + "'>" + "<a href='" + courses[i].url + "' target='_blank' class='btn - btn-primary'>See Course</a>"
                 + "</div>";

                $("#badges").append(element);
            }
        }
    });
});
