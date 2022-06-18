/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        owner
        listed
        orders {
          nextToken
        }
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
        owner
        listed
        orders {
          nextToken
        }
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
        owner
        listed
        orders {
          nextToken
        }
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
        owner
        listed
        orders {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedId
      }
      nextToken
    }
  }
`;
export const nftByOwner = /* GraphQL */ `
  query NftByOwner(
    $owner: String!
    $sortDirection: ModelSortDirection
    $filter: ModelNftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nftByOwner(
      owner: $owner
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
        owner
        listed
        orders {
          nextToken
        }
        createdAt
        updatedAt
        userOwnedId
      }
      nextToken
    }
  }
`;
export const nftByListedStatus = /* GraphQL */ `
  query NftByListedStatus(
    $listed: ListedStatus!
    $sortDirection: ModelSortDirection
    $filter: ModelNftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nftByListedStatus(
      listed: $listed
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
        owner
        listed
        orders {
          nextToken
        }
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
        owner
        listed
        orders {
          nextToken
        }
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
export const listNftOrders = /* GraphQL */ `
  query ListNftOrders(
    $filter: ModelNftOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNftOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const nftOrderByOrderId = /* GraphQL */ `
  query NftOrderByOrderId(
    $nftId: ID!
    $orderId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNftOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nftOrderByOrderId(
      nftId: $nftId
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        nfts {
          nextToken
        }
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
        nfts {
          nextToken
        }
        createdAt
        updatedAt
        nftOrderOrderId
        owner
      }
      nextToken
    }
  }
`;
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
          owner
          listed
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
          owner
          listed
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
      nextToken
    }
  }
`;
