/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($userId: String!) {
    getUser(userId: $userId) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $userId: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      userId: $userId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        username
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const userByUsername = /* GraphQL */ `
  query UserByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        userId
        username
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getNft = /* GraphQL */ `
  query GetNft($id: ID!) {
    getNft(id: $id) {
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
export const listNfts = /* GraphQL */ `
  query ListNfts(
    $filter: ModelNftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNfts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        imageID
        createdAt
        updatedAt
        userNftsId
        owner
      }
      nextToken
    }
  }
`;
export const nftByName = /* GraphQL */ `
  query NftByName(
    $name: String!
    $sortDirection: ModelSortDirection
    $filter: ModelNftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nftByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        imageID
        createdAt
        updatedAt
        userNftsId
        owner
      }
      nextToken
    }
  }
`;
export const nftByPrice = /* GraphQL */ `
  query NftByPrice(
    $price: Int!
    $sortDirection: ModelSortDirection
    $filter: ModelNftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nftByPrice(
      price: $price
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        imageID
        createdAt
        updatedAt
        userNftsId
        owner
      }
      nextToken
    }
  }
`;
export const nftByCategory = /* GraphQL */ `
  query NftByCategory(
    $category: String!
    $sortDirection: ModelSortDirection
    $filter: ModelNftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nftByCategory(
      category: $category
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        imageID
        createdAt
        updatedAt
        userNftsId
        owner
      }
      nextToken
    }
  }
`;
export const searchNfts = /* GraphQL */ `
  query SearchNfts(
    $filter: SearchableNftFilterInput
    $sort: [SearchableNftSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableNftAggregationInput]
  ) {
    searchNfts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
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
        imageID
        createdAt
        updatedAt
        userNftsId
        owner
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
