import { queryKBBI } from "../db/query.db.js";

async function cariKata(req, res) {
    const kata = req.params.kata;

    try {
        const result = await queryKBBI(kata);

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