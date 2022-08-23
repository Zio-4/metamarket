import { Auth, API } from 'aws-amplify';
import { getUser } from '../../graphql/queries';
import { getUserQuery } from '../Interfaces/AuthInterfaces'


export const signIn = async (username: string, password: string) => {
    let userSignInData

    try {
        const user = await Auth.signIn(username, password);
        const userData = await API.graphql({ query: getUser, variables: { userId: `${user.attributes.sub}`} }) as getUserQuery

        const email = user.attributes.email

        userSignInData = {...userData.data.getUser, email}
    } catch (error) {
        console.error('error signing in:', error);
        userSignInData = { error: error}
    }

    return userSignInData
}

export const signUp = async (email: string, username: string, password: string) => {
      try {
        const { user } = await Auth.signUp({
            username: username,
            password: password,
            attributes: {
                email: email
            }
        });
        return 'SUCCESS'
    } catch (e) {
        console.error('error: ', e)
        return { error: e}
    }
}