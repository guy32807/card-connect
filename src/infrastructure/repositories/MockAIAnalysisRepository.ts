import { AIAnalysisRepository, CollectionAnalysis } from '@/core/usecases/AIAnalysisUseCase';
import { RealAIAnalysisRepository } from '@/infrastructure/repositories/AIAnalysisRepository';
import { AIAnalysisUseCase } from '@/core/usecases/AIAnalysisUseCase';

export class MockAIAnalysisRepository implements AIAnalysisRepository {
  private baseAffiliateUrl = 'https://www.tkqlhce.com/click-9083409-15435040';
  
  async analyzeCollection(description: string): Promise<CollectionAnalysis> {
    // In a real app, this would call an actual AI API service
    // For now, we'll simulate an analysis based on keywords in the description
    
    const lowerDescription = description.toLowerCase();
    
    // Generate a value estimate based on presence of certain keywords
    let valueEstimate = '$500 - $800';
    if (lowerDescription.includes('rookie') || lowerDescription.includes('rare')) {
      valueEstimate = '$1,200 - $1,800';
    }
    if (lowerDescription.includes('autograph') || lowerDescription.includes('signed')) {
      valueEstimate = '$2,000 - $3,500';
    }
    
    // Generate a rarity score
    let rarityScore = 6.5;
    if (lowerDescription.includes('limited edition') || lowerDescription.includes('numbered')) {
      rarityScore += 1.2;
    }
    if (lowerDescription.includes('psa 10') || lowerDescription.includes('bgs 9.5')) {
      rarityScore += 1.5;
    }
    rarityScore = Math.min(10, rarityScore);
    
    // Create market trend data
    const growth = lowerDescription.includes('vintage') ? '+8%' : '+15%';
    const forecast = lowerDescription.includes('modern') 
      ? 'Steady growth expected over next 12 months'
      : 'Strong collector demand driving prices upward';
    
    return {
      estimatedValue: valueEstimate,
      rarityScore: parseFloat(rarityScore.toFixed(1)),
      recommendations: [
        { 
          id: 1, 
          name: 'Beckett Authentication', 
          link: `${this.baseAffiliateUrl}?url=https://www.beckett.com/grading` 
        },
        { 
          id: 2, 
          name: 'Price Guide Subscription', 
          link: `${this.baseAffiliateUrl}?url=https://www.beckett.com/price-guides` 
        },
        { 
          id: 3, 
          name: 'Protective Cases & Supplies', 
          link: `${this.baseAffiliateUrl}?url=https://www.beckett.com/supplies` 
        }
      ],
      marketTrends: {
        growth,
        forecast
      }
    };
  }
}