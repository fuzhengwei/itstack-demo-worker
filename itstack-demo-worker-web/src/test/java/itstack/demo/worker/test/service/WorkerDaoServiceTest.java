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
        List<DataTableColumn> dataTableColumns = workerDaoService.showColumnsBySql(" select c.id as activityid,c.activityname,\n" +
                "                a.pin,a.inviteCode,a.userPin,a.activateTime,\n" +
                "                b.targetNum,b.completeNum,b.obtainLimit,b.obtainNum,b.execstatus,\n" +
                "                (select d.rewardcouponkey from activity_reward d where a.execId = d.execId) as rewardcouponkey,\n" +
                "                (select d.rewardstatus from activity_reward d where a.execId = d.execId) as rewardstatus\n" +
                "        from activity_exec_detail a\n" +
                "        left join activity_exec b on a.execId = b.id\n" +
                "        left join activity c on a.activityId = c.id");
        System.out.println("测试结果：" + GsonUtils.toJson(dataTableColumns));
    }

}
