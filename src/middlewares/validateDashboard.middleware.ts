import { Request, Response, NextFunction } from 'express';

export const validateDashboardSummaryQuery = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  next();
};
