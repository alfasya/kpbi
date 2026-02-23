import { DataTypes } from "sequelize";

import { sequelize } from "../config/database.js";

const Kbbi = sequelize.define(
    "Kbbi",
    {
        key: {
            type: DataTypes.STRING
        },
        nama: {
            type: DataTypes.STRING
        },
        nomor: {
            type: DataTypes.STRING
        },
        kata_dasar: {
            type: DataTypes.STRING
        },
        pelafalan: {
            type: DataTypes.STRING
        },
        bentuk_tidak_baku: {
            type: DataTypes.STRING
        },
        varian: {
            type: DataTypes.STRING
        },
        kelas: {
            type: DataTypes.STRING
        },
        submakna: {
            type: DataTypes.STRING
        },
        info: {
            type: DataTypes.STRING
        },
        contoh: {
            type: DataTypes.STRING
        },
        etimologi: {
            type: DataTypes.STRING
        },
        kata_turunan: {
            type: DataTypes.STRING
        },
        gabungan_kata: {
            type: DataTypes.STRING
        },
        peribahasa: {
            type: DataTypes.STRING
        },
        idiom: {
            type: DataTypes.STRING
        },
    },
    {
        tableName: "kbbi",
    }
);

async function syncKamus() {
    try {
        await Kbbi.sync();
        console.log("Kamus synchronized successfully.");
    } catch(err) {
        console.log("Internal server error.");
    }
}

export { syncKamus, Kbbi }