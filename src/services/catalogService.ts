
// https://api.jsonserve.com/2ZhyD9

export const getCatalogDataMokky = async () => {
      const responce = await fetch(
        "https://175591125d7a11b5.mokky.dev/catalog", { cache: 'no-store' }
      );

      return responce.json();
    }

export const getCatalogDataJsonserve = async () => {
    const responce = await fetch(
        "https://api.jsonserve.com/2ZhyD9", { cache: 'no-store' }
    );

    return responce.json();
    }    

export const getCatalogBoth = async (first: any, second: any) => {
    let resoult = Promise.all([first(), second()]).then()
    return resoult
}


export const getCatalogFirst = async (first: any, second: any) => {
    let resoult = Promise.any([first(), second()]).then()
    return resoult
}


    //   Promise.all([getCatalogData(), getCatalogDataNext()])

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