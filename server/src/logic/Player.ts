import { PlayerSerialized, User } from '@shared';
import { gameConfig } from 'src/config/game.config';

export class Player {
  private readonly user: User;
  private score: number;
  private avatar: number;

  constructor(user: User, avatar: number) {
    this.user = user;
    this.score = 0;
    this.avatar = avatar;
  }

  public get socketId(): string {
    return this.user.socketId;
  }

  addPointsForGuessing() {
    this.score += gameConfig.pointsForGuessingEmoji;
  }
  addPointsForHavingEmojiGuessed() {
    this.score += gameConfig.pointsForHavingEmojiGuessed;
  }

  compare(id: string): boolean {
    return this.user.id === id;
  }

  serialize(): PlayerSerialized {
    return { id: this.user.id, name: this.user.name, score: this.score, socketId: this.user.socketId, avatar: this.avatar };
  }
}
