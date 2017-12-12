// Select color input
// Select size input
// 默认颜色：黑色
let inputColor = '#000000';
// 默认画布宽度
let width = 1;
// 默认画布高度
let height = 1;

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // 先清空画布
    $('#pixel_canvas').empty();
    // 绘制行
    for (let i = 0; i < height; i++) {
        $('#pixel_canvas').append('<tr></tr>');
    }
    // 绘制列
    $('#pixel_canvas').find('tr').each(function () {
        for (let i = 0; i < width; i++) {
            $(this).append('<td></td>');
        }
    });
}

$('#colorPicker').click(function () {
});

// 点击提交时绘制画布
$('#sizePicker').submit(function () {
    width = $("#input_width").val();
    height = $('#input_height').val();

    makeGrid();
    return false;
});

// 处理用户点击画布
$('#pixel_canvas').on('click', 'td', function () {
    inputColor = $('#colorPicker').val();
    const currentColor = $(this).attr('style');

    if (currentColor === undefined) {
        $(this).css('background-color', inputColor);
    } else {
        $(this).removeAttr('style');
    }
});