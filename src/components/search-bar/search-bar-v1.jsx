import { useId } from "react";

export default function SearchBar({
    label = undefined,
    placeholder = undefined,
    btnSubmit = undefined,
    onSearch = (query) => { } //NOOP
}) {
    const inputId = useId();

    const handleSearchAction = (formData) => {
        // PreventDefault est fait via l'attribut "action" du form

        // Récuperation des données (sur base du "name" des inputs)
        const query = formData.get('query');
        
        // Communication avec le composant "parent"
        onSearch(query);
    };

    return (
        <form action={handleSearchAction}>
            {label && (
                <label htmlFor={inputId}>{label} : </label>
            )}
            <input name="query" id={inputId} type="text" placeholder={placeholder} />
            <button type="submit">{btnSubmit ?? 'Rechercher'}</button>
        </form>
    );
}