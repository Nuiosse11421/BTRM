import pkg from "pg"
const {Pool} = pkg
const db = new Pool(
    {
        user:"postgres",
        password:"nnu1123",
        host:"localhost",
        port:5432,
        database:"IRT"
    }
)

export default db