require(['config'],function(){
    require(['jquery','keCarousel','common'],function($){
        console.log(66);
        $('#header').load('html/header.html .header'); 
        $('#header').css('backgroundColor','#f6f6f6');
        $('#search').load('html/header.html .search');
        $('#nav').load('html/header.html .nav');
        $('#footer').load('html/footer.html .footer');

        $('#banner .carousel-box').keCarousel({
                imgs:['img/banner1.jpg','img/banner2.jpg','img/banner3.png','img/banner4.jpg'],
                width:1920,
                height:450,
                // type:'horizontal',
                type:'fade',
                duration:4000,
                page:true,
                marquee:false
            })

             
             
    })
})