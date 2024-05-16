"use client";

import { Suspense, useEffect, useState } from 'react';
import Table from '@/components/hospitals-table';
import TablePlaceholder from '@/components/table-placeholder';
import { australia_Hospital } from '@/components/types';

export const dynamic = 'force-dynamic';

export default function AustraliaHospital() {
  const [data, setData] = useState<australia_Hospital[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/v1/hospitals');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching hospital data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <TablePlaceholder />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Suspense fallback={<TablePlaceholder />}>
        <Table data={data} />
      </Suspense>
    </main>
  );
}
