export const validateSchema = (schema) =>  (req, res, next) => {

    try{
        schema.parse(req.body) 
        next()
    }catch (error) {
        console.error(error.errors)
        return res.status(400).json({ error: error.errors.map(error => error.message) });
    }

}