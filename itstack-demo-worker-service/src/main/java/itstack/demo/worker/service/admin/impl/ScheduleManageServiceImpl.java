package itstack.demo.worker.service.admin.impl;

import itstack.demo.worker.common.spring.ApplicationContextHelper;
import itstack.demo.worker.domain.vo.ScheduleVo;
import itstack.demo.worker.service.admin.ScheduleManageService;
import org.quartz.Scheduler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.quartz.CronTriggerBean;
import org.springframework.scheduling.quartz.SchedulerFactoryBean;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by fuzhengwei1 on 2016/5/31.
 */
@Service("scheduleManageService")
public class ScheduleManageServiceImpl implements ScheduleManageService {

    @Resource
    private ApplicationContextHelper applicationContextHelper;
    @Autowired
    private ArrayList<String> scheduleKeyList;
    @Autowired
    private HashMap<String, Scheduler> scheduleKeyMap;
    @Autowired
    private HashMap<String, String> scheduleValMap;

    @Override
    public List<ScheduleVo> queryScheduleList() throws Exception {
        List<ScheduleVo> scheduleVos = new ArrayList<ScheduleVo>();
        for (String key : scheduleKeyList) {
            String val = scheduleValMap.get(key);
            Scheduler scheduler = scheduleKeyMap.get(key);
            //获取cronExpression
            CronTriggerBean cronTriggerBean = applicationContextHelper.getBean(key.replace("Scheduler","TaskTrigger"), CronTriggerBean.class);
            String cronEx = cronTriggerBean.getCronExpression();
            ScheduleVo vo = new ScheduleVo();
            vo.setKey(key);
            vo.setDesc(val);
            vo.setInStandbyMode(!scheduler.isInStandbyMode());
            vo.setCronEx(cronEx);

            scheduleVos.add(vo);
        }
        return scheduleVos;
    }

    @Override
    public void doStartSchedule(List<String> scheduleKeys) throws Exception {
        for (String scheduleKey : scheduleKeys) {
            Scheduler scheduler = scheduleKeyMap.get(scheduleKey);
            //校验是否已经启动
            if (scheduler.isInStandbyMode()){
                scheduler.start();
            }
        }
    }

    @Override
    public void doStopSchedule(List<String> scheduleKeys) throws Exception {
        for (String scheduleKey : scheduleKeys) {
            Scheduler scheduler = scheduleKeyMap.get(scheduleKey);
            //校验是否已经启动
            if (!scheduler.isInStandbyMode()){
                scheduler.standby();
            }
        }
    }
}
