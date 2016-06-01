package itstack.demo.worker.service.admin;

import itstack.demo.worker.domain.vo.ScheduleVo;

import java.util.List;
/**
 * Created by fuzhengwei1 on 2016/5/31.
 */
public interface ScheduleManageService {

   List<ScheduleVo> queryScheduleList() throws Exception;

}
