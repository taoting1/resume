/**
 * 根据时段给出提示
 */
function sayHello () {
    var date = new Date();
    var milliseconds = date.setHours(12,0);
    var noonDate = new Date(milliseconds);   // 当日正午
    milliseconds = date.setHours(18,0);
    var afnoonDate = new Date(milliseconds);   // 当日下午
    date = new Date();
    if (date < noonDate) {
        alert('上午好');
    }else if (date > afnoonDate) {
        alert('晚上好');
    }else {
        alert('下午好');
    }
}

sayHello();