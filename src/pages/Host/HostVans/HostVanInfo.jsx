import { useOutletContext } from "react-router-dom";
export default function HostVanInfo() {
    const {name, type, description} = useOutletContext()

    return (
        <section className="host-van-info">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Type:</strong> {type}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Visibility:</strong> Public</p>
        </section>
    );
}