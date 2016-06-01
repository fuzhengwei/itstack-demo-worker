package itstack.demo.worker.service.schedule.impl;

import itstack.demo.worker.service.schedule.ScheduleExecutor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by fuzhengwei1 on 2016/6/1.
 */
public class DemoThreeTask implements ScheduleExecutor {

    private Logger logger = LoggerFactory.getLogger(DemoThreeTask.class);

    @Override
    public void execute() throws Exception {
        logger.info("DemoThreeTask：hello world");
    }
}
