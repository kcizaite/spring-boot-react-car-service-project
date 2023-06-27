package lt.techin.karolina.carserviceapi.servicing;

public class ServicingMapper {
    public static Servicing toServicing(ServicingDto servicingDto) {
        var servicing = new Servicing();
        servicing.setId(servicingDto.getId());
        servicing.setName(servicingDto.getName());
        servicing.setAddress(servicingDto.getAddress());
        servicing.setManager(servicingDto.getManager());
        servicing.setMechanic(servicingDto.getMechanic());

        return servicing;
    }

    public static ServicingDto toServicingDto(Servicing servicing) {
        var servicingDto = new ServicingDto();
        servicingDto.setId(servicing.getId());
        servicingDto.setName(servicing.getName());
        servicingDto.setAddress(servicing.getAddress());
        servicingDto.setManager(servicing.getManager());
        servicingDto.setMechanic(servicing.getMechanic());

        return servicingDto;
    }
}
