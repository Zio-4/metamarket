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
        imageId
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
        createdAt
        updatedAt
        userOwnedId
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
      imageId
      owner {
        userId
        username
        createdAt
        updatedAt
        owner
      }
      orders {
        nextToken
      }
      createdAt
      updatedAt
      userOwnedId
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
        imageId
        createdAt
        updatedAt
        userOwnedId
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
        imageId
        createdAt
        updatedAt
        userOwnedId
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
        imageId
        createdAt
        updatedAt
        userOwnedId
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
        imageId
        createdAt
        updatedAt
        userOwnedId
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
        imageId
        createdAt
        updatedAt
        userOwnedId
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
export const getNftOrder = /* GraphQL */ `
  query GetNftOrder($id: ID!) {
    getNftOrder(id: $id) {
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
export const listNftOrders = /* GraphQL */ `
  query ListNftOrders(
    $filter: ModelNftOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNftOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nft_id
        order_id
        createdAt
        updatedAt
        nftOrdersId
        orderNftsId
        owner
      }
      nextToken
    }
  }
`;
export const nftOrderByOrderId = /* GraphQL */ `
  query NftOrderByOrderId(
    $nft_id: ID!
    $order_id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNftOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nftOrderByOrderId(
      nft_id: $nft_id
      order_id: $order_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nft_id
        order_id
        createdAt
        updatedAt
        nftOrdersId
        orderNftsId
        owner
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const orderByUser = /* GraphQL */ `
  query OrderByUser(
    $user: String!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderByUser(
      user: $user
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
