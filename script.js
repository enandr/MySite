$('document').ready(initApp);
function initApp(){
    $('button').click(clickEvent);
}
function clickEvent(){
    $('.main_content').css('display','flex');
    $('.intro_content').css('display','none');
}