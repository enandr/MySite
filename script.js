$('document').ready(initApp);
function initApp(){
    $('.intro_button, .nav_link_item').click(clickEvent);
    $('.submit_btn').click(formSubmit);
}
function clickEvent(){
    var textMainColor = getComputedStyle(document.documentElement).getPropertyValue('--main_text_color');
    var textAltColor = getComputedStyle(document.documentElement).getPropertyValue('--main_text_color_alt');
    var theSelected = this.innerText;
    console.log(theSelected);
    switch(theSelected){
        case "See My Work":
            $('.work_content').css('display','flex');
            $('.intro_content, .about_me_content, .contact_content').css('display','none');
            $('.work_link').css('color',textAltColor);
            $('.home_link, .about_link, .contact_link').css('color',textMainColor);
            break;
        case "About Me":
            $('.about_me_content').css('display','flex');
            $('.intro_content, .work_content, .contact_content').css('display','none');
            $('.about_link').css('color',textAltColor);
            $('.home_link, .contact_link, .work_link').css('color',textMainColor);
            break;
        case "Contact":
            $('.contact_content').css('display','flex');
            $('.intro_content, .work_content, .about_me_content').css('display','none');
            $('.contact_link').css('color',textAltColor);
            $('.home_link, .about_link, .work_link').css('color',textMainColor);
            break;
        default:
            $('.intro_content').css('display','flex');
            $('.work_content, .about_me_content, .contact_content').css('display','none');
            $('.home_link').css('color',textAltColor);
            $('.about_link, .contact_link, .work_link').css('color',textMainColor); 
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