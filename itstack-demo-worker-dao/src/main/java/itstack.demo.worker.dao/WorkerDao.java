package itstack.demo.worker.dao;

import itstack.demo.worker.domain.po.TableColumn;

import java.util.List;

/**
 * Created by fuzhengwei1 on 2016/6/2.
 */
public interface WorkerDao {

    List<TableColumn> showColumns(String table);

    List selectBySql(String sql);

}
