export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@cannabusted?si=Gfs32ZebqCX05b0j",
  spotify: "https://open.spotify.com/artist/5ffLruUeSIhhOxr5PdVPI5?si=hrxCFEJlSGm_3WVMSg8P4g",
  apple: "https://music.apple.com/ug/artist/cannabusted/1592297432",
  facebook: "https://www.facebook.com/share/1H7pLL6Cxo/",
} as const;

export const SOCIAL_BUTTONS: { key: keyof typeof SOCIAL_LINKS; label: string }[] = [
  { key: "youtube", label: "YouTube" },
  { key: "spotify", label: "Spotify" },
  { key: "apple", label: "Apple Music" },
  { key: "facebook", label: "Facebook" },
];
