import prisma from '@/lib/prisma'
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import RefreshButton from './refresh-button'

export default async function Table() {
  const startTime = Date.now()
  const terms = await prisma.terms.findMany()
  const duration = Date.now() - startTime

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Recent terms</h2>
          <p className="text-sm text-gray-500">
            Fetched {terms.length} terms in {duration}ms
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
                <p className="font-medium leading-none">{term.full_form}</p>
                <p className="text-sm text-gray-500">{term.cht}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
