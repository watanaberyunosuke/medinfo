
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // Only allow GET requests
    try {
      const hospitals = await prisma.australiaHospital.findMany();
      return res.status(200).json(hospitals);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
      return res.status(500).json({ error: 'Error fetching hospitals' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
