export type getUserQuery = {
    data: {
      getUser: {
        // Nfts?: []
        createdAt: string
        favorited: []
        owner: string
        updatedAt: string
        userId: string
        username: string
        stripeId: string
        chargesEnabled: boolean,
        sold: [],
        owned: []
      }
    }
  }