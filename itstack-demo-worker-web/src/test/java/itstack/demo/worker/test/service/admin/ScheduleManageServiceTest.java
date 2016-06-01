package itstack.demo.worker.test.service.admin;

import itstack.demo.worker.common.utils.GsonUtils;
import itstack.demo.worker.domain.vo.ScheduleVo;
import itstack.demo.worker.service.admin.ScheduleManageService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by fuzhengwei1 on 2016/5/31.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring-config.xml")
public class ScheduleManageServiceTest {

    private Logger logger = LoggerFactory.getLogger(ScheduleManageServiceTest.class);

    @Resource
    private ScheduleManageService scheduleManageService;

    @Test
    public void test_queryScheduleList() throws Exception {
        List<ScheduleVo> scheduleVos = scheduleManageService.queryScheduleList();
        logger.info(GsonUtils.toJson(scheduleVos));
    }

}
