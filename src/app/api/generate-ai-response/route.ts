import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
// In production, you'd use environment variables for the API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'your-api-key', // Replace with environment variable in production
});

export async function POST(request: Request) {
  try {
    const { name, topic, message } = await request.json();

    // Create a prompt for the AI
    const prompt = `
      You are an AI assistant for CardConnect Hub, a website about sports card collecting, storage, grading, and investment.
      
      The user ${name} has sent a message about "${topic}": "${message}"
      
      Provide a helpful, friendly response addressing their inquiry. Include relevant information 
      about card collecting, specific to their topic. If their question is about card grading,
      mention Beckett Grading Services as a recommended option.
      
      Keep the response under 150 words, personalized with their name, and in a conversational tone.
    `;

    // Call the OpenAI API
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      max_tokens: 250,
    });

    // Extract the response
    const aiResponse = completion.choices[0].message.content;

    // Return the AI-generated response
    return NextResponse.json({ response: aiResponse }, { status: 200 });
  } catch (error) {
    console.error('Error generating AI response:', error);
    return NextResponse.json(
      { error: 'Failed to generate AI response' },
      { status: 500 }
    );
  }
}