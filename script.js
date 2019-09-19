$('document').ready(initApp);
function initApp(){
    // $('.intro_content').css('display','flex');
    $('.button, .nav_link_item').click(clickEvent);
}
function clickEvent(){
    var theSelected = this.innerText;
    console.log(theSelected);
    switch(theSelected){
        case "See My Work":
            $('.work_content').css('display','flex');
            $('.intro_content, .about_me_content, .contact_content').css('display','none');
            break;
        case "About Me":
            $('.about_me_content').css('display','flex');
            $('.intro_content, .work_content, .contact_content').css('display','none');
            break;
        case "Contact":
            $('.contact_content').css('display','flex');
            $('.intro_content, .work_content, .about_me_content').css('display','none');
            break;
        default:
            $('.intro_content').css('display','flex');
            $('.work_content, .about_me_content, .contact_content').css('display','none');  
            break;    
    }

}