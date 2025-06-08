import { Geo, geolocation } from "@vercel/functions";

export function GET(request: Request): Response {
  const details: Geo = geolocation(request);
  return Response.json(details);
}
