/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
