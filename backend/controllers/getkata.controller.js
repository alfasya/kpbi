import { Kbbi } from "../models/kamus.js";
import { llmResponse } from "./example.js";

async function getKata(req, res) {
    const kata = req.params.kata.toLowerCase().trim();
    try {
        const result = await Kbbi.findAll({
            attributes: ["submakna", "kelas"],
            where: {
                key: kata
            }
        });

        if (result.length === 0) {
            return res.status(404).json({
                message: "Kata tidak ditemukan."
            });
        }

        const response = await llmResponse(kata);
        const llmArray = response.message.content.split("\n");
        //const llmObject = Object.assign({}, llmArray);

        res.status(200).json({
        message: "success.",
        data: {
            kata: kata,
            makna: result,
            contoh: llmArray,
        }
    });
    } catch(err) {
        res.status(500).json({
            error: err
        });
        console.error("Internal server error.", err);
    }
}

export { getKata }