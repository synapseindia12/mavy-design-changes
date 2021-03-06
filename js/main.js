$(window).load(function() {
"use strict";
$("html, body").animate({
scrollTop: 0
}, 1), $(".status").fadeOut(), $(".preloader").delay(350).fadeOut("slow")
}), $(document).ready(function() {
"use strict";

function t() {
var t = $(window).width(),
s = $(window).height() - 0;
$(".slideshow .item").css("min-height", s), t > s ? ($(".slideshow .bg-item").removeAttr("style"), $(".slideshow .bg-item").css("min-width", t)) : ($(".slideshow .bg-item").removeAttr("style"), $(".slideshow .bg-item").css("max-height", s), $(".slideshow .bg-item").css("max-width", "initial"))
}

function s() {
var t = $(".testimonials"),
s = $(window).scrollTop(),
e = t.offset().top,
a = e + t.height();
$("#testimonials-carousel-1").carousel(s >= a ? "pause" : "cycle")
}

function e(t) {
"success" === t.result ? ($(".alerts-newsletter").hide().html('<div class="alert alert-success alert-dismissible" role="alert"><button class="close" data-dismiss="alert" type="button"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Success!&nbsp;&nbsp;</strong>' + t.msg + "</div>").slideDown(), $(".alerts-newsletter").delay(1e4).slideUp()) : "error" === t.result && $(".alerts-newsletter").hide().html('<div class="alert alert-danger alert-dismissible" role="alert"><button class="close" data-dismiss="alert" type="button"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Error:&nbsp;&nbsp;</strong>' + t.msg + "</div>").slideDown()
}
$("html").niceScroll({
cursorcolor: "#777",
cursoropacitymax: .7,
cursorwidth: "9",
cursorborder: "none",
cursorborderradius: "10px",
background: "#ccc",
zindex: "9999999",
touchbehavior: !1
}), t(), $(window).on("resize", t);
var a = window.navigator.userAgent;
if (/iP(hone|od|ad)/.test(a) && ($(".stats .bg-section").css("display", "block"), $(".calltoaction .bg-section").css("display", "block")), $("#slideshow-carousel-1").carousel({
interval: 1e4
}), $(".countdown").countdown("2015/12/31", function(t) {
$(this).html(t.strftime('<div class="c1 col-xs-6 col-sm-3"><div class="count count-days center-block"><strong>%-D</strong><span>days</span></div></div><div class="c1 col-xs-6 col-sm-3"><div class="count count-hours center-block"><strong>%H</strong><span>hours</span></div></div><div class="c1 col-xs-6 col-sm-3"><div class="count count-minutes center-block"><strong>%M</strong><span>minutes</span></div></div><div class="c1 col-xs-6 col-sm-3"><div class="count count-seconds center-block"><strong>%S</strong><span>seconds</span></div></div>'))
}), $(".submit-form-trial").on("click", function() {
var t = !0;
if ($(".trial-form input[required=true]").each(function() {
$(this).css("border-color", ""), $.trim($(this).val()) || ($(this).css("border-color", "#d9534f"), t = !1);
var s = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
"email" !== $(this).attr("type") || s.test($.trim($(this).val())) || ($(this).css("border-color", "#d9534f"), t = !1)
}), t) {
var s = {
user_trial_name: $("input[name=trial-name]").val(),
user_trial_email: $("input[name=trial-email]").val(),
user_trial_phone: $("input[name=trial-phone]").val()
};
$.post("subscription_trial.php", s, function(t) {
if ("error" === t.type) {
var s = '<div class="alert alert-danger alert-dismissible" role="alert"><button class="close" data-dismiss="alert" type="button"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Error:&nbsp;&nbsp;</strong>' + t.text + "</div>";
$(".alerts-trial").hide().html(s).slideDown()
} else {
var s = '<div class="alert alert-success alert-dismissible" role="alert"><button class="close" data-dismiss="alert" type="button"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Success!&nbsp;&nbsp;</strong>' + t.text + "</div>";
$(".trial-form input").val(""), $(".alerts-trial").hide().html(s).slideDown(), $(".alerts-trial").delay(1e4).slideUp()
}
}, "json")
}
}), $(".trial-form input[required=true]").keyup(function() {
$(this).css("border-color", ""), $(".alerts-contact").slideUp()
}), $(".submit-modal-form-trial").on("click", function() {
var t = !0;
if ($(".modal-trial-form input[required=true]").each(function() {
$(this).css("border-color", ""), $.trim($(this).val()) || ($(this).css("border-color", "#d9534f"), t = !1);
var s = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
"email" !== $(this).attr("type") || s.test($.trim($(this).val())) || ($(this).css("border-color", "#d9534f"), t = !1)
}), t) {
var s = {
user_modal_trial_name: $("input[name=modal-trial-name]").val(),
user_modal_trial_email: $("input[name=modal-trial-email]").val(),
user_modal_trial_phone: $("input[name=modal-trial-phone]").val()
};
$.post("modal_subscription_trial.php", s, function(t) {
if ("error" === t.type) {
var s = '<div class="alert alert-danger alert-dismissible" role="alert"><button class="close" data-dismiss="alert" type="button"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Error:&nbsp;&nbsp;</strong>' + t.text + "</div>";
$(".alerts-trial-modal").hide().html(s).slideDown()
} else {
var s = '<div class="alert alert-success alert-dismissible" role="alert"><button class="close" data-dismiss="alert" type="button"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Success!&nbsp;&nbsp;</strong>' + t.text + "</div>";
$(".modal-trial-form input").val(""), $(".alerts-trial-modal").hide().html(s).slideDown(), $(".alerts-trial-modal").delay(1e4).slideUp()
}
}, "json")
}
}), $(".modal-trial-form input[required=true]").keyup(function() {
$(this).css("border-color", ""), $(".alerts-contact").slideUp()
}), $(".navbar").affix({
offset: {
top: $(window).height() - $(".navbar").height() - 2
}
}), $('a[href^="#anch"]').on("click", function(t) {
var s = $($(this).attr("href"));
s.length && (t.preventDefault(), $("html, body").animate({
scrollTop: s.offset().top
}, 1e3))
}), $("#gallery-carousel-1").slick({
dots: !0,
infinite: !0,
speed: 700,
slidesToShow: 4,
slidesToScroll: 4,
responsive: [{
breakpoint: 992,
settings: {
slidesToShow: 3,
slidesToScroll: 3
}
}, {
breakpoint: 768,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}]
}), $("#testimonials-carousel-1").carousel({
interval: 1e4
}), $(window).scroll(function() {
s()
}), 

$(function() {
function t() {
var t = $(window).scrollTop();
s.each(function() {
function s() {
return window.innerWidth / 14
}
var a = $(this);
if (a.hasClass("animated")) return !0;
var r = a.offset().top;
if (t > r - .7 * e && (a.addClass("animated"), a.hasClass("circle"))) {
var i = Circles.create({
id: "circle-1",
radius: s(),
value: 25,
maxValue: 100,
width: 18,
text: function(t) {
	return t + "%"
},
colors: ["#7a8691", "#d9534f"],
duration: 1200,
wrpClass: "circles-wrp",
textClass: "circles-text",
styleWrapper: !0,
styleText: !0
}),
l = Circles.create({
id: "circle-2",
radius: s(),
value: 50,
maxValue: 100,
width: 18,
text: function(t) {
	return t + "%"
},
colors: ["#7a8691", "#d9534f"],
duration: 1200,
wrpClass: "circles-wrp",
textClass: "circles-text",
styleWrapper: !0,
styleText: !0
}),
o = Circles.create({
id: "circle-3",
radius: s(),
value: 75,
maxValue: 100,
width: 18,
text: function(t) {
	return t + "%"
},
colors: ["#7a8691", "#d9534f"],
duration: 1200,
wrpClass: "circles-wrp",
textClass: "circles-text",
styleWrapper: !0,
styleText: !0
}),
n = Circles.create({
id: "circle-4",
radius: s(),
value: 100,
maxValue: 100,
width: 18,
text: function(t) {
	return t + "%"
},
colors: ["#7a8691", "#d9534f"],
duration: 1200,
wrpClass: "circles-wrp",
textClass: "circles-text",
styleWrapper: !0,
styleText: !0
});
window.onresize = function(t) {
i.updateRadius(s()), l.updateRadius(s()), o.updateRadius(s()), n.updateRadius(s())
}
}
})
} {
var s = $(".animateblock"),
e = $(window).height();
$(document).height()
}


$(window).scroll(function() {
t()
})
}), $(".subscription-mailchimp").ajaxChimp({
callback: e,
url: "http://templatespro.us10.list-manage.com/subscribe/post?u=e1b67e42c0c37f1e5eb1c76c6&amp;id=17c3681cdf"
}), $(".submit-form-contact").on("click", function() {
var t = !0;
if ($(".contact-form input[required=true], .contact-form textarea[required=true]").each(function() {
$(this).css("border-color", ""), $.trim($(this).val()) || ($(this).css("border-color", "#d9534f"), t = !1);
var s = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
"email" !== $(this).attr("type") || s.test($.trim($(this).val())) || ($(this).css("border-color", "#d9534f"), t = !1)
}), t) {
var s = {
user_fname: $("input[name=fname]").val(),
user_lname: $("input[name=lname]").val(),
user_email: $("input[name=email]").val(),
user_phone: $("input[name=phone]").val(),
user_company: $("input[name=company]").val(),
user_website: $("input[name=website]").val(),
subject: $("input[name=subject]").val(),
msg: $("textarea[name=message]").val()
};
$.post("contact.php", s, function(t) {
if ("error" === t.type) {
var s = '<div class="alert alert-danger alert-dismissible" role="alert"><button class="close" data-dismiss="alert" type="button"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Error:&nbsp;&nbsp;</strong>' + t.text + "</div>";
$(".alerts-contact").hide().html(s).slideDown()
} else {
var s = '<div class="alert alert-success alert-dismissible" role="alert"><button class="close" data-dismiss="alert" type="button"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Success!&nbsp;&nbsp;</strong>' + t.text + "</div>";
$(".contact-form input, .contact-form textarea").val(""), $(".alerts-contact").hide().html(s).slideDown(), $(".alerts-contact").delay(1e4).slideUp()
}
}, "json")
}
}), $(".contact-form input[required=true], .contact-form textarea[required=true]").keyup(function() {
$(this).css("border-color", ""), $(".alerts-contact").slideUp()
}), $("a[data-toggle=tooltip]").tooltip(), $("#modal-slide-video").on("hidden.bs.modal", function(t) {
$("#modal-slide-video iframe").attr("src", $("#modal-slide-video iframe").attr("src"))
}), navigator.userAgent.match(/IEMobile\/10\.0/)) {
var r = document.createElement("style");
r.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.querySelector("head").appendChild(r)
}

}), 

$(window).scroll(function() {
"use strict";
$(".parallax").each(function() {
var t = $(this),
s = $(window).scrollTop() / t.data("speed") / 2,
e = s + "px";
t.css("top", e)
}), $(this).scrollTop() > 100 ? $(".go-top").fadeIn() : $(".go-top").fadeOut()

});


