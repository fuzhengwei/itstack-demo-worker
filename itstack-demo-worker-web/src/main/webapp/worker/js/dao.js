console.info("hello");

var menu = {
    doSearch: function () {
        var sql = $("#sql").val();
        menu.doSearchWay(sql);
    },
    doSearchWay: function (sql) {
        sql = sql.toLowerCase();
        var head = sql.substring(0, sql.indexOf(" ")).trim();
        if ("select" == head) {
            var table;
            if (sql.indexOf("where") > 0) {
                table = sql.substring(sql.indexOf("from") + 5, sql.indexOf("where")).trim();
            } else {
                table = sql.substring(sql.indexOf("from") + 5, sql.length).trim();
            }
            menu.doSearchSelect(sql, table);
        }
    },
    doSearchSelect: function (sql, table) {
        console.info(sql);
        console.info(table);
        $("#dg tr").append("<th field='table' align='left'>table<\/th>");
        //获得数据列
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
                console.info(result);
            }, 'json');
    }
};