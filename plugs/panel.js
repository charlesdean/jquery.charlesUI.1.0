/*
 实现拖拽功能的面板
 * 当鼠标在面板边缘按下时可以拖动改变大小
 * 难点：
 * 拖动时要判断是否按下的状态
 * 实现思路
 * 申明一个变量来保存按下的状态
 * 当鼠标移动时判断是否在面板边缘按下，按下则改变cursor：属性否则不变
 * 2016/1/3完成
 * 
 * */
//鼠标按下时的状态  0.代表没有激发，1.代表在内部按下按下

		
		$(function(){
				//普通面板
				$("#btnDown").hide();
				$("#btnUp").on("click",function(){
					
					
					$(".basic_panel").slideUp("1000",function(){
						
						$("#btnUp").hide();
						$("#btnDown").show();
					});
					
				});
				$("#btnDown").on("click",function(){
					
					
					$(".basic_panel").slideDown("1000",function(){
						
						$("#btnDown").hide();
						$("#btnUp").show();
						
					});
					
				});
				
				
				//拖拽面板
				//0默认值1内部按下2代表在边缘按下
				var buttonClick = 0;
				//拖动的方向
				var aspect = "enable";
				//drag_panel距离左边的边距
				var m =  parseInt($(".drag_panel").offset().left);
				//drag_panel距离顶部的边距
				var n =  parseInt($(".drag_panel").offset().top);
				//当前鼠标的x坐标以body 左上角（0,0）
				var x;
				//当前鼠标的y坐标
				var y;
				//返回拖动指针的状态如果为true：在边缘
				//拖动锁机制默认关闭关闭,如果不在边缘上为默认图标：边缘上为拖动图标
				//true 拖拽图标支持拖拽 false 内部普图标
				var lock = false;
				//此方法不适合

	
				$(".drag_panel").on("mousedown",function(e){
					
				
					//判断在那个边缘上(八个方向)
				
					//判断按下的位置边缘上还是边缘内	
					
					if(!lock){
						//边缘内
						buttonClick = 1;
						
					}else if(lock){
						//边缘上
						//鼠标指针图标变为默认
						buttonClick = 2;
						
					}else{
						
						buttonClick = 0;
					}
				
					
					
				});
				$(".drag_panel").on("mouseup",function(e){
					
					
					
					//判断所在的位置 
					//如果在内部上图标为普通指针
				//	alert(buttonClick);
					buttonClick = 0;
					
				});

				//鼠标移动是改变大小
				$(".drag_panel").on("mousemove",function(e){
					
					//移动的时候判断鼠标指针的位置
					
					x  = e.pageX;
					y  = e.pageY;
					// 是否开启拖动
					if(!lock){
						
						$(".drag_panel").css("cursor","default");
						
					}
					
					//表达式的问题
					
					if(m + $(".drag_panel").innerWidth() - x<= 10  && n+$(".drag_panel").innerHeight() - y <= 10){

						//右下角
			
						$(this).hover(function(){	
							
							$(".drag_panel").css("cursor","se-resize");
						});
						
						aspect = "right_down";
						lock = true;
						
					}
					else if(m + $(".drag_panel").innerWidth() - x<= 10  ){
						
						//右边
			
						$(this).hover(function(){
								
							$(".drag_panel").css("cursor","e-resize");
						});
						aspect = "right";
						lock = true;
			
					}
					else if(n+$(".drag_panel").innerHeight() - y<= 10 ){
						//下边
				
						$(".drag_panel").hover(function(){
							
							$(".drag_panel").css("cursor","s-resize");
						});
						aspect = "down";
						lock = true;
			
					}else{
						
						lock = false;
					}
				
					
					//判断是否监听到按下事件
					if(buttonClick != 0){
						
						//鼠标按下了
						if(buttonClick == 2){
							
							//y坐标
							y = (y-n)+10;
							//边缘按下并且移动
							//判断在哪个边缘移动的方向
							if(aspect == "right"){
								//向右
								//只改变他的横坐标
								$(".title").css("width",x);
								$(this).css("width",x);
								
							}else if(aspect == "down"){
								//向下只改变面板的高度
								//不改变title的宽和高
								
								$(this).css("height",y);
								
							}else if(aspect == "right_down"){
								//右下
								//title 的宽度要变drag_panel的高度宽度都要改变
								$(".title").css("width",x);
								$(this).css({
									
									width:x,
									height:y
									
								});
							}else{
								
								lock = false;

							}
							
						}else {
							//内部按下移动失效图标不改变
						
							lock = false;

							
						}
					}else{
						
						//鼠标未按下，并且lock = true 
						buttonClick = 0;
				
					}
					
				
					
				});

				$("#btnClose").on("click",function(){
								
								
					$(".title,.drag_panel").hide();
								
				});
			})
			
	























