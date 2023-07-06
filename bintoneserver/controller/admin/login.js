export const adminLogin = (req, res) => {
    try {
        console.log('object')
        res.status(200).json ({status : 'ok'});
    } catch (error) {
        res.status(500).json({error:`internal server error`});
    }
}