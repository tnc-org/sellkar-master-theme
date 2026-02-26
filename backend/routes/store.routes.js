import express from "express"
import Store from "../models/store.js"

const router = express.Router()

// get config
router.get("/", async (req, res) => {
  let store = await Store.findOne()
  if (!store) {
    store = await Store.create({
      activeTheme: "furniture",
      sections: { header: true, footer: true, navbar: true}
    })
  }
  res.json(store)
})

// activate theme
router.post("/theme", async (req, res) => {
  const { theme } = req.body
  const store = await Store.findOne()
  store.activeTheme = theme
  await store.save()
  res.json({ success: true })
})

export default router