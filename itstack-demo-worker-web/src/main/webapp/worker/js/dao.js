console.info("hello");

var menu = {
    doExec: function () {
        var sql = $("#sql").val();
        menu.doExecWay(sql);
    },
    doExecWay: function (sql) {
        sql = sql.toLowerCase().replace(";", "").trim();
        if (null == sql || "" == sql) {
            menu.doExecShowMsg("I can't understand.");
            return;
        }
        //获得执行方式
        var head = sql.substring(0, sql.indexOf(" ")).trim();
        //分别处理
        if ("select" == head) {
            menu.doExecSelect(sql);
        } else if ("insert" == head) {
            menu.doExecInsert(sql);
        } else if ("delete" == head) {
            menu.doExecDelete(sql);
        } else if ("update" == head) {
            menu.doExecUpdate(sql);
        } else {
            menu.doExecShowMsg("I can't understand.");
        }
    },
    doExecSelect: function (sql) {
        $.get('/workerDaoController/showColumnsBySql.do',
            {
                sql: sql
            }, function (result) {
                if (result.easyResult.success) {
                    $('#dg').datagrid(
                        {
                            url: '/workerDaoController/selectBySql.do?sql=' + sql + '&t=' + Math.random(),
                            fitColumns: true,
                            singleSelect: true,
                            rownumbers: true,
                            loadMsg: '',
                            height: 'auto',
                            columns: [result.dataTableColumns]
                        }
                    );
                } else {
                    menu.doExecShowMsg(result.easyResult.msg);
                }
            }, 'json');
    },
    doExecInsert: function (sql) {
        $.get('/workerDaoController/insertBySql.do',
            {
                sql: sql
            }, function (result) {
                menu.doExecShowMsg(result.msg);
            }, 'json');
    },
    doExecDelete: function (sql) {
        $.get('/workerDaoController/deleteBySql.do',
            {
                sql: sql
            }, function (result) {
                menu.doExecShowMsg(result.msg);
            }, 'json');
    },
    doExecUpdate: function (sql) {
        $.get('/workerDaoController/updateBySql.do',
            {
                sql: sql
            }, function (result) {
                menu.doExecShowMsg(result.msg);
            }, 'json');
    },
    doExecShowMsg: function (msg) {
        $('#dg').datagrid(
            {
                data: [
                    {ExecMsg: msg}
                ],
                columns: [[
                    {field: 'ExecMsg', title: 'ExecMsg', align: 'left'}
                ]]
            }
        );
    }
};