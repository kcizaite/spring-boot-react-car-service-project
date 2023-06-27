package lt.techin.karolina.carserviceapi.mechanics;

import lt.techin.karolina.carserviceapi.servicing.Servicing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MechanicService {
    @Autowired
    private MechanicRepository mechanicRepository;
    public List<Mechanic> getAll() {
        return mechanicRepository.findAll();
    }

    public Mechanic findById(Long id) {
        return mechanicRepository.findById(id).orElse(new Mechanic());
    }
    public Mechanic create(Mechanic mechanic, Long servicingId) {
        Servicing servicing = new Servicing();
        servicing.setId(servicingId);
        mechanic.setServicing(servicing);
        return mechanicRepository.save(mechanic);
    }

    public Mechanic update(Long id, Mechanic updatedMechanic) {
        Mechanic existingMechanic = mechanicRepository.findById(id).orElse(null);

        if (existingMechanic != null) {
            existingMechanic.setName(updatedMechanic.getName());
            existingMechanic.setSurname(updatedMechanic.getSurname());
            existingMechanic.setSpecialisation(updatedMechanic.getSpecialisation());
            existingMechanic.setCity(updatedMechanic.getCity());
            existingMechanic.setRating(updatedMechanic.getRating());

            return mechanicRepository.save(existingMechanic);
        } else {
            return null;
        }
    }
    public void delete(Long id) {
        mechanicRepository.deleteById(id);
    }

    public double calculateAverageRating() {
        List<Mechanic> mechanics = mechanicRepository.findAll();
        if (mechanics.isEmpty()) {
            return 0.0;
        } else {
            int totalRating = 0;
            for (Mechanic mechanic : mechanics) {
                totalRating += mechanic.getRating();
            }
            return (double) totalRating / mechanics.size();
        }
    }
}
