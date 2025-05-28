import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Create the system message for context
    const systemMessage = `You are an AI assistant for CardConnect, a sports card authentication and grading service. 
    Your job is to provide helpful, concise responses about our services:
    - Authentication services: Multi-step process with visual inspection, microscopic analysis, and database comparison
    - Grading: Cards evaluated on 1-10 scale based on centering, corners, edges, and surface quality
    - Pricing: Basic authentication starts at $20 per card, grading starts at $35 per card
    - Turnaround time: Standard is 15-20 business days, with expedited options (5-day and 2-day)
    
    Be professional, helpful, and suggest next steps when appropriate.`;

    // Call the Claude API
    const completion = await anthropic.messages.create({
      model: "claude-3-haiku-20240307", // This is Claude Mini 4.1
      max_tokens: 150,
      temperature: 0.7,
      system: systemMessage,
      messages: [
        { role: "user", content: message }
      ],
    });

    // Get the response text
    const responseText = completion.content[0].text;

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error('Claude API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate AI response' },
      { status: 500 }
    );
  }
}