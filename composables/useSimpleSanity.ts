
export async function useSimpleSanity(queryString: string, reference:string = null) {
  try {
    const refString = reference ? ` {
      ...,
      ${reference}[]-> 
    }` :'';
    const query = groq`*[_type == "${queryString}"]${refString}`
    const sanity = useSanity()
    const { data } = await useAsyncData(`${queryString}`, () => sanity.fetch(query)) as Record<string, any>
    const items = data._rawValue
    return items
  } catch (error) {
    console.error("useSimpleSanity", error)
  }
 
}