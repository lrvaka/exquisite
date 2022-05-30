// /api/get-instagram
// fetch

export default handler(req, res) {
    const res = await fetch('https://graph.instagram.com/me/media?fields=id,caption&access_token=***REMOVED***')
    const posts = await res.json()
    return res.status(200).json(data);
}