import { Router } from "express";
export const router = Router();
router.get("/", (req, res) => {
    res.json({
        message: "hello world"
    });
});
router.get("/hel", (req, res) => {
    res.json({
        message: "hel endpoint"
    });
});
router.post("/fe", (req, res) => {
    res.json({
        message: "fe endpoint POST"
    });
});
//# sourceMappingURL=flight.js.map