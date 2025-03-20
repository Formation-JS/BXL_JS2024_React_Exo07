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
        await new Promise((resolve) => setTimeout(resolve, 200));

        // Récuperation des données (sur base du "name" des inputs)
        const query = formData.get('query')?.trim();

        // Validation
        if(!query) {
            // La mise à jours du "state" avec un erreur
            return {
                error: 'Veuillez encoder une valeur !'
            }
        }
        
        // Communication avec le composant "parent"
        onSearch(query);

        // La mise à jours du "state"
        return {
            error: null
        };
    };

    //! Création d'un state basé sur une action (méthode)
    //  Parameters : - une méthode "action"
    //               - un state initial
    //  Return (collection) : - Le state
    //                        - L'action encapsuler par le hook
    //                        - Booléen pour indiqué si le traitement est en cours
    const [formState, formAction, isPending] = useActionState(handleSearchAction, {
        error: null
    });

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