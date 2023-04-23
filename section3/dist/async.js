const getDogImage = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const res = await fetch(url, { method: 'get' })
        .then(responce => {
        if (responce.ok) {
            return responce.json();
        }
        throw new Error('error');
    })
        .catch(e => console.log(e.message));
    console.log(res);
    return res;
};
//# sourceMappingURL=async.js.map