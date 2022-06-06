/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const signUpUser = /* GraphQL */ `
  mutation SignUpUser($input: SignUpUserInput!) {
    signUpUser(input: $input)
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
      owner {
        userId
        username
        stripe_id
        createdAt
        updatedAt
        owner
      }
      listed
      orders {
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
      owner {
        userId
        username
        stripe_id
        createdAt
        updatedAt
        owner
      }
      listed
      orders {
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
      owner {
        userId
        username
        stripe_id
        createdAt
        updatedAt
        owner
      }
      listed
      orders {
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
      nft_id
      order_id
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
        listed
        createdAt
        updatedAt
        userOwnedId
      }
      order {
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
      nft_id
      order_id
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
        listed
        createdAt
        updatedAt
        userOwnedId
      }
      order {
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
      nft_id
      order_id
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
        listed
        createdAt
        updatedAt
        userOwnedId
      }
      order {
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
        listed
        createdAt
        updatedAt
        userOwnedId
      }
      owned {
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
        listed
        createdAt
        updatedAt
        userOwnedId
      }
      stripe_id
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
        listed
        createdAt
        updatedAt
        userOwnedId
      }
      owned {
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
        listed
        createdAt
        updatedAt
        userOwnedId
      }
      stripe_id
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
        listed
        createdAt
        updatedAt
        userOwnedId
      }
      owned {
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
        listed
        createdAt
        updatedAt
        userOwnedId
      }
      stripe_id
      createdAt
      updatedAt
      owner
    }
  }
`;
