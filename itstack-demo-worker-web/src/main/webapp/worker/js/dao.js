console.info("hello");

var menu = {
    doExec: function () {
        var sql = $("#sql").val();
        menu.doExecWay(sql);
    },
    doExecWay: function (sql) {
        sql = sql.toLowerCase().replace(";", "");
        var head = sql.substring(0, sql.indexOf(" ")).trim();
        var table;
        //获取表名
        if (sql.indexOf("where") > 0) {
            table = sql.substring(sql.indexOf("from") + 5, sql.indexOf("where")).trim();
        } else {
            table = sql.substring(sql.indexOf("from") + 5, sql.length).trim();
        }
        //分别处理
        if ("select" == head) {
            menu.doExecSelect(sql, table);
        } else if ("insert" == head) {
            menu.doExecInsert(sql, table);
        }
    },
    doExecSelect: function (sql, table) {
        $.get('/workerDaoController/showColumns.do',
            {
                table: table
            }, function (result) {
                $('#dg').datagrid(
                    {
                        url: '/workerDaoController/selectBySql.do?sql=' + sql + '&t=' + Math.random(),
                        fitColumns: true,
                        singleSelect: true,
                        rownumbers: true,
                        loadMsg: '',
                        height: 'auto',
                        columns: [result]
                    }
                );
            }, 'json');
    },
    doExecInsert: function (sql, table) {
        $.get('/workerDaoController/insertBySql.do',
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