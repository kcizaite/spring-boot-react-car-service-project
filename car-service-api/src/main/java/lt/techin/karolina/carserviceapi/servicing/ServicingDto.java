package lt.techin.karolina.carserviceapi.servicing;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.techin.karolina.carserviceapi.mechanics.Mechanic;

import java.util.List;
@Setter
@Getter
@NoArgsConstructor
public class ServicingDto {
    private Long id;
    private String name;
    private String address;
    private String manager;
    private List<Mechanic> mechanic;
}
