package lt.techin.karolina.carserviceapi.servicing;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

import static lt.techin.karolina.carserviceapi.config.SwaggerConfig.BEARER_KEY_SECURITY_SCHEME;
import static lt.techin.karolina.carserviceapi.servicing.ServicingMapper.toServicing;
import static lt.techin.karolina.carserviceapi.servicing.ServicingMapper.toServicingDto;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/v1/services")
public class ServicingController {
    @Autowired
    private ServicingService servicingService;

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<ServicingDto> getServices() {
        return servicingService.getAll().stream().map(ServicingMapper::toServicingDto).toList();
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping(value = "/service/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<ServicingDto> getService(@PathVariable Long id) {
        return ok(toServicingDto(servicingService.findById(id)));
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/create-service", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<ServicingDto> createServicing(@RequestBody ServicingDto servicingDto) {
        var createServicing = servicingService.create(toServicing(servicingDto));
        return ok(toServicingDto(createServicing));
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @PutMapping(value = "/update-service/{id}", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<ServicingDto> updateServicing(@PathVariable Long id, @RequestBody ServicingDto servicingDto) {
        Servicing existingServicing = servicingService.findById(id);
        if (existingServicing != null) {
            Servicing updatedServicing = toServicing(servicingDto);
            updatedServicing.setId(id);
            Servicing savedServicing = servicingService.update(updatedServicing);
            if (savedServicing != null) {
                return ok(toServicingDto(savedServicing));
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @DeleteMapping(value = "/service-delete/{id}")
    public ResponseEntity<Void> deleteServicing(@PathVariable Long id) {
        Servicing existingServicing = servicingService.findById(id);
        if (existingServicing != null) {
            servicingService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
