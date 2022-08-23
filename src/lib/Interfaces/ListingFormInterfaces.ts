export type getUserQuery = {
    data: {
      getUser: {
        Nfts?: []
        createdAt: string
        favorited?: []
        owner: string
        updatedAt: string
        userId: string
        username: string
        stripe_id?: string
      }
    }
  }
  
 export interface IstripeSignUpResponse {
    data: {
      signUpUser: {
        accountId: string
        object: string
        created: number
        expires_at: number
        url: string
      }
    }
  }
  
 export interface IupdateUserResponse {
    data: {
      checkAndUpdateAccount: {
        // enum value of 'SUCCESS or FAILED'
      }
    }
}
