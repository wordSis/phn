window.onload=function(){
   (function(){
        var oCont=document.getElementById('cont');
        var oBar=document.getElementById('bar');
        oCont.onmouseover=function(){
            oBar.style.display='none';
        }
        oCont.onmouseout=function(){
            oBar.style.display='block';
        }

    })();

    //开关
    ;(function(){
        var oBody=document.getElementById('body')
        var oP=document.getElementById('ops');
        var oBtn=document.getElementById('btn');
        var oBtn2=document.getElementById('btn2');
        var oPs=document.getElementById('opsul');
        var aP=oPs.getElementsByTagName('p');

        for(var i=0;i<aP.length;i++){
            aP[i].onclick=function(){
                oP.style.display='none';
                oBody.style.overflowY='auto';
                oBtn.style.display='block';
            };
        }
        oBtn.onclick=function(){
            oP.style.display='block';
            oBody.style.overflowY='hidden';
            oBtn.style.display='none';
        }
        oBtn2.onclick=function(){
            oP.style.display='none';
            oBody.style.overflowY='auto';
            oBtn.style.display='block';
        }
    })();

    //判断滚动条



    //swiper
    ;(function(){
        new Swiper('.swiper-container',{
            slidesPerView : 3,
            slidesPerGroup : 3,
            paginationClickable:true,
            scrollbar:'.swiper-scrollbar',
            scrollbarHide:true,
            nextButton:'.swiper-button-next',
            prevButton:'.swiper-button-prev',
            loop:true,
            scrollbar:'.swiper-scrollbar',
            scrollbarDraggable : true
        });
    })();

    //地图
    ;(function(){
        // 百度地图API功能
        var map = new BMap.Map("l-map");//116.404, 39.915
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 4);
        //map.setCenter(aa);//设置地图中心点，支持point和地名
        map.enableScrollWheelZoom();
        var local = new BMap.LocalSearch("全国", {
            renderOptions: {
                map: map
                //panel : "r-result",
                //autoViewport: true,
                //selectFirstResult: false
            }

        });
        map.addEventListener("click",function(e){
            document.getElementById("txtPoint").value=e.point.lng+','+e.point.lat ;
        });
        getPoint();
        function getPoint(){
            var city = document.getElementById("txtCity").value;
            local.search(city);
        }
    })();
};