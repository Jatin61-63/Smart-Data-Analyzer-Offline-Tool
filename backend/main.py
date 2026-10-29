from fastapi import FastAPI, UploadFile, File  # type: ignore[import-not-found]
import pandas as pd

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "Smart Data Analyzer Backend is running!"
    }


@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):

    contents = await file.read()

    from io import BytesIO

    if file.filename.endswith(".csv"):
        df = pd.read_csv(BytesIO(contents))

    elif file.filename.endswith((".xlsx", ".xls")):
        df = pd.read_excel(BytesIO(contents))

    else:
        return {
            "error": "Only CSV, XLSX and XLS files are supported."
        }

    return {
        "filename": file.filename,
        "rows": len(df),
        "columns": len(df.columns),
        "missing_values": int(df.isnull().sum().sum()),
        "preview": df.head().to_dict(orient="records")
    }