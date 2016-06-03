package itstack.demo.worker.service.impl;

import itstack.demo.worker.common.utils.GsonUtils;
import itstack.demo.worker.dao.WorkerDao;
import itstack.demo.worker.domain.po.TableColumn;
import itstack.demo.worker.domain.vo.DataTableColumn;
import itstack.demo.worker.service.WorkerDaoService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

/**
 * Created by fuzhengwei1 on 2016/6/2.
 */
@Service("workerDaoService")
public class WorkerDaoServiceImpl implements WorkerDaoService {

    @Resource
    private WorkerDao workerDao;

    @Override
    public List<TableColumn> showColumns(String table) {
        return workerDao.showColumns(table);
    }

    @Override
    public List selectBySql(String sql) {
        return workerDao.selectBySql(sql);
    }

    @Override
    public void insertBySql(String sql) {
        workerDao.insertBySql(sql);
    }

    @Override
    public void deleteBySql(String sql) {
        workerDao.deleteBySql(sql);
    }

    @Override
    public void updateBySql(String sql) {
        workerDao.updateBySql(sql);
    }

    @Override
    public List<DataTableColumn> showColumnsBySql(String sql) {
        List<DataTableColumn> dataTableColumns = new ArrayList<DataTableColumn>();
        if (sql.contains("limit")) {
            sql = sql.substring(0, sql.lastIndexOf("limit")) + " limit 1";
        } else {
            sql += " limit 1";
        }
        List<HashMap> list = workerDao.selectBySql(sql);
        HashMap ColumnsMap = list.get(0);
        Set<String> ColumnsList = ColumnsMap.keySet();
        for (String column : ColumnsList) {
            DataTableColumn dataTableColumn = new DataTableColumn();
            dataTableColumn.setField(column);
            dataTableColumn.setTitle(column);
            dataTableColumn.setAlign("left");
            dataTableColumns.add(dataTableColumn);
        }
        return dataTableColumns;
    }
}
