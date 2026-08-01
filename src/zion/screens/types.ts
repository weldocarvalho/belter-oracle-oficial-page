export type Device = "mobile" | "tablet" | "desktop";

export type ScreenId = "home" | "routine" | "checkin" | "progress";

export function pick<T>(device: Device, mobile: T, tablet: T, desktop: T): T {
  return device === "desktop" ? desktop : device === "tablet" ? tablet : mobile;
}
