import { PrismaClient } from '@prisma/client';
import RefreshButton from './refresh-button'
export default async function Table() {

  const prisma = new PrismaClient();
  const startTime = Date.now()
  const terms = await prisma.term.findMany()
  const duration = Date.now() - startTime

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Terms</h2>
          <p className="text-sm text-gray-500">
            Fetched {terms.length} terms
          </p>
        </div>
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">
        {terms.map((term) => (
          <div
            key={term.short_form}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">{term.short_form}</p>
                <p className="text-sm text-gray-500">{term.full_form}</p>
                <p className="text-sm text-gray-500">{term.cht}</p>
                <p className="text-sm text-gray-500">{term.chs}</p>
                <p className="text-sm text-gray-500">{term.annotation}</p>
                <p className="text-sm text-gray-500">{term.resources}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
