import express from "express";
import mongoose from 'mongoose';

const server = express ();
const PORT = 3002;

server.use(express.json());

async function main() {
    try {
        await mongoose.connect('mongodb+srv://juancho777:Sanitas1234@cluster0.krjmth8.mongodb.net/supermercado');
        

        server.listen(PORT, () => {
            console.log(`Server up in http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();


// Define el modelo para el artículo
const ArticleSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  existencias: { type: Number, required: true }
});

const Article = mongoose.model('Article', ArticleSchema);

// Define el modelo para el ticket
const TicketSchema = new mongoose.Schema({
  subtotal: { type: Number, required: true },
  iva: { type: Number, required: true },
  total: { type: Number, required: true },
  articulos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
  usuario: { type: String } // Puedes personalizar este campo según tus necesidades
});

const Ticket = mongoose.model('Ticket', TicketSchema);


