package lt.techin.karolina.carserviceapi.rest;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginRequest {

    @Schema(example = "admin")
    @NotBlank
    private String username;

    @Schema(example = "admin")
    @NotBlank
    private String password;
}

