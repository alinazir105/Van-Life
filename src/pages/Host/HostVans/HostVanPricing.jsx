import { useOutletContext } from "react-router-dom";
export default function HostVanPricing(){
    const { price } = useOutletContext();

    return (
        <section className="host-van-pricing">
            <p><strong>${price}</strong>/day</p>
        </section>
    );
}