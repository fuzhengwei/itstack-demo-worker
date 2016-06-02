<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/res_head.jsp"%>
<html>
<head>
    <title>后台控制管理</title>
    <link rel="stylesheet" href="${basePath}res/scripts/components/easyui/themes/default/easyui.css" type="text/css" />
    <link rel="stylesheet" href="${basePath}res/scripts/components/easyui/themes/icon.css" type="text/css" />
    <link rel="stylesheet" href="${basePath}res/styles/main.css" type="text/css" />
    <link rel="stylesheet" href="${basePath}res/styles/common.css" type="text/css" />

    <script type="text/javascript" src="${basePath}res/scripts/lib/jquery.min.js"></script>
    <script type="text/javascript" src="${basePath}res/scripts/components/easyui/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="${basePath}res/scripts/common/main.js"></script>
    <script type="text/javascript">
        $(document).ready(function(){
            top.menuCall('&nbsp;&nbsp;后台管理&nbsp;&nbsp;','',false);
            tabCloseEven();
        });
    </script>
</head>
<body class="easyui-layout">
<div region="north" class="north-back-main" style="height:90px" border="false" ondblclick="menuTop()">
    <div class="north-back-logo"></div>
    <div class="north-tool-wrap">
        <div style="color:#FFFFFF;text-align:right;">
            <span id="user"></span>
        </div>
        <div style="padding:25px 0px 0px 400px;">
            <a href="#"><span class="icon-exitsystem"></span></a>
        </div>
    </div>
</div>
<div region="west" split="true" title="&nbsp;管理选项 &gt;&gt;操作菜单" icon="icon-destop"
     style="width: 280px;overflow: hidden;">
    <div class="easyui-accordion" fit="true" border="true" animate="false" style="padding-bottom:0.5px;">

        <div title="&nbsp;Worker管理" icon="icon-menu" style="padding:10px;">
            <div style="padding: 5px 0pt 5px 10px;">
                <a href="javascript:void(0)" onclick="javascript:top.menuCall('定时任务','worker/schedule.jsp');">
                    <span class="icon-submenu-frame icon-submenu"></span> 定时任务
                </a>
            </div>
            <div style="padding: 5px 0pt 5px 10px;">
                <a href="javascript:void(0)" onclick="javascript:top.menuCall('数据管理','worker/dao.jsp');">
                    <span class="icon-submenu-frame icon-submenu"></span> 数据管理
                </a>
            </div>
        </div>
    </div>
</div>
<div region="center">
    <div id="main-center" class="easyui-tabs" fit="true" border="false">
        <!--选项卡右键功能-->
        <div id="mm" class="easyui-menu" style="width:150px;">
            <div id="mm-tabclose">关闭</div>
            <div id="mm-tabcloseall">关闭所有</div>
            <div id="mm-tabcloseother">关闭其它页面</div>
            <div class="menu-sep"></div>
            <div id="mm-tabcloseright">关闭右侧所有页面</div>
            <div id="mm-tabcloseleft">关闭左侧所有页面</div>
        </div>
    </div>
</div>
<div region="south" class="south-back-main" style="height:36px" border="false">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:12px;">
        <tr>
            <td align="center">管理中心--版权所有--盗版必究</td>
        </tr>
    </table>
</div>
</body>
</html>
