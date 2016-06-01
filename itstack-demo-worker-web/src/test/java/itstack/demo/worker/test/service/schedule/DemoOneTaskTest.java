package itstack.demo.worker.test.service.schedule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Created by fuzhengwei1 on 2016/5/31.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring-config.xml")
public class DemoOneTaskTest {

    @Test
    public void doExec() throws Exception{
        System.out.println("ok");
        //hold
        System.in.read();
    }

}
