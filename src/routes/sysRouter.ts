import express from 'express';

/**
 * @function sysRoutes
 * @description Defines HTTP routes for system resource operations.
 * @returns {express.Router} Configured express router.
 */
const sysRoutes = () => {
    const router = express.Router();

    router.get('/sys', (req, res) => res.json({ sys: "Demo App", env: process.env }));
    router.options('/sys', (req, res) => res.json({ sys: "Demo App", env: process.env }));
    router.get('/', (req, res) => res.json({ message: "Welcome to MDB/SAT Demo Service" }));

    return router;
};

export default sysRoutes;