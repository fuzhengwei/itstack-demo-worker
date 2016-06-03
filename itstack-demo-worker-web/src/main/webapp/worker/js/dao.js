console.info("hello");

var menu = {
    doExec: function () {
        var sql = $("#sql").val();
        menu.doExecWay(sql);
    },
    doExecWay: function (sql) {
        sql = sql.toLowerCase().replace(";", "");
        var head = sql.substring(0, sql.indexOf(" ")).trim();
        //分别处理
        if ("select" == head) {
            var table;
            //获取表名
            if (sql.indexOf("where") > 0) {
                table = sql.substring(sql.indexOf("from") + 5, sql.indexOf("where")).trim();
            } else {
                table = sql.substring(sql.indexOf("from") + 5, sql.length).trim();
            }
            menu.doExecSelect(sql, table);
        } else if ("insert" == head) {
            menu.doExecInsert(sql);
        } else if ("delete" == head) {
            menu.doExecDelete(sql);
        } else if ("update" == head) {
            menu.doExecUpdate(sql);
        }
    },
    doExecSelect: function (sql, table) {
        $.get('/workerDaoController/showColumns.do',
            {
                table: table
            }, function (result) {
                if (result.easyResult.success){
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
                } else{
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