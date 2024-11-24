import 'dotenv/config'
import {ObjectId} from "mongodb"
import conectarAoBanco from "../config/dbConfig.js"

const conecxao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getTodosPosts(){
    const db = conecxao.db("imersao-instabytes")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}

export async function criarPost(novoPost){
    const db = conecxao.db("imersao-instabytes")
    const colecao = db.collection("posts")
    return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost){
    const db = conecxao.db("imersao-instabytes")
    const colecao = db.collection("posts")
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set: novoPost})
}