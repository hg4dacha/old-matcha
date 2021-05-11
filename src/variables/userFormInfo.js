export const userFormInfo = () => {
    return (
        [
            {
                label: 'Nom',
                info: 'ok',//lastname,
                id: 'lastname',
                type:'text',
                small: false,
                stateInfo: 'ok'//infoState.lastname
            },

            {
                label: 'Prénom',
                info: 'ok',//firstname,
                id: 'firstname',
                type:'text',
                small: false,
                stateInfo: 'ok'//infoState.firstname
            },

            {
                label: 'Nom d\'utilisateur',
                info: 'ok',//username,
                type:'text',
                small: 'ex: pseudo, pseudo46, pseudo-46, pseudo_46 (15 car. max).',
                id: 'username',
                stateInfo: 'ok'//infoState.username
            },

            {
                label: 'E-mail',
                info: 'ok',//email,
                type:'email',
                small: false,
                id: 'email',
                stateInfo: 'ok'//infoState.email
            }

        ] 
    )
}