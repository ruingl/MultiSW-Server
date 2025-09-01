import type { Player } from "./Types";

/**
 * Database for storing user data.
 */
export class Database {
  private players: Map<string, Player>;

  constructor() {
    this.players = new Map();
  };

  /**
   * Checks if player exists on database.
   * @param ip Ip to check.
   */
  exists(ip: string): boolean {
    return this.players.has(ip) ? true : false;
  };

  /**
   * Adds player to database.
   * @param ip Ip of player to add.
   * @param player Player to add.
   */
  add(ip: string, player: Player): void {
    this.players.set(ip, player);
  };

  /**
   * Updates player in database.
   * @param ip Ip of player to update.
   * @param player Player to update.
   */
  update(ip: string, player: Player): void {
    this.players.set(ip, player);
  };

  /**
   * Deletes player in database.
   * @param ip Ip of player to delete.
   */
  delete(ip: string): void {
    this.players.delete(ip);
  };
};
