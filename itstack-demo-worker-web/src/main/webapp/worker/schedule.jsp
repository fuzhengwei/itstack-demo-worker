<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ include file="/res_head.jsp" %>
<html>
<head>
    <title>ERP-定时任务</title>
    <%@ include file="/res_easyui.jsp" %>
</head>
<html>
<body>
<table id="dg" class="easyui-datagrid"
       style="width: 100%;" url="scheduleController/queryScheduleList.do"
       toolbar="#tb" rownumbers="true" fitColumns="true">
    <thead>
    <tr>
        <th data-options="field:'ck',checkbox:true"></th>
        <th field="key" align="left">
            Key
        </th>
        <th field="desc" align="left" >
            Desc
        </th>
        <th data-options="field:'inStandbyMode',formatter: util.scheduleStatus" align="center">
            Status
        </th>
    </tr>
    </thead>
</table>
<!-- 工具栏 -->
<div id="tb" style="padding:2px 5px;">
    <a href="javascript:void(0)" class="easyui-linkbutton" iconCls="icon-ok" plain="true" onclick="menu.doFileDown();">开启</a>
</div>
<script language="javascript" type="text/javascript" src="/worker/js/schedule.js"></script>
<link rel="stylesheet" href="/worker/css/worker.css"/>
</body>
</html>