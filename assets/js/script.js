var now = moment();
var hour = now.hour(); 
var b1 =  $("#b1");
var b2 =  $("#b2");
var b3 =  $("#b3");
var b4 =  $("#b4");
var b5 =  $("#b5");
var b6 =  $("#b6");
var b7 =  $("#b7");
var b8 =  $("#b8");
var b9 =  $("#b9");
var b10 =  $("#b10");

$("#currentDay").text(now.format("MMM Do, YYYY"));

$('.time-block').each(function(){
    var getId = $(this).attr('id');
    getId = parseInt(getId);

    if (getId < hour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (getId === hour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
});

b1.on("click", function () {
    var saveit9 = $('#item9').val();
    localStorage.setItem('9', saveit9);
});

var write9 = localStorage.getItem('9');
$('#item9').text(write9);

b2.on("click", function () {
    var saveit10 = $('#item10').val();
    localStorage.setItem('10', saveit10);
});

var write10 = localStorage.getItem('10');
$('#item10').text(write10);

b3.on("click", function () {
    var saveit11 = $('#item11').val();
    localStorage.setItem('11', saveit11);
});

var write11 = localStorage.getItem('11');
$('#item11').text(write11);

b4.on("click", function () {
    var saveit12 = $('#item12').val();
    localStorage.setItem('12', saveit12);
});

var write12 = localStorage.getItem('12');
$('#item12').text(write12);

b5.on("click", function () {
    var saveit13 = $('#item13').val();
    localStorage.setItem('13', saveit13);
});

var write13 = localStorage.getItem('13');
$('#item13').text(write13);

b6.on("click", function () {
    var saveit14 = $('#item14').val();
    localStorage.setItem('14', saveit14);
});

var write14 = localStorage.getItem('14');
$('#item14').text(write14);


b7.on("click", function () {
    var saveit15 = $('#item15').val();
    localStorage.setItem('15', saveit15);
});

var write15 = localStorage.getItem('15');
$('#item15').text(write15);

b8.on("click", function () {
    var saveit16 = $('#item16').val();
    localStorage.setItem('16', saveit16);
});

var write16 = localStorage.getItem('16');
$('#item16').text(write16);

b9.on("click", function () {
    var saveit17 = $('#item17').val();
    localStorage.setItem('17', saveit17);
});

var write17 = localStorage.getItem('17');
$('#item17').text(write17);

b10.on("click", function () {
    var saveit18 = $('#item18').val();
    localStorage.setItem('18', saveit18);
});

var write18 = localStorage.getItem('18');
$('#item18').text(write18);