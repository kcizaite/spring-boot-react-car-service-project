package lt.techin.karolina.carserviceapi.servicing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicingService {
    @Autowired
    private ServicingRepository servicingRepository;

    public List<Servicing> getAll() {
        return servicingRepository.findAll();
    }

    public Servicing findById(Long id) {
        return servicingRepository.findById(id).orElse(new Servicing());
    }

    public Servicing create(Servicing servicing) {
        return servicingRepository.save(servicing);
    }

    public Servicing update(Servicing servicing) {
        if (servicingRepository.existsById(servicing.getId())) {
            return servicingRepository.save(servicing);
        } else {
            return null;
        }
    }

    public void deleteById(Long id) {
        servicingRepository.deleteById(id);
    }
}

