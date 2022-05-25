/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNftInput = {
  id?: string | null,
  name: string,
  price: number,
  category: string,
  blockchain: string,
  colors?: Array< string | null > | null,
  xCoordinate?: string | null,
  yCoordinate?: string | null,
  description?: string | null,
  imageID: string,
  userNftsId?: string | null,
};

export type ModelNftConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelIntInput | null,
  category?: ModelStringInput | null,
  blockchain?: ModelStringInput | null,
  colors?: ModelStringInput | null,
  xCoordinate?: ModelStringInput | null,
  yCoordinate?: ModelStringInput | null,
  description?: ModelStringInput | null,
  imageID?: ModelStringInput | null,
  and?: Array< ModelNftConditionInput | null > | null,
  or?: Array< ModelNftConditionInput | null > | null,
  not?: ModelNftConditionInput | null,
  userNftsId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Nft = {
  __typename: "Nft",
  id: string,
  name: string,
  price: number,
  category: string,
  blockchain: string,
  colors?: Array< string | null > | null,
  xCoordinate?: string | null,
  yCoordinate?: string | null,
  description?: string | null,
  imageID: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  userNftsId?: string | null,
  owner?: string | null,
};

export type User = {
  __typename: "User",
  userId: string,
  username: string,
  favorited?:  Array<Nft | null > | null,
  Nfts?: ModelNftConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelNftConnection = {
  __typename: "ModelNftConnection",
  items:  Array<Nft | null >,
  nextToken?: string | null,
};

export type UpdateNftInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  category?: string | null,
  blockchain?: string | null,
  colors?: Array< string | null > | null,
  xCoordinate?: string | null,
  yCoordinate?: string | null,
  description?: string | null,
  imageID?: string | null,
  userNftsId?: string | null,
};

export type DeleteNftInput = {
  id: string,
};

export type CreateUserInput = {
  userId: string,
  username: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  userId: string,
  username?: string | null,
};

export type DeleteUserInput = {
  userId: string,
};

export type ModelUserFilterInput = {
  userId?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelNftFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelIntInput | null,
  category?: ModelStringInput | null,
  blockchain?: ModelStringInput | null,
  colors?: ModelStringInput | null,
  xCoordinate?: ModelStringInput | null,
  yCoordinate?: ModelStringInput | null,
  description?: ModelStringInput | null,
  imageID?: ModelStringInput | null,
  and?: Array< ModelNftFilterInput | null > | null,
  or?: Array< ModelNftFilterInput | null > | null,
  not?: ModelNftFilterInput | null,
  userNftsId?: ModelIDInput | null,
};

