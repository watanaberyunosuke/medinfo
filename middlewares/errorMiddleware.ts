import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(error);
    }
    res.status(500).json({
        message: error.message || 'An unexpected error occurred',
        stack: process.env.NODE_ENV === 'production' ? undefined : error.stack
    });
};
