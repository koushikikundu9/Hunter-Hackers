import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { metadata } from '@/app/layout';

export async function GET() {
  try {
    const dirPath = path.join(process.cwd(), '/blogdata');
    const filenames = fs.readdirSync(dirPath);

    const blogs = filenames.map((filename) => {
      const filePath = path.join(dirPath, filename);
      const content = fs.readFileSync(filePath, 'utf-8');
      const data = JSON.parse(content);

      return ({
        title: data.title,
        content: data.content,
        metadata:data.metadata,
        slug: data.slug
      });
    });

    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
