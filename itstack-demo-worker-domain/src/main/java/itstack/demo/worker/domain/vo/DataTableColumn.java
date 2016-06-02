package itstack.demo.worker.domain.vo;

/**
 * Created by fuzhengwei1 on 2016/6/2.
 */
public class DataTableColumn {

    private String field;
    private String title;
    private String align;
    private boolean checkbox;

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAlign() {
        return align;
    }

    public void setAlign(String align) {
        this.align = align;
    }

    public boolean isCheckbox() {
        return checkbox;
    }

    public void setCheckbox(boolean checkbox) {
        this.checkbox = checkbox;
    }
}
