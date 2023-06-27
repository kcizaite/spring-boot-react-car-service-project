package lt.techin.karolina.carserviceapi.mechanics;

public class MechanicMapper {
    public static Mechanic toMechanic(MechanicDto mechanicDto) {
        var mechanic = new Mechanic();
        mechanic.setId(mechanicDto.getId());
        mechanic.setName(mechanicDto.getName());
        mechanic.setSurname(mechanicDto.getSurname());
        mechanic.setSpecialisation(mechanicDto.getSpecialisation());
        mechanic.setCity(mechanicDto.getCity());
        mechanic.setRating(mechanicDto.getRating());
        mechanic.setServicing(mechanicDto.getServicing());

        return mechanic;
    }

    public static MechanicDto toMechanicDto(Mechanic mechanic) {
        var mechanicDto = new MechanicDto();
        mechanicDto.setId(mechanic.getId());
        mechanicDto.setName(mechanic.getName());
        mechanicDto.setSurname(mechanic.getSurname());
        mechanicDto.setSpecialisation(mechanic.getSpecialisation());
        mechanicDto.setCity(mechanic.getCity());
        mechanicDto.setRating(mechanic.getRating());
        mechanicDto.setServicing(mechanic.getServicing());

        return mechanicDto;
    }
}
