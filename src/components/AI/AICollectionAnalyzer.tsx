'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function AICollectionAnalyzer() {
  const [collection, setCollection] = useState('')
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      // Use the API route instead of direct client-side access
      const response = await fetch('/api/analyze-collection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ collection }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to analyze collection')
      }
      
      setAnalysis(data.analysis)
    } catch (err: any) {
      console.error('Error analyzing collection:', err)
      setError(err.message || 'There was an error analyzing your collection. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4">AI Collection Analyzer</h3>
          <p className="text-gray-600 mb-6">Upload your collection details or describe your cards for an AI-powered valuation and recommendations</p>
          
          <form onSubmit={handleSubmit} className="mb-6">
            <textarea 
              value={collection}
              onChange={(e) => setCollection(e.target.value)}
              placeholder="E.g., I have a 1986 Fleer Michael Jordan rookie card in PSA 8 condition, a 2003 Topps Chrome LeBron James rookie in BGS 9.5..."
              className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <motion.button 
              type="submit" 
              disabled={loading || !collection}
              className="mt-4 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md disabled:opacity-50 w-full md:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                  Analyzing...
                </div>
              ) : 'Analyze Collection'}
            </motion.button>
          </form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        
        <div>
          {!analysis ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto w-24 h-24 relative mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">Enter your collection details to receive AI-powered insights</p>
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm"
            >
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Analysis Results</h4>
              <p className="text-gray-700">{analysis}</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}