from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from data import kamus
from cors import origins

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

@app.get("/home")
def get_home():
    return { 
        "status" : "ok",
        "content" : "Selamat datang di homepage." 
        }

@app.get("/kamus")
async def get_kamus():
    return kamus

@app.get("/kamus/{kata}")
async def get_kata(kata):
    for k in kamus:
        if k["kata"] == kata:
            return k
    return { "error" : "kata tidak ditemukan." }