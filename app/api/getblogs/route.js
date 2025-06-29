import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
    const filePath = path.join(process.cwd(), `/blogdata/${slug}.json`);
    const content = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);
    return NextResponse.json(data);
}