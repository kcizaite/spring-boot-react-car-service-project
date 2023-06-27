import {ServiceListPage} from "../servicing/ServiceList";
import {MechanicListPage} from "../mechanics/MechanicsList";

export function AdminPage() {
    return (
        <div>
            <ServiceListPage />
            <MechanicListPage/>
        </div>
    );
}
