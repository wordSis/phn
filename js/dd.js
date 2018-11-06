window.onload=function(){
    (function(win,doc){
        win.addEventListener('resize',setFont,false);   
        setFont();
        function setFont(){
            doc.documentElement.style.fontSize = doc.documentElement.clientWidth/25+ 'px';  
        }
    })(window,document);
    //第二页开关
   ; (function(){
        var oBodyone=document.getElementById('bodyone')
        var oP2=document.getElementById('ops2');
        var oBt=document.getElementById('bt1');
        var oBt2=document.getElementById('bt2');
        oBt.onclick=function(){
            oP2.style.display='block';
            oBt.style.display='none';
            oBodyone.style.overflowY='hidden';

        };
        oBt2.onclick=function(){
            oP2.style.display='none';
            oBt.style.display='block';
            oBodyone.style.overflowY='auto';
        };
    })();
    $(function(){
            var mySwiper = new Swiper('.swiper-container',{
                pagination:'.swiper-pagination',
                pagationClickable:true,
                onSlideChangeEnd:function(swiper){
                    $('.dc-list>li>a').removeClass('active');
                    $('.dc-list>li>a').next().removeClass('on');
                    $('.dc-list>li>a').eq(swiper.activeIndex).addClass('active');
                    $('.dc-list>li>a').next().eq(swiper.activeIndex).addClass('on');
                },
            });
            $('.dc-list>li>a').click(function(){
                $('.dc-list>li>a').removeClass('active');
                $('.dc-list>li>a').next().removeClass('on');
                $(this).addClass('active');
                $(this).next().addClass('on');
                mySwiper.slideTo($('.dc-list>li>a').index(this),1000,false);
            }); 
        });

};