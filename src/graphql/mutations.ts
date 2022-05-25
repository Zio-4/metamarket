/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      imageID
      user {
        userId
        username
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userNftsId
      owner
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
      imageID
      user {
        userId
        username
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userNftsId
      owner
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
      imageID
      user {
        userId
        username
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userNftsId
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
        imageID
        createdAt
        updatedAt
        userNftsId
        owner
      }
      Nfts {
        nextToken
      }
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
        imageID
        createdAt
        updatedAt
        userNftsId
        owner
      }
      Nfts {
        nextToken
      }
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
        imageID
        createdAt
        updatedAt
        userNftsId
        owner
      }
      Nfts {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
