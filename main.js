import express from "express";

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (_req, res) => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  res.json({
    app: "expressjs",
    datetime: formattedDate,
    tags: ["development", "staging", "production"]
  });
});

app.listen(port, () => {
  console.log(`INFO: app listening on port ${port}`);
});
