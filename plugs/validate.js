$(function(){
	
//				$.fn.extend({
//					
//					setErrorMessages: function(msg){
//						
//						$(this).css("background-color","#CCCCFF").val(msg);
//					}
//					
//				});
				
				//未完善：验证信息自己设定
				//重写on();
				//普通文本框
				//模拟easyUI data-options属性赋值
				
				$(".textFiled-validatebox").on("blur",function(){
					//判断是否输入
					
					var txt = $(this).val();
					if(txt.length == 0 || txt == null){
						
						$(".textFiled-validatebox").css("background-color","#CCCCFF").val("请输入内容！");
						
					}else{
						var reg = /^[a-z0-9_-]{3,16}$/;
						if(reg.test(txt)){
							
							$(".textFiled-validatebox").css("background-color","white");
						}else{
							
							$(".textFiled-validatebox").css("background-color","#CCCCFF").val("出现非法字符！");
						}
						
					}
					//alert(txt);
					//判断输入的类型
				});
				$(".textFiled-validatebox").on("focus",function(){
					//第一次
					if("" == $(this).val()){
						
						$(this).val("");
						
					}else if("请输入内容！" == $(this).val()){
						
						$(".textFiled-validatebox").css("background-color","white");
						$(this).val("");
						
					}else if("出现非法字符！" ==$(this).val()){
						
						$(".textFiled-validatebox").css("background-color","white");
						$(this).val("");
					}

				});
				
				
				
				//email插件
				$(".email-validatebox").on("blur",function(){
					
					var txt = $(".email-validatebox").val();
					//判断是否为空？提醒不能为空：(判断是否为email格式输入？通过：提醒输入正确格式地址)
					if("" == txt || txt.length == 0){
						
						$(".email-validatebox").css("background-color","#CCCCFF").val("请输入Email地址！");
					}else{
						//正则判断是否为邮箱
						var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
						if(reg.test(txt)){
							
							$(".email-validatebox").css("background-color","white");
							
						}else{
							
							$(".email-validatebox").css("background-color","#CCCCFF").val("Email地址格式错误！");
						}
					}
					
				})
				$(".email-validatebox").on("focus",function(){
					//第一次
					if("" == $(this).val()){
						
						$(this).val("");
						
					}else if("请输入Email地址！" == $(this).val()){
						
						$(".email-validatebox").css("background-color","white");
						$(this).val("");
						
					}else if("Email地址格式错误！" == $(this).val()){
						
						$(".email-validatebox").css("background-color","white");
						$(this).val("");
					}
					
				});
				
				//数字插件
				$(".number-validatebox").on("blur",function(){
				var txt = $(".number-validatebox").val();
					//判断是否为空？提醒不能为空：(判断是否为email格式输入？通过：提醒输入正确格式地址)
					if("" == txt || txt.length == 0){
						
						$(".number-validatebox").css("background-color","#CCCCFF").val("请输入数字");
					}else{
						//正则判断是否为数字
						var reg = /^[0-9]*$/;
						if(reg.test(txt)){
							
							$(".number-validatebox").css("background-color","white");
							
						}else{
							
							$(".number-validatebox").css("background-color","#CCCCFF").val("亲你不认识阿拉伯数字么！");
						}
					}
					
				})
				$(".number-validatebox").on("focus",function(){
					//第一次
					if("" == $(this).val()){
						
						$(this).val("");
						
					}else if("请输入数字！" == $(this).val()){
						
						$(".number-validatebox").css("background-color","white");
						$(this).val("");
						
					}else if("亲你不认识阿拉伯数字么！" == $(this).val()){
						
						$(".number-validatebox").css("background-color","white");
						$(this).val("");
					}
					
				});
				//url地址栏插件
				$(".url-validatebox").on("blur",function(){
				var txt = $(".url-validatebox").val();
					//判断是否为空？提醒不能为空：(判断是否为email格式输入？通过：提醒输入正确格式地址)
					if("" == txt || txt.length == 0){
						
						$(".url-validatebox").css("background-color","#CCCCFF").val("请输入网址");
					}else{
						//正则判断是否为数字
						var reg = /^http:\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
						if(reg.test(txt)){
							
							$(".url-validatebox").css("background-color","white");
							
						}else{
							
							$(".url-validatebox").css("background-color","#CCCCFF").val("http:开头");
						}
					}
					
				})
				$(".url-validatebox").on("focus",function(){
					//第一次
					if("" == $(this).val()){
						
						$(this).val("");
						
					}else if("请输入网址！" == $(this).val()){
						
						$(".url-validatebox").css("background-color","white");
						$(this).val("");
						
					}else if("http:开头" == $(this).val()){
						
						$(".url-validatebox").css("background-color","white");
						$(this).val("");
					}
					
				});
				
			})