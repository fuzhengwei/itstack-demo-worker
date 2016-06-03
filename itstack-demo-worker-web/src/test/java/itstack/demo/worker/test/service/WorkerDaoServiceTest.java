package itstack.demo.worker.test.service;

import itstack.demo.worker.common.utils.GsonUtils;
import itstack.demo.worker.domain.vo.DataTableColumn;
import itstack.demo.worker.service.WorkerDaoService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by fuzhengwei1 on 2016/6/3.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring-config.xml")
public class WorkerDaoServiceTest {


    @Resource
    private WorkerDaoService workerDaoService;

    @Test
    public void test_showColumnsBySql() {
        List<DataTableColumn> dataTableColumns = workerDaoService.showColumnsBySql("select * from activity_user limit 10,1");
        System.out.println("测试结果：" + GsonUtils.toJson(dataTableColumns));
    }

}
