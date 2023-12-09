export function get<T>(url: string): Promise<T> {
  return fetch(url).then(data => data.json());
}