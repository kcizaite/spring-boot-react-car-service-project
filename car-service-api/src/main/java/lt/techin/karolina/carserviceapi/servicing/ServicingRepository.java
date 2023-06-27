package lt.techin.karolina.carserviceapi.servicing;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicingRepository extends JpaRepository<Servicing, Long> {
}
