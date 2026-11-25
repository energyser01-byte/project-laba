import { copyFileSync, constants } from 'node:fs';
try {
  copyFileSync('.env.example', '.env', constants.COPYFILE_EXCL);
  console.log('Создан project/.env. Для первых проверок ключ не требуется.');
} catch (error) {
  if (error.code !== 'EEXIST') throw error;
  console.log('Используется существующий .env.');
}
