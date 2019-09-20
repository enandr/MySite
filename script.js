$('document').ready(initApp);
function initApp(){
    $('.intro_button, .nav_link_item').click(clickEvent);
    $('.submit_btn').click(formSubmit);
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
function formSubmit (){
    var nameBox = $('.name').val();
    var emailBox = $('.email').val();
    var phoneBox = $('.phone').val();
    var messageBox = $('.message').val();
    $('.name, .email, .phone, .message').val("");
    console.log(nameBox+" : "+emailBox+" : "+phoneBox+" : "+messageBox);
    alert("For testing reasons only, message is not sent. Your inputs were: Name:"+nameBox+" Email: "+emailBox+" Phone: "+phoneBox+" Message: "+messageBox);
}