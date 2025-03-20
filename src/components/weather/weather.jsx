import { useCallback } from "react";

export default function Weather({
    id, city, country, temp, tempLike, desc,
    btnActionText = undefined,
    btnActionFct = undefined
}) {

    const handleAction = useCallback(() => {
        btnActionFct && typeof(btnActionFct) === 'function' && btnActionFct(id);
    },[btnActionFct]);

    return (
        <div>
            <p>{city} ({country}) {btnActionFct && <span onClick={handleAction}>{btnActionText ?? '🟪'}</span>}</p>
            <p>Temperature : {temp}</p>
            <p>Ressenti : {tempLike}</p>
            <p>Description : {desc}</p>
        </div>
    );
}