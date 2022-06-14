/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const signUpUser = /* GraphQL */ `
  mutation SignUpUser($input: SignUpUserInput!) {
    signUpUser(input: $input) {
      accountId
      signUpURL
      object
      created
      expires_at
      url
    }
  }
`;
export const createNft = /* GraphQL */ `
  mutation CreateNft(
    $input: CreateNftInput!
    $condition: ModelNftConditionInput
  ) {
    createNft(input: $input, condition: $condition) {
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
export const updateNft = /* GraphQL */ `
  mutation UpdateNft(
    $input: UpdateNftInput!
    $condition: ModelNftConditionInput
  ) {
    updateNft(input: $input, condition: $condition) {
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
export const deleteNft = /* GraphQL */ `
  mutation DeleteNft(
    $input: DeleteNftInput!
    $condition: ModelNftConditionInput
  ) {
    deleteNft(input: $input, condition: $condition) {
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
export const createNftOrder = /* GraphQL */ `
  mutation CreateNftOrder(
    $input: CreateNftOrderInput!
    $condition: ModelNftOrderConditionInput
  ) {
    createNftOrder(input: $input, condition: $condition) {
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
export const updateNftOrder = /* GraphQL */ `
  mutation UpdateNftOrder(
    $input: UpdateNftOrderInput!
    $condition: ModelNftOrderConditionInput
  ) {
    updateNftOrder(input: $input, condition: $condition) {
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
export const deleteNftOrder = /* GraphQL */ `
  mutation DeleteNftOrder(
    $input: DeleteNftOrderInput!
    $condition: ModelNftOrderConditionInput
  ) {
    deleteNftOrder(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
