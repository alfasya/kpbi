import { Kbbi } from "../models/kamus.js";

async function getKata(req, res) {
    const kata = req.params.kata.toLowerCase().trim();
    try {
        const result = await Kbbi.findAll({
            attributes: ["submakna"],
            where: {
                key: kata
            }
        });

        if (result.length === 0) {
            return res.status(404).json({
                message: "Kata tidak ditemukan."
            });
        }

        res.status(200).json({
        message: "success.",
        data: {
            kata: kata,
            makna: result,
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