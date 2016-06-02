package itstack.demo.worker.domain.po;

/**
 * Created by fuzhengwei1 on 2016/6/2.
 */
public class TableColumn {

    private String Extra;
    private String Key;
    private String Field;
    private String Type;
    private String Null;

    public String getExtra() {
        return Extra;
    }

    public void setExtra(String extra) {
        Extra = extra;
    }

    public String getKey() {
        return Key;
    }

    public void setKey(String key) {
        Key = key;
    }

    public String getField() {
        return Field;
    }

    public void setField(String field) {
        Field = field;
    }

    public String getType() {
        return Type;
    }

    public void setType(String type) {
        Type = type;
    }

    public String getNull() {
        return Null;
    }

    public void setNull(String aNull) {
        Null = aNull;
    }
}
