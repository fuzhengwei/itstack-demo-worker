<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ include file="/res_head.jsp" %>
<html>
<head>
    <title>ERP-DAO</title>
    <%@ include file="/res_easyui.jsp" %>
</head>
<html>
<body>
<table id="dg" class="easyui-datagrid"
       style="width: 100%;"
       toolbar="#tb" rownumbers="true" fitColumns="true">
</table>
<!-- 工具栏 -->
<div id="tb" style="padding:2px 5px;">
    <a class="easyui-linkbutton" iconCls="icon-refresh" onclick="menu.doExec()">执行</a>
    <input id="sql" class="easyui-textbox"
           data-options="multiline:true"
           style="width:100%;height:150px" max="20">
</div>
<script language="javascript" type="text/javascript" src="/worker/js/dao.js"></script>
<link rel="stylesheet" href="/worker/css/worker.css"/>
</body>
</html>