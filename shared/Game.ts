import { AuthorizationPayload } from "./Auth";

export type GameId = string;

export type CreateGameRequest = {
  hostName: string;
};

export type CreateGameResponse = {
  gameId: GameId;
} & AuthorizationPayload;

type BaseJoinGameRequest = {
  gameId: GameId;
};

export type JoinGameRequest = BaseJoinGameRequest & { name: string };

export type JoinGameResponse = AuthorizationPayload;

export type ReJoinGameRequest = BaseJoinGameRequest & AuthorizationPayload;

export type ReJoinGameResponse = {};
