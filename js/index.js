

//
// $.ajax({
//     url: datafilepath,
//     dataType: "json",
//     type: "get",
//     cache: false,
//     success: function (items) {
//         items.user.forEach(function (myUser, i) {
//             myUser.groups.forEach(function (myGroup, i) {
//             })
//         })
//     }
// });



jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
});
