package itstack.demo.worker.test.dao;

import itstack.demo.worker.common.utils.GsonUtils;
import itstack.demo.worker.dao.WorkerDao;
import itstack.demo.worker.domain.po.TableColumn;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

/**
 * Created by fuzhengwei1 on 2016/6/2.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring-config.xml")
public class WorkerDaoTest {

    @Resource
    private WorkerDao workerDao;

    @Test
    public void test_showColumns(){
        List<TableColumn> list = workerDao.showColumns("activity");
        System.out.println(GsonUtils.toJson(list));
    }

    @Test
    public void test_selectBySql(){
        List<HashMap<String,String>> list = workerDao.selectBySql("select * from activity");
        System.out.println(GsonUtils.toJson(list));
    }

}
