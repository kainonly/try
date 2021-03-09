import { EntityManager } from 'typeorm';
import { Permission } from '../entity/permission';
import { SeedOption } from '@type';

export async function permission({ entityManager, vars }: SeedOption) {
  await entityManager.getRepository(Permission).insert([
    {
      key: 'privacy',
      name: { zh_cn: '数据脱敏', en_us: 'Privacy' },
      note: '用于隐私数据脱敏处理的标识',
    },
    {
      key: 'check',
      name: { zh_cn: '专用审核', en_us: 'Check' },
      note: '用于少于拥有专用审核处理的标识',
    },
  ]);
}
