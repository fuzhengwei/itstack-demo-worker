package itstack.demo.worker.domain.res;

import itstack.demo.worker.common.domain.EasyResult;
import itstack.demo.worker.domain.vo.DataTableColumn;

import java.util.List;

/**
 * Created by fuzhengwei1 on 2016/6/2.
 */
public class DataTableColumnRes {

    private EasyResult easyResult;
    private List<DataTableColumn> dataTableColumns;

    public EasyResult getEasyResult() {
        return easyResult;
    }

    public void setEasyResult(EasyResult easyResult) {
        this.easyResult = easyResult;
    }

    public List<DataTableColumn> getDataTableColumns() {
        return dataTableColumns;
    }

    public void setDataTableColumns(List<DataTableColumn> dataTableColumns) {
        this.dataTableColumns = dataTableColumns;
    }
}
