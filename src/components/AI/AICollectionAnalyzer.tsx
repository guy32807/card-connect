'use client';

import { useState } from 'react';

export default function AICollectionAnalyzer() {
  const [cardList, setCardList] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState('');

  // Example function to analyze the collection
  // In a real implementation, this would call your actual AI service
  const analyzeCollection = async () => {
    if (!cardList.trim()) {
      setError('Please enter at least one card to analyze.');
      return;
    }

    setAnalyzing(true);
    setError('');

    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Parse the card list into individual cards
      const cards = cardList
        .split('\n')
        .filter(line => line.trim().length > 0)
        .map(line => line.trim());

      // Simulate analysis results
      const mockResults = {
        cardCount: cards.length,
        estimatedValue: Math.floor(Math.random() * 5000) + 500,
        rarityDistribution: {
          common: Math.floor(Math.random() * 30) + 20,
          uncommon: Math.floor(Math.random() * 30) + 15,
          rare: Math.floor(Math.random() * 20) + 5,
          ultraRare: Math.floor(Math.random() * 5) + 1,
        },
        topCards: cards.slice(0, 3).map(card => ({
          name: card,
          estimatedValue: Math.floor(Math.random() * 200) + 50,
          rarity: ['Common', 'Uncommon', 'Rare', 'Ultra Rare'][Math.floor(Math.random() * 4)],
          condition: ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent', 'Mint'][Math.floor(Math.random() * 6)],
        })),
        recommendations: [
          "Consider getting your top cards professionally graded to increase their value.",
          "Your collection has a good mix of common and rare cards.",
          "Based on current market trends, now might be a good time to acquire more cards from the same series."
        ]
      };

      setResults(mockResults);
    } catch (err) {
      setError('An error occurred while analyzing your collection. Please try again.');
      console.error('Analysis error:', err);
    } finally {
      setAnalyzing(false);
    }
  };

  const handleReset = () => {
    setCardList('');
    setResults(null);
    setError('');
  };

  return (
    <div className="analyzer-container">
      {!results ? (
        <>
          <div className="form-group">
            <label htmlFor="cardList" className="form-label">
              Enter your cards below (one card per line):
            </label>
            <div className="input-description text-sm text-gray mb-2">
              Example: 2018 Panini Prizm Luka Doncic Rookie #280
            </div>
            <textarea
              id="cardList"
              className="form-control"
              rows={6}
              value={cardList}
              onChange={(e) => setCardList(e.target.value)}
              placeholder="Enter your card list here... 
2018 Panini Prizm Luka Doncic Rookie #280
1986 Fleer Michael Jordan Rookie #57
2003 Topps Chrome LeBron James Rookie #111"
              disabled={analyzing}
            ></textarea>
          </div>
          
          {error && <div className="error-message mb-4">{error}</div>}
          
          <div className="flex justify-center">
            <button 
              className="btn btn-primary"
              onClick={analyzeCollection}
              disabled={analyzing}
            >
              {analyzing ? (
                <>
                  <span className="loading-spinner"></span>
                  Analyzing...
                </>
              ) : (
                'Analyze Collection'
              )}
            </button>
          </div>
        </>
      ) : (
        <div className="analysis-results">
          <div className="results-header">
            <h4>Analysis Results</h4>
            <p className="mb-4">Here's what our AI found in your collection:</p>
          </div>

          <div className="results-summary">
            <div className="result-stat">
              <div className="stat-label">Cards Analyzed</div>
              <div className="stat-value">{results.cardCount}</div>
            </div>
            <div className="result-stat">
              <div className="stat-label">Est. Value</div>
              <div className="stat-value">${results.estimatedValue}</div>
            </div>
          </div>

          <div className="mb-6">
            <h5 className="mb-3">Rarity Distribution</h5>
            <div className="rarity-bars">
              <div className="rarity-bar-group">
                <div className="rarity-label">Common</div>
                <div className="rarity-bar-container">
                  <div 
                    className="rarity-bar common" 
                    style={{width: `${results.rarityDistribution.common}%`}}
                  ></div>
                  <span className="rarity-percentage">{results.rarityDistribution.common}%</span>
                </div>
              </div>
              <div className="rarity-bar-group">
                <div className="rarity-label">Uncommon</div>
                <div className="rarity-bar-container">
                  <div 
                    className="rarity-bar uncommon" 
                    style={{width: `${results.rarityDistribution.uncommon}%`}}
                  ></div>
                  <span className="rarity-percentage">{results.rarityDistribution.uncommon}%</span>
                </div>
              </div>
              <div className="rarity-bar-group">
                <div className="rarity-label">Rare</div>
                <div className="rarity-bar-container">
                  <div 
                    className="rarity-bar rare" 
                    style={{width: `${results.rarityDistribution.rare}%`}}
                  ></div>
                  <span className="rarity-percentage">{results.rarityDistribution.rare}%</span>
                </div>
              </div>
              <div className="rarity-bar-group">
                <div className="rarity-label">Ultra Rare</div>
                <div className="rarity-bar-container">
                  <div 
                    className="rarity-bar ultra-rare" 
                    style={{width: `${results.rarityDistribution.ultraRare}%`}}
                  ></div>
                  <span className="rarity-percentage">{results.rarityDistribution.ultraRare}%</span>
                </div>
              </div>
            </div>
          </div>

          {results.topCards.length > 0 && (
            <div className="mb-6">
              <h5 className="mb-3">Top Cards</h5>
              <div className="top-cards">
                {results.topCards.map((card: any, index: number) => (
                  <div key={index} className="top-card">
                    <div className="card-name">{card.name}</div>
                    <div className="card-meta">
                      <span className={`card-rarity ${card.rarity.toLowerCase().replace(' ', '-')}`}>
                        {card.rarity}
                      </span>
                      <span className="card-condition">{card.condition}</span>
                    </div>
                    <div className="card-value">${card.estimatedValue}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h5 className="mb-3">Recommendations</h5>
            <ul className="recommendations-list">
              {results.recommendations.map((recommendation: string, index: number) => (
                <li key={index}>{recommendation}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <button 
              className="btn btn-outline"
              onClick={handleReset}
            >
              Analyze Another Collection
            </button>
          </div>
        </div>
      )}
    </div>
  );
}