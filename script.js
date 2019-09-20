$('document').ready(initApp);
function initApp(){
    $('.intro_button, .nav_link_item').click(clickEvent);
    $('.submit_btn').click(formSubmit);
    $('.hamburger').click(showMobieNav);
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
            $('.mobile_nav').css('display','none');
            mNavShowing = false;
            break;
        case "About Me":
            $('.about_me_content').css('display','flex');
            $('.intro_content, .work_content, .contact_content').css('display','none');
            $('.about_link').css('color',textAltColor);
            $('.home_link, .contact_link, .work_link').css('color',textMainColor)
            $('.mobile_nav').css('display','none');
            mNavShowing = false;
            break;
        case "Contact":
            $('.contact_content').css('display','flex');
            $('.intro_content, .work_content, .about_me_content').css('display','none');
            $('.contact_link').css('color',textAltColor);
            $('.home_link, .about_link, .work_link').css('color',textMainColor);
            $('.mobile_nav').css('display','none');
            mNavShowing = false;
            break;
        default:
            $('.intro_content').css('display','flex');
            $('.work_content, .about_me_content, .contact_content').css('display','none');
            $('.home_link').css('color',textAltColor);
            $('.about_link, .contact_link, .work_link').css('color',textMainColor);
            $('.mobile_nav').css('display','none');
            mNavShowing = false;
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

var mNavShowing = false;
var mNav = $('.mobile_nav');
function showMobieNav(){
    if (!mNavShowing){
        $('.mobile_nav').css('display','flex');
        mNavShowing = true;
    }
    else {
        $('.mobile_nav').css('display','none');
        mNavShowing = false;
    }
    
}