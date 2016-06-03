package itstack.demo.worker.service;

import itstack.demo.worker.domain.po.TableColumn;
import itstack.demo.worker.domain.vo.DataTableColumn;

import java.util.List;

/**
 * Created by fuzhengwei1 on 2016/6/2.
 */
public interface WorkerDaoService {

    List<TableColumn> showColumns(String table);

    List selectBySql(String sql);

    void insertBySql(String sql);

    void deleteBySql(String sql);

    void updateBySql(String sql);

    List<DataTableColumn> showColumnsBySql(String sql);
}
