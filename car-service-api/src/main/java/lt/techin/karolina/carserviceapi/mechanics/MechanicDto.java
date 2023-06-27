package lt.techin.karolina.carserviceapi.mechanics;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.techin.karolina.carserviceapi.servicing.Servicing;

@Setter
@Getter
@NoArgsConstructor
public class MechanicDto {
    private Long id;
    private String name;
    private String surname;
    private String specialisation;
    private String city;
    private int rating;
    private Servicing servicing;
}
