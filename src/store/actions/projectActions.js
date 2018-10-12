export const createProject = project => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore
            .collection('projects')
            .add({
                ...project,
                authorFirstName: 'Michael',
                authorLastName: 'Ang',
                authorId: 12345,
                createdAt: new Date(),
            })
            .then(() => dispatch({ type: 'CREATE_PROJECT', project }))
            .catch(error => dispatch({ type: 'CREATE_PROJECT_ERROR', error }));
    };
};
