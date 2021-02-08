import { getRepository } from 'typeorm';
import { Acl } from '../entity/acl';

export async function acl(vars: any) {
  await getRepository(Acl).insert([
    {
      key: 'resource',
      name: { zh_cn: '资源控制模块', en_us: 'Resource Module' },
      write: 'add,edit,delete,sort',
      read: 'originLists,lists,get',
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'acl',
      name: { zh_cn: '访问控制模块', en_us: 'Acl Module' },
      write: 'add,edit,delete',
      read: 'originLists,lists,get',
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'policy',
      name: { zh_cn: '策略模块', en_us: 'Policy Module' },
      write: 'add,delete',
      read: 'originLists',
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'permission',
      name: { zh_cn: '特殊授权模块', en_us: 'Permission Module' },
      write: 'add,edit,delete',
      read: 'originLists,lists,get',
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'admin',
      name: { zh_cn: '管理员模块', en_us: 'Admin Module' },
      write: 'add,edit,delete',
      read: 'originLists,lists,get',
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'role',
      name: { zh_cn: '权限组模块', en_us: 'Role Module' },
      write: 'add,edit,delete',
      read: 'originLists,lists,get',
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'picture_type',
      name: { zh_cn: '图片素材分类模块', en_us: 'Picture Type Module' },
      write: 'add,edit,delete,sort',
      read: 'originLists',
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'picture',
      name: { zh_cn: '图片素材模块', en_us: 'Picture Module' },
      write: 'bulkAdd,edit,bulkEdit,delete',
      read: 'lists,count',
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'video_type',
      name: { zh_cn: '视频素材分类模块', en_us: 'Video Type Module' },
      write: 'add,edit,delete,sort',
      read: 'originLists',
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'video',
      name: { zh_cn: '视频素材模块', en_us: 'Video Module' },
      write: 'bulkAdd,edit,bulkEdit,delete',
      read: 'lists,count',
      create_time: vars.time,
      update_time: vars.time,
    },
  ]);
}
