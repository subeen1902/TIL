// sync-to-notion.js
const { Client } = require('@notionhq/client');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const iconv = require('iconv-lite');

// 1. Notion API 초기화
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DB_ID;

async function main() {
  // 2. 최신 커밋에서 변경된 파일 목록 (한글 경로 깨짐 방지)
  const filesBuffer = execSync('git diff --name-only HEAD~1 HEAD');
  const filesChanged = iconv.decode(filesBuffer, 'utf8').trim().split('\n');

  for (const filePath of filesChanged) {
    const fileName = path.basename(filePath);
    const folderTags = path.dirname(filePath).split(path.sep);
    const content = fs.readFileSync(filePath, 'utf8');
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        이름: {
          title: [{ text: { content: fileName } }],
        },
        status: {
          status: { name: 'push' },
        },
        'GitHub - tags': {
          multi_select: folderTags.map((name) => ({ name })),
        },
        '최종 date': {
          date: { start: new Date().toISOString() },
        },
      },
      children: [
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: content.slice(0, 2000), // 노션 API 제한 대응
                },
              },
            ],
          },
        },
      ],
    });

    console.log(`✅ ${fileName} → Notion에 추가됨`);
  }
}

main().catch(console.error);
