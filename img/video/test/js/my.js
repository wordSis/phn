window.onload=function(){
    //rem
    ;(function(win,doc){
        function change (){
            doc.documentElement.style.fontSize = 20*doc.documentElement.clientWidth/750+'px';
        }
        change();
        win.addEventListener('resize',change,false);
    })(window,document);

    //开关
    ;(function(){
        var oP=document.getElementById('ops');
        var oBtn=document.getElementById('btn');
        var oBtn2=document.getElementById('btn2');
        var oUl=document.getElementById('opsul');
        var aLi=oUl.getElementsByTagName('li');

        for(var i=0;i<aLi.length;i++){
            aLi[i].onclick=function(){

                oP.style.display='none';
            };
        }
        oBtn.onclick=function(){
            oP.style.display='block';
			oBtn.style.display='none';
        }
        oBtn2.onclick=function(){
            oP.style.display='none';
			oBtn.style.display='block';
        }
    })();

    //swiper
    ;(function(){
        new Swiper('.swiper-container',{
            slidesPerView : 3,
            slidesPerGroup : 3,
            paginationClickable:true,
            scrollbar:'.swiper-scrollbar',
            scrollbarHide:false,
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