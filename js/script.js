$(window).on("load", function () {
    $('body').addClass('loaded'); 
    var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]'));
     var tooltipList = tooltipTriggerList.map(
        function (tooltipTriggerEl) {
         return new bootstrap.Tooltip(tooltipTriggerEl);
     });
     let lang = get();
    change(lang);
    loadCourses(lang);
});


function change(lang) {
    $(".multilang").each(function (i, e) {
        let id = $(e).prop("id");
        let label = labels[id][lang];
        $(e).html(label);
    });

    loadCourses(lang);
    set(lang);
}

function set(lang) {
    window.localStorage.setItem('lang', lang);
}
function get() {
    if( !window.localStorage.getItem('lang')) {
        set("vi-VN");
    }
    return window.localStorage.getItem('lang');
}

function loadCourses(lang) {
    $("#course_List").html("");
    $.each(courseList, function (i, e) {
        let code = e.code;
        let name = e.name[lang];
        let startDate = new Date(e.startDate).toLocaleDateString(lang);
        let endDate = new Date(e.endDate).toLocaleDateString(lang);
        let fee = e.fee[lang];

        let tr = "<tr>" +
        "<td>" + code + "</td>" +
        "<td>" + name + "</td>" +
        "<td>" + startDate + "</td>" +
        "<td>" + endDate + "</td>" +
        "<td>" + fee + "</td>" +
        "<td class=\"d-grid\"><button class=\"btn btn-primary btn-lg\"><i class=\"fa fa-check-square\" aria-hidden=\"true\"></i></button>" +
        "</td>" +
        "</tr>";

        $("#course_List").append(tr);
    });
}