import { queryKBBI } from "../db/queries/kbbi.query.js";

async function cariKata(req, res) {
    const kata = req.params.kata;

    try {
        const result = await queryKBBI(kata);
        const dataArr = []

        for (let i=0; i < result.length;i++) {
            dataArr.push(result[i]["row"]);
        }

        res.status(200).json({
            message: dataArr
        });

    } catch(err) {
        res.status(500).json({
            error: 'Internal server error.'
        });
    }
}

export { cariKata }