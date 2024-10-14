export const getCatalogData = async () => {
      const responce = await fetch(
        "https://175591125d7a11b5.mokky.dev/catalog", { cache: 'no-store' }
        // {
        //   next: { revalidate: 5 },
        // }
      );
    
      return responce.json();
    }


export const getCatalogItem = async (id: any) => {
    try {
        const responce = await fetch(`https://175591125d7a11b5.mokky.dev/catalog/${id}`, { cache: 'no-store' })

        const data = await await responce.json()

        // console.log(data)

        return data
    } catch (error) {
        throw new Error()
    }
}