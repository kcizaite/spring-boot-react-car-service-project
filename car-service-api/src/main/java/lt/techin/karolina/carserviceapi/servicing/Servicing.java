package lt.techin.karolina.carserviceapi.servicing;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.techin.karolina.carserviceapi.mechanics.Mechanic;

import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Servicing {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    private String address;
    private String manager;
    @OneToMany(mappedBy = "servicing")
    private List<Mechanic> mechanic;
}
