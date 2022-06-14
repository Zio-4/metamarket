/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type SignUpUserInput = {
  username: string,
  email: string,
  userId: string,
};

export type signUpResponse = {
  __typename: "signUpResponse",
  accountId?: string | null,
  signUpURL?: string | null,
  object?: string | null,
  created?: number | null,
  expires_at?: number | null,
  url?: string | null,
};

export type CreateNftInput = {
  id?: string | null,
  name: string,
  price?: number | null,
  category: string,
  blockchain: string,
  colors?: Array< string | null > | null,
  xCoordinate?: string | null,
  yCoordinate?: string | null,
  description?: string | null,
  imageId: string,
  owner: string,
  listed?: ListedStatus | null,
  userOwnedId?: string | null,
};

export enum ListedStatus {
  YES = "YES",
  NO = "NO",
}


export type ModelNftConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelIntInput | null,
  category?: ModelStringInput | null,
  blockchain?: ModelStringInput | null,
  colors?: ModelStringInput | null,
  xCoordinate?: ModelStringInput | null,
  yCoordinate?: ModelStringInput | null,
  description?: ModelStringInput | null,
  imageId?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  listed?: ModelListedStatusInput | null,
  and?: Array< ModelNftConditionInput | null > | null,
  or?: Array< ModelNftConditionInput | null > | null,
  not?: ModelNftConditionInput | null,
  userOwnedId?: ModelIDInput | null,
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

export type ModelListedStatusInput = {
  eq?: ListedStatus | null,
  ne?: ListedStatus | null,
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
  price?: number | null,
  category: string,
  blockchain: string,
  colors?: Array< string | null > | null,
  xCoordinate?: string | null,
  yCoordinate?: string | null,
  description?: string | null,
  imageId: string,
  owner: string,
  listed?: ListedStatus | null,
  orders?: ModelNftOrderConnection | null,
  createdAt: string,
  updatedAt: string,
  userOwnedId?: string | null,
};

export type ModelNftOrderConnection = {
  __typename: "ModelNftOrderConnection",
  items:  Array<NftOrder | null >,
  nextToken?: string | null,
};

export type NftOrder = {
  __typename: "NftOrder",
  id: string,
  nftId: string,
  orderId: string,
  nft?: Nft | null,
  order?: ModelOrderConnection | null,
  createdAt: string,
  updatedAt: string,
  nftOrdersId?: string | null,
  orderNftsId?: string | null,
  owner?: string | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  user: string,
  date: string,
  total: number,
  nfts?: ModelNftOrderConnection | null,
  createdAt: string,
  updatedAt: string,
  nftOrderOrderId?: string | null,
  owner?: string | null,
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
  imageId?: string | null,
  owner?: string | null,
  listed?: ListedStatus | null,
  userOwnedId?: string | null,
};

export type DeleteNftInput = {
  id: string,
};

export type CreateNftOrderInput = {
  id?: string | null,
  nftId: string,
  orderId: string,
  nftOrdersId?: string | null,
  orderNftsId?: string | null,
};

export type ModelNftOrderConditionInput = {
  nftId?: ModelIDInput | null,
  orderId?: ModelIDInput | null,
  and?: Array< ModelNftOrderConditionInput | null > | null,
  or?: Array< ModelNftOrderConditionInput | null > | null,
  not?: ModelNftOrderConditionInput | null,
  nftOrdersId?: ModelIDInput | null,
  orderNftsId?: ModelIDInput | null,
};

export type UpdateNftOrderInput = {
  id: string,
  nftId?: string | null,
  orderId?: string | null,
  nftOrdersId?: string | null,
  orderNftsId?: string | null,
};

export type DeleteNftOrderInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  user: string,
  date: string,
  total: number,
  nftOrderOrderId?: string | null,
};

export type ModelOrderConditionInput = {
  user?: ModelStringInput | null,
  date?: ModelStringInput | null,
  total?: ModelFloatInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
  nftOrderOrderId?: ModelIDInput | null,
};

