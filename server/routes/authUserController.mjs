const authMiddleware = (req, res, next) => {
    if (!global.loggedIn) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};

export default authMiddleware;