package itstack.demo.worker.web;

import itstack.demo.worker.common.utils.GsonUtils;
import itstack.demo.worker.domain.vo.ScheduleVo;
import itstack.demo.worker.service.admin.ScheduleManageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by fuzhengwei1 on 2016/5/31.
 */
@Controller("scheduleController")
@RequestMapping("/scheduleController/")
public class ScheduleController {

    private Logger logger = LoggerFactory.getLogger(ScheduleController.class);

    @Resource
    private ScheduleManageService scheduleManageService;

    @RequestMapping(value = "queryScheduleList")
    @ResponseBody
    public Map<String, Object> queryScheduleList() {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            logger.info("定时任务-查询任务列表信息。");
            List<ScheduleVo> scheduleVos = scheduleManageService.queryScheduleList();
            map.put("total", scheduleVos.size());
            map.put("rows", scheduleVos);
            logger.info("定时任务-查询任务列表信息。 res：{}", GsonUtils.toJson(scheduleVos));
        } catch (Exception e){
            logger.info("定时任务-查询任务列表信息失败。",e);
        }
        return map;
    }

}
