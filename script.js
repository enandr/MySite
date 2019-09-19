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
            $('.work_link').css('color','red');
            $('.home_link, .about_link, .contact_link').css('color','white');
            break;
        case "About Me":
            $('.about_me_content').css('display','flex');
            $('.intro_content, .work_content, .contact_content').css('display','none');
            $('.about_link').css('color','red');
            $('.home_link, .contact_link, .work_link').css('color','white');
            break;
        case "Contact":
            $('.contact_content').css('display','flex');
            $('.intro_content, .work_content, .about_me_content').css('display','none');
            $('.contact_link').css('color','red');
            $('.home_link, .about_link, .work_link').css('color','white');
            break;
        default:
            $('.intro_content').css('display','flex');
            $('.work_content, .about_me_content, .contact_content').css('display','none');
            $('.home_link').css('color','red');
            $('.about_link, .contact_link, .work_link').css('color','white'); 
            break;    
    }

}