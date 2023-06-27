package lt.techin.karolina.carserviceapi.mechanics;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static lt.techin.karolina.carserviceapi.config.SwaggerConfig.BEARER_KEY_SECURITY_SCHEME;
import static lt.techin.karolina.carserviceapi.mechanics.MechanicMapper.toMechanic;
import static lt.techin.karolina.carserviceapi.mechanics.MechanicMapper.toMechanicDto;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/v1/mechanics")
public class MechanicController {
    @Autowired
    private MechanicService mechanicService;

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<MechanicDto> getMechanics() {
        return mechanicService.getAll().stream().map(MechanicMapper::toMechanicDto).toList();
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping(value = "/mechanic/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<MechanicDto> getMechanic(@PathVariable Long id) {
        return ok(toMechanicDto(mechanicService.findById(id)));
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @PostMapping(value = "/create-mechanic", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<MechanicDto> createMechanic(@RequestBody MechanicDto mechanicDto, @RequestParam("servicingId") Long servicingId) {
        Mechanic mechanic = toMechanic(mechanicDto);
        Mechanic createdMechanic = mechanicService.create(mechanic, servicingId);
        MechanicDto createdMechanicDto = toMechanicDto(createdMechanic);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMechanicDto);
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @PutMapping(value = "/update-mechanic/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<MechanicDto> updateMechanic(@PathVariable Long id, @RequestBody MechanicDto mechanicDto) {
        Mechanic mechanic = toMechanic(mechanicDto);
        Mechanic updatedMechanic = mechanicService.update(id, mechanic);

        if (updatedMechanic != null) {
            MechanicDto updatedMechanicDto = toMechanicDto(updatedMechanic);
            return ResponseEntity.ok(updatedMechanicDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @DeleteMapping("/mechanic-delete/{id}")
    public ResponseEntity<Void> deleteMechanic(@PathVariable Long id) {
        mechanicService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping("/mechanic/{id}")
    public ResponseEntity<Double> getAverageRating() {
        double averageRating = mechanicService.calculateAverageRating();
        return ResponseEntity.ok(averageRating);
    }
}