export type SearchableNftFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  price?: SearchableIntFilterInput | null,
  category?: SearchableStringFilterInput | null,
  blockchain?: SearchableStringFilterInput | null,
  colors?: SearchableStringFilterInput | null,
  xCoordinate?: SearchableStringFilterInput | null,
  yCoordinate?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  imageID?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  userNftsId?: SearchableIDFilterInput | null,
  and?: Array< SearchableNftFilterInput | null > | null,
  or?: Array< SearchableNftFilterInput | null > | null,
  not?: SearchableNftFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableNftSortInput = {
  field?: SearchableNftSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableNftSortableFields {
  id = "id",
  name = "name",
  price = "price",
  category = "category",
  blockchain = "blockchain",
  colors = "colors",
  xCoordinate = "xCoordinate",
  yCoordinate = "yCoordinate",
  description = "description",
  imageID = "imageID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userNftsId = "userNftsId",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableNftAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableNftAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableNftAggregateField {
  id = "id",
  name = "name",
  price = "price",
  category = "category",
  blockchain = "blockchain",
  colors = "colors",
  xCoordinate = "xCoordinate",
  yCoordinate = "yCoordinate",
  description = "description",
  imageID = "imageID",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userNftsId = "userNftsId",
}


export type SearchableNftConnection = {
  __typename: "SearchableNftConnection",
  items:  Array<Nft | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type CreateNftMutationVariables = {
  input: CreateNftInput,
  condition?: ModelNftConditionInput | null,
};

export type CreateNftMutation = {
  createNft?:  {
    __typename: "Nft",
    id: string,
    name: string,
    price: number,
    category: string,
    blockchain: string,
    colors?: Array< string | null > | null,
    xCoordinate?: string | null,
    yCoordinate?: string | null,
    description?: string | null,
    imageID: string,
    user?:  {
      __typename: "User",
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userNftsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateNftMutationVariables = {
  input: UpdateNftInput,
  condition?: ModelNftConditionInput | null,
};

export type UpdateNftMutation = {
  updateNft?:  {
    __typename: "Nft",
    id: string,
    name: string,
    price: number,
    category: string,
    blockchain: string,
    colors?: Array< string | null > | null,
    xCoordinate?: string | null,
    yCoordinate?: string | null,
    description?: string | null,
    imageID: string,
    user?:  {
      __typename: "User",
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userNftsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteNftMutationVariables = {
  input: DeleteNftInput,
  condition?: ModelNftConditionInput | null,
};

export type DeleteNftMutation = {
  deleteNft?:  {
    __typename: "Nft",
    id: string,
    name: string,
    price: number,
    category: string,
    blockchain: string,
    colors?: Array< string | null > | null,
    xCoordinate?: string | null,
    yCoordinate?: string | null,
    description?: string | null,
    imageID: string,
    user?:  {
      __typename: "User",
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userNftsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    userId: string,
    username: string,
    favorited?:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price: number,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageID: string,
      createdAt: string,
      updatedAt: string,
      userNftsId?: string | null,
      owner?: string | null,
    } | null > | null,
    Nfts?:  {
      __typename: "ModelNftConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    userId: string,
    username: string,
    favorited?:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price: number,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageID: string,
      createdAt: string,
      updatedAt: string,
      userNftsId?: string | null,
      owner?: string | null,
    } | null > | null,
    Nfts?:  {
      __typename: "ModelNftConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    userId: string,
    username: string,
    favorited?:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price: number,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageID: string,
      createdAt: string,
      updatedAt: string,
      userNftsId?: string | null,
      owner?: string | null,
    } | null > | null,
    Nfts?:  {
      __typename: "ModelNftConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  userId: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    userId: string,
    username: string,
    favorited?:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price: number,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageID: string,
      createdAt: string,
      updatedAt: string,
      userNftsId?: string | null,
      owner?: string | null,
    } | null > | null,
    Nfts?:  {
      __typename: "ModelNftConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  userId?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserByUsernameQueryVariables = {
  username: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByUsernameQuery = {
  userByUsername?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNftQueryVariables = {
  id: string,
};

export type GetNftQuery = {
  getNft?:  {
    __typename: "Nft",
    id: string,
    name: string,
    price: number,
    category: string,
    blockchain: string,
    colors?: Array< string | null > | null,
    xCoordinate?: string | null,
    yCoordinate?: string | null,
    description?: string | null,
    imageID: string,
    user?:  {
      __typename: "User",
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userNftsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListNftsQueryVariables = {
  filter?: ModelNftFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNftsQuery = {
  listNfts?:  {
    __typename: "ModelNftConnection",
    items:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price: number,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageID: string,
      createdAt: string,
      updatedAt: string,
      userNftsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NftByNameQueryVariables = {
  name: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNftFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NftByNameQuery = {
  nftByName?:  {
    __typename: "ModelNftConnection",
    items:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price: number,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageID: string,
      createdAt: string,
      updatedAt: string,
      userNftsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NftByPriceQueryVariables = {
  price: number,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNftFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NftByPriceQuery = {
  nftByPrice?:  {
    __typename: "ModelNftConnection",
    items:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price: number,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageID: string,
      createdAt: string,
      updatedAt: string,
      userNftsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NftByCategoryQueryVariables = {
  category: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNftFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NftByCategoryQuery = {
  nftByCategory?:  {
    __typename: "ModelNftConnection",
    items:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price: number,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageID: string,
      createdAt: string,
      updatedAt: string,
      userNftsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchNftsQueryVariables = {
  filter?: SearchableNftFilterInput | null,
  sort?: Array< SearchableNftSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableNftAggregationInput | null > | null,
};

export type SearchNftsQuery = {
  searchNfts?:  {
    __typename: "SearchableNftConnection",
    items:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price: number,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageID: string,
      createdAt: string,
      updatedAt: string,
      userNftsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    userId: string,
    username: string,
    favorited?:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price: number,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageID: string,
      createdAt: string,
      updatedAt: string,
      userNftsId?: string | null,
      owner?: string | null,
    } | null > | null,
    Nfts?:  {
      __typename: "ModelNftConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    userId: string,
    username: string,
    favorited?:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price: number,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageID: string,
      createdAt: string,
      updatedAt: string,
      userNftsId?: string | null,
      owner?: string | null,
    } | null > | null,
    Nfts?:  {
      __typename: "ModelNftConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    userId: string,
    username: string,
    favorited?:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price: number,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageID: string,
      createdAt: string,
      updatedAt: string,
      userNftsId?: string | null,
      owner?: string | null,
    } | null > | null,
    Nfts?:  {
      __typename: "ModelNftConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateNftSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateNftSubscription = {
  onCreateNft?:  {
    __typename: "Nft",
    id: string,
    name: string,
    price: number,
    category: string,
    blockchain: string,
    colors?: Array< string | null > | null,
    xCoordinate?: string | null,
    yCoordinate?: string | null,
    description?: string | null,
    imageID: string,
    user?:  {
      __typename: "User",
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userNftsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateNftSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateNftSubscription = {
  onUpdateNft?:  {
    __typename: "Nft",
    id: string,
    name: string,
    price: number,
    category: string,
    blockchain: string,
    colors?: Array< string | null > | null,
    xCoordinate?: string | null,
    yCoordinate?: string | null,
    description?: string | null,
    imageID: string,
    user?:  {
      __typename: "User",
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userNftsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteNftSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteNftSubscription = {
  onDeleteNft?:  {
    __typename: "Nft",
    id: string,
    name: string,
    price: number,
    category: string,
    blockchain: string,
    colors?: Array< string | null > | null,
    xCoordinate?: string | null,
    yCoordinate?: string | null,
    description?: string | null,
    imageID: string,
    user?:  {
      __typename: "User",
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userNftsId?: string | null,
    owner?: string | null,
  } | null,
};
