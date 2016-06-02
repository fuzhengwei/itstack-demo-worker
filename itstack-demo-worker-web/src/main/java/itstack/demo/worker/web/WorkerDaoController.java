package itstack.demo.worker.web;

import itstack.demo.worker.common.utils.GsonUtils;
import itstack.demo.worker.domain.po.TableColumn;
import itstack.demo.worker.domain.vo.DataTableColumn;
import itstack.demo.worker.service.WorkerDaoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by fuzhengwei1 on 2016/6/2.
 */
@Controller("workerDaoController")
@RequestMapping("/workerDaoController/")
public class WorkerDaoController {

    private Logger logger = LoggerFactory.getLogger(WorkerDaoController.class);

    @Resource
    private WorkerDaoService workerDaoService;

    @RequestMapping(value = "showColumns")
    @ResponseBody
    public List<DataTableColumn> showColumns(String table) {
        List<DataTableColumn> dataTableColumns = new ArrayList<DataTableColumn>();
        List<TableColumn> tableColumns = workerDaoService.showColumns(table);
        DataTableColumn ck = new DataTableColumn();
        ck.setField("ok");
        ck.setCheckbox(true);
        dataTableColumns.add(ck);
        for (TableColumn tableColumn : tableColumns) {
            DataTableColumn dataTableColumn = new DataTableColumn();
            dataTableColumn.setField(tableColumn.getField());
            dataTableColumn.setTitle(tableColumn.getField());
            dataTableColumn.setAlign("left");
            dataTableColumns.add(dataTableColumn);
        }
        logger.info("查询表字段。res：{}", GsonUtils.toJson(tableColumns));
        return dataTableColumns;
    }

    @RequestMapping(value = "selectBySql")
    @ResponseBody
    public List selectBySql(String sql) {
        List list = workerDaoService.selectBySql(sql);
        logger.info("查询表数据。res：{}",GsonUtils.toJson(list));
        return list;
    }


}
