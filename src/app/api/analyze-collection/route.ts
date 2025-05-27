import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client with API key from environment variable
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { collection } = await request.json();
    
    if (!collection || collection.trim() === '') {
      return NextResponse.json(
        { error: 'Collection description is required' },
        { status: 400 }
      );
    }

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a knowledgeable sports card expert. Analyze the collection description and provide insights on potential value, rarity, and investment opportunities. Include information about condition importance, grading recommendations, and market trends. Be specific but concise."
        },
        {
          role: "user",
          content: collection
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return NextResponse.json({
      analysis: response.choices[0].message.content
    });
    
  } catch (error: any) {
    console.error('Error analyzing collection:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to analyze collection' },
      { status: 500 }
    );
  }
}