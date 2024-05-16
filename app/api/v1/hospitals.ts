const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();

router.get('/', async (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }) => {
  try {
    const hospitalsData = await PrismaClient.australia_Hospital.findMany();
    res.status(200).json(hospitalsData);
  } catch (error) {
    console.error('Error fetching hospital data:', error);
    res.status(500).json({ error: 'Failed to fetch hospitals data' });
  }
});

export default router;