var menu = {
    doSearch: function () {
        $('#dg').datagrid('load');
    },
    doStartSchedule: function () {
        var rows = $('#dg').datagrid('getChecked');
        if (rows.length < 1) {
            $.messager.alert('警告', '没有选中任何数据');
            return;
        }
        var vos = new Array();
        for (var i = 0; i < rows.length; i++) {
            //只添加未开启的worker
            if (!rows[i].inStandbyMode) {
                vos.push(rows[i].key);
            }
        }
        $.messager.confirm('确认框',
            '确定启动吗？', function (r) {
                if (r) {
                    $.get('/scheduleController/doStartSchedule.do',
                        {
                            json: JSON.stringify(vos)
                        }, function (result) {
                            $('#dg').datagrid('load');
                        }, 'json');
                }
            });
    },
    doStopSchedule: function () {
        var rows = $('#dg').datagrid('getChecked');
        if (rows.length < 1) {
            $.messager.alert('警告', '没有选中任何数据');
            return;
        }
        var vos = new Array();
        for (var i = 0; i < rows.length; i++) {
            //只添加开启的worker
            if (rows[i].inStandbyMode) {
                vos.push(rows[i].key);
            }
        }
        $.messager.confirm('确认框',
            '确定关闭吗？', function (r) {
                if (r) {
                    $.get('/scheduleController/doStopSchedule.do',
                        {
                            json: JSON.stringify(vos)
                        }, function (result) {
                            $('#dg').datagrid('load');
                        }, 'json');
                }
            });
    }
};

var util = {
    scheduleStatus: function (value, row, index) {
        if (value) {
            return "开启";
        } else {
            return "关闭";
        }
    },
    cronExDesc: function (value, row, index) {
        return cronExData.cronParse(value);
    }
};

var cronExData = {
     setContent :[
        "0",
        "*",
        "*",
        "*",
        "*",
        "?",
        "*"
    ],
    cronParse: function (cronExDesc) {
        cronExData.setContent = cronExDesc.split(" ");
         var cronPareHtml =  "<div>\n" +
             "    <table border=0>\n" +
             "        <tr align=\"center\">\n" +
             "            <td width='25px'>项</td>\n" +
             "            <td width='25px'>秒</td>\n" +
             "            <td width='25px'>分</td>\n" +
             "            <td width='25px'>时</td>\n" +
             "            <td width='25px'>日</td>\n" +
             "            <td width='25px'>月</td>\n" +
             "            <td width='25px'>周</td>\n" +
             "            <td width='25px'>年</td>\n" +
             "        </tr>\n" +
             "        <tr align=\"center\">\n" +
             "            <td>值</td>\n" +
             "            <td>"+cronExData.setContent[0]+"</td>\n" +
             "            <td>"+cronExData.setContent[1]+"</td>\n" +
             "            <td>"+cronExData.setContent[2]+"</td>\n" +
             "            <td>"+cronExData.setContent[3]+"</td>\n" +
             "            <td>"+cronExData.setContent[4]+"</td>\n" +
             "            <td>"+cronExData.setContent[5]+"</td>\n" +
             "            <td>"+cronExData.setContent[6]+"</td>\n" +
             "        </tr>\n" +
             "    </table>\n" +
             "</div>";
        return cronPareHtml;
    }
};