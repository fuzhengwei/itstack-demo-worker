/**
 * 记录秒、分、时、天、月、周、年的设置值，各个包含字段含义:<br>
 * notAss:设置为未指定<br>
 * everyTime:设置为每次都执行，如每秒、每分、每小时等<br>
 * range:设置为循环<br>
 * incremental:设置为递增<br>
 * last:设置为最后触发<br>
 * sn:设置为序号触发<br>
 * lwd:设置为最后工作日触发<br>
 * ass:设置为指定时间触发<br>
 */
var setContent = [
	"0",
	"*",
	"*",
	"*",
	"*",
	"?",
	"*"
];
/** 记录当前的设置项，最开始为秒 */
var setItem = 0;
/** 记录显示名称和前缀 */
var names = {name:"秒",pre:"s_"};
var tipsIcon = '<img src="style/tips.jpg" id="#id#tips" class="tips">';

/**
 * 根据类型设置不同的配置项
 * @param {} type 配置类别，如下：
 * s：配置秒的设置项；
 * min：配置分的设置项；
 * h：配置小时的设置项；
 * d：配置日的设置项；
 * m：配置月的设置项；
 * w：配置周的设置项；
 * y：配置年的设置项，本项为可选；
 */
function getWigets(type){
	if(typeof type != "string") {
		type = $(this).attr("id");
	}
	$("#contentSet").empty();
	var html = [];
	var radioHtml = [];
	var temp;
	switch(type) {
		case "s" :
			setItem = 0;
			names = {name:"秒",pre:"s_"};
			temp = getEveryTimeHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre+"everyTime_") );
			html.push(temp.content);

			temp = getRangeHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"range_"));
			html.push(temp.content);

			temp = getIncrementalHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"incr_"));
			html.push(temp.content);

			temp = getAssHtml(60);
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"ass_"));
			html.push(temp.content);
			break;
		case "min" :
			setItem = 1;
			names = {name:"分",pre:"min_"};

			temp = getEveryTimeHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre+"everyTime_") );
			html.push(temp.content);

			temp = getRangeHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"range_"));
			html.push(temp.content);

			temp = getIncrementalHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"incr_"));
			html.push(temp.content);

			temp = getAssHtml(60);
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"ass_"));
			html.push(temp.content);
			break;
		case "h" :
			setItem = 2;
			names = {name:"时",pre:"h_"};

			temp = getEveryTimeHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre+"everyTime_") );
			html.push(temp.content);

			temp = getRangeHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"range_"));
			html.push(temp.content);

			temp = getIncrementalHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"incr_"));
			html.push(temp.content);

			temp = getAssHtml(24);
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"ass_"));
			html.push(temp.content);
			break;
		case "d" :
			setItem = 3;
			names = {name:"日",pre:"d_"};

			temp = getNotAssHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre+"notAss_") );
			html.push(temp.content);

			temp = getEveryTimeHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre+"everyTime_") );
			html.push(temp.content);

			temp = getRangeHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"range_"));
			html.push(temp.content);

			temp = getIncrementalHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"incr_"));
			html.push(temp.content);

			temp = getLastHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre+"last_") );
			html.push(temp.content);

			temp = getLwdHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre+"lwd_") );
			html.push(temp.content);

			temp = getAssHtml(31, 1);
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"ass_"));
			html.push(temp.content);
			break;
		case "m" :
			setItem = 4;
			names = {name:"月",pre:"m_"};
			temp = getEveryTimeHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre+"everyTime_") );
			html.push(temp.content);

			temp = getRangeHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"range_"));
			html.push(temp.content);

			temp = getIncrementalHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"incr_"));
			html.push(temp.content);

			temp = getAssHtml(12, 1);
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"ass_"));
			html.push(temp.content);
			break;
		case "w" :
			setItem = 5;
			names = {name:"周",pre:"w_"};

			temp = getNotAssHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre+"notAss_") );
			html.push(temp.content);

			temp = getEveryTimeHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre+"everyTime_") );
			html.push(temp.content);

			temp = getRangeHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"range_"));
			html.push(temp.content);

			temp = getIncrementalHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"incr_"));
			html.push(temp.content);

			temp = getLastHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre+"last_") );
			html.push(temp.content);

			temp = getSnHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre+"sn_") );
			html.push(temp.content);

			temp = getAssHtml(7);
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"ass_"));
			html.push(temp.content);
			break;
		case "y" :
			setItem = 6;
			names = {name:"年",pre:"y_"};

			temp = getEveryTimeHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre+"everyTime_") );
			html.push(temp.content);

			temp = getRangeHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"range_"));
			html.push(temp.content);

			temp = getIncrementalHtml();
			radioHtml.push(temp.radio+tipsIcon.replace("#id#", names.pre +"incr_"));
			html.push(temp.content);
			break;
	}
	$("#contentSetRadio").html(radioHtml.join("&nbsp;&nbsp;"));
	$("#contentSet").html(html.join(""));
	showTips();
	bindClick();
	parse2Ui();
}

