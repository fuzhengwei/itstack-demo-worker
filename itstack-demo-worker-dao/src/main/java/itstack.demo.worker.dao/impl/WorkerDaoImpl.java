package itstack.demo.worker.dao.impl;

import com.jd.common.dao.BaseDao;
import itstack.demo.worker.dao.WorkerDao;
import itstack.demo.worker.domain.po.TableColumn;

import java.util.List;

/**
 * Created by fuzhengwei1 on 2016/6/2.
 */
public class WorkerDaoImpl extends BaseDao implements WorkerDao {

    @Override
    public List<TableColumn> showColumns(String table) {
        return this.queryForList("Worker.showColumns", table);
    }

    public List selectBySql(String sql) {
        return this.queryForList("Worker.selectBySql", sql);
    }

    @Override
    public void insertBySql(String sql) {
        this.insert("Worker.insertBySql", sql);
    }
}
