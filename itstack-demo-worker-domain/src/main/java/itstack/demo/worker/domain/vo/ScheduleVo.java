package itstack.demo.worker.domain.vo;

/**
 * Created by fuzhengwei1 on 2016/5/31.
 */
public class ScheduleVo {

    private String key;    //key
    private String desc;   //描述
    private boolean isInStandbyMode; //状态
    private String cronEx;             //cronExpression

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public boolean isInStandbyMode() {
        return isInStandbyMode;
    }

    public void setInStandbyMode(boolean inStandbyMode) {
        isInStandbyMode = inStandbyMode;
    }

    public String getCronEx() {
        return cronEx;
    }

    public void setCronEx(String cronEx) {
        this.cronEx = cronEx;
    }
}
