export interface CollectionAnalysis {
  estimatedValue: string;
  rarityScore: number;
  recommendations: Array<{
    id: number;
    name: string;
    link: string;
  }>;
  marketTrends: {
    growth: string;
    forecast: string;
  };
}

export interface AIAnalysisRepository {
  analyzeCollection(description: string): Promise<CollectionAnalysis>;
}

export class AIAnalysisUseCase {
  constructor(private repository: AIAnalysisRepository) {}

  async analyzeCollection(description: string): Promise<CollectionAnalysis> {
    return this.repository.analyzeCollection(description);
  }
}