export type ModelFloatInput = {
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

export type UpdateOrderInput = {
  id: string,
  user?: string | null,
  date?: string | null,
  total?: number | null,
  nftOrderOrderId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateUserInput = {
  userId: string,
  username: string,
  stripeId?: string | null,
  chargesEnabled?: boolean | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  stripeId?: ModelStringInput | null,
  chargesEnabled?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  userId: string,
  username: string,
  favorited?:  Array<Nft | null > | null,
  owned?: ModelNftConnection | null,
  sold?:  Array<Nft | null > | null,
  stripeId?: string | null,
  chargesEnabled?: boolean | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelNftConnection = {
  __typename: "ModelNftConnection",
  items:  Array<Nft | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  userId: string,
  username?: string | null,
  stripeId?: string | null,
  chargesEnabled?: boolean | null,
};

export type DeleteUserInput = {
  userId: string,
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
  imageId?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  listed?: ModelListedStatusInput | null,
  and?: Array< ModelNftFilterInput | null > | null,
  or?: Array< ModelNftFilterInput | null > | null,
  not?: ModelNftFilterInput | null,
  userOwnedId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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
  imageId?: SearchableStringFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  userOwnedId?: SearchableIDFilterInput | null,
  listed?: SearchableStringFilterInput | null,
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
  imageId = "imageId",
  owner = "owner",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userOwnedId = "userOwnedId",
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
  imageId = "imageId",
  owner = "owner",
  listed = "listed",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userOwnedId = "userOwnedId",
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

export type ModelNftOrderFilterInput = {
  id?: ModelIDInput | null,
  nftId?: ModelIDInput | null,
  orderId?: ModelIDInput | null,
  and?: Array< ModelNftOrderFilterInput | null > | null,
  or?: Array< ModelNftOrderFilterInput | null > | null,
  not?: ModelNftOrderFilterInput | null,
  nftOrdersId?: ModelIDInput | null,
  orderNftsId?: ModelIDInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  user?: ModelStringInput | null,
  date?: ModelStringInput | null,
  total?: ModelFloatInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
  nftOrderOrderId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  userId?: ModelStringInput | null,
  username?: ModelStringInput | null,
  stripeId?: ModelStringInput | null,
  chargesEnabled?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type SignUpUserMutationVariables = {
  input: SignUpUserInput,
};

export type SignUpUserMutation = {
  signUpUser?:  {
    __typename: "signUpResponse",
    accountId?: string | null,
    signUpURL?: string | null,
    object?: string | null,
    created?: number | null,
    expires_at?: number | null,
    url?: string | null,
  } | null,
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
    price?: number | null,
    category: string,
    blockchain: string,
    colors?: Array< string | null > | null,
    xCoordinate?: string | null,
    yCoordinate?: string | null,
    description?: string | null,
    imageId: string,
    owner: string,
    listed?: ListedStatus | null,
    orders?:  {
      __typename: "ModelNftOrderConnection",
      items:  Array< {
        __typename: "NftOrder",
        id: string,
        nftId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
        nftOrdersId?: string | null,
        orderNftsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userOwnedId?: string | null,
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
    price?: number | null,
    category: string,
    blockchain: string,
    colors?: Array< string | null > | null,
    xCoordinate?: string | null,
    yCoordinate?: string | null,
    description?: string | null,
    imageId: string,
    owner: string,
    listed?: ListedStatus | null,
    orders?:  {
      __typename: "ModelNftOrderConnection",
      items:  Array< {
        __typename: "NftOrder",
        id: string,
        nftId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
        nftOrdersId?: string | null,
        orderNftsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userOwnedId?: string | null,
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
    price?: number | null,
    category: string,
    blockchain: string,
    colors?: Array< string | null > | null,
    xCoordinate?: string | null,
    yCoordinate?: string | null,
    description?: string | null,
    imageId: string,
    owner: string,
    listed?: ListedStatus | null,
    orders?:  {
      __typename: "ModelNftOrderConnection",
      items:  Array< {
        __typename: "NftOrder",
        id: string,
        nftId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
        nftOrdersId?: string | null,
        orderNftsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userOwnedId?: string | null,
  } | null,
};

export type CreateNftOrderMutationVariables = {
  input: CreateNftOrderInput,
  condition?: ModelNftOrderConditionInput | null,
};

export type CreateNftOrderMutation = {
  createNftOrder?:  {
    __typename: "NftOrder",
    id: string,
    nftId: string,
    orderId: string,
    nft?:  {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null,
    order?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        user: string,
        date: string,
        total: number,
        createdAt: string,
        updatedAt: string,
        nftOrderOrderId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    nftOrdersId?: string | null,
    orderNftsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateNftOrderMutationVariables = {
  input: UpdateNftOrderInput,
  condition?: ModelNftOrderConditionInput | null,
};

export type UpdateNftOrderMutation = {
  updateNftOrder?:  {
    __typename: "NftOrder",
    id: string,
    nftId: string,
    orderId: string,
    nft?:  {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null,
    order?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        user: string,
        date: string,
        total: number,
        createdAt: string,
        updatedAt: string,
        nftOrderOrderId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    nftOrdersId?: string | null,
    orderNftsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteNftOrderMutationVariables = {
  input: DeleteNftOrderInput,
  condition?: ModelNftOrderConditionInput | null,
};

export type DeleteNftOrderMutation = {
  deleteNftOrder?:  {
    __typename: "NftOrder",
    id: string,
    nftId: string,
    orderId: string,
    nft?:  {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null,
    order?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        user: string,
        date: string,
        total: number,
        createdAt: string,
        updatedAt: string,
        nftOrderOrderId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    nftOrdersId?: string | null,
    orderNftsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    user: string,
    date: string,
    total: number,
    nfts?:  {
      __typename: "ModelNftOrderConnection",
      items:  Array< {
        __typename: "NftOrder",
        id: string,
        nftId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
        nftOrdersId?: string | null,
        orderNftsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    nftOrderOrderId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    user: string,
    date: string,
    total: number,
    nfts?:  {
      __typename: "ModelNftOrderConnection",
      items:  Array< {
        __typename: "NftOrder",
        id: string,
        nftId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
        nftOrdersId?: string | null,
        orderNftsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    nftOrderOrderId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    user: string,
    date: string,
    total: number,
    nfts?:  {
      __typename: "ModelNftOrderConnection",
      items:  Array< {
        __typename: "NftOrder",
        id: string,
        nftId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
        nftOrdersId?: string | null,
        orderNftsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    nftOrderOrderId?: string | null,
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
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null > | null,
    owned?:  {
      __typename: "ModelNftConnection",
      items:  Array< {
        __typename: "Nft",
        id: string,
        name: string,
        price?: number | null,
        category: string,
        blockchain: string,
        colors?: Array< string | null > | null,
        xCoordinate?: string | null,
        yCoordinate?: string | null,
        description?: string | null,
        imageId: string,
        owner: string,
        listed?: ListedStatus | null,
        createdAt: string,
        updatedAt: string,
        userOwnedId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sold?:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null > | null,
    stripeId?: string | null,
    chargesEnabled?: boolean | null,
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
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null > | null,
    owned?:  {
      __typename: "ModelNftConnection",
      items:  Array< {
        __typename: "Nft",
        id: string,
        name: string,
        price?: number | null,
        category: string,
        blockchain: string,
        colors?: Array< string | null > | null,
        xCoordinate?: string | null,
        yCoordinate?: string | null,
        description?: string | null,
        imageId: string,
        owner: string,
        listed?: ListedStatus | null,
        createdAt: string,
        updatedAt: string,
        userOwnedId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sold?:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null > | null,
    stripeId?: string | null,
    chargesEnabled?: boolean | null,
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
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null > | null,
    owned?:  {
      __typename: "ModelNftConnection",
      items:  Array< {
        __typename: "Nft",
        id: string,
        name: string,
        price?: number | null,
        category: string,
        blockchain: string,
        colors?: Array< string | null > | null,
        xCoordinate?: string | null,
        yCoordinate?: string | null,
        description?: string | null,
        imageId: string,
        owner: string,
        listed?: ListedStatus | null,
        createdAt: string,
        updatedAt: string,
        userOwnedId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sold?:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null > | null,
    stripeId?: string | null,
    chargesEnabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    price?: number | null,
    category: string,
    blockchain: string,
    colors?: Array< string | null > | null,
    xCoordinate?: string | null,
    yCoordinate?: string | null,
    description?: string | null,
    imageId: string,
    owner: string,
    listed?: ListedStatus | null,
    orders?:  {
      __typename: "ModelNftOrderConnection",
      items:  Array< {
        __typename: "NftOrder",
        id: string,
        nftId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
        nftOrdersId?: string | null,
        orderNftsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userOwnedId?: string | null,
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
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
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
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
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
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
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
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NftByOwnerQueryVariables = {
  owner: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNftFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NftByOwnerQuery = {
  nftByOwner?:  {
    __typename: "ModelNftConnection",
    items:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NftByListedStatusQueryVariables = {
  listed: ListedStatus,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNftFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NftByListedStatusQuery = {
  nftByListedStatus?:  {
    __typename: "ModelNftConnection",
    items:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
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
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
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

export type GetNftOrderQueryVariables = {
  id: string,
};

export type GetNftOrderQuery = {
  getNftOrder?:  {
    __typename: "NftOrder",
    id: string,
    nftId: string,
    orderId: string,
    nft?:  {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null,
    order?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        user: string,
        date: string,
        total: number,
        createdAt: string,
        updatedAt: string,
        nftOrderOrderId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    nftOrdersId?: string | null,
    orderNftsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListNftOrdersQueryVariables = {
  filter?: ModelNftOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNftOrdersQuery = {
  listNftOrders?:  {
    __typename: "ModelNftOrderConnection",
    items:  Array< {
      __typename: "NftOrder",
      id: string,
      nftId: string,
      orderId: string,
      nft?:  {
        __typename: "Nft",
        id: string,
        name: string,
        price?: number | null,
        category: string,
        blockchain: string,
        colors?: Array< string | null > | null,
        xCoordinate?: string | null,
        yCoordinate?: string | null,
        description?: string | null,
        imageId: string,
        owner: string,
        listed?: ListedStatus | null,
        createdAt: string,
        updatedAt: string,
        userOwnedId?: string | null,
      } | null,
      order?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      nftOrdersId?: string | null,
      orderNftsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NftOrderByOrderIdQueryVariables = {
  nftId: string,
  orderId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNftOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NftOrderByOrderIdQuery = {
  nftOrderByOrderId?:  {
    __typename: "ModelNftOrderConnection",
    items:  Array< {
      __typename: "NftOrder",
      id: string,
      nftId: string,
      orderId: string,
      nft?:  {
        __typename: "Nft",
        id: string,
        name: string,
        price?: number | null,
        category: string,
        blockchain: string,
        colors?: Array< string | null > | null,
        xCoordinate?: string | null,
        yCoordinate?: string | null,
        description?: string | null,
        imageId: string,
        owner: string,
        listed?: ListedStatus | null,
        createdAt: string,
        updatedAt: string,
        userOwnedId?: string | null,
      } | null,
      order?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      nftOrdersId?: string | null,
      orderNftsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    user: string,
    date: string,
    total: number,
    nfts?:  {
      __typename: "ModelNftOrderConnection",
      items:  Array< {
        __typename: "NftOrder",
        id: string,
        nftId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
        nftOrdersId?: string | null,
        orderNftsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    nftOrderOrderId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      user: string,
      date: string,
      total: number,
      nfts?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      nftOrderOrderId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrderByUserQueryVariables = {
  user: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrderByUserQuery = {
  orderByUser?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      user: string,
      date: string,
      total: number,
      nfts?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      nftOrderOrderId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
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
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null > | null,
    owned?:  {
      __typename: "ModelNftConnection",
      items:  Array< {
        __typename: "Nft",
        id: string,
        name: string,
        price?: number | null,
        category: string,
        blockchain: string,
        colors?: Array< string | null > | null,
        xCoordinate?: string | null,
        yCoordinate?: string | null,
        description?: string | null,
        imageId: string,
        owner: string,
        listed?: ListedStatus | null,
        createdAt: string,
        updatedAt: string,
        userOwnedId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sold?:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null > | null,
    stripeId?: string | null,
    chargesEnabled?: boolean | null,
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
      favorited?:  Array< {
        __typename: "Nft",
        id: string,
        name: string,
        price?: number | null,
        category: string,
        blockchain: string,
        colors?: Array< string | null > | null,
        xCoordinate?: string | null,
        yCoordinate?: string | null,
        description?: string | null,
        imageId: string,
        owner: string,
        listed?: ListedStatus | null,
        createdAt: string,
        updatedAt: string,
        userOwnedId?: string | null,
      } | null > | null,
      owned?:  {
        __typename: "ModelNftConnection",
        nextToken?: string | null,
      } | null,
      sold?:  Array< {
        __typename: "Nft",
        id: string,
        name: string,
        price?: number | null,
        category: string,
        blockchain: string,
        colors?: Array< string | null > | null,
        xCoordinate?: string | null,
        yCoordinate?: string | null,
        description?: string | null,
        imageId: string,
        owner: string,
        listed?: ListedStatus | null,
        createdAt: string,
        updatedAt: string,
        userOwnedId?: string | null,
      } | null > | null,
      stripeId?: string | null,
      chargesEnabled?: boolean | null,
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
      favorited?:  Array< {
        __typename: "Nft",
        id: string,
        name: string,
        price?: number | null,
        category: string,
        blockchain: string,
        colors?: Array< string | null > | null,
        xCoordinate?: string | null,
        yCoordinate?: string | null,
        description?: string | null,
        imageId: string,
        owner: string,
        listed?: ListedStatus | null,
        createdAt: string,
        updatedAt: string,
        userOwnedId?: string | null,
      } | null > | null,
      owned?:  {
        __typename: "ModelNftConnection",
        nextToken?: string | null,
      } | null,
      sold?:  Array< {
        __typename: "Nft",
        id: string,
        name: string,
        price?: number | null,
        category: string,
        blockchain: string,
        colors?: Array< string | null > | null,
        xCoordinate?: string | null,
        yCoordinate?: string | null,
        description?: string | null,
        imageId: string,
        owner: string,
        listed?: ListedStatus | null,
        createdAt: string,
        updatedAt: string,
        userOwnedId?: string | null,
      } | null > | null,
      stripeId?: string | null,
      chargesEnabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
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
    price?: number | null,
    category: string,
    blockchain: string,
    colors?: Array< string | null > | null,
    xCoordinate?: string | null,
    yCoordinate?: string | null,
    description?: string | null,
    imageId: string,
    owner: string,
    listed?: ListedStatus | null,
    orders?:  {
      __typename: "ModelNftOrderConnection",
      items:  Array< {
        __typename: "NftOrder",
        id: string,
        nftId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
        nftOrdersId?: string | null,
        orderNftsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userOwnedId?: string | null,
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
    price?: number | null,
    category: string,
    blockchain: string,
    colors?: Array< string | null > | null,
    xCoordinate?: string | null,
    yCoordinate?: string | null,
    description?: string | null,
    imageId: string,
    owner: string,
    listed?: ListedStatus | null,
    orders?:  {
      __typename: "ModelNftOrderConnection",
      items:  Array< {
        __typename: "NftOrder",
        id: string,
        nftId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
        nftOrdersId?: string | null,
        orderNftsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userOwnedId?: string | null,
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
    price?: number | null,
    category: string,
    blockchain: string,
    colors?: Array< string | null > | null,
    xCoordinate?: string | null,
    yCoordinate?: string | null,
    description?: string | null,
    imageId: string,
    owner: string,
    listed?: ListedStatus | null,
    orders?:  {
      __typename: "ModelNftOrderConnection",
      items:  Array< {
        __typename: "NftOrder",
        id: string,
        nftId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
        nftOrdersId?: string | null,
        orderNftsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userOwnedId?: string | null,
  } | null,
};

export type OnCreateNftOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateNftOrderSubscription = {
  onCreateNftOrder?:  {
    __typename: "NftOrder",
    id: string,
    nftId: string,
    orderId: string,
    nft?:  {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null,
    order?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        user: string,
        date: string,
        total: number,
        createdAt: string,
        updatedAt: string,
        nftOrderOrderId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    nftOrdersId?: string | null,
    orderNftsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateNftOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateNftOrderSubscription = {
  onUpdateNftOrder?:  {
    __typename: "NftOrder",
    id: string,
    nftId: string,
    orderId: string,
    nft?:  {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null,
    order?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        user: string,
        date: string,
        total: number,
        createdAt: string,
        updatedAt: string,
        nftOrderOrderId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    nftOrdersId?: string | null,
    orderNftsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteNftOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteNftOrderSubscription = {
  onDeleteNftOrder?:  {
    __typename: "NftOrder",
    id: string,
    nftId: string,
    orderId: string,
    nft?:  {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null,
    order?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        user: string,
        date: string,
        total: number,
        createdAt: string,
        updatedAt: string,
        nftOrderOrderId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    nftOrdersId?: string | null,
    orderNftsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    user: string,
    date: string,
    total: number,
    nfts?:  {
      __typename: "ModelNftOrderConnection",
      items:  Array< {
        __typename: "NftOrder",
        id: string,
        nftId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
        nftOrdersId?: string | null,
        orderNftsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    nftOrderOrderId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    user: string,
    date: string,
    total: number,
    nfts?:  {
      __typename: "ModelNftOrderConnection",
      items:  Array< {
        __typename: "NftOrder",
        id: string,
        nftId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
        nftOrdersId?: string | null,
        orderNftsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    nftOrderOrderId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    user: string,
    date: string,
    total: number,
    nfts?:  {
      __typename: "ModelNftOrderConnection",
      items:  Array< {
        __typename: "NftOrder",
        id: string,
        nftId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
        nftOrdersId?: string | null,
        orderNftsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    nftOrderOrderId?: string | null,
    owner?: string | null,
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
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null > | null,
    owned?:  {
      __typename: "ModelNftConnection",
      items:  Array< {
        __typename: "Nft",
        id: string,
        name: string,
        price?: number | null,
        category: string,
        blockchain: string,
        colors?: Array< string | null > | null,
        xCoordinate?: string | null,
        yCoordinate?: string | null,
        description?: string | null,
        imageId: string,
        owner: string,
        listed?: ListedStatus | null,
        createdAt: string,
        updatedAt: string,
        userOwnedId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sold?:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null > | null,
    stripeId?: string | null,
    chargesEnabled?: boolean | null,
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
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null > | null,
    owned?:  {
      __typename: "ModelNftConnection",
      items:  Array< {
        __typename: "Nft",
        id: string,
        name: string,
        price?: number | null,
        category: string,
        blockchain: string,
        colors?: Array< string | null > | null,
        xCoordinate?: string | null,
        yCoordinate?: string | null,
        description?: string | null,
        imageId: string,
        owner: string,
        listed?: ListedStatus | null,
        createdAt: string,
        updatedAt: string,
        userOwnedId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sold?:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null > | null,
    stripeId?: string | null,
    chargesEnabled?: boolean | null,
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
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null > | null,
    owned?:  {
      __typename: "ModelNftConnection",
      items:  Array< {
        __typename: "Nft",
        id: string,
        name: string,
        price?: number | null,
        category: string,
        blockchain: string,
        colors?: Array< string | null > | null,
        xCoordinate?: string | null,
        yCoordinate?: string | null,
        description?: string | null,
        imageId: string,
        owner: string,
        listed?: ListedStatus | null,
        createdAt: string,
        updatedAt: string,
        userOwnedId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    sold?:  Array< {
      __typename: "Nft",
      id: string,
      name: string,
      price?: number | null,
      category: string,
      blockchain: string,
      colors?: Array< string | null > | null,
      xCoordinate?: string | null,
      yCoordinate?: string | null,
      description?: string | null,
      imageId: string,
      owner: string,
      listed?: ListedStatus | null,
      orders?:  {
        __typename: "ModelNftOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userOwnedId?: string | null,
    } | null > | null,
    stripeId?: string | null,
    chargesEnabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
