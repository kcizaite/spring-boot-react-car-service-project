package lt.techin.karolina.carserviceapi.users;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class UserDto {
    private Long id;
    private String username;
    private String password;
    private String name;
    private String email;
    private String role;
}