/**
 * cron表达式不指定设置的html片段，即选择此项，则表达式中的为?，<br>
 * 只适用于日和周两项设置上
 * @return {} html片段
 */
function getNotAssHtml() {
	return {radio:'<input type="radio" name="radio" value="notass" checked>不指定',
		content:""};
}
/**
 * cron表达式设置所有事件段都触发，如每秒、每分、每小时触发等<br>
 * 设置此项，则表达式中设置为*
 * @return {} html片段
 */
function getEveryTimeHtml() {
	return {radio:'<input type="radio" name="radio" value="everyTime">每'+names.name+'触发',
		content:""};
}
/**
 * cron表达式设置循环触发，如从某个时间到某个时间段触发<br>
 * 设置此项，则表达式中设置为-，如在分设置23-35，则表示在23~35分期间触发。
 * @return {} html片段
 */
function getRangeHtml() {
	var content = '从<input id="from" class="number">' + names.name
			+ '到<input id="to" class="number">' + names.name;
	if(names.pre == "w_") {
		content = '从周<input id="from" class="number">到周<input id="to" class="number">';
	}
	content = '<span id="span_'+names.pre+'range" class="hide">'
			+ content + '</span>'
	return {radio:'<input type="radio" name="radio" value="range">循环触发',
		content:content};
}
/**
 * cron表达式设置递增触发，如从某个时间开始，每隔一段时间触发<br>
 * 设置此项，则表达式中设置为/，如在分设置23/5，则表示在23分开始，每5分钟触发。
 * @return {} html片段
 */
function getIncrementalHtml() {
	var content = '从<input id="start" class="number">'
			+ names.name + '开始，每<input id="apart" class="number">'
			+ names.name + '触发一次';
	if(names.pre == "w_") {
		content = '从周<input id="start" class="number">' +
				'开始，每<input id="apart" class="number">天触发一次';
	}
	content = '<span id="span_'+names.pre+'incr" class="hide">'
			+ content + '</span>'
	return {radio:'<input type="radio" name="radio" value="incr">递增触发',
		content:content};
}
/**
 * cron表达式设置最后触发。只能设置在周和日上<br>
 * 在日字段设置上，表示当月的最后一天(依据当前月份，如果是二月还会依据是否是润年[leap])<br>
 * 在周字段上表示星期六，相当于"7"或"SAT"。<br>
 * 如果在"L"前加上数字，此时只能设置在周上，则表示本月最后一个周几。<br>
 * 设置此项，则表达式中设置为L，如在日设置8L，则表示当月8日，每5分钟触发。
 * @return {} html片段
 */
function getLastHtml() {
	var content = "";
	if(names.pre == "w_") content += '最后一个周<input id="last" class="number">';
	content = '<span id="span_'+names.pre+'last" class="hide">'
			+ content + '</span>'
	return {radio:'<input type="radio" name="radio" value="last">最后触发',
		content:content};
}
/**
 * cron表达式设置每月的第几个周几。只能设置在周上<br>
 * 如5#2，表示每月第2个周五。<br>
 * 在表达式中符号为#
 * @return {} html片段
 */
