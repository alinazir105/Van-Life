import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos(){
    const { imageUrl } = useOutletContext();

    return (
        <section className="host-van-photos">
            <img src={imageUrl} />
        </section>
    );
}