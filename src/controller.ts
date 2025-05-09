import { NextFunction, Request, Response } from "express";

export const getStatus = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json({ damaged_system: "navigation" });
    } catch (error) {
        next(error);
    }
};

export const getRepairBay = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const response = `
<!DOCTYPE html>
<html>
<head>
    <title>Repair</title>
</head>
<body>
<div class="anchor-point">NAV-01</div>
</body>
</html>
    `;
    try {
        res.send(response);
    } catch (error) {
        next(error);
    }
};

export const postTeapot = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.sendStatus(418);
    } catch (error) {
        next(error);
    }
};
