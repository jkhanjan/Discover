
function loadingAnim(){;

    gsap.from("#logo",{
        opacity:0,
        x:-100,
        duration:1.2
    })

}
loadingAnim()


function scrollAnim(){
    gsap.to("#page1-img",{
        x:200,
        y:100,
        scale:0.5,
        duration:2,
        scrollTrigger:{
            trigger:"#page1",
            scroller:"body",
            start:"60% 50%",
            end:"60% 40%",
            // markers:true,
            scrub:2,
        }
    })

    gsap.to(".page1-header h1",{
        y:-200,
        duration:1.5,
        scrollTrigger:{
            trigger:"#page1",
            scroller:'body',
            start:"35% 25%",
            end:"35% 10%",
            // markers:true,
            scrub:true,
        }
    })
    gsap.from(".page2-header h1",{
        y:250,
        duration:1.5,
        scrollTrigger:{
            trigger:"#page1",
            scroller:'body',
            start:"bottom 45%",
            end:"bottom 20%",
            // markers:true,    
            scrub:true,
            // pin:true,    
        }
    })
    gsap.from("#page2-img img",{
        scale:0.5,
        duration:1.5,
        delay:1,
        y:-150,
        x:-120,
        scrollTrigger:{
            trigger:"#page1",
            // markers:true,
            start:'bottom 40%',
            end:'bottom 15%',
            scrub:true,
            // markers:true
        },
    })
    gsap.to(".page2-header h1",{
        y:-220,
        duration:1.5,
        scrollTrigger:{
            trigger:"#page2-content",
            scroller:'body',
            start:"center 80%",
            end:"center 60%",
            // markers:true,
            scrub:true,
            // pin:true,    
        }
    })
    gsap.to("#page2-img img",{
        scale:0.5,
        duration:2.5,
        y:-100,
        scrollTrigger:{
            trigger:"#page2",
            markers:true,
            start:'70% 80%',
            end:'70% 65%',
            scrub:true,
            // markers:true
        },
    })
    gsap.from("#page3-img img",{
        scale:0.5,
        duration:1.5,
        delay:1,
        y:-150,
        x:-120,
        scrollTrigger:{
            trigger:"#page2",
            // markers:true,
            start:'bottom 40%',
            end:'bottom 15%',
            scrub:true,
            // markers:true
        },
    })

    gsap.from(".page3-header h1",{
        y:250,
        duration:1.5,
        scrollTrigger:{
            trigger:"#page2",
            scroller:'body',
            start:"bottom 45%",
            end:"bottom 20%",
            // markers:true,    
            scrub:true,
            // pin:true,    
        }
    })

    gsap.to(".page3-header h1",{
        y:-220,
        duration:1.5,
        scrollTrigger:{
            trigger:"#page3-content",
            scroller:'body',
            start:"center 80%",
            end:"center 60%",
            // markers:true,
            scrub:true,
            // pin:true,    
        }
    })
}
scrollAnim()