function getSnHtml() {
	return {radio:'<input type="radio" name="radio" value="sn">序号触发',
		content:'<span id="span_'+names.pre+'sn" class="hide">'
		+ '每月第<input id="the" class="number">'
		+ '个周<input id="few" class="number">触发</span>'};
}
/**
 * cron表达式设置最近工作日（周一至周五）。只能设置在日上<br>
 * 如设置为12W，则表示离12日最近的那个工作日，如果12日为周六，则周五触发，如果为周日，则周一触发。<br>
 * 在表达式中符号为W
 * @return {} html片段
 */
function getLwdHtml() {
	return {radio:'<input type="radio" name="radio" value="lwd">最近工作日触发',
		content:'<span id="span_'+names.pre+'lwd" class="hide">'
		+ '每月<input id="lwd" class="number">日触发</span>'};
}
/**
 * cron表达式设置指定时间触发<br>
 * 设置此项，则表达式中设置为,，如在分设置34,45,54，则表示在34分\45分、54分触发。
 * @return {} html片段
 */
function getAssHtml(num, start) {
	var html = [];
	html.push('<span id="span_'+names.pre+'ass" class="hide">');
	html.push("<table>");
	html.push("<tr>");
	start = start ? start : 0;
	for(var i=start; i<num+start; i++) {
		html.push("<td>");
		html.push('<input type="checkbox" name="assNumCheckBox" value="'
				+i+'"><div class="checkbox_span">'+i+'</div>');
//		if(i<10) html.push("&nbsp;&nbsp;");
		html.push("</td>");
		if(start) {
			if (i % 10 == 0) {
				html.push("</tr><tr>");
			}
		} else {
			if ((i+1) % 10 == 0) {
				html.push("</tr><tr>");
			}
		}
	}
	html.push("</tr>");
	html.push("</table>");
	html.push('</span>');
	return {radio:'<input type="radio" name="radio" value="ass">指定'+names.name+'触发',
		content:html.join("")};
}
/**
 * 在checkbox后面的值上绑定单击事件
 */
function bindClick() {
	$(".checkbox_span").click(function(){
		var v = $(this).html();
		if(v) {
			var checkbox = $("input[name=assNumCheckBox][value="+v+"]");
			if(checkbox.attr("checked") == "checked") {
				checkbox.removeAttr("checked");
			} else {
				checkbox.attr("checked", "checked");
			}
		}
	});
	$("input[name=radio]").change(function(){
		var val = $(this).val();
		showWigets(val);
	});
}
/**
 * 显示指定控件
 * @param {} v
 */
function showWigets(v) {
	$("#span_" + names.pre + v).show();
	// 先隐藏所有输入控件
	$("span[id^='span_"+names.pre+"']").hide();
	//span_'+names.pre+'last
	// 再显示指定的控件
	$("#span_" + names.pre + v).show();
}

/**
 * 应用设置到各个设置项中。
 */
function applicationSet() {
	var v = $("input[name=radio]:checked").val();
	var setValue="";
	switch(v) {
		case "everyTime" :
			setValue = "*";
			break;
		case "range" :
			var fromValue = $("#from").val();
			var toValue = $("#to").val();
			if(fromValue && toValue && fromValue<toValue) {
				setValue = fromValue + "-" + toValue;
			}
			break;
		case "incr" :
			var startValue = $("#start").val();
			var apartValue = $("#apart").val();
			if(startValue && apartValue) {
				setValue = startValue + "/" + apartValue;
			}
			break;
		case "last" :
			var lastValue = $("#last").val();
			if(lastValue) {
				setValue = lastValue + "L";
			} else {
				setValue = "L";
			}
			break;
		case "sn" :
			var theValue = $("#the").val();
			var fewValue = $("#few").val();
			if(theValue && fewValue) {
				setValue = fewValue + "#"+theValue;
			}
			break;
		case "lwd" :
			var lwdValue = $("#lwd").val();
			if(lwd) {
				setValue = lwdValue+"W";
			}
			break;
		case "ass" :
			var v = [];
			$("input[type='checkbox']").each(function(){
				if($(this).attr("checked")){
					v.push($(this).val());
				}
			});
			setValue = v.join(",");
			break;
		case "notass" :
			setValue = "?";
			break;
	}
	if(setValue) {
		$("#"+names.pre+"td").html(setValue);
		setContent[setItem] = setValue;
	} else {
		alert("请选择设置项进行设置！");
	}
}
/**
 * 完成设置，生成表达式，并执行获取前10个触发时间
 */
