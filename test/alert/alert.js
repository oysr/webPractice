$(document).ready(function () {
    $("#t1").on("click", function () {
        let $alert = $(`<div class="my-alert">${Math.random()}</div>`);
        $(".alert-area").append($alert).change();  // 添加元素时手动触发change事件，让监听器能够知道新增了元素
        // change事件会先于下面的代码执行，从而实现新的提示替换旧的提示
        $alert.addClass('show');
        setTimeout(function () {
            $alert.addClass('hide');
            setTimeout(function () {
                $alert.remove();
            }, 1000);
        }, 2000);
    });
    $(".alert-area").on("change", function (e) {
        if ($(".alert-area").children().length !== 1) {
            $($(".alert-area").children().get(0)).addClass('hide');
        }
    });
    $("#t2").on('click', function () {
        // 向已有t1样式的元素重复添加t1样式并不会导致意外情况发生
        $(".test").addClass('t1');
    })
});