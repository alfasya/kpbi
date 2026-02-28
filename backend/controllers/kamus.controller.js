import { queryKBBI } from "../db/query.db.js";

async function cariKata(req, res) {
    const kata = req.params.kata.trim().toLowerCase();

    if (typeof(kata) != 'string' || kata.length >= 50) {
        return res.status(400).json({
            message: 'Masukkan kata yang sesuai.'
        });
    }

    try {
        const result = await queryKBBI(kata);

        if (result.length === 0) {
            return res.status(404).json({
                message: 'Kata tidak ditemukan.'
            });
        }

        res.status(200).json({
            message: result
        });

    } catch(err) {
        res.status(500).json({
            error: 'Internal server error.'
        });
    }
}

export { cariKata }