package itstack.demo.worker.service.schedule.impl;

import itstack.demo.worker.service.schedule.ScheduleExecutor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by fuzhengwei1 on 2016/5/31.
 */
public class DemoTwoTask implements ScheduleExecutor {

    private Logger logger = LoggerFactory.getLogger(DemoTwoTask.class);

    @Override
    public void execute() throws Exception {
        logger.info("DemoTwoTask：hello world");
    }
}
