/**
 * Colors for social media icon styling.
 */
export enum SocialMediaColor {
  Green = "Green",
  Gradient = "Gradient",
  Black = "Black",
  ToggleGreen = "ToggleGreen",
  ToggleBlue = "ToggleBlue",
  ToggleEarthGreen = "ToggleEarthGreen",
  White = "White",
}

/**
 * Function to handle social media colors.
 *
 * @param color social media color
 * @returns css color
 */
export const handleColor = (color: SocialMediaColor) => {
  switch (color) {
    case SocialMediaColor.Black:
      return "black";
    case SocialMediaColor.Green:
      return "var(--primary-green)";
    case SocialMediaColor.ToggleGreen:
      return "var(--toggle-green)";
    case SocialMediaColor.ToggleBlue:
      return "var(--toggle-blue)";
    case SocialMediaColor.ToggleEarthGreen:
      return "var(--toggle-earthGreen)"
    case SocialMediaColor.White:
      return "white";
    default:
      return "";
  }
};
