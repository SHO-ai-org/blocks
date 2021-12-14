export const postData = async ({ url, data = {} }: { url: string; data: unknown }): Promise<any> => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(data),
    })

    if (res.status !== 200) {
        console.log('ERROR', res)
        throw new Error('error making request')
    }

    return res.json()
}
