/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNft = /* GraphQL */ `
  subscription OnCreateNft($owner: String) {
    onCreateNft(owner: $owner) {
      id
      name
      price
      category
      blockchain
      colors
      xCoordinate
      yCoordinate
      description
      imageId
      owner
      listed
      orders {
        items {
          id
          nftId
          orderId
          createdAt
          updatedAt
          nftOrdersId
          orderNftsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userOwnedId
    }
  }
`;
export const onUpdateNft = /* GraphQL */ `
  subscription OnUpdateNft($owner: String) {
    onUpdateNft(owner: $owner) {
      id
      name
      price
      category
      blockchain
      colors
      xCoordinate
      yCoordinate
      description
      imageId
      owner
      listed
      orders {
        items {
          id
          nftId
          orderId
          createdAt
          updatedAt
          nftOrdersId
          orderNftsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userOwnedId
    }
  }
`;
export const onDeleteNft = /* GraphQL */ `
  subscription OnDeleteNft($owner: String) {
    onDeleteNft(owner: $owner) {
      id
      name
      price
      category
      blockchain
      colors
      xCoordinate
      yCoordinate
      description
      imageId
      owner
      listed
      orders {
        items {
          id
          nftId
          orderId
          createdAt
          updatedAt
          nftOrdersId
          orderNftsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userOwnedId
    }
  }
`;
export const onCreateNftOrder = /* GraphQL */ `
  subscription OnCreateNftOrder($owner: String) {
    onCreateNftOrder(owner: $owner) {
      id
      nftId
      orderId
      nft {
        id
        name
        price
        category
        blockchain
        colors
        xCoordinate
        yCoordinate
        description
        imageId
        owner
        listed
        orders {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedId
      }
      order {
        items {
          id
          user
          date
          total
          createdAt
          updatedAt
          nftOrderOrderId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      nftOrdersId
      orderNftsId
      owner
    }
  }
`;
export const onUpdateNftOrder = /* GraphQL */ `
  subscription OnUpdateNftOrder($owner: String) {
    onUpdateNftOrder(owner: $owner) {
      id
      nftId
      orderId
      nft {
        id
        name
        price
        category
        blockchain
        colors
        xCoordinate
        yCoordinate
        description
        imageId
        owner
        listed
        orders {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedId
      }
      order {
        items {
          id
          user
          date
          total
          createdAt
          updatedAt
          nftOrderOrderId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      nftOrdersId
      orderNftsId
      owner
    }
  }
`;
export const onDeleteNftOrder = /* GraphQL */ `
  subscription OnDeleteNftOrder($owner: String) {
    onDeleteNftOrder(owner: $owner) {
      id
      nftId
      orderId
      nft {
        id
        name
        price
        category
        blockchain
        colors
        xCoordinate
        yCoordinate
        description
        imageId
        owner
        listed
        orders {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedId
      }
      order {
        items {
          id
          user
          date
          total
          createdAt
          updatedAt
          nftOrderOrderId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      nftOrdersId
      orderNftsId
      owner
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String) {
    onCreateOrder(owner: $owner) {
      id
      user
      date
      total
      nfts {
        items {
          id
          nftId
          orderId
          createdAt
          updatedAt
          nftOrdersId
          orderNftsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      nftOrderOrderId
      owner
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String) {
    onUpdateOrder(owner: $owner) {
      id
      user
      date
      total
      nfts {
        items {
          id
          nftId
          orderId
          createdAt
          updatedAt
          nftOrdersId
          orderNftsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      nftOrderOrderId
      owner
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String) {
    onDeleteOrder(owner: $owner) {
      id
      user
      date
      total
      nfts {
        items {
          id
          nftId
          orderId
          createdAt
          updatedAt
          nftOrdersId
          orderNftsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      nftOrderOrderId
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      userId
      username
      favorited {
        id
        name
        price
        category
        blockchain
        colors
        xCoordinate
        yCoordinate
        description
        imageId
        owner
        listed
        orders {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedId
      }
      owned {
        items {
          id
          name
          price
          category
          blockchain
          colors
          xCoordinate
          yCoordinate
          description
          imageId
          owner
          listed
          createdAt
          updatedAt
          userOwnedId
        }
        nextToken
      }
      sold {
        id
        name
        price
        category
        blockchain
        colors
        xCoordinate
        yCoordinate
        description
        imageId
        owner
        listed
        orders {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedId
      }
      stripeId
      chargesEnabled
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      userId
      username
      favorited {
        id
        name
        price
        category
        blockchain
        colors
        xCoordinate
        yCoordinate
        description
        imageId
        owner
        listed
        orders {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedId
      }
      owned {
        items {
          id
          name
          price
          category
          blockchain
          colors
          xCoordinate
          yCoordinate
          description
          imageId
          owner
          listed
          createdAt
          updatedAt
          userOwnedId
        }
        nextToken
      }
      sold {
        id
        name
        price
        category
        blockchain
        colors
        xCoordinate
        yCoordinate
        description
        imageId
        owner
        listed
        orders {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedId
      }
      stripeId
      chargesEnabled
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      userId
      username
      favorited {
        id
        name
        price
        category
        blockchain
        colors
        xCoordinate
        yCoordinate
        description
        imageId
        owner
        listed
        orders {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedId
      }
      owned {
        items {
          id
          name
          price
          category
          blockchain
          colors
          xCoordinate
          yCoordinate
          description
          imageId
          owner
          listed
          createdAt
          updatedAt
          userOwnedId
        }
        nextToken
      }
      sold {
        id
        name
        price
        category
        blockchain
        colors
        xCoordinate
        yCoordinate
        description
        imageId
        owner
        listed
        orders {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedId
      }
      stripeId
      chargesEnabled
      createdAt
      updatedAt
      owner
    }
  }
`;
