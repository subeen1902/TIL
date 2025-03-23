// sync-to-notion.js
const { Client } = require('@notionhq/client');
const { execSync } = require('child_process');
const path = require('path');

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DB_ID;

async function main() {
  // 1. 최신 커밋에서 변경된 파일 목록
  const filesChanged = execSync('git diff --name-only HEAD~1 HEAD').toString().trim().split('\n');

  for (const filePath of filesChanged) {
    const fileName = path.basename(filePath);
    const folderTags = path.dirname(filePath).split(path.sep);

    // 2. Notion 페이지 생성
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        '이름': {
          title: [{ text: { content: fileName } }],
        },
        'status': {
          select: { name: 'push' },
        },
        'GitHub - tags': {
          multi_select: folderTags.map(name => ({ name })),
        },
        '최종 date': {
          date: { start: new Date().toISOString() },
        },
      },
    });

    console.log(`✅ ${fileName} → Notion에 추가됨`);
  }
}

main().catch(console.error);
