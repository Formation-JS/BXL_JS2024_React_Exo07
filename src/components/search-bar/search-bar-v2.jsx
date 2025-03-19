import { useActionState, useId } from "react";

export default function SearchBar({
    label = undefined,
    placeholder = undefined,
    btnSubmit = undefined,
    onSearch = (query) => { } //NOOP
}) {
    const inputId = useId();

    const handleSearchAction = async (state, formData) => {
        // PreventDefault est fait via l'attribut "action" du form

        // Fake Latence (ONLY FOR DEV !!!!!!!!!!!)
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Récuperation des données
        const query = formData.get('query')?.trim();

        // Validation
        if(!query) {
            return {
                error: 'Veuillez encoder une valeur !'
            }
        }
        
        // Communication avec le composant "parent"
        onSearch(query);

        return state;
    };

    const [formState, formAction, isPending] = useActionState(handleSearchAction, null);

    return (
        <form action={formAction}>
            {label && (
                <label htmlFor={inputId}>{label} : </label>
            )}
            <input name="query" id={inputId} type="text" placeholder={placeholder} />
            <button type="submit" disabled={isPending}>{btnSubmit ?? 'Rechercher'}</button>
            {formState?.error && (
                <span>{formState.error}</span>
            )}
        </form>
    );
}