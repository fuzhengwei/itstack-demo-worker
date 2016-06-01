package itstack.demo.worker.web;

import itstack.demo.worker.common.domain.EasyResult;
import itstack.demo.worker.common.utils.GsonUtils;
import itstack.demo.worker.domain.vo.ScheduleVo;
import itstack.demo.worker.service.admin.ScheduleManageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
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
        } catch (Exception e) {
            logger.info("定时任务-查询任务列表信息失败。", e);
        }
        return map;
    }

    @RequestMapping(value = "doStartSchedule")
    @ResponseBody
    public EasyResult doStartSchedule(@RequestParam String json) {
        logger.info("启动定时任务。req：{}", json);
        try {
            ArrayList<String> list = GsonUtils.fromJson(json, new ArrayList<String>());
            scheduleManageService.doStartSchedule(list);
            logger.info("启动定时任务。req：ok");
            return EasyResult.buildSuccessResult();
        } catch (Exception e) {
            logger.error("启动定时任务失败。req：{}", json, e);
            return EasyResult.buildErrResult(e);
        }
    }

    @RequestMapping(value = "doStopSchedule")
    @ResponseBody
    public EasyResult doStopSchedule(@RequestParam String json) {
        logger.info("停止定时任务。req：{}", json);
        try {
            ArrayList<String> list = GsonUtils.fromJson(json, new ArrayList<String>());
            scheduleManageService.doStopSchedule(list);
            logger.info("停止定时任务。req：ok");
            return EasyResult.buildSuccessResult();
        } catch (Exception e) {
            logger.error("停止定时任务失败。req：{}", json, e);
            return EasyResult.buildErrResult(e);
        }
    }
}
