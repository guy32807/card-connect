import { AIAnalysisRepository, CollectionAnalysis } from '@/core/usecases/AIAnalysisUseCase';
import OpenAI from 'openai';

export class RealAIAnalysisRepository implements AIAnalysisRepository {
  private baseAffiliateUrl = 'https://www.tkqlhce.com/click-9083409-15435040';
  private openai: OpenAI;
  
  constructor(apiKey?: string) {
    // Use the provided API key or look for one in environment variables
    this.openai = new OpenAI({
      apiKey: apiKey || process.env.OPENAI_API_KEY
    });
  }
  
  async analyzeCollection(description: string): Promise<CollectionAnalysis> {
    try {
      // Call the OpenAI API with a structured prompt
      const completion = await this.openai.chat.completions.create({
        model: "gpt-4", // Use an appropriate model
        messages: [
          {
            role: "system",
            content: `You are an expert sports card and collectibles appraiser. 
            Analyze the collection description and provide:
            1. An estimated value range in USD
            2. A rarity score from 1-10 (10 being extremely rare)
            3. Market trend information including growth percentage and forecast
            Format as a JSON object with these exact keys:
            {
              "estimatedValue": "string (e.g. $1,000 - $1,500)",
              "rarityScore": number (1-10, one decimal place),
              "growth": "string (e.g. +12%)",
              "forecast": "string"
            }
            Only return valid JSON, no other text.`
          },
          {
            role: "user",
            content: description
          }
        ],
        response_format: { type: "json_object" }
      });
      
      // Parse the AI response
      const aiResponse = JSON.parse(completion.choices[0].message.content || '{}');
      
      // Generate personalized recommendations based on the analysis
      const recommendations = this.generateRecommendations(
        description, 
        aiResponse.rarityScore, 
        aiResponse.estimatedValue
      );
      
      return {
        estimatedValue: aiResponse.estimatedValue,
        rarityScore: aiResponse.rarityScore,
        recommendations,
        marketTrends: {
          growth: aiResponse.growth,
          forecast: aiResponse.forecast
        }
      };
    } catch (error) {
      console.error('AI Analysis error:', error);
      
      // Fall back to simulated analysis if AI API fails
      return this.fallbackAnalysis(description);
    }
  }
  
  private generateRecommendations(description: string, rarityScore: number, estimatedValue: string): Array<{id: number; name: string; link: string}> {
    const recommendations = [];
    const lowerDescription = description.toLowerCase();
    
    // Always recommend authentication for high-value items
    if (rarityScore > 7 || estimatedValue.includes('$1,000')) {
      recommendations.push({ 
        id: 1, 
        name: 'Beckett Authentication & Grading', 
        link: `${this.baseAffiliateUrl}?url=https://www.beckett.com/grading` 
      });
    }
    
    // Always recommend price guides
    recommendations.push({ 
      id: 2, 
      name: 'Beckett Price Guide Subscription', 
      link: `${this.baseAffiliateUrl}?url=https://www.beckett.com/price-guides` 
    });
    
    // Storage supplies for any collection
    recommendations.push({ 
      id: 3, 
      name: 'Premium Protective Supplies', 
      link: `${this.baseAffiliateUrl}?url=https://www.beckett.com/supplies` 
    });
    
    // Sport-specific recommendations
    if (lowerDescription.includes('basketball')) {
      recommendations.push({ 
        id: 4, 
        name: 'Basketball Card Price Guide', 
        link: `${this.baseAffiliateUrl}?url=https://www.beckett.com/price-guides/basketball` 
      });
    } else if (lowerDescription.includes('baseball')) {
      recommendations.push({ 
        id: 5, 
        name: 'Baseball Card Price Guide', 
        link: `${this.baseAffiliateUrl}?url=https://www.beckett.com/price-guides/baseball` 
      });
    } else if (lowerDescription.includes('football')) {
      recommendations.push({ 
        id: 6, 
        name: 'Football Card Price Guide', 
        link: `${this.baseAffiliateUrl}?url=https://www.beckett.com/price-guides/football` 
      });
    }
    
    return recommendations.slice(0, 4); // Limit to 4 recommendations
  }
  
  private fallbackAnalysis(description: string): CollectionAnalysis {
    // This is our fallback simulation if the AI API call fails
    const lowerDescription = description.toLowerCase();
    
    let valueEstimate = '$500 - $800';
    if (lowerDescription.includes('rookie') || lowerDescription.includes('rare')) {
      valueEstimate = '$1,200 - $1,800';
    }
    if (lowerDescription.includes('autograph') || lowerDescription.includes('signed')) {
      valueEstimate = '$2,000 - $3,500';
    }
    
    let rarityScore = 6.5;
    if (lowerDescription.includes('limited edition') || lowerDescription.includes('numbered')) {
      rarityScore += 1.2;
    }
    if (lowerDescription.includes('psa 10') || lowerDescription.includes('bgs 9.5')) {
      rarityScore += 1.5;
    }
    rarityScore = Math.min(10, rarityScore);
    
    const growth = lowerDescription.includes('vintage') ? '+8%' : '+15%';
    const forecast = lowerDescription.includes('modern') 
      ? 'Steady growth expected over next 12 months'
      : 'Strong collector demand driving prices upward';
    
    return {
      estimatedValue: valueEstimate,
      rarityScore: parseFloat(rarityScore.toFixed(1)),
      recommendations: [
        { id: 1, name: 'Beckett Authentication', link: `${this.baseAffiliateUrl}?url=https://www.beckett.com/grading` },
        { id: 2, name: 'Price Guide Subscription', link: `${this.baseAffiliateUrl}?url=https://www.beckett.com/price-guides` },
        { id: 3, name: 'Protective Cases & Supplies', link: `${this.baseAffiliateUrl}?url=https://www.beckett.com/supplies` }
      ],
      marketTrends: {
        growth,
        forecast
      }
    };
  }
}