export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@cannabusted",
  spotify: "https://open.spotify.com/artist/5ffLruUeSIhhOxr5PdVPI5",
  apple: "https://music.apple.com/gb/artist/cannabusted/1592297432",
  amazon: "https://music.amazon.co.uk/artists/B09KJF6SFQ/cannabusted",
  tiktok: "https://www.tiktok.com/@cannabusted",
  facebook: "https://www.facebook.com/CannaBusTeD",
} as const;

export const SOCIAL_BUTTONS: { key: keyof typeof SOCIAL_LINKS; label: string }[] = [
  { key: "youtube", label: "YouTube" },
  { key: "spotify", label: "Spotify" },
  { key: "apple", label: "Apple Music" },
  { key: "facebook", label: "Facebook" },
];
