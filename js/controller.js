var controller=new ScrollMagic.Controller();
var scene=new ScrollMagic.Scene({
    triggerElement: "#service1",

    offset: -300
})
    .setClassToggle("#service1","show")
    .addTo(controller);
var scene=new ScrollMagic.Scene({
    triggerElement: "#service2",

    offset: -300
})
    .setClassToggle("#service2","show")
    .addTo(controller);
var scene=new ScrollMagic.Scene({
    triggerElement: "#service3",

    offset: -300
})
    .setClassToggle("#service3","show")
    .addTo(controller);
var scene=new ScrollMagic.Scene({
    triggerElement: "#service4",

    offset: -300
})
    .setClassToggle("#service4","show")
    .addTo(controller);

var scene=new ScrollMagic.Scene({
    triggerElement: "#fixed-title",

    offset: -300
})
    .setClassToggle("#fixed-title","show")
    .addTo(controller);

