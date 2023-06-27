package lt.techin.karolina.carserviceapi.mechanics;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.techin.karolina.carserviceapi.servicing.Servicing;
import org.hibernate.validator.constraints.Range;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Mechanic {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    private String surname;
    private String specialisation;
    private String city;
    @Range(min = 1, max = 10)
    private int rating;
    @ManyToOne
    @JoinColumn(name = "servicing_id")
    private Servicing servicing;
}
