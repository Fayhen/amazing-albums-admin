/**
 * Album Firestore creation/update DTO.
 */
export class SetAlbumDto {
  /**
   * Albums's UUID in Firestore.
   */
  readonly albumId?: string;
  /**
   * Bandcamp's album caption used in their album player.
   */
  readonly albumCaption: string;
  /**
   * Bandcamp's URL address to the album cover art.
   */
  readonly albumCover: string;
  /**
   * Album's name.
   */
  readonly albumName: string;
  /**
   * Album's Bandcamp URL address.
   */
  readonly albumUrl: string;
  /**
   * Author's Firestore UUID.
   */
  readonly artistId: string;
  /**
   * Album's author.
   */
  readonly artistName: string;
  /**
   * `true` if the album is featured. Featured albums appear on a
   * dedicated section in the Amazing Album's website.
   */
  readonly featured: boolean;
  /**
   * Bandcamp's iframe `src` attribute used in their album player.
   */
  readonly iframeSrc: string;
  /**
   * Timestamp of album's release date.
   */
  readonly releaseDate: string;
  /**
   * Number of album visualizations in the Amazing Album's website.
   */
  views?: number;
}
