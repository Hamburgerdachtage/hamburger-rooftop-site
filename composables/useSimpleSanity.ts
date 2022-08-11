
export async function useSimpleSanity(queryString: string | typeof groq, reference:string = null) {
  try {
    const query = groq`*[_type == "${queryString}"]`
    const sanity = useSanity()
    const { data } = await useAsyncData(`${queryString}`, () => sanity.fetch(query)) as Record<string, any>
    const items = data._rawValue
    return items
  } catch (error) {
    console.error("useSimpleSanity", error)
  }
 
}