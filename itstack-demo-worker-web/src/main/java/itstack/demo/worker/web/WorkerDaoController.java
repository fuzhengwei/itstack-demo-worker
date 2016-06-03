package itstack.demo.worker.web;

import itstack.demo.worker.common.domain.EasyResult;
import itstack.demo.worker.common.utils.GsonUtils;
import itstack.demo.worker.domain.po.TableColumn;
import itstack.demo.worker.domain.res.DataTableColumnRes;
import itstack.demo.worker.domain.vo.DataTableColumn;
import itstack.demo.worker.service.WorkerDaoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
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

    @RequestMapping(value = "showColumnsByTable")
    @ResponseBody
    public DataTableColumnRes showColumnsByTable(String table) {
        DataTableColumnRes dataTableColumnRes = new DataTableColumnRes();
        try {
            logger.info("查询表字段。req：{}", table);
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
            dataTableColumnRes.setEasyResult(EasyResult.buildSuccessResult());
            dataTableColumnRes.setDataTableColumns(dataTableColumns);
        } catch (Exception e) {
            logger.error("查询表字段。req：{}", table, e);
            dataTableColumnRes.setEasyResult(EasyResult.buildErrResult(e));
        }
        return dataTableColumnRes;
    }

    @RequestMapping(value = "showColumnsBySql")
    @ResponseBody
    public DataTableColumnRes showColumnsBySql(String sql) {
        DataTableColumnRes dataTableColumnRes = new DataTableColumnRes();
        try {
            logger.info("查询表字段。req：{}", sql);
            List<DataTableColumn> dataTableColumns = workerDaoService.showColumnsBySql(sql);
            logger.info("查询表字段。res：{}", GsonUtils.toJson(dataTableColumns));
            dataTableColumnRes.setEasyResult(EasyResult.buildSuccessResult());
            dataTableColumnRes.setDataTableColumns(dataTableColumns);
        } catch (Exception e) {
            logger.error("查询表字段。req：{}", sql, e);
            dataTableColumnRes.setEasyResult(EasyResult.buildErrResult(e));
        }
        return dataTableColumnRes;
    }

    @RequestMapping(value = "selectBySql")
    @ResponseBody
    public String selectBySql(String sql) {
        try {
            logger.info("查询表数据。req：{}", sql);
            List list = workerDaoService.selectBySql(sql);
            logger.info("查询表数据。res：{}", GsonUtils.toJson(list));
            return GsonUtils.toJson(list);
        } catch (Exception e) {
            logger.error("查询表数据。req：{}", sql, e);
            return null;
        }

    }

    @RequestMapping(value = "insertBySql")
    @ResponseBody
    public EasyResult insertBySql(String sql) {
        try {
            logger.info("新增表数据。req：{}", sql);
            workerDaoService.insertBySql(sql);
            logger.info("新增表数据。res：ok");
            return EasyResult.buildSuccessResult();
        } catch (Exception e) {
            logger.error("新增表数据失败。req：{}", sql, e);
            return EasyResult.buildErrResult(e);
        }
    }

    @RequestMapping(value = "deleteBySql")
    @ResponseBody
    public EasyResult deleteBySql(String sql) {
        try {
            logger.info("删除表数据。req：{}", sql);
            workerDaoService.deleteBySql(sql);
            logger.info("删除表数据。res：ok");
            return EasyResult.buildSuccessResult();
        } catch (Exception e) {
            logger.error("删除表数据失败。req：{}", sql, e);
            return EasyResult.buildErrResult(e);
        }
    }

    @RequestMapping(value = "updateBySql")
    @ResponseBody
    public EasyResult updateBySql(String sql) {
        try {
            logger.info("修改表数据。req：{}", sql);
            workerDaoService.updateBySql(sql);
            logger.info("修改表数据。res：ok");
            return EasyResult.buildSuccessResult();
        } catch (Exception e) {
            logger.error("修改表数据失败。req：{}", sql, e);
            return EasyResult.buildErrResult(e);
        }
    }
}
