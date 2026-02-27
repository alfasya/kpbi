async function cariKata(req, res) {
    const { kata } = req.params.kata;

    try {

    } catch(err) {
        res.status(500).json({
            error: 'Internal server error.'
        });
    }
}

export { cariKata }