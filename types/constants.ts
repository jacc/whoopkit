export function requestHeaders(accessToken?: string) {
  let headers: {
    "Content-Type": string;
    "X-WHOOP-Device-Platform": string;
    "X-WHOOP-iOS-Build-Number": string;
    "User-Agent": string;
    "X-WHOOP-Bundle-Name": string;
    "X-WHOOP-Device-Model": string;
    Authorization?: string; // Add Authorization property
  } = {
    "Content-Type": "application/json",
    "X-WHOOP-Device-Platform": "iOS",
    "X-WHOOP-iOS-Build-Number": "203947",
    "User-Agent": "Whoop/203937 CFNetwork/1474 Darwin/23.0.0",
    "X-WHOOP-Bundle-Name": "com.whoop.iphone",
    "X-WHOOP-Device-Model": "iPhone",
  };

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return headers;
}