function setOver() {
	var values = [];
	for(var i in setContent) {
		values.push(setContent[i]);
	}
	var exp = values.join(" ");
	$("#expression").val(exp);

	showExTime()
}
/**
 * 显示cron表达式的前10次触发时间
 */
function showExTime(){
	if($("#expression").val()=="")
		return;

	$.getScript("http://index.xuetang.cn/api/getCron?exp="+$("#expression").val(),function (d) {
				if(data && data.length>0) {
					var html = [];
					$.each(data,function(i,v){
						html.push("第"+i+"次触发："+v);
					});
					$("#examples").html(html.join("<br>"));
				} else {
					var info = "表达式格式异常，请重新设置！";
					$("#examples").html(info);
					alert(info);
				}
			}
	);

}
/**
 * 解析表达式到界面显示
 */
function parse2Ui(exp) {
	if(exp){
		setContent = exp.split(" ");
		// 解析到设置结果展示区
		$("td[id$='_td']").each(function(i, obj){
			$(obj).html(setContent[i]);
		});

		var expValue = setContent[setItem];
		var v = "";
		if(expValue == "*") {
			v = "everyTime";
		} else if(expValue.indexOf("-")>0) {
			v = "range";
			var value = expValue.split("-");
			$("#to").val(value[1]);
			$("#from").val(value[0]);
		} else if(expValue.indexOf("-")>0) {
			v = "incr";
			var value = expValue.split("/");
			$("#start").val(value[1]);
			$("#apart").val(value[0]);
		} else if(expValue.indexOf("L")>-1) {
			v = "last";
			if(expValue != "L") {
				var value = expValue.split("L");
				$("#last").val(value[1]);
			}
		} else if(expValue.indexOf("#")>0) {
			v = "sn";
			var value = expValue.split("#");
			$("#few").val(value[0]);
			$("#the").val(value[1]);
		} else if(expValue.indexOf("W")>0) {
			v = "lwd";
			var value = expValue.split("W");
			$("#lwd").val(value[0]);
		} else if(expValue.indexOf(",")>0) {
			v = "ass";
			var value = expValue.split(",");
			for(var i in value) {
				$("input[name=assNumCheckBox][value="+value[i]+"]").attr("checked", "checked");
			}
		} else if(expValue == "?") {
			v = "notass";
		}
		$("input[name=radio][value="+v+"]").attr("checked",'checked');

		showWigets(v);
	}
}
var tabPre = "tab_";
/**
 * 增加新的tab页
 * @param {} title tab页的标题
 * @param {} code tab页的编码
 * @param {} dir 加载页面所在目录
 */
function addPanel(title, code, dir, target){
	// 判断存在则直接选中，不存在才新增tab叶
	if(selectTab(title)) return;
	if(dir) dir = dir + "/";
	if(target == "_blank") {
		window.location.href = dir + code;
	} else {
		$('#contents').tabs('add',{
			title : title,
			href  : dir + code,
			closable : true
		});
	}
}
/**
 * 显示提示信息<br>
 * 通过前缀获取所有提示的img对象，并添加click事件
 */
function showTips() {
	$(".tips").each(function(i,obj){
		var id= $(obj).attr("id");
		$(obj).tooltip({
			content: $('<div class="tipsText">'+eval("tips."+id.substring(id.indexOf("_")+1, id.indexOf("_tips")))+'</div>'),
			onShow: function(){
				$(this).tooltip('tip').css({
					boxShadow: '1px 1px 3px #CCCCCC'
				});
				$(this).tooltip('arrow').css('left', 20);
				$(this).tooltip('tip').css('left', $(this).offset().left);
			},
			onUpdate: function(cc){
				cc.panel({
					width: 350,
					height: 'auto',
					border: false
				});
			}
		});
	});
}
$(function(){
	$("#parse2UI").click(function(){
		getWigets(names.pre.replace("_",""));
		parse2Ui();
		showExTime();
	});
})