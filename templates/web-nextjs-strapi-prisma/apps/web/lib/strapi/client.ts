export interface StrapiFetchOptions {
  path: string
  query?: Record<string, string | number | boolean>
}

export async function fetchFromStrapi<T>({ path, query }: StrapiFetchOptions): Promise<T> {
  const baseUrl = process.env.STRAPI_URL
  if (!baseUrl) {
    throw new Error('STRAPI_URL is not configured')
  }

  const url = new URL(path, baseUrl)
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      url.searchParams.set(key, String(value))
    }
  }

  const res = await fetch(url.toString(), {
    headers: process.env.STRAPI_API_TOKEN
      ? { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` }
      : undefined,
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`Strapi request failed: ${res.status}`)
  }

  return (await res.json()) as T
}
