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
    